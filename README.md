# Poll Making Web-App

## Introduction
The Poll Making Web-App is a user-friendly platform that allows users to create, vote on, and share polls. It provides a seamless real-time experience using Socket.IO for instant updates and interaction among users.

## Features
1. **Create Polls:** Users can easily create their own polls by specifying a question and multiple options to choose from.

2. **Vote on Polls:** Users can participate in polls by selecting their preferred option and submitting their vote. The results are instantly updated and displayed in real-time.

3. **Share Polls:** Users can share their created polls with others through a unique URL. This allows others to access the poll directly and cast their votes.

4. **Real-Time Updates:** The Web-App utilizes Socket.IO to provide real-time updates on poll results. Users can see the latest vote counts and changes as they occur.

5. **Room-Based Communication:** Socket.IO rooms are used to group users based on the polls they are participating in. This ensures that updates and messages are only sent to the relevant users, maintaining privacy and reducing unnecessary traffic.

## Technologies Used
The Poll Making Web-App utilizes the following technologies:

- **Front-End:** NextJS+TypeScript+TailwindCSS

- **Back-End:** Node.js with a framework like Express.js for handling HTTP requests and managing server-side logic.

- **Database:** MongoDB to store poll data, including questions, options, and vote counts.

- **Socket.IO:** A real-time communication library that enables instant updates and interaction between clients and the server.

## Workflow
1. **User Registration:** Users can sign up and create an account to access additional features like saving and managing their polls.

2. **Create Poll:** Authenticated users can create new polls by providing a question and multiple options to choose from.

3. **Vote on Polls:** Users can browse existing polls and vote on the options they prefer. Their votes are instantly recorded and reflected in the real-time results.

4. **Share Poll:** Users can share the URL of a specific poll with others through various channels (e.g., social media, email) to encourage more participation.

5. **Real-Time Updates:** As users vote on polls, Socket.IO ensures that the results are instantly updated and displayed to all participants in real-time.

## Conclusion
The Poll Making Web-App provides a convenient and engaging platform for users to create, vote on, and share polls. With real-time updates and room-based communication using Socket.IO, users can have an interactive and dynamic experience, making the process of creating and participating in polls seamless and enjoyable.
