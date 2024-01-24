const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
const port = 5000;
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/assign', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Interviewschema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
})

const Intmodel = mongoose.model('Intmodel', Interviewschema)

app.post('/login',async(req,res)=>
{
  let success = false
  const { name, password } = req.body;
  console.log(name, password)
  try {
    let user = await Intmodel.findOne({ name });
    console.log(name, password)
    if (!user) {
      return res.status(400).json({ success, error: "Try Log in with correct credentials" });
    }
    if (!(user.password == password)) {
      return res.status(400).json({ success, error: "Try Logging in with correct credentials" });
    }
    res.json({ success: true })
  } catch (error) {
    console.error(error.message)
    res.send("Server Error")
  }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
