import {addMovie, listMovie } from "../controllers/movieController.js" ;

import express  from 'express'
import upload from "../middleware/multer.js";

const movieRouter = express.Router();

movieRouter.post('/add',upload.fields([{name: 'image',maxCount:1}]), addMovie);
movieRouter.get('/list', listMovie);

export default movieRouter;