import 'dotenv/config'
import '../../config/database.js'
import Manga from '../Manga.js'

let mangas = [
    {
        author_id: null, // Will be updated with real ID
        company_id: null, // Will be updated with real ID
        title: "My Hero Academia",
        cover_photo: "https://randomuser.me/api/portraits/men/20.jpg",
        description: "In a world where 80% of the population has developed superpowers, Izuku Midoriya dreams of becoming a hero despite being powerless.",
        category_id: null // Will be updated with real ID
    },
    {
        author_id: null,
        company_id: null,
        title: "Naruto",
        cover_photo: "https://randomuser.me/api/portraits/men/21.jpg",
        description: "A young ninja with a demon sealed inside him seeks recognition from his village and dreams of becoming their leader.",
        category_id: null
    },
    {
        author_id: null,
        company_id: null,
        title: "One Piece",
        cover_photo: "https://randomuser.me/api/portraits/men/22.jpg",
        description: "Monkey D. Luffy and his pirate crew search for the legendary One Piece treasure while sailing through the Grand Line.",
        category_id: null
    },
    {
        author_id: null,
        company_id: null,
        title: "Attack on Titan",
        cover_photo: "https://randomuser.me/api/portraits/men/23.jpg",
        description: "Humanity struggles to survive against human-devouring giants, taking refuge behind enormous walls.",
        category_id: null
    }
]

Manga.insertMany(mangas)
    .then(docs => console.log('Mangas created:', docs))
    .catch(err => console.log('Error:', err))