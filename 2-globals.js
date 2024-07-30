// GLOBAL - NO WINDOW !!!

// __dirname - path to current directory 
// __filename - file name
// require - function to use momdules (commonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
console.log(__filename)

interval = 1000
timeout = 1000
setInterval(() => {
   console.log("Hello world") 
}, interval);

setTimeout(() => {
    console.log("Yo")
}, timeout);