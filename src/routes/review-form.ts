import express from 'express';

//creates a new router object
const routes = express.Router();
  
routes.get("/", (req, res) => {
    // const name = req.query.name as string;
    // const comment  = req.query.comment as string;
    res.render("review-form");
});
routes.post("/", (req, res) => {
    const name = req.query.name as string;
    const comment = req.query.comment as string;
    const rating = req.query.rating as string;
    res.render("review-results", {name, comment, rating});
});
export default routes;

// const name: string = req.body.name;
//     const comment: string = req.body.comment;
//     const rating: number = req.body.rating;