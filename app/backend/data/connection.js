import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const dburl ="mongodb+srv://kavinprakash0001:Kavin05@cluster0.rp5xgiu.mongodb.net/kavin?retryWrites=true&w=majority";

const connect = function() {
  mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true, family: 4 })
    .then((val) => {
      console.log("The database is connected");
    }).catch((err) => {
      console.log(err);
    })
}

export default connect;
