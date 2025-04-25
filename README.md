# Cycle Mart Backend

This is the backend server for the Medi Mart application, built with Node.js, Express, and MongoDB. It provides APIs for managing medicines, users, orders, and authentication.

## Features

- **Authentication**: User registration, login, password change, and role-based access control.
- **Medicine Management**: CRUD operations for medicines, including image uploads to Cloudinary.
- **Order Management**: Place orders, verify payments, and manage shipping statuses.
- **Error Handling**: Centralized error handling with support for Mongoose, and custom errors.
- **Payment Integration**: Integrated with ShurjoPay for payment processing.
- **Admin Features**: Manage users, roles, and statuses.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt
- **Validation**: Zod
- **File Uploads**: Multer, Cloudinary
- **Payment Gateway**: ShurjoPay
- **Linting & Formatting**: ESLint, Prettier
- **TypeScript**: Strongly typed codebase



## Environment Variables

Create a `.env` file in the root directory and configure the following variables:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=<your_mongodb_connection_string>
BCRYPT_SALT_ROUNDS=8
JWT_ACCESS_SECRET=<your_jwt_secret>
JWT_ACCESS_EXPIRES_IN=1d

# Cloudinary
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>

# ShurjoPay
SP_ENDPOINT=https://sandbox.shurjopayment.com
SP_USERNAME=<your_shurjopay_username>
SP_PASSWORD=<your_shurjopay_password>
SP_PREFIX=SP
SP_RETURN_URL=<your_return_url>
```

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Azhar730/medi-mart-server.git
   cd medi-mart-server
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up the environment variables in the `.env` file.
```sh
   rename .env.example to .env
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```
 ```


For any questions or issues, please contact the project maintainer.