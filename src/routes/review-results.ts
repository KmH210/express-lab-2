import express from 'express';
const routes = express.Router();
  
routes.post("/", (req, res) => {
    const name: string = req.body.name;
    const comment: string = req.body.comment;
    const rating: number = req.body.rating;
    res.render("review-results", {name, comment, rating});
});
export default routes;