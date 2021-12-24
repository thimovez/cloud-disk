require('dotenv').config();
const fs = require('fs');
const file = require('../models/File');

const FILE_PATH = process.env.FILE_PATH;

class FileService {
  createDir(file) {
    const filePath = `${FILE_PATH}\\${file.user}\\${file.path}`;
    return new Promise(((resolve, reject) => {
        try {
          if(!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
            return resolve({message: 'File was created'});
          } else {
              return reject({message: 'File alredy exist'});
          }
          } catch (e) {
              return reject({message: 'File error'});
          }
    }));
  }
}



module.exports = new FileService();