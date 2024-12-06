import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: { type: String, required: true },
    last_name: { type: String },
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date},
    photo: { type: String, required: true },
<<<<<<< Updated upstream
    user_id: { type: mongoose.Types.ObjectId, ref: 'Users', required: true },
    active: { type: Boolean, required: true }
=======
    user_id: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    active: { type: Boolean, required: true, default: true}
>>>>>>> Stashed changes
}, {
    timestamps: true
})

let Author = mongoose.model('authors', schema)
export default Author