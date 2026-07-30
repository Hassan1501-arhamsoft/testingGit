import multer from "multer";
import path from "path";

// Configure storage
const storage = multer.diskStorage({
  // Folder where uploaded images will be stored
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  // Rename the file to avoid duplicate names
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

// Allow only image files
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpg|jpeg|png|webp/;

  const isValidExtension = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );

  const isValidMimeType = allowedTypes.test(file.mimetype);

  if (isValidExtension && isValidMimeType) {
    cb(null, true);
  } else {
    cb(new Error("Only JPG, JPEG, PNG, and WEBP images are allowed."));
  }
};

// Multer configuration
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2 MB
  },
});

export default upload;