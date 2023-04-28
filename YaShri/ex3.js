function getI18nText({ stringTokens, variables = {}, translations = {}, locale = "ru-Ru"}){

    let i18nText = "";


    const dateInt = (value, variables, translations, locale)=>{
        let date = new Date(Number.parseInt(value[1]));
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
            timeZone: 'UTC'
        };
        return new Intl.DateTimeFormat(locale, options).format(date);
    }

    const numberInt = (value, variables, translations, locale)=>{
        let amount = value[1];
        let currency = value[2];

        const options = {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        };
        if (currency) {
            options.style = "currency";
            options.currency = currency;
        }
        return new Intl.NumberFormat(locale, options).format(amount);
    }

    function pluralFormatter(args, variables, translations, locale) {
        args = args.slice(1, args.length);
        const key = args[0].slice(1);
        const number = args[1];
        const pluralRules = new Intl.PluralRules(locale);
        const pluralCategory = pluralRules.select(number);
        let pluralString = ""
        if(Math.floor(number) === number){
            pluralString = translations[locale][key][pluralCategory];
        } else {
            pluralString = translations[locale][key]["few"];
        }

        const numberString = new Intl.NumberFormat(locale).format(number);
        return `${numberString} ${pluralString}`;
    }

    function listFormatter(args, variables, translations, locale) {
        args = args.slice(1,args.length)
        const options = {
            style: 'long',
            type: 'conjunction',
        };
        return new Intl.ListFormat(locale, options).format(args);
    }

    function relativeTime(args, variables, translations, locale) {
        let translation = "";
        const [value, unit] = args.slice(1);
        switch (unit) {
            case "seconds":
                translation = new Intl.RelativeTimeFormat(locale, {
                    numeric: "auto"
                }).format(value, "second");
                break;
            case "minutes":
                translation = new Intl.RelativeTimeFormat(locale, {
                    numeric: "auto"
                }).format(value, "minute");
                break;
            case "hours":
                translation = new Intl.RelativeTimeFormat(locale, {
                    numeric: "auto"
                }).format(value, "hour");
                break;
            case "days":
                translation = new Intl.RelativeTimeFormat(locale, {
                    numeric: "auto"
                }).format(value, "day");
                break;
            case "weeks":
                translation = new Intl.RelativeTimeFormat(locale, {
                    numeric: "auto"
                }).format(value, "week");
                break;
            case "months":
                translation = new Intl.RelativeTimeFormat(locale, {
                    numeric: "auto"
                }).format(value, "month");
                break;
            case "years":
                translation = new Intl.RelativeTimeFormat(locale, {
                    numeric: "auto"
                }).format(value, "year");
                break;
            default:
                throw new Error(`Invalid unit: ${unit}`);
        }

        return translation;
    }


    function functionsFilter(args, variables, translations, locale){
        let functionType = args[0];
        args = args.slice(1,args.length)
        let newArgs = [functionType];
        const items = args.map(arg => {
            if(typeof arg === "string" ){
                if (arg.startsWith('$')) {
                    newArgs.push(variables[arg.slice(1)]);
                } else if (arg.startsWith('#')) {
                    // newArgs.push(translations[locale][arg.slice(1)]);
                    newArgs.push(arg);
                } else {
                    newArgs.push(arg);
                }
            } else {
                newArgs.push(arg);
            }

        });
        return newArgs;
    }

    function filterAllSpecialSymbols(args, variables, translations, locale){
        let newArgs = [];
        if(typeof args!== "string"){
            newArgs = functionsFilter(args, variables, translations, locale);
        } else if(args.startsWith('#')){
            newArgs.push(translations[locale][args.slice(1)]);
        } else if(args.startsWith('$')){
            newArgs.push(variables[args.slice(1)]);
        } else {
            newArgs.push(args);
        }
        return newArgs;
    }


    stringTokens.forEach((elem)=>{

        elem = filterAllSpecialSymbols(elem, variables, translations, locale);
        if(elem.length === 1){
            i18nText+=elem[0]
        } else {
            switch (elem[0]){
                case "@date": i18nText += dateInt(elem, variables, translations, locale); break;
                case "@number": i18nText += numberInt(elem,variables, translations, locale); break;
                case "@plural": i18nText += pluralFormatter(elem, variables, translations, locale); break;
                case "@list": i18nText += listFormatter(elem, variables, translations, locale); break;
                case "@relativeTime": i18nText += relativeTime(elem, variables, translations, locale); break;
                default: i18nText += listFormatter(elem, variables, translations, locale); break;

            }
        }


    })


    console.log(i18nText)
}


// getI18nText({
//     stringTokens: [["@list", "Motorcycle", "$item", "#bus"]],
//     variables: { item: "Car" },
//     translations: {
//         "en-US": {
//             bus: "Bus",
//         },
//     },
//     locale: "en-US",
// });

// getI18nText({
//     stringTokens: [["@plural", "#day", "$tripDays"]],
//     variables: { tripDays: 431.5},
//     translations: {
//         "ru-RU": {
//             day: {
//                 zero: " дней",
//                 one: " день",
//                 few: " дня",
//                 many: " дней",
//                 other: " дней",
//             },
//         },
//     },
//     locale: "ru-RU",
// });
//
// getI18nText({
//     stringTokens: [["@date", 1676561884561]],
//     locale: "ru-RU",
// })

// getI18nText(
//     [
//         ["key", " ", "$var", " ", "#translation"],
//         { var: 100 },
//         {
//             "ru-RU": { translation: "тест" },
//             "en-US": { translation: "test" },
//             "de-DE": { translation: "prüfen" },
//             "hi-IN": { translation: "परीक्षा" },
//             "ar-AA": { translation: "امتحان,{ "}}
//     ]
//
// )

// getI18nText( {stringTokens: [["@number", "$var", "USD"]], variables:  { var: 123456789.0123 }, translations: {}})
//
// getI18nText({
//     stringTokens: [["@date", 1676561884561]], locale: "ru-RU",
// })

// getI18nText({
//     stringTokens: [["@relativeTime", -5, "hours"]],
//     locale: "ru-RU",
// }) // 5 часов назад

const stringTokens = [
    "#price",
    " ",
    ["@plural", "#day", "$tripDays"],
    " - ",
    ["@number", "$tripPrice", "USD"]
];
const variables = {
    tripDays: 10,
    tripPrice: 56789.01,
}
const translations = {
    "ru-RU" : { // локаль
        price: "Цена", // обычный перевод для ключа price
        day: { // перевод для ключа day c учетом плюральных форм
            zero: " дней",
            one: " день",
            few: " дня",
            many: " дней",
            other: " дней",
        }
    },
    "en-US": {
        price: "Price",day: {
            one: " day",
            other: " days",
//...
        }
    },
//...
}

getI18nText({stringTokens, variables, translations, locale: "ru-RU"}) // "Цена 10 дней -
getI18nText({stringTokens, variables, translations, locale: "en-US"}) // "Price 10 days -