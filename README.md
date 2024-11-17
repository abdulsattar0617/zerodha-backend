# Zerodha

The Zerodha Clone project replicates basic stock trading functionalities, including buying stocks and placing orders, in a dummy-based environment. The backend powers user authentication, and mock transactions, providing a safe space for users to experience stock trading without financial risks.

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure (MVC)](#project-structure-mvc)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## About the Project

The Zerodha Clone - Backend is a core component of a mock stock trading platform, simulating stock buying and order placement functionalities. It is designed to handle user authentication, portfolio management, and mock stock transactions, providing a dummy environment for users to explore the stock trading process. This backend is a standalone part of the system, focusing on managing data and processing actions, offering a learning tool for those interested in stock market functionality without real financial risks.

## Features

- **User Authentication**: Secure login and registration using JWT for authorized access to the platform.
- **Mock Stock Trading**: Users can buy and place orders for stocks in a simulated environment.
- **Portfolio Management**: Track and manage stock holdings and orders in a dummy-based portfolio.
- **RESTful API**: The backend is structured with REST API routes for efficient interaction with the frontend.
- **Data Security**: Ensures secure handling of user data and stock transactions through encryption and middleware validation.
- **MVC architecture** for scalable and maintainable codebase

## Tech Stack

- **Node.js**: JavaScript runtime for building scalable backend applications.
- **Express.js**: Web framework for building RESTful APIs and managing routes.
- **MongoDB**: NoSQL database for storing user data, orders, and portfolios.
- **JWT (JSON Web Token)**: For secure user authentication and session management.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB to interact with data in an object-oriented way.
- **bcrypt.js**: For hashing passwords securely.
- **Version Control**: Git, GitHub

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/abdulsattar0617/zerodha-backend.git
   cd zerodha-backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```bash
   PORT=3000
   MONGODB_URI=your-mongodb-uri
   TOKEN_KEY=your-token-secret
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   Visit `http://localhost:3000` to view the app.

## API Endpoints

| Path          | Method | Description               |
| ------------- | ------ | ------------------------- |
| /allOrders    | GET    | Fetch all orders data.    |
| /newOrder     | POST   | Place a new order.        |
| /allHoldings  | GET    | Fetch all holdings data.  |
| /allPositions | GET    | Fetch all positions data. |


## Usage

Once the server is running, you can use the server URL to fetch data after logging in or signing up. 

1. First, sign up or log in using the authentication endpoints to receive a JWT token.
2. Then, use the token in your request header to access protected routes and fetch data.


## Live Demo (change_me)

You can access the live version of the application here: [Zerodha-backend Live Demo](https://zerodha-backend-gudt.onrender.com)

## Project Structure (MVC)

```bash
Zerodha-Backend/
│
├── Controllers/
│   ├── AuthController.js
│
├── models/
│   ├── UserModel.js
│   ├── HoldingsModel.js
│   ├── OrdersModel.js
│   └── PositionsModel.js
│
├── middlewares/
│   ├── Auth.js
│   └── AuthMiddleware.js
│
├── routes/
│   ├── AuthRoute.js
│   ├── DashboardRoute.js
│
├── schemas/
│   ├── UserSchema.js
│   ├── HoldingsSchema.js
│   ├── OrdersSchema.js
│   └── PositionsSchema.js
│
├── utils/
│   ├── SecretToken.js
│
├── app.js
├── DBConnection.js
├── package.json
└── package-lock.json
```

## Contributing

We welcome contributions to the Zerodha Clone Backend project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request with a description of your changes.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
