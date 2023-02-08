module.exports = async function (request, showSpinner, hideSpinner) {
    let result = null;

    const spinnerTimeout = setTimeout(()=>{
        showSpinner();
    },250);
    result = await request();
    clearTimeout(spinnerTimeout);
    hideSpinner();
}