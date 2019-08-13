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
    playTime: {
        type: String,
        required: "Playtime is required"
    },
    latitude: Number,
    longitude: Number,
    recruitNum: {
        type: Number,
        required: "Recruit Number is required"
    },
    currentRecruit: {
        type: Number,
        default: 0
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    volunteers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

const model = mongoose.model("Post", PostSchema);

export default model;
