import {v2 as cloudinary} from 'cloudinary'
import movieModal from '../models/movieModal.js';

const addMovie = async (req, res)=> {
    try {

        const name = req.body.name;
        const description = req.body.description;
        const genre = req.body.genre;
        const youtube_link = req.body.youtube_link;
        const imageFile = req.files.image[0];

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});

        const movieData = {
            name,
            description,
            genre,
            youtube_link,
            image : imageUpload.secure_url
        }

        const movie = movieModal(movieData);

        const movieDataAPi = await movie.save();

        res.json({success:true, message : "movie added", data : movieDataAPi})

    } catch (error){
       res.json({success: false, error})
    }
    
}

const listMovie = async (req, res) => {
    try {
        const allMovies = await movieModal.find({});
        res.json({success: true, movies: allMovies})
    }
    catch(error){
        res.json({success: false });
    }
    
}


const removeMovie = async (req, res)=>{

    try {

        await movieModal.findByIdAndDelete(req.body.id);
        res.json({success: true, message : "Movie removed"})

    }
    catch(error ){
       res.json({success: false})
    }

}

export  {addMovie, listMovie, removeMovie} ;