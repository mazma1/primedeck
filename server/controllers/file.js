import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    console.log(file);
    callback(null, `${file.originalname} - ${Date.now()} ${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage }).single('file');

export default {
  uploadDoc(req, res) {
    upload(req, res, (err) => {
      res.end('File is uploaded');
    });
  }
};

