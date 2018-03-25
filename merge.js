var fs = require ('fs');

/**
 * [appendFile Integrates 1 or more files into a single file]
 * @param  {[String]} origin  [File name to copy]
 * @param  {[String]} output [Output file name]
 * @return {[void]}
 */
function appendFile(origin,output){
	if(origin){
		fs.readFile(
			origin,
			function(err,data){
				fs.appendFile(
					output,
					data,
					function(err){
						if (err) throw err;
						console.log('file '+origin+' appended to '+output);
					}
					);
			}
			);
	}
}

//In case the input has less than 4 parameters, print command format and exit
if( process.argv.length<4){
	console.log("Syntax: node merge.js <output> <file1> <file2> .. <fn>");
	process.exit();
}

// Loop through all files and call function appendFile
for (var i=3; i<process.argv.length;i++){
	appendFile(process.argv[i],process.argv[2]);
}