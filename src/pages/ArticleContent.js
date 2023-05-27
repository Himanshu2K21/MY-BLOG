const articles = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `The fastest way to learn React is through a structured and practical approach. Begin by getting familiar with JavaScript and its ES6 features, as React builds upon these foundations. Next, set up your development environment using Node.js and npm. This will allow you to create and manage React projects efficiently. Once your environment is ready, dive into the React fundamentals. Understand the core concepts of React, including its component-based architecture, JSX syntax, and state management. Utilize official documentation, online tutorials, and video courses specifically designed for beginners. Building small projects and mini-apps will help solidify your understanding of React and provide hands-on experience. 
            As you gain confidence, challenge yourself with more complex projects that involve multiple components and API integration. 
            Regular practice and staying updated with the latest React features and best practices will ensure a fast and comprehensive learning journey.`,
        ]
    },    {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `Building a Node server in just 10 minutes is an achievable task if you follow a streamlined approach. First, make sure you have Node.js installed on your machine. Open a terminal or command prompt and navigate to the desired project directory. Initialize a new Node.js project by running the command npm init and following the prompts.

            Next, install Express.js, a popular web framework for Node.js, by executing npm install express. Once the installation is complete, create a new file called server.js. In this file, import Express by adding the line const express = require('express');.
            
            Now, create an instance of the Express application by adding const app = express();. You can define the server routes using app.get() or app.post() methods, followed by the route path and a callback function that handles the request and response.
            
            To start the server, add app.listen(PORT_NUMBER, () => console.log('Server is running on port', PORT_NUMBER)); at the end of the file, replacing PORT_NUMBER with the desired port number.
            
            Save the file and return to the terminal. Run the command node server.js to start the server. Congratulations! You have successfully built a basic Node server in just 10 minutes. You can now access the server endpoints and test them using tools like Postman or by accessing them directly in the browser.`,
        ]
    },     {
        name: 'mongodb',
        title: 'Learn MongoDB',
        content: [
            ` Learning MongoDB is an essential skill for modern developers who work with data-driven applications. MongoDB is a popular NoSQL database that offers a flexible and scalable approach to managing and storing data. To start learning MongoDB, begin by understanding its key concepts and features. Learn about document-oriented data modeling, which allows you to store and retrieve data in JSON-like documents. Familiarize yourself with MongoDB's query language and the various operators and methods available for data manipulation and retrieval. Dive into topics such as data aggregation, indexing, and schema design to optimize the performance of your MongoDB databases. Utilize the official MongoDB documentation, online tutorials, and video courses to gain hands-on experience. Experiment with building sample projects or working on real-world scenarios to solidify your understanding. MongoDB also provides interactive learning resources and a free online course called "MongoDB University," which offers a comprehensive curriculum for beginners to advanced learners. 
              By immersing yourself in the MongoDB ecosystem and continually practicing your skills, you can become proficient in utilizing this powerful database technology.`,
        ]
    },  
];

export default articles;