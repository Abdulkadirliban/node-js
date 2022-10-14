// const dis=require('./student');
// console.log(dis);

//-------------creating file
const fs= require('fs');
// fs.open('std.txt','w',(err)=>{
//     if(err) throw err;
//     console.log('File created');

// })
//---------------------- writting file
// fs.writeFile('std.txt','welcome to CA192',(err)=>{
//     if(err) throw err;
//     console.log('success');
// })
//-------------- renamed file
// fs.rename('std.txt','CA192.txt',(err)=>{
//     if(err) throw err;
//     console.log('renamed file');
// })
//--------------------reading file
// fs.readFile('./CA192.txt',(err, data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })
//-----------------create folder and removed

// if(!fs.existsSync(',/jamuriya')){
//     fs.mkdir('./jamuriya',(err)=>{
//         if(err) throw err;
//         console.log('folder created')

//     })
// }
// else {
//     fs.rmdir('./jamuriya',(err)=>{
//         if(err) throw err;
//         console.log('removed folder')
//     })
// }

//--------another way reading data is use stream

// var readStream= fs.createReadStream('./CA192.txt',{encoding: 'utf8'})
// readStream.on('data',(chunk)=>{
//     console.log(chunk) // or use toString function
// })
//--------------pipe xog file taalo in file kle lagu copy gareyo

// var readstream= fs.createReadStream('./CA192.txt');
// var writestream= fs.createWriteStream('./CA199.txt');
// readstream.pipe(writestream);
// console.log('file uploaded');
// ------------------------file make zip
// const zlib= require('zlib')// this function zlib make file zip
// fs.createReadStream('./CA199.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./CA199.txt.gz'))
// console.log('file comporized')

// --------------------------file unzip------------------------------------
// const zlib= require('zlib')// this function zlib make file zip
// fs.createReadStream('./CA199.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('./CA199.txt.gz'))
// console.log('file uncomporized')

// const fileContents = fs.createReadStream('./CA199.txt.gz');
// const writeStream = fs.createWriteStream('./CA199.txt');
// const unzip = zlib.createGunzip();

// fileContents.pipe(unzip).pipe(writeStream);

// ---------------------------close function-------

file_description=fs.openSync('test.txt');
console.log('the file description is',file_description);
fs.close(file_description,(err)=>{
    if(err) throw err;
    console.log('file closed');
})
// -----------------------------------watch-----

// fs.watch('test.txt',(eventType, filename)=>{
//     console.log('\n the file ',filename, 'was modified!');
//     console.log('the type of change was:',eventType);

// })
// // Renaming the file to a new name
// setTimeout( () => {
//     fs.renameSync('test.txt', 'prac.txt'),
//   1000
// });
// // Renaming the file back to its old name
// setTimeout(() => {
//     fs.renameSync('prac.txt', 'test.txt'),
//     2000
// });
// // Changing the contents of the file 
// setTimeout(() => {
//     fs.writeFileSync('test.txt', 
//     "The file is modified"), 3000
// });

// ---------------------updated---
// fs.appendFile('CA192.txt',' \n I am new student',(err)=>{
//     if(err) throw err;
//     console.log('Updated!');
// })