import multer from "multer";
import multerS3 from "multer-s3"
import aws from "aws-sdk"
import dotenv from 'dotenv'
dotenv.config()

const s3 = new aws.S3({
  accessKeyId: process.env.ACCESS_AWS3_KEY_ID,
  secretAccessKey: process.env.SECRET_KEY_AWS3,
  Bucket: process.env.BUCKET_NAME,
});

const storage = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME,
    acl: "public-read",
    key: function (req, file, cb) {
      const name = file.originalname.split(" ").join("_");
      cb(null, name);
    },
  }),
});

export default multer(storage).array('image', 4);
