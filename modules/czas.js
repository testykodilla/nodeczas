var os = require('os');

function wyswietlanie() {

    var sekundy = Math.floor(os.uptime());
    var godziny = Math.floor(os.uptime()/3600);
    var minuty = Math.floor(os.uptime()/60);


    console.log("Uptime: " + godziny + " hours " + (minuty - godziny*60) + " minutes and " + (sekundy - minuty*60) + "seconds");
}
exports.print = wyswietlanie;