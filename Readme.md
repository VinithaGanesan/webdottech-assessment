# Product Management API

## Assignment: API Development

## Objective

The goal of this project is to create a simple RESTful API to manage a list of products. Each product will include the following attributes:

- Name (string)
- Price (number)
- Description (string)
- Category (string)
- Brand (string)
- TotalQuantity (number)
- Created At (timestamp)
- Updated At (timestamp)

## Requirements

### 1. API Endpoints:

- **POST /api/products/create**: Create a new product.
- **GET /api/products/get**: Fetch all products.
- **PUT /api/products/update/:id**: Update an existing product.
- **DELETE /api/products/delete/:id**: Delete a product.

### 2. Database:

- Use MongoDB to store product data.
- Ensure proper schema definition and validation using Mongoose.

### 3. Project Structure:

- Set up the project using best practices (e.g., folder structure for routes, controllers, models).
- Write clean and readable code with proper error handling.

### 4. Additional Considerations:

- Implement basic validation for the product inputs (e.g., required fields).
- Use middleware to log incoming API requests.
- Include documentation with instructions on how to set up and run the project.

## Key Features

The Product Management API project is designed with a RESTful architecture that supports essential CRUD operations for managing products, utilizing MongoDB for efficient data storage and retrieval. Key features include user registration and login functionality with password hashing using bcrypt and secure token generation using JWT, along with data validation through Mongoose schema definitions. The project maintains a structured organization with separate folders for routes, controllers, and models, and incorporates middleware for logging incoming API requests. The API features comprehensive error handling and automatically tracks createdAt and updatedAt timestamps for each product. It responds with appropriate HTTP status codes and supports environment variable configuration for adaptability. This project is deployed on Render.com and detailed postman documentation is provided, making the API easy to use and extend for future features.

## Deploy

- Deployed url - https://webdottech-assessment.onrender.com

## GitHub

- GitHub Url - https://github.com/VinithaGanesan/webdottech-assessment

## Login

Example:

1. User
   - email: user@gmail.com
   - password: password

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VinithaGanesan/webdottech-assessment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd webdottech-assessment-main
   ```
3. Install the required packages:
   ```bash
   npm install
   ```
4. Set up your MongoDB connection string in a .env file:
   ```bash
   DEV_PORT = 8000
   NODE_ENV = development
   DEV_DB_URI = <your-mongodb-connection-string>
   PROD_DB_URI = <your-mongodb-connection-string>
   JWT_SECRET_KEY = <your-jwt-secret-key>
   ```

### Running the Project

1. Start the server:
   ```bash
   npm start
   ```
2. The API will be running on http://localhost:5000 (or the port you specified).

## API Usage

postman documentation - https://documenter.getpostman.com/view/31850794/2sAXxPADQc

## Middleware

This project includes middleware morgan to log incoming API requests. The logs will be printed in the console.

## Validation

Basic validation is implemented to ensure required fields are provided when creating or updating a product

## License

This project is licensed under the MIT License.

## Acknowledgments

- Express.js
- Mongoose
- MongoDB

## Contact

For inquiries, please contact vinithabegp@gmail.com
