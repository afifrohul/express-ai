import fs from 'fs';
import path from 'path';
import multer from 'multer';

export const UPLOAD_FOLDER = path.resolve(
  process.cwd(),
  'src/uploads/images',
);

if (!fs.existsSync(UPLOAD_FOLDER)) {
  fs.mkdirSync(UPLOAD_FOLDER, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_FOLDER),

  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed.'), false);
    }
  },
});

export default { UPLOAD_FOLDER, storage, upload };
