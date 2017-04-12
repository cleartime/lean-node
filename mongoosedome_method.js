// var mongoose = require('mongoose');
 
// var saySchema = new mongoose.Schema({name : String});
 
// saySchema.method('say', function () {
//   console.log('Trouble Is A Friend');
// })
 
// var say = mongoose.model('sayii', saySchema);
 
// var lenka = new say();
 
// lenka.say(); //Trouble Is A Friend




// var mongoose = require("mongoose");
 
// var db = mongoose.connect("mongodb://127.0.0.1:27017/test");
 
// var TestSchema = new mongoose.Schema({
//     name : { type:String },
//     age  : { type:Number, default:0 },
//     email: { type:String, default:"" },
//     time : { type:Date, default:Date.now }
// });
 
// TestSchema.static('findByName', function (name, callback) {
//     return this.find({ name: name }, callback);
// });


 
// var TestModel = db.model("test2", TestSchema );
	
// TestModel.findByName('test6', function (err, docs) {
//   console.log(docs);
//  //docs所有名字叫tom的文档结果集
// });



var mongoose = require("mongoose");
 
var db = mongoose.connect("mongodb://127.0.0.1:27017/test");
 
var TestSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    email: { type:String, default:"" },
    time : { type:Date, default:Date.now }
});
 
TestSchema.methods.speak = function(){
  console.log('我的名字叫'+this.name);
}
 
var TestModel = db.model('test1',TestSchema);
 
var TestEntity = new TestModel({name:'Lenka'});
 
TestEntity.speak();//我的名字叫Lenka