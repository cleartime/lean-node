var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/test'; //数据库为 runoob

var insertData = function (db, callback) {
    //连接到表 test
    var collection = db.collection('test');
    //插入数据
    var data = [{
        "name": "菜鸟教程",
        "url": "www.runoob.com"
    }, {
        "name": "菜鸟工具",
        "url": "c.runoob.com"
    }];
    // collection.insert(data, function (err, result) {
    //     if (err) {
    //         console.log('Error:' + err);
    //         return;
    //     }
    //     callback(result);
    // });
      // 查询数据
  // var whereStr = {"name":'菜鸟教程'};
  // collection.find(whereStr).toArray(function(err, result) {
  //   if(err)
  //   {
  //     console.log('Error:'+ err);
  //     return;
  //   }     
  //   callback(result);
  // });

//更新数据
//     var whereStr = {"name":'菜鸟教程'};
//     var updateStr = {$set: { "url" : "https://www.runoob.com" }};
//     collection.update(whereStr,updateStr, function(err, result) {
//         if(err)
//         {
//             console.log('Error:'+ err);
//             return;
//         }
//         callback(result);
//     });


// 删除数据
  var whereStr = {"name":'菜鸟工具'};
  collection.remove(whereStr, function(err, result) {
    if(err)
    {
      console.log('Error:'+ err);
      return;
    }
    callback(result);
  });
};




  
}

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功！");
    insertData(db, function (result) {
        console.log(result);
        db.close();
    });
});