
# Spring boot-React Social Media App

Full-Stack Social App with Spring boot and React



## Contents

 - [Tech Stack](#tech-stack)
 - [Usage](#usage)
 - [Screenshots](#screenshots)


## Tech Stack

**Client:** React, Chakra UI

**Server:** Java, Spring boot, PostgreSQL

### Usage
 
After running the Web API, you can make HTTP requests like:
   
   ```sh
   https://localhost:8080/api/`CONTROLLER_NAME`/`METHOD_NAME`
   ```
 
   `CONTROLLER_NAME` => Each .java file located in the `controllers` folder (For example CONTROLLER_NAME for `PostsController`: Posts )

   `METHOD_NAME` => All of the methods in each .java file in the `controllers` folder
 
#### Sample HTTP GET requests:

1. List all Posts:
   ```sh
   https://localhost:8080/api/posts/getall
   ```
2. List Comments by Post:
   ```sh
   https://localhost:8080/api/comments/getallbypost/{postId}
   ```
3. User Register
   ```sh
   https://localhost:8080/api/auth/register
   ```
## Screenshots
### Register Page

![App Screenshot](/readme-img/register.png)

### Home

![App Screenshot](/readme-img/home.png)

### Profile

![App Screenshot](/readme-img/profile.png)

### User Profile

![App Screenshot](/readme-img/userProfile.png)

### Comments

![App Screenshot](/readme-img/comments.png)

### Share Post

![App Screenshot](/readme-img/sharepost.png)



