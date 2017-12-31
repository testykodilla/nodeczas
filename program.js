process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instrukcja = input.toString().trim();
		switch(instrukcja) {
			case "/exit":
				process.stdout.write('zamykam');
				process.exit();
			case "/ver":
				process.stdout.write(" Wersja node.js: " + process.versions.node);
				break;
			case "/lang":
				process.stdout.write(" Ustawienia języka: " + process.env.LANG);
				break;
			default :
				process.stderr.write('co ty piszesz?');
}}})

