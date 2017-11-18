const fs = require('fs');

const url = '/Users/gxx/Desktop/fxd-wxact/src/views';


const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};


const readDir = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readdir(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};


const lstat = function (fileName) {
  return new Promise(function (resolve, reject) {
 	fs.lstat(fileName, (error, stats)=> {  
		if (error) return reject(error);
      	resolve(stats);
	})
  });
};

// const gen = function* () {
//   const f1 = yield readFile('/etc/fstab');
//   const f2 = yield readFile('/etc/shells');
//   console.log(f1.toString());
//   console.log(f2.toString());
// };

const asyncReadFile = async function () {
  // const f1 = await readFile(url);
  const f2 = await lstat(url+'/test.vue');
  // console.log(f1.toString());
  console.log(f2)
};

asyncReadFile();
