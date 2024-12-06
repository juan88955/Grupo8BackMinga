import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  creator_id: { 
    type: mongoose.Types.ObjectId, 
    refPath: 'creator_type', // Define dinámicamente el modelo a referenciar (Author o Company)
    required: true 
  },
  creator_type: { 
    type: String, 
    required: true, 
    enum: ['Author', 'Company'] // Solo puede ser Author o Company
  },
  title: { type: String, required: true },
  cover_photo: { type: String, required: true },
  description: { type: String, required: true },
  category_id: { 
    type: mongoose.Types.ObjectId, 
    ref: 'categories', 
    required: true 
  }
}, {
  timestamps: true
});

let Manga = mongoose.model('mangas', schema);
export default Manga;
