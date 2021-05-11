import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.render('index'); // instead of json we are rendering a website to send back
});

export default routes;