var events = require('events');

var eventEmitter = new events.EventEmitter()
eventEmitter.on('connection', function(a,b){
   console.log(a,b);
});


eventEmitter.on('connection', function connected() {
   console.log('连接成功。1');
   eventEmitter.emit('data_received');
});


eventEmitter.emit('connection',1,2);

console.log("程序执行完毕。");