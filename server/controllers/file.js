import multer from 'multer';
import path from 'path';
import CircularJSON from 'circular-json';
import models from '../models';

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, `${path.basename(file.originalname, path.extname(file.originalname))}-${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage }).single('file');

export default {
  uploadDoc(req, res) {
    upload(req, res, (err) => {
      const response = CircularJSON.parse(CircularJSON.stringify(res));
      const filePath = response.req.file.path;
      const { title, className } = req.body;
      if (filePath) {
        const noteDetails = {
          title,
          className,
          teacherId: req.decoded.data.id,
          note: [filePath]
        };
        models.Subject.create(noteDetails).then((uploadedNote) => {
          res.send(uploadedNote);
        });
      }
    });
  }
};

