process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instrukcja = input.toString().trim();
			if(instrukcja === "/exit") {
				process.stdout.write('zamykam');
				process.exit();
			} else if(instrukcja === "/ver") {
				process.stdout.write(" Wersja node.js: " + process.versions.node);				
			} else if (instrukcja === "/lang") {
				process.stdout.write(" Ustawienia języka: " + process.env.LANG);			
			} else {
				process.stderr.write('co ty piszesz?');
			};
	}});