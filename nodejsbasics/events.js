const EventEmitter= require('events');

const Customevent = new EventEmitter()

//listening to the event
Customevent.on('response' ,  (name) => {
    console.log(`hello ${name}`);
})

//emitting the event
Customevent.emit('response', 'venky');

//building blocks of nodejs