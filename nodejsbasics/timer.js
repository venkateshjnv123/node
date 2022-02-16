var i =0;

setInterval(function(){
    i++;
    console.log(`${i} : 1000 milliseconds over`);
}, 1000);

setTimeout(function(){
    console.log(`${i}: only one time`);
}, 1500)