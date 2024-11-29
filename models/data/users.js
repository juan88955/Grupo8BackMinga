import 'dotenv/config'
import '../../config/database.js'
import User from '../User.js'

let users = [
    {
        email: "user1@example.com",
        password: "pass123",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        role: 0,
        online: false
    },
    {
        email: "user2@example.com",
        password: "pass456",
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        role: 0,
        online: false
    },
    {
        email: "admin@example.com",
        password: "admin123",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        role: 1,
        online: false
    },
    {
        email: "author1@example.com",
        password: "author123",
        photo: "https://randomuser.me/api/portraits/men/4.jpg",
        role: 2,
        online: false
    },
    {
        email: "company1@example.com",
        password: "company123",
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
        role: 3,
        online: false
    }
]

User.insertMany(users)
    .then(docs => console.log('Usuarios creados:', docs))
    .catch(err => console.log('Error:', err))