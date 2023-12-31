# Buzzline Social Media App

## Description

Buzzline is a social media app developed using Vite + React. Chakra UI is utilized for styling, Cloudflare for image hosting, JWT & bcrypt for authentication, Recoil for state management, and React Router DOM for routing.

## Installation & Startup

### Server

1. Navigate to the `server` folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

### Client

1. Navigate to the `client` folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the client:

   ```bash
   npm run dev
   ```

## Server Dependencies

### Dependencies

- bcryptjs: ^2.4.3
- cloudinary: ^1.40.0
- cookie-parser: ^1.4.6
- dotenv: ^16.3.1
- express: ^4.18.2
- jsonwebtoken: ^9.0.1
- mongoose: ^7.4.0
- socket.io: ^4.7.2

### Dev Dependencies

- nodemon: ^3.0.1

## Client Dependencies

### Dependencies

- @chakra-ui/icons: ^2.1.0
- @chakra-ui/react: ^2.7.1
- @emotion/react: ^11.11.1
- @emotion/styled: ^11.11.0
- date-fns: ^2.30.0
- framer-motion: ^10.12.21
- react: ^18.2.0
- react-dom: ^18.2.0
- react-icons: ^4.10.1
- react-router-dom: ^6.14.1
- recoil: ^0.7.7
- socket.io-client: ^4.7.2

### Dev Dependencies

- @types/react: ^18.2.14
- @types/react-dom: ^18.2.6
- @vitejs/plugin-react: ^4.0.1
- eslint: ^8.44.0
- eslint-plugin-react: ^7.32.2
- eslint-plugin-react-hooks: ^4.6.0
- eslint-plugin-react-refresh: ^0.4.1
- vite: ^4.4.0

## Screenshots

- User Feed
  ![feed2.png](https://i.postimg.cc/V6NFBJp8/feed2.png)
  ![feed.png](https://i.postimg.cc/FKpZLyPp/feed1.png)
- Post
  ![post1.png](https://i.postimg.cc/j2pQbZ5x/post1.png)
  ![post2.png](https://i.postimg.cc/DZfxjjWR/post2.png)
- User Profile
  ![userProfile1.png](https://i.postimg.cc/7Zyd1NVr/user-Profile1.png)
  ![userProfile1.png](https://i.postimg.cc/KvTCgWt5/user-Profile2.png)
- Update Profile
  ![update.png](https://i.postimg.cc/Jh5TQVhb/update-Profile.png)
- Authentication
  ![signUp.png](https://i.postimg.cc/YSHngqtr/signUp.png)
  ![login.png](https://i.postimg.cc/y89pkS4p/login.png)
- Comment Modal
  ![comment.png](https://i.postimg.cc/L6JbFbyp/comment-Modal.png)
- Create Post Modal <br>
  ![createpost.png](https://i.postimg.cc/NfZPskVr/create-Post-Modal.png)

## Environment Variables (.env)

Create a `.env.local` file in the root of your project and add the following variables:

#### Server

```env
PORT=
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```
