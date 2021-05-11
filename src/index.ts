import express from 'express';
import path from 'path';
import homeRoutes from './routes/home';
import specialtyPizzaRoutes from './routes/specialty-pizza'
import reviewFormRoutes from './routes/review-form';
import reviewResultsRoutes from './routes/review-results'

const app = express();

// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use("/",homeRoutes);
app.use("/specialty-pizza",specialtyPizzaRoutes);
app.use("/review-form", reviewFormRoutes);
app.use("/review-results", reviewResultsRoutes);

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));