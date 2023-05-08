# ps-store-final-project
## Dear Tester,

Hi, my name is lishay and this is my final project,
for client side i used React,redux,javascript scss and bootstrap
for server side i used node.js and mongoose
for database i used MongoDb.
The idea of my project was actually to make an online store for buying games and login system
when the admin can add/edit/delete games from the store using http request


 Before you start checking my project there are some instructions on how to run the site
 First of all command in the terminal npm i
 1. command cd backend and command npm i 
 2. command npm run tsw (its compaling the ts to js)
 3. open a new terminal at the backend folder and command npm run dev (it should connect the server to the Database)
 4. command cd frontend and run the command npm i and after that npm start
 5. enjoy browsing my web store.

 ### Navbar
 The Navbar has 3 links to pages in the site and three buttons for register/login/admin login.
 The links are for Home Page, About Page and Cart.
 As soon as the user or the admin logs in, the buttons disappear and a logout button remains.
  

 ### Home Page
 The Home page is divided into several sections.
 Header -  which is actually the entry page of the site, invites the user to register or login the site and gives him the option to scroll straight to the list of games
 Carusel - A carousel that changes images every few seconds and gives the user an indication of the newest games
 Filter Section - that give the user the option to filter by search a specific game or he can filter the by console and he can sort by price low to high and high to low (The filter and sort are done through an http request to a database)
 Game List - the game list that site get from the database, each game has a name,image,price,rating and two buttons one for adding to cart and second for getting more information about selected game.

 ### Game Details
 As soon as the user clicks on the learn more button, he is redirected to a specific page of the game with more information about it, such as a description, rating, more images and a trailer from YouTube, and there he can also add the game to the cart


 ### About Page
 The About page gives an information about the whole site with a section and an image of the site


 ### Cart Page  
 On the shopping cart page there is a list of products that you added to the cart from the home page You have the ability to add a quantity of the same product, remove the desired product, as well as remove all the products in the cart.Everything is saved in local storage.
 Once the user finishes his purchase and want to checkout he must to login to the site and after that he can checkout and enter credit card details.

 ### Register
 When user wants to register to the site he must fill the fields according to what the inputs demand.
 after clicking the button the site sends a post request to check if the email or the username aren't existing in the database.


 ### Login and Admin Login
When user wants to login to the site he must enter email and a valid password
I used Yup and Formik libraries for the validtions

### Admin Page
When the admin connects to the site, a link will open for him in the navigation bar called admin
In that Page.
On this page he can see all the games on the site and he can edit a game, add a game and also delete a game.
As soon as he does one of these actions, he updates the database and updates the entire site



 

