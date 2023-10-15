import mongoose from 'mongoose';


const articleSchema = new mongoose.Schema({
    articleTitle: String,
    articleContent: String
})

const userData = new mongoose.Schema({
    userTopic: String,
    userContent: String,
    userID: String
})

const Articles = mongoose.model('Articles', articleSchema)
const UserContent = mongoose.model('UserContent', userData)

export {
    Articles,
    UserContent
}
