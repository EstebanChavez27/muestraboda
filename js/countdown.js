simplyCountdown('#cuentaRegresiva', {
        year: 2024, // required
        month: 1, // required
        day: 20, // required
        hours: 18, // Default is 0 [0-23] integer
        minutes: 0, // Default is 0 [0-59] integer
        seconds: 0, // Default is 0 [0-59] integer
        words: { // palabras que aparecen en el contador
            days: { singular: 'día', plural: 'días' },
            hours: { singular: 'hora', plural: 'horas' },
            minutes: { singular: 'minuto', plural: 'minutos' },
            seconds: { singular: 'segundo', plural: 'segundos' }
        },
        plural: true, //use plurals
        inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
        inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
        // in case of inline set to false
        enableUtc: true, //Use UTC or not - default : false
        onEnd: function() { return; }, //Callback on countdown end, put your own function here
        refresh: 1000, // default refresh every 1s
        sectionClass: 'simply-section', //section css class
        amountClass: 'simply-amount', // number css class
        wordClass: 'simply-word', // word css class
        zeroPad: false,
        countUp: false,
});

// Also, you can init with already existing Javascript Object.
let myElement = document.querySelector('.my-countdown');
simplyCountdown(myElement, { /* options */ });

let multipleElements = document.querySelectorAll('.my-countdown');
simplyCountdown(multipleElements, { /* options */ });

// CONVERTIDOR DE HORA https://dateful.com/time-zone-converter

