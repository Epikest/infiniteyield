const fs = require('fs');
const luamin = require('luamin');

const source = "./source.luau";
fs.readFile(source, "utf8", (_err, code) => {
	const sourceMinified = luamin.minify(code);
	fs.writeFileSync("./source", sourceMinified)
});