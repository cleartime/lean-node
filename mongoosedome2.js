var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://127.0.0.1:27017/test");
var TestSchema = new mongoose.Schema({
    name : { type:String },
    age  : { type:Number, default:0 },
    email: { type:String },
    time : { type:Date, default:Date.now }
});
var TestModel = db.model("test2", TestSchema );
// TestModel.create([
//                   { name:"test1", age:20 },
//                   { name:"test2", age:30 },
//                   { name:"test3", age:24 },
//                   { name:"test4", age:18 },
//                   { name:"test5", age:60 },
//                   { name:"test6", age:50, email:"t6@qq.com" },
//                   { name:"test7", age:40, email:"t7@163.com" },
//                   { name:"test8", age:27 },
//                   { name:"test9", age:27, email:"t9@yeah.net" },
//                   { name:"test10",age:65 }
//                  ], function(error,docs) {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log('save ok');
//     }
// });
//返回只包含一个键值name、age的所有记录
// TestModel.find({},{email:1, _id:0},function(err,docs){
//     console.log(docs)
//    //docs 查询结果集
// })

// TestModel.findOne({ age: 27}, function (err, doc){
//     console.log(doc)
//    // 查询符合age等于27的第一条数据
//    // doc是查询结果
// });


// TestModel.findById('58ee3bcf041f4043cfa29fff', function (err, doc){
//     console.log(doc)
//  //doc 查询结果文档
// });	


// TestModel.find({},{age:1},{limit:2},function(err,docs){
//     console.log(docs);
// });

// TestModel.find({age:50},null,{skip:1},function(err,docs){
//    console.log(docs);
// });


TestModel.find({},
               {name: 1, age: 1, _id: 0 },
               {sort:{name: -1 }},
               function(err,docs){
   console.log(docs);
});