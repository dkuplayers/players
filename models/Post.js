import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    platTime: {
        type: String,
        required: "Playtime is required"
    },
    location: {
        type: String,
        required: "Location is required"
    },
    recruitNum: {
        type: Number,
        required: "Recruit Number is required"
    },
    currentRecruitL: {
        type: Numver,
        default: 0
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

const model = mongoose.model("Post", PostSchema);

export default model;
