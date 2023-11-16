const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // To allow requests from your React frontend
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://kavinprakash0001:Kavin05@cluster0.rp5xgiu.mongodb.net/kavin?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  pinNo: String // WARNING: Storing a PIN as plain text is not secure!
});

const User = mongoose.model('User', userSchema);

app.post('/submit', async (req, res) => {
  const { username, pinNo } = req.body;
  
  // Ideally, you should be hashing the pin and then checking it against the stored hash
  const user = await User.findOne({ username: username });
  
  if (user) {
    const isMatch = await bcrypt.compare(pinNo, user.pinNo);
    if (isMatch) {
      res.json({ status: 'success', message: 'Logged in successfully' });
    } else {
      res.json({ status: 'error', message: 'Invalid PIN' });
    }
  } else {
    res.json({ status: 'error', message: 'User not found' });
  }
});

const PORT = 5173;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
