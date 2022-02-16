//there is no window in node js
// no dom in node as we are only using servers or backend

//__dirname
//__filename
//require - importing
//module - info about current module
//process - info about env

//every file in a node is a module.
//commonjs can also be used.

//for exporting

const print = (name) => {
    console.log(`hi my name ${name}`)
}

const hello = (name) => {
    console.log(`hello my name ${name}`) ;
}
//same as export default in es6 library
module.exports = {print, hello}; 

//or module.exports.print = print;
// module.exports.hello = hello;
