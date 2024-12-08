import 'dotenv/config'
import '../../config/database.js'
import Category from '../Category.js'

let categories = [
    {
        name: "Comic",
        description: "Comic books are a publication that consists of comics, narrative artwo…",
        cover_photo: "https://s3-alpha-sig.figma.com/img/0b79/70a5/01731543bd32ac773a1b2fa23…",
        character_photo: "https://s3-alpha-sig.figma.com/img/7010/55a8/ad631c0e34af539abb86743a2…",
        admin_id: "674a2bdd7c243e05400cd254",
        bg: "bg-gray-400",
        text: "text-gray-800",
        hover: "hover:bg-gray-600",
        border: "border-gray-800",
        checked: "checked:bg-gray-800"
    },
    {
        name: "Shojo",
        description: "It is aimed especially at the adolescent female audience, being mostly starring a girl.",
        character_photo: 'https://i.postimg.cc/YqzGpBbr/shojo.png',
        cover_photo: 'https://i.postimg.cc/Yq83RDRP/elongated-shojo.png',
        admin_id: '6749b247267e2db6ecb354e6',
        bg: "bg-green-400",
        text: "text-green-800",
        hover: "hover:bg-green-600",
        border: "border-green-800",
        checked: "checked:bg-green-800"
    },
    {
        name: "Seinen",
        description: 'Japanese seinen manga is marketed towards young adult men. The exact target demographic varies by publication/magazine.',
        character_photo: 'https://i.postimg.cc/6pKKZn0D/seinen.png',
        cover_photo: 'https://i.postimg.cc/T1LXzw6H/elongated-seinen.png',
        admin_id: '674a2bdd7c243e05400cd254',
        bg: "bg-orange-400",
        text: "text-orange-800",
        hover: "hover:bg-orange-600",
        border: "border-orange-800",
        checked: "checked:bg-orange-800"
    },
    {
        name: "Shonen",
        description: "Comic books are a publication that consists of comics, narrative artwo…",
        cover_photo: "https://s3-alpha-sig.figma.com/img/b3fe/fdeb/7c848fa5944ce73c1e0b7c954…",
        character_photo: "https://s3-alpha-sig.figma.com/img/8856/dd5e/290b26e8ccd3b394d453600dc…",
        admin_id: "674a2bdd7c243e05400cd254",
        bg: "bg-red-400",
        text: "text-red-800",
        hover: "hover:bg-red-600",
        border: "border-red-800",
        checked: "checked:bg-red-800"
    },
    {
        name: "Kodomo",
        description: 'Comic books are a publication that consists of comics, narrative artwo…',
        character_photo: 'https://s3-alpha-sig.figma.com/img/74c1/1422/523fb73c0843c17b79f58c050…',
        cover_photo: 'https://s3-alpha-sig.figma.com/img/511b/7568/ef59acdd63429092bed163f4a…',
        admin_id: '6749b247267e2db6ecb354e6',
        bg: "bg-purple-400",
        text: "text-purple-800",
        hover: "hover:bg-purple-600",
        border: "border-purple-800",
        checked: "checked:bg-purple-800"
    },

]

Category.insertMany(categories)
    .then(docs => console.log('Categories created:', docs))
    .catch(err => console.log('Error:', err))