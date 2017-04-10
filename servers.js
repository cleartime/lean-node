// var http = require('http');

// http.createServer(function(req,res){
// 	res.writeHead(200, {"Content-Type": "text/plain"});
//   	res.write("Hello World");
//   	res.end();
// }).listen(8888)
// 
// var fs = require('fs');

// // var data  = fs.readFileSync('text.txt');
// fs.readFile('text.txt',function(err,data){
//  console.log(data.toString())
// })
// 
// 
// 
// 
// var fs = require('fs');
// var data = ''

// var readerStream = fs.createReadStream('text.txt');

// // readerStream.setEncoding('UTF8');

// readerStream.on('data', function(chunk) {
//    data += chunk;
// });

// readerStream.on('end',function(){
//    console.log('这是我读的'+data);
// });


// readerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");



// var writerStream = fs.createWriteStream('a.txt');

// writerStream.write('这是我写的','UTF8');

// writerStream.end();

// writerStream.on('finish', function() {
//     console.log("写入完成。");
// });



// writerStream.on('error', function(err){
//    console.log(err.stack);
// });





// var fs = require("fs");
// var zlib = require('zlib');

// // 压缩 input.txt 文件为 input.txt.gz
// fs.createReadStream('text.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('a.txt.gz'));
  
// console.log("文件压缩完成。");
// 
// 
// 
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('a.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('b.txt'));
  
console.log("文件解压完成。");