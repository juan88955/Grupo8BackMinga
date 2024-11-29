import 'dotenv/config'
import '../../config/database.js'
import Author from '../Author.js'

let authors = [
    {
        name: "Kohei",
        last_name: "Horikoshi",
        city: "Tokyo",
        country: "Japan",
        date: "1986-11-20",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        active: true,
        user_id: null
    },
    {
        name: "Masashi", 
        last_name: "Kishimoto",
        city: "Okayama",
        country: "Japan",
        date: "1974-11-08", 
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        active: true,
        user_id: null
    },
    {
        name: "Eiichiro",
        last_name: "Oda", 
        city: "Kumamoto",
        country: "Japan",
        date: "1975-01-01",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        active: true,
        user_id: null
    }
]

Author.insertMany(authors)
    .then(docs => console.log('Autores creados:', docs))
    .catch(err => console.log('Error:', err))