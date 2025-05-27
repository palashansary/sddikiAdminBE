import {addMovie, listMovie, removeMovie } from "../controllers/movieController.js" ;

import express  from 'express'
import upload from "../middleware/multer.js";

const movieRouter = express.Router();

movieRouter.post('/add',upload.fields([{name: 'image',maxCount:1}]), addMovie);
movieRouter.get('/list', listMovie);
movieRouter.post('/remove',removeMovie);

export default movieRouter;