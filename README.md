WanderLust

A full‑stack travel accommodation platform inspired by Airbnb that allows users to list and explore rental properties such as hotels, villas, and resorts. Users can upload images, view interactive maps, leave reviews, and authenticate securely.

Available at -> https://wanderlust-tdto.onrender.com


Features

Create & Manage Property Listings

    Interactive Map Integration using Mapbox

    Image Upload Support (Cloud Storage)

    Review & Rating System

    Authentication & Authorization

    Robust Validation & Error Handling

    Responsive UI with EJS Templating

Tech Stack
    Frontend:

        HTML, CSS, JavaScript

        EJS Templates

    Backend:

    Node.js, Express.js

    MongoDB (Mongoose ODM)

Other Tools & Libraries:

Mapbox (Maps & Geocoding)

Passport.js (Authentication)

Cloud Storage for Images

Joi Validation

Express Error Middleware

📁 Folder Structure (Simplified)
WanderLust/
|-- public/
|-- models/
|-- routes/
|-- controllers/
|-- views/
|-- utils/
|-- app.js
|-- .env.example
|-- package.json
⚙️ Setup & Installation
1. Clone the repository
    git clone https://github.com/lokesh172757/WanderLust/tree/main
    cd WanderLust
2. Install dependencies
    npm install
3. Create a .env file

    Use the following structure:

    CLOUDINARY_CLOUD_NAME=
    CLOUDINARY_API_KEY=
    CLOUDINARY_API_SECRET=
    MAPBOX_TOKEN=
    MONGO_URL= # MongoDB Atlas connection string
    SESSION_SECRET=
4. Run the project
    npm start

Application runs on:
    http://localhost:3000


👨‍💻 Author

Lokesh SINGH
Full‑Stack Developer

Feel free to connect and provide feedback 🙌
Linkedin: https://www.linkedin.com/in/lokesh-singh2588/