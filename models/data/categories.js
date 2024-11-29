import 'dotenv/config'
import '../../config/database.js'
import Category from '../Category.js'

let categories = [
    {
        name: "Shonen",
        color: "#FF5733",
        hover: "#FF8C69",
        description: "Action-packed manga targeted primarily at teenage boys, featuring themes of friendship, perseverance and growth.",
        cover_photo: "https://randomuser.me/api/portraits/men/30.jpg",
        character_photo: "https://randomuser.me/api/portraits/men/31.jpg",
        admin_id: null // Will be updated with real admin ID
    },
    {
        name: "Seinen",
        color: "#336BFF",
        hover: "#6690FF",
        description: "Manga aimed at adult men, often dealing with mature themes and complex narratives.",
        cover_photo: "https://randomuser.me/api/portraits/men/32.jpg",
        character_photo: "https://randomuser.me/api/portraits/men/33.jpg",
        admin_id: null
    },
    {
        name: "Shojo",
        color: "#FF33A8",
        hover: "#FF69C5",
        description: "Manga targeted at teenage girls, often featuring romance and personal growth stories.",
        cover_photo: "https://randomuser.me/api/portraits/men/34.jpg",
        character_photo: "https://randomuser.me/api/portraits/men/35.jpg",
        admin_id: null
    },
    {
        name: "Mecha",
        color: "#33FF57",
        hover: "#69FF85",
        description: "Manga focused on robots and mechanical themes, often featuring epic battles and sci-fi elements.",
        cover_photo: "https://randomuser.me/api/portraits/men/36.jpg",
        character_photo: "https://randomuser.me/api/portraits/men/37.jpg",
        admin_id: null
    }
]

Category.insertMany(categories)
    .then(docs => console.log('Categories created:', docs))
    .catch(err => console.log('Error:', err))