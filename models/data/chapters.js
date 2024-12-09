import 'dotenv/config'
import '../../config/database.js'
import Chapter from '../Chapter.js'

let chapters = [
    {
        manga_id: null,
        title: "The Beginning of Everything",
        cover_photo: "https://randomuser.me/api/portraits/men/40.jpg",
        pages: [
            "https://randomuser.me/api/portraits/men/41.jpg",
            "https://randomuser.me/api/portraits/men/42.jpg",
            "https://randomuser.me/api/portraits/men/43.jpg"
        ],
        order: 1
    },
    {
        manga_id: null,
        title: "Enter: Naruto Uzumaki!",
        cover_photo: "https://randomuser.me/api/portraits/men/44.jpg",
        pages: [
            "https://randomuser.me/api/portraits/men/45.jpg",
            "https://randomuser.me/api/portraits/men/46.jpg",
            "https://randomuser.me/api/portraits/men/47.jpg"
        ],
        order: 1
    },
    {
        manga_id: null,
        title: "Romance Dawn",
        cover_photo: "https://randomuser.me/api/portraits/men/48.jpg",
        pages: [
            "https://randomuser.me/api/portraits/men/49.jpg",
            "https://randomuser.me/api/portraits/men/50.jpg",
            "https://randomuser.me/api/portraits/men/51.jpg"
        ],
        order: 1
    },
    {
        manga_id: null,
        title: "To You, 2000 Years From Now",
        cover_photo: "https://randomuser.me/api/portraits/men/52.jpg",
        pages: [
            "https://randomuser.me/api/portraits/men/53.jpg",
            "https://randomuser.me/api/portraits/men/54.jpg",
            "https://randomuser.me/api/portraits/men/55.jpg"
        ],
        order: 1
    }
]

Chapter.insertMany(chapters)
    .then(docs => console.log('Chapters created:', docs))
    .catch(err => console.log('Error:', err))