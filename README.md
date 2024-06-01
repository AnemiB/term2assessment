# Puppy Paws

Puppy Paws is a pet store web application where users can view and manage details of pets available for adoption. The application is built using React for the front end and Express.js for the back end. It uses MongoDB as the database to store pet information.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- You have installed [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/).
- You have installed [Yarn](https://classic.yarnpkg.com/en/docs/install/).
- You have a running instance of [MongoDB](https://www.mongodb.com/).

## Installation

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/puppy-paws.git
    cd petstoreapp
    ```

2. **Set Up the Backend:**
    - Navigate to the `server` directory:
        ```bash
        cd Backend
        ```
    - Install server dependencies:
        ```bash
        yarn install
        ```
    - Create a `.env` file in the `server` directory and add the following environment variables:
        ```
        PORT=5000
        MONGODB_URI=your_mongodb_connection_string
        ```
    - Start the server:
        ```bash
        yarn start
        ```

3. **Set Up the Frontend:**
    - Navigate to the `client` directory:
        ```bash
        cd ../client
        ```
    - Install client dependencies:
        ```bash
        yarn install
        ```
    - Start the React development server:
        ```bash
        npm start
        ```

## Running the Project

1. **Start MongoDB:**
    Ensure your MongoDB instance is running. If you are using a local MongoDB instance, you can start it with:
    ```bash
    mongodb
    ```

2. **Start the Backend Server:**
    In the `server` directory, run:
    ```bash
    npm start
    ```

3. **Start the Frontend Development Server:**
    In the `client` directory, run:
    ```bash
    npm start
    ```

4. **Access the Application:**
    Open your browser and navigate to `http://localhost:5000`.

## Project Structure

```
petstoreapp/
├── client/                # Frontend code (React)
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── yarn.lock
├── server/                # Backend code (Express.js)
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── yarn.lock
├── README.md
└── .gitignore
```

## Usage

1. **Viewing Pets:**
    - Navigate to the "Pet Store" page to view all available pets.

2. **Editing Pet Details:**
    - Click on a pet to view its details.
    - Click the "Edit Details" button to modify pet information.

3. **Removing a Pet:**
    - In the "Pet Store" page, click the "Remove" button next to a pet to delete it from the store.

## Video Walkthrough

https://drive.google.com/file/d/1GykfqX6Q7KGSDnwIXkz5Yynhss09W_Q0/view?usp=sharing
