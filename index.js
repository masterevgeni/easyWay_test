
require('dotenv').config();
const moment = require('moment')
const fs = require('fs')
const spawn = require('child_process').spawn

// You can adjust the backup frequency as you like, this case will run once a day
// Use moment.js or any other way to dynamically generate file name
const fileName1 = `${process.env.DB1_NAME}_${moment().format('YYYY_MM_DD')}.sql`
const fileName2 = `${process.env.DB2_NAME}_${moment().format('YYYY_MM_DD')}.sql`
const fileName3 = `${process.env.DB3_NAME}_${moment().format('YYYY_MM_DD')}.sql`
const fileName4 = `${process.env.DB4_NAME}_${moment().format('YYYY_MM_DD')}.sql`
const fileName5 = `${process.env.DB4_NAME}_${moment().format('YYYY_MM_DD')}.sql`
const wstream1 = fs.createWriteStream(`/var/tmp/${fileName1}`)
const wstream2 = fs.createWriteStream(`/var/tmp/${fileName2}`)
const wstream3 = fs.createWriteStream(`/var/tmp/${fileName3}`)
const wstream4 = fs.createWriteStream(`/var/tmp/${fileName4}`)
const wstream5 = fs.createWriteStream(`/var/tmp/${fileName5}`)
console.log('---------------------')
console.log('Running Database Backup Cron Job')
const mysqldump1 = spawn('mysqldump', ['-u', process.env.DB_USER, `-p${process.env.DB_PASSWORD}`, process.env.DB1_NAME])
const mysqldump2 = spawn('mysqldump', ['-u', process.env.DB_USER, `-p${process.env.DB_PASSWORD}`, process.env.DB2_NAME])
const mysqldump3 = spawn('mysqldump', ['-u', process.env.DB_USER, `-p${process.env.DB_PASSWORD}`, process.env.DB3_NAME])
const mysqldump4 = spawn('mysqldump', ['-u', process.env.DB_USER, `-p${process.env.DB_PASSWORD}`, process.env.DB4_NAME])
const mysqldump5 = spawn('mysqldump', ['-u', process.env.DB_USER, `-p${process.env.DB_PASSWORD}`, process.env.DB5_NAME])

mysqldump1
  .stdout
  .pipe(wstream1)
  .on('finish', () => {
    console.log(`DB ${process.env.DB1_NAME} Backup Completed!`)
  })
  .on('error', (err) => {
    console.log(err)
  })

mysqldump2
  .stdout
  .pipe(wstream2)
  .on('finish', () => {
    console.log(`DB ${process.env.DB2_NAME} Backup Completed!`)
  })
  .on('error', (err) => {
    console.log(err)
  })

mysqldump3
  .stdout
  .pipe(wstream3)
  .on('finish', () => {
    console.log(`DB ${process.env.DB3_NAME} Backup Completed!`)
  })
  .on('error', (err) => {
    console.log(err)
  })

mysqldump4
  .stdout
  .pipe(wstream4)
  .on('finish', () => {
    console.log(`DB ${process.env.DB4_NAME} Backup Completed!`)
  })
  .on('error', (err) => {
    console.log(err)
  })

  mysqldump5
  .stdout
  .pipe(wstream5)
  .on('finish', () => {
    console.log(`DB ${process.env.DB5_NAME} Backup Completed!`)
  })
  .on('error', (err) => {
    console.log(err)
  })

//   fs.stat('./server/upload/my.csv', function (err, stats) {
//     console.log(stats);//here we got all information of file in stats variable
 
//     if (err) {
//         return console.error(err);
//     }
 
//     fs.unlink('./server/upload/my.csv',function(err){
//          if(err) return console.log(err);
//          console.log('file deleted successfully');
//     });  
//  })