var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/test");
var TestSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    email: { type:String },
    time : { type:Date, default:Date.now }
});
var TestModel = db.model("test1", TestSchema );
// var TestEntity = new TestModel({
//     name : "helloworld",
//     age  : 28,
//     email: "helloworld@qq.com"
// });
// TestEntity.save(function(error,doc){
//   if(error){
//      console.log("error :" + error);
//   }else{
//      console.log(doc);
//   }
// });

//查询
// TestModel.find({}, function(error, docs) {
//     console.log(docs); //若没有向find传递参数，默认的是显示所有文档
// });

// TestModel.find({ "age": 28 }, function (error, docs) {
//   if(error){
//     console.log("error :" + error);
//   }else{
//     console.log(docs); //docs: age为28的所有文档
//   }
// }); 

//保存方法
// TestModel.create({
//     name : "test_create", 
//     age  : 26, 
//     email: "tom@qq.com"
//   },function(error,doc){
//     console.log(doc);
// });

//model调用的是create方法，entity调用的是save方法
// var TestEntity = new TestModel({
//     name : "jerry", 
//     age  : 28, 
//     email: "jerry@qq.com"
// });
// TestEntity.save(function(error,doc) {
//    console.log(doc);
// });


//数据更新

// var conditions = {name : 'test_create'};
 
// var update = {$set : { age : 6 }};
 
// TestModel.update(conditions, update, function(error,doc){//obj.update(查询条件,更新对象,callback);
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('Update success!',doc);
//     }
// });


// 删除数据

// var conditions = { name: 'helloworld' };
 
// TestModel.remove(conditions, function(error){
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('Delete success!');
//     }
// });