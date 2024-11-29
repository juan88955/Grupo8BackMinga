import 'dotenv/config'
import '../../config/database.js'
import User from '../User.js'

let users = [
    {
        "email": "naruto.uzumaki@example.com",
        "password": "Naruto123!",
        "photo": "https://wallpapers.com/images/hd/naruto-profile-pictures-yxzgwswc6xzezh2w.jpg",
        "role": 0,
        "online": false
    },
    {
        "email": "sasuke.uchiha@example.com",
        "password": "Sasuke456@",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeCBGduVtPmtjxtwjk1jlAggFrgOLCjQSng&s",
        "role": 0,
        "online": false
    },
    {
        "email": "sakura.haruno@example.com",
        "password": "Sakura789#",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdEZTZ60fJ-R1ER5D7vnIu_FLAyM7agb-ZxA&s",
        "role": 0,
        "online": false
    },
    {
        "email": "kakashi.hatake@example.com",
        "password": "Kakashi101$",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmhx6K-Be1NkQZJH9JcgzOWeLe7ga8sfXIQ&s",
        "role": 0,
        "online": false
    },
    {
        "email": "hinata.hyuga@example.com",
        "password": "Hinata202%",
        "photo": "https://i.pinimg.com/236x/d3/35/63/d3356306e987be57a4cd9f65751fedf7.jpg",
        "role": 0,
        "online": false
    },
    {
        "email": "shikamaru.nara@example.com",
        "password": "Shikamaru303&",
        "photo": "https://i.pinimg.com/564x/0c/7e/df/0c7edfc818ac9cb0af5a4b7a8358f3e3.jpg",
        "role": 0,
        "online": false
    },
    {
        "email": "itachi.uchiha@example.com",
        "password": "Itachi404*",
        "photo": "https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/d8e090e3-2324-44c3-8b14-e27ddc31e600/avatarhd",
        "role": 0,
        "online": false
    },
    {
        "email": "gaara.sabaku@example.com",
        "password": "Gaara505!",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2xB6RbqeDpx5Wca4DpzhU4U8zg2rnrg7sw&s",
        "role": 0,
        "online": false
    },
    {
        "email": "rock.lee@example.com",
        "password": "Rock606@",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZaNLa-1Wz-952rXld6RX3Rauo2Q6uMXUXZg&s",
        "role": 0,
        "online": false
    }
]


User.insertMany(users)
    .then(docs => console.log('Usuarios creados:', docs))
    .catch(err => console.log('Error:', err))