# Grupo8BackMinga

# Install the dependencies:
npm install express npm install -save-dev nodemon npm install dotenv npm install mongoose npm i cors npm i morgan npm i bcryptjs npm i joi-oid npm i jsonwebtoken npm i passport npm i passport-jwt npm i passport-google-oauth

npm nodemon server.js

# Create a .env file in the root directory with the following variables:
envCopyPORT=8080
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Scripts
Start development server with hot reload:
bashCopynpm run dev

# Start production server:
npm start
Data Loading Scripts

# Load specific data collections:
npm run users        # Load users data
npm run companies    # Load companies data
npm run authors      # Load authors data
npm run mangas       # Load mangas data
npm run comments     # Load comments data
npm run categories   # Load categories data
npm run dataProfe    # Load all data
npm run chapters     # Load chapters data
npm run reactions    # Load reactions data

# Depedencies
Node.js
MongoDB
express
dotenv
mongoose
cors
morgan
bcryptjs
joi-oid
jsonwebtoken
passport
passport-jwt
passport-google-oauth