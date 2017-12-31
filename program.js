process.stdin.setEncoding('utf-8');
function zadanie() {

}
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instrukcja = input.toString().trim();
			if(instrukcja === "/exit") {
				process.stdout.write('zamykam');
				process.exit();
			} else {
				process.stderr.write('co ty piszesz?')
				process.stdout.write(" Wersja node.js: " + process.versions.node);
				process.stdout.write(" Ustawienia języka: " + process.env.LANG);
			}
	}
});