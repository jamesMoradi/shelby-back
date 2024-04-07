import multer from "multer";
import path from 'path'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      cb(null, `${Math.floor(Math.random() * 10505)}_${file.originalname}`);
    },
  });

export const upload =  multer({ storage });