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


const asyncReadFile = async function () {
  const urlList = await readDir(url);
  let dirList= []
  let lastUrlList= []
  let endList = [];

  for(let i of urlList){
 	if(await lstat(url+'/'+i)){
  		dirList.push(i)
  	}
  }

  for(let i of dirList){
  	lastUrlList = lastUrlList.concat(await readDir(url+'/'+i));
  }
 

  endList = urlList.concat(lastUrlList);
  
  endList = endList.filter(t=>t.includes('.vue'))
  return  endList
};

 const b = asyncReadFile();
 console.log(b)

