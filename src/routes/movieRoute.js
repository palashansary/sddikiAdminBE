import {addMovie, listMovie } from "../controllers/movieController.js" ;

import express  from 'express'

const movieRouter = express.Router();

movieRouter.post('/add', addMovie);
movieRouter.get('/list', listMovie);

export default movieRouter;