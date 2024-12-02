import 'dotenv/config'
import '../../config/database.js'
import Company from '../Company.js'

let companies = [
    {
        name: "Shonen Jump",
        website: "https://www.shonenjump.com",
        description: "La revista de manga más famosa de Japón, hogar de títulos legendarios",
        photo: "https://randomuser.me/api/portraits/men/10.jpg",
        user_id: "674ccf254fa297d7f9b8d601",
        active: true
    },
    {
        name: "Kodansha",
        website: "https://www.kodansha.com",
        description: "Una de las editoriales más grandes de Japón, publica manga y literatura",
        photo: "https://randomuser.me/api/portraits/men/11.jpg",
        user_id: "674a47297aa8ec27e9b1383f",
        active: true
    },
    {
        name: "Square Enix",
        website: "https://www.square-enix.com",
        description: "Famosa por sus videojuegos y mangas, especialmente en el género fantasy",
        photo: "https://randomuser.me/api/portraits/men/12.jpg",
        user_id: "674a404d2c593fb14a0d09b1",
        active: true
    }
]

Company.insertMany(companies)
    .then(docs => console.log('Compañías creadas:', docs))
    .catch(err => console.log('Error:', err))