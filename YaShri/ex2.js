module.exports = function(apiClient, cart) {
    // Step 1: Get the default currency code
    const currencyCode = apiClient.getDefaultCurrency();

    // Step 2: Get the delivery cost
    const deliveryCost = apiClient.getDeliveryCost(cart.cityId);

    // Step 3: Get the prices for the cart items on the order date
    const orderDate = cart.orderDate.substring(0, 10); // extract the date from the ISO 8601 string
    const prices = apiClient.getPrices(orderDate);

    // Step 4: Get the remaining quantities for the cart items on the order date
    const quantities = apiClient.getQuantities(orderDate);

    // Step 5: Calculate the total cost of the cart items
    let totalCost = 0;
    for (const item of cart.items) {
        const price = prices.find(p => p.articleId === item.articleId && p.currency === currencyCode);
        if (!price) {
            continue; // skip items with no price on the order date
        }

        const remainingQuantity = quantities.find(q => q.articleId === item.articleId)?.quantity || 0;
        const quantity = Math.min(item.quantity, remainingQuantity); // limit quantity to the available stock
        const itemCost = price.price * quantity;
        totalCost += itemCost;
    }

    // Add the delivery cost to the total cost
    totalCost += deliveryCost;

    return totalCost;
};