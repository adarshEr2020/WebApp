import express from 'express';
  
const app = express();
  
app.get('/',(req,res) => {
    res.send('Adarsh');
})
  
const PORT = 5000;
  
app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
})