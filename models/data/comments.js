import 'dotenv/config'
import '../../config/database.js'
import Comment from '../Comment.js'

let comments = [
    {
        chapter_id: null, // Will be updated with real chapter ID
        author_id: null, // Will be updated with real author ID
        company_id: null,
        message: "Great chapter! The character development was amazing."
    },
    {
        chapter_id: null,
        author_id: null,
        company_id: null,
        message: "The battle scenes in this chapter were epic!"
    },
    {
        chapter_id: null,
        author_id: null,
        company_id: null,
        message: "Can't wait for the next chapter!"
    },
    {
        chapter_id: null,
        author_id: null,
        company_id: null,
        message: "The plot twist at the end was incredible!"
    }
]

Comment.insertMany(comments)
    .then(docs => console.log('Comments created:', docs))
    .catch(err => console.log('Error:', err))