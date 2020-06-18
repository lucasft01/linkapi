import mongoose from 'mongoose';
import { config } from 'dotenv';

config();
const {
  DB_HOST, DB_PORT, DB_NAME,
} = process.env;

const uri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

mongoose.Promise = global.Promise;
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (error) => {
    if (error) {
      console.error(error);
    }
  },
);
