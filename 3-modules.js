// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const myfunc = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-granade')

console.log(names)
myfunc.sayHi('susan')
myfunc.sayHi(names.john)
myfunc.sayHi(names.peter)

