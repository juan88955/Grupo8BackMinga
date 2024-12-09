import 'dotenv/config'
import '../../config/database.js'
import Reaction from '../Reaction.js'

let reactions = [
    {
        manga_id: null,
        author_id: null,
        company_id: null,
        reaccion: "like"
    },
    {
        manga_id: null,
        author_id: null,
        company_id: null,
        reaccion: "love"
    },
    {
        manga_id: null,
        author_id: null,
        company_id: null,
        reaccion: "favorite"
    },
    {
        manga_id: null,
        author_id: null,
        company_id: null,
        reaccion: "amazing"
    }
]

Reaction.insertMany(reactions)
    .then(docs => console.log('Reactions created:', docs))
    .catch(err => console.log('Error:', err))