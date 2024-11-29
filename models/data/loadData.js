import 'dotenv/config'
import '../../config/database.js'
import User from '../User.js'
import Author from '../Author.js'
import Company from '../Company.js'
import Category from '../Category.js'
import Manga from '../Manga.js'
import Chapter from '../Chapter.js'
import Comment from '../Comment.js'
import Reaction from '../Reaction.js'

// First create users
let users = [
    {
        email: "user1@example.com",
        password: "pass123",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        role: 0,
        online: false
    },
    {
        email: "admin@example.com",
        password: "admin123",
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        role: 1,
        online: false
    },
    {
        email: "author@example.com",
        password: "author123",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        role: 2,
        online: false
    },
    {
        email: "company@example.com",
        password: "company123",
        photo: "https://randomuser.me/api/portraits/men/4.jpg",
        role: 3,
        online: false
    }
]

async function loadData() {
    try {
        // Create users first
        const createdUsers = await User.insertMany(users)
        console.log('Users created')

        // Get IDs for different roles
        const adminId = createdUsers.find(user => user.role === 1)._id
        const authorUserId = createdUsers.find(user => user.role === 2)._id
        const companyUserId = createdUsers.find(user => user.role === 3)._id

        // Create authors
        const authors = await Author.insertMany([
            {
                name: "Kohei",
                last_name: "Horikoshi",
                city: "Tokyo",
                country: "Japan",
                date: "1986-11-20",
                photo: "https://randomuser.me/api/portraits/men/5.jpg",
                user_id: authorUserId,
                active: true
            }
        ])
        console.log('Authors created')

        // Create companies
        const companies = await Company.insertMany([
            {
                name: "Shonen Jump",
                website: "https://www.shonenjump.com",
                description: "Leading manga publisher in Japan",
                photo: "https://randomuser.me/api/portraits/men/6.jpg",
                user_id: companyUserId,
                active: true
            }
        ])
        console.log('Companies created')

        // Create categories
        const categories = await Category.insertMany([
            {
                name: "Shonen",
                color: "#FF5733",
                hover: "#FF8C69",
                description: "Action manga targeted at teenage boys",
                cover_photo: "https://randomuser.me/api/portraits/men/7.jpg",
                character_photo: "https://randomuser.me/api/portraits/men/8.jpg",
                admin_id: adminId
            }
        ])
        console.log('Categories created')

        // Create mangas
        const mangas = await Manga.insertMany([
            {
                author_id: authors[0]._id,
                company_id: companies[0]._id,
                title: "My Hero Academia",
                cover_photo: "https://randomuser.me/api/portraits/men/9.jpg",
                description: "Story about becoming the greatest hero",
                category_id: categories[0]._id
            }
        ])
        console.log('Mangas created')

        // Create chapters
        const chapters = await Chapter.insertMany([
            {
                manga_id: mangas[0]._id,
                title: "Chapter 1: The Beginning",
                cover_photo: "https://randomuser.me/api/portraits/men/10.jpg",
                pages: [
                    "https://randomuser.me/api/portraits/men/11.jpg",
                    "https://randomuser.me/api/portraits/men/12.jpg"
                ],
                order: 1
            }
        ])
        console.log('Chapters created')

        // Create comments
        await Comment.insertMany([
            {
                chapter_id: chapters[0]._id,
                author_id: authors[0]._id,
                company_id: companies[0]._id,
                message: "Great first chapter!"
            }
        ])
        console.log('Comments created')

        // Create reactions
        await Reaction.insertMany([
            {
                manga_id: mangas[0]._id,
                author_id: authors[0]._id,
                company_id: companies[0]._id,
                reaccion: "like"
            }
        ])
        console.log('Reactions created')

        console.log('All data loaded successfully!')

    } catch (error) {
        console.log('Error loading data:', error)
    }
}

loadData()