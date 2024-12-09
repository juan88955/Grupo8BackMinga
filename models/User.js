import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, enum: [0, 1, 2, 3], default: 0 },
    online: { type: Boolean, default: true },
    profile: {type: mongoose.Types.ObjectId, refPath: 'role'}
}, {
    timestamps: true
})

let User = mongoose.model('users', schema)
export default User