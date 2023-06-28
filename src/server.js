import express from 'express';

const app = express();

app.use(express.json());


app.get('/deploy', (request, response) => {
  response.json({ message: 'Hello AWS!' });
})

app.listen(3000, () => {
  console.log("Server is runnig !");
});