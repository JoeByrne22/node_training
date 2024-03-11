const path = require("path");
const utli = require("util");
const v8 = require("v8");

const disUplaod = path.join(__dirname, "www", "files", "path");

console.log(disUplaod);
utli.log(path.basename(__filename));
utli.log(v8.getHeapStatistics());
