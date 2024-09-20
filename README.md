# Blog App with React JS

![blog landing](https://github.com/developerdwivedi/React-blog-App/blob/86153b5b68d89d0ba349ba82297a8a3f4134dea3/Screenshot%202024-09-20%20000318.png)
A blog application with React and Firebase as a backend

## Project Description

This is a React-based blog app that lets users create, like, and delete posts. The app has a responsive design and is built using modern web development techniques. It's a great project to learn how to build a full-stack web application with React and other cutting-edge technologies.

## Services

### Login

![login](./public/login.png)

You can access posts without logging in, but you need to log in or create an account to create your own posts. If you would like to try out the feature, you can use the following user credentials:

testUser@mail.com
123456

### Register

![register](./public/register.png)
Create a new user by entering email, username, and password.

### Home

![after login screen](https://github.com/developerdwivedi/React-blog-App/blob/0707997e6524104198c326413d265edccaab32ea/Screenshot%202024-09-20%20000318.png)
Upon logging in or registering, users will be directed to the homepage, where they can browse all posts created by other users and create their own posts, along with their titles, descriptions, and images.


![after login screen](https://github.com/developerdwivedi/React-blog-App/blob/b332d84ec71d9b7e6a94ccb09d69b18df1d86ab8/Screenshot%202024-09-20%20171144.png)
Make a single Blog Page to read the full blog.

### New post

![newpost](./public/create-new-post.png)
By clicking on the 'Add Post' button, users can access a modal to create a new post with a title, description, image URL, and content.

### Others

- Only owner of the post see <b>Delete</b> button
- Logout button
- Guest users view the content

## Setting up the project
![setting](https://github.com/developerdwivedi/React-blog-App/blob/d76a65903dc1ebee1749e6e9c84071bd0ff3342d/Screenshot%202024-09-20%20095535.png)
To run this project, you need to create a keys.js file in the root directory of the project and add your Firebase API key to it.

1. Create a file named keys.js in the root directory of the project.
2. Open the keys.js file and add the following code:

   export const apiKey = "YOUR_FIREBASE_API_KEY"

3. Replace YOUR_FIREBASE_API_KEY with your actual Firebase API key.
4. Save the keys.js file.

![setting](https://github.com/developerdwivedi/React-blog-App/blob/92a548adad4d2193bda55bd8034f2d878ebb4247/Screenshot%202024-09-20%20100241.png)

Once you have created the keys.js file and added your Firebase API key to it, you can run the project.

## Here are some common commands

1. npm install: Installs all the dependencies required for the project.
2. npm run dev: Runs the app in development mode.
3. npm run build: Builds the app for production to the build folder.



