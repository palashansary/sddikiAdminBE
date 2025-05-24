import mongoose from "mongoose";


const movieSchema = new mongoose.Schema({
    name : {type: String, required : true},
    desc : {type: String, required : true},
    genre : { type: String, required : true},
    image : {type : String , required : true},
    youtube_link : { type: String , required : true}
})

const movieModal = mongoose.models.movie || mongoose.model("movie", movieSchema);

export default movieModal;