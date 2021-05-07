let fs = require('fs');

fs.open('mynewfile1.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('new file creacted!');
});
fs.appendFile('mynewfile1.txt', 'hello this is masoomeh!', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
  fs.readFile('mynewfile1.txt',"utf-8",function(err,data){
      if(err) throw err;
      console.log(data);
  });
  fs.rename('mynewfile1.txt','newName.txt',function(err){
      if(err) throw err;
      console.log("renamed!");
  });
  fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });