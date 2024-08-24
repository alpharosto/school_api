const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();

app.get('/',(req,res)=>{
  res.status(200).send('Schoolapi');
})
app.use(bodyParser.json());

app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
