import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    manner: Number,
    location: String,
    posts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model;
