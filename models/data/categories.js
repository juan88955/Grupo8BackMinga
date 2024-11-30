import 'dotenv/config'
import '../../config/database.js'
import Category from '../Category.js'

let categories = [
    {
        name: 'shonen',
        color: '#EF8481',
        hover: '#FFE0DF',
        description: 'Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur.',
        character_photo: 'https://i.postimg.cc/0jdw8g1K/shonen.png',
        cover_photo: 'https://i.postimg.cc/SK3jZSNj/elongated-shonen.png',
        admin_id: '64db637e10e0dcd86db7a932'  // Reemplaza con un ID real de usuario de tu base de datos
    },
    {
        name: 'comics',
        color: '#8883F0',
        hover: '#E0DEFF',
        description: 'Comic books are a publication that consists of comics, narrative artwork in the form of separate panels that represent individual scenes.',
        character_photo: 'https://i.postimg.cc/dQmtCmdn/comics.png',
        cover_photo: 'https://i.postimg.cc/yYXBqNLf/elongated-comics.png',
        admin_id: '674a2bdd7c243e05400cd254'
    },
    {
        name: 'shojo',
        color: '#00BA88',
        hover: '#D1FBF0',
        description: 'It is aimed especially at the adolescent female audience, being mostly starring a girl.',
        character_photo: 'https://i.postimg.cc/YqzGpBbr/shojo.png',
        cover_photo: 'https://i.postimg.cc/Yq83RDRP/elongated-shojo.png',
        admin_id: '6749b247267e2db6ecb354e6'
    },
    {
        name: 'seinen',
        color: '#FC9C57',
        hover: '#FFDDC8',
        description: 'Japanese seinen manga is marketed towards young adult men. The exact target demographic varies by publication/magazine.',
        character_photo: 'https://i.postimg.cc/6pKKZn0D/seinen.png',
        cover_photo: 'https://i.postimg.cc/T1LXzw6H/elongated-seinen.png',
        admin_id: '674a2bdd7c243e05400cd254'
    }
]

Category.insertMany(categories)
    .then(docs => console.log('Categories created:', docs))
    .catch(err => console.log('Error:', err))