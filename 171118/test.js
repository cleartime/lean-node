const fs = require('fs');

const url = '/Users/gxx/Desktop/fxd-wxact/src/views';

const PeopleGroups = '/Users/gxx/Desktop/fxd-wxact/src/views/PeopleGroups';


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
		resolve(stats.isDirectory())
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
  const urlList = await readDir(url);
  let dirList= []
  let lastUrlList= []
  // for(let i = 0,len = urlList.length; i < len;i++){
  // 	if(await lstat(url+'/'+urlList[i])){
  // 		f2 = urlList[i]
  // 	}
  // }
  for(let i of urlList){
 	if(await lstat(url+'/'+i)){
  		dirList.push(i)
  	}
  }

  for(let i of dirList){
  	console.log.log(i)
  	// lastUrlList = await readDir(i);
  }
  // urlList.forEach(t=>{
  // 	f2 = await lstat(t)
  // 	console.log(f2)
  // })
  // console.log(f1);
  // console.log(dirList)
};

asyncReadFile();
