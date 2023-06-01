# E-Commerce

## Description
My motivation for this application was to become a better Full-Stack web developer. I built this project to showcase my skills using Sequelize models and my understanding of CRUD API calls. This application solves the problem of editing and viewing a databse's JSON data through API requests that is accessed using API tools. I learned how to use Sequelize models, configurations, how to use dotenv files to secure creditentials, and how to use CRUD API calls to edit databases created from Sequelize and MySQL.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Questions](#questions)

## Installation
To run the application locally, please follow these steps:

1. Clone the repository: `git clone https://github.com/pjt3232/E-Commerce.git`
2. Navigate to the project directory: `cd E-Commerce`
3. Install the dependencies: `npm install`
4. Set up the database connection by updating the .env file with your database credentials
5. Create a new database in MySQL: source the `schema.sql` file located in the `db` directory to set up the required tables.
6. Seed the database: `npm run seed`
7. Start the server: `npm start`
8. The application will be accessible at `http://localhost:3001/api/`

## Usage 
Please note that this application is accessible via API calls only. It does not have an HTML frontend.

To interact with the application's API endpoints, you can use tools like Insomnia. Here's how you can use CRUD API calls to edit and add data to the database.

1. Use a tool like Insomnia to send HTTP requests to the API endpoints. Set the base URL for your requests as `https://localhost:3001/api`.
2. Send a GET request to `http://localhost:3001/api/categories` to retreive all categories.
3. Send a POST request to `http://localhost:3001/api/categories` with the required request body to create a new category.
4. Use the appropriate HTTP methods (GET, POST, PUT, DELETE) along with the corresponding endpoints to perform CRUD operations on categories, products, and tags. For PUT and DELETE requests you need a specified ID in the API call, but when used with GET requests it will allow you to view a single ID.
5. Set the request body and parameters as required for each API call.
6. View the responses to see the request of your API calls. The API will return JSON data representing the requested resources or status messages.

[Watch this walkthrough video](https://drive.google.com/file/d/1tcyhRKt6BwrR8lFt29T3YjTZj8cro7ge/view?usp=sharing) to get a visual guide on how to use the application and its features.

## Credits
I used a starter code for this project. The starter code is the second commit on my repository. I added the columns and index for the models, the CRUD API calls located in the routes folder, and added the dotenv file. The creators of the starter code and the location of the starter code on GitHub can be found below:

Creators: 
- xandromus@github.com
- Georgeyoo@github.com
- dependabot[bot]@github.com

URL of starter code: 
`https://github.com/coding-boot-camp/fantastic-umbrella`

## Questions
If you have any questions or need further assitance, feel free to reach out:

- Email: 20peytra@gmail.com

