import 'dotenv/config'
import '../../config/database.js'
import Author from '../Author.js'

let authors = [
    {
        name: 'alejandro',
        last_name: 'Rodriguez',
        city: 'Buenos Aires',
        country: 'Argentina',
        date: new Date('1990-01-01'),
        photo: 'https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg',
        user_id: '674a2bdd7c243e05400cd254', // Reemplaza con un ID real de usuario
        active: true
    },
    {
        name: 'lucas',
        last_name: 'Martinez',
        city: 'Lima',
        country: 'Peru',
        date: new Date('1992-05-15'),
        photo: 'https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg',
        user_id: '674a404d2c593fb14a0d09af', // Reemplaza con un ID real de usuario
        active: true
    },
    {
        name: 'eric',
        last_name: 'Lopez',
        city: 'Montevideo',
        country: 'Uruguay',
        date: new Date('1988-11-30'),
        photo: 'https://conceptodefinicion.de/wp-content/uploads/2016/01/Perfil2.jpg',
        user_id: '6749b247267e2db6ecb354e6', // Reemplaza con un ID real de usuario
        active: true
    }
]

Author.insertMany(authors)
    .then(docs => console.log('Autores creados:', docs))
    .catch(err => console.log('Error:', err))