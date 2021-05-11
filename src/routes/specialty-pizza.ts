import express from 'express';

//creates a new router object
const routes = express.Router();

// routes.get("/", (req, res) => {
//     res.render("specialty-pizza", { }); // we want to get the file name as first parameter and the data is the second parameter
//   });
  
 
//Get /specialty-pizza
routes.get("/", (req, res) => {
    const name = req.query.name;
    const price = req.query.price;
    res.render("specialty-pizza", {name, price});
});
export default routes;