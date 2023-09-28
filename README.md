# Lairbnb
This project was created as a portfolio project to demonstrate my proficiency as a full-stack developer. It mimicks the functionality of airbnb, including the ability to perform CRUD operations on Spots, Spot Images, Reviews, Review Images, and Bookings.

You can access the live app here: https://astons-mod-4-portfolio-project.onrender.com

<img width="1412" alt="Screenshot 2023-09-27 at 6 07 37 PM" src="https://github.com/AstonMartinez/week-13-project-authenticate-me/assets/129995811/b84897b4-8b7d-44e3-8a1d-a7160f067bd5">

<img width="1412" alt="Screenshot 2023-09-27 at 6 13 59 PM" src="https://github.com/AstonMartinez/week-13-project-authenticate-me/assets/129995811/bb9a1148-fc18-4dc2-8885-298a917cbaf1">

## Technologies / Frameworks Used
### Backend
* Express
* Sequelize
* PostgreSQL

### Frontend
* React.js
* Redux

## Core Features
* Spots (Lairs)
>* Registered users can create new Lairs, which will appear on the landing page.
>* Registered users can view their owned Lairs from the Manage Lairs button in the user profile dropdown.
>* Registered users can edit/update their individual lairs by clicking on the Update button for that Lair via the Manage Lairs page.
>* Registered users can delete Lairs, removing them from the listings.
* Reviews
>* Registered users can create new Reviews for individual Lairs.
>* Registered users can view reviews from themselves or others while looking at the details for an individual Lair.
>* Registered users can edit/update any Review they left for a Lair.
>* Registered users can delete any given Review they have written.
* Bookings
>* Registered users can create new Bookings for a Lair.
>* Registered users can view their Booking details by clicking on the Trips button in the user profile dropdown.
>* Registered users can edit/update their Booking details by clicking the three dots and then Update in the corner of each individual booking via the Manage Trips page.
>* Registered users can delete Bookings by clicking the three dots and then Delete in the corner of each individual booking via the Manage Trips page.

## Future Implementation Goals
* Images:
>* Registered users will be able to submit image files while creating a new Lair or Review using AWS.
* Favorites:
>* Registered users will be able to add and remove Lairs from their list of favorites.

## Contact Information
You can contact Aston via email, GitHub, or LinkedIn:
* Email: aston.martinez1614@gmail.com
* GitHub: https://github.com/AstonMartinez
* LinkedIn: https://www.linkedin.com/in/aston-martinez-0716/

## API Endpoints
| Request | Purpose | Return Value |
| ------------- | ------------- | ------------- |
| GET /api/session | This fetch is sent upon initial load and on subsequent refreshes. It returns an object representing the current user, if user is logged in | {<br> 'id': INT,<br>'username': STRING,<br> 'email': STRING,<br> 'firstName': STRING, <br> 'lastName': STRING<br>} |
| POST /api/session | This fetch attempts to log in a user with the provided credentials. It returns an object representing the current user, if validation succeeds. | {<br> 'id': INT,<br>'username': STRING,<br> 'email': STRING,<br> 'firstName': STRING, <br> 'lastName': STRING<br>} |
| POST /api/users | Creates a new user and logs them in. Returns an object representing the newly created user. | {<br> 'id': INT,<br>'username': STRING,<br> 'email': STRING,<br> 'firstName': STRING, <br> 'lastName': STRING<br>} |
| GET /api/spots | Fetches all existing spots/Lairs. | "Spots": [<br> &nbsp; { <br> &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; "ownerId": INT, <br> &nbsp; &nbsp; "address": STRING, <br> &nbsp; &nbsp; "city": STRING, <br> &nbsp; &nbsp; "state": STRING, <br> &nbsp; &nbsp; "country": STRING, <br> &nbsp; &nbsp; "lat": DEC, <br> &nbsp; &nbsp; "lng": DEC, <br> &nbsp; &nbsp; "name": STRING, <br> &nbsp; &nbsp; "description": STRING, <br> &nbsp; &nbsp; "price": DEC, <br> &nbsp; &nbsp; "createdAt": DATE, <br> &nbsp; &nbsp;"updatedAt": DATE, <br> &nbsp; &nbsp; "avgRating": DEC, <br> &nbsp; &nbsp; "previemImage": STRING,<br> &nbsp; } <br> ] |
| GET /api/spots/current | "Spots": [<br> &nbsp; { <br> &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; "ownerId": INT, <br> &nbsp; &nbsp; "address": STRING, <br> &nbsp; &nbsp; "city": STRING, <br> &nbsp; &nbsp; "state": STRING, <br> &nbsp; &nbsp; "country": STRING, <br> &nbsp; &nbsp; "lat": DEC, <br> &nbsp; &nbsp; "lng": DEC, <br> &nbsp; &nbsp; "name": STRING, <br> &nbsp; &nbsp; "description": STRING, <br> &nbsp; &nbsp; "price": DEC, <br> &nbsp; &nbsp; "createdAt": DATE, <br> &nbsp; &nbsp;"updatedAt": DATE, <br> &nbsp; &nbsp; "avgRating": DEC, <br> &nbsp; &nbsp; "previemImage": STRING,<br> &nbsp; } <br> ] |
| GET /api/spots/current | Fetches a logged-in user's spots/Lairs. | {<br> &nbsp; &nbsp;'id': INT,<br>&nbsp; &nbsp;'user_id': INT,<br>&nbsp; &nbsp;'shirt': STRING,<br>&nbsp; &nbsp;'hair': STRING,<br>&nbsp; &nbsp;'bangs': STRING,<br>&nbsp; &nbsp;'skin': STRING,<br>&nbsp; &nbsp;'background': STRING<br>} |
| GET /api/spots/:spotId | Fetches a spot/Lair by its ID. | {<br> &nbsp; "id": INT, <br> &nbsp; "ownerId": INT, <br> &nbsp; "address": STRING, <br> &nbsp; "city": STRING, <br> &nbsp; "state": STRING, <br> &nbsp; "country": STRING, <br> &nbsp; "lat": DEC, <br> &nbsp; "lng": DEC, <br> &nbsp; "name": STRING, <br> &nbsp; "description": STRING, <br> &nbsp; "price": DEC, <br> &nbsp; "createdAt": DATE, <br> &nbsp;"updatedAt": DATE, <br> &nbsp; "avgRating": DEC, <br> &nbsp; "SpotImages": [ <br> &nbsp; { <br> &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; "url": STRING, <br> &nbsp; &nbsp; "preview": BOOLEAN <br> &nbsp; &nbsp; } <br> &nbsp; ], <br> &nbsp; "Owner": { <br> &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; "firstName": STRING, <br> &nbsp; &nbsp; "lastName": STRING <br> &nbsp; } <br> } |
| GET /api/spots/current | Fetches a logged-in user's spots/Lairs. | {<br> &nbsp; &nbsp;'id': INT,<br>&nbsp; &nbsp;'user_id': INT,<br>&nbsp; &nbsp;'shirt': STRING,<br>&nbsp; &nbsp;'hair': STRING,<br>&nbsp; &nbsp;'bangs': STRING,<br>&nbsp; &nbsp;'skin': STRING,<br>&nbsp; &nbsp;'background': STRING<br>} |
| POST /api/spots | Creates and returns a new spot/Lair. | {<br> &nbsp; "id": INT, <br> &nbsp; "address": STRING, <br> &nbsp; "city": STRING, <br> &nbsp; "state": STRING, <br> &nbsp; "country": STRING, <br> &nbsp; "lat": DEC, <br> &nbsp; "lng": DEC, <br> &nbsp; "name": STRING, <br> &nbsp; "description": STRING, <br> &nbsp; "price": DEC, <br> &nbsp; "createdAt": DATE, <br> &nbsp; "updatedAt": DATE <br>} |
| POST /api/spots/:spotId/images | Create and return a new image for a spot/Lair specified by spot ID. | {<br> &nbsp; "id": INT, <br> &nbsp; "url": STRING, <br> &nbsp; "preview": BOOLEAN <br>} |
| PUT /api/spots/:spotId | {<br> &nbsp; "id": INT, <br> &nbsp; "ownerId": INT, <br> &nbsp; "address": STRING, <br> &nbsp; "city": STRING, <br> &nbsp; "state": STRING, <br> &nbsp; "country": STRING, <br> &nbsp; "lat": DEC, <br> &nbsp; "lng": DEC, <br> &nbsp; "name": STRING, <br> &nbsp; "description": STRING, <br> &nbsp; "description": STRING, <br> &nbsp; "price": DEC, <br> &nbsp; "createdAt": DATE, <br> &nbsp; "updatedAt": DATE <br>} |
| DELETE /api/spots/:spotId | Deletes an existing spot/Lair. | {<br> &nbsp; "message": "Successfully deleted" <br>} |
| GET /api/reviews/current | Returns all the reviews written by the current user. | {<br> &nbsp; "Reviews": [<br> &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; "userId": INT, <br> &nbsp; &nbsp; "spotId": INT, <br> &nbsp; &nbsp; "review": STRING, <br> &nbsp; &nbsp; "stars": INT, <br> &nbsp; &nbsp; "createdAt": DATE, <br> &nbsp; &nbsp; "updatedAt": DATE, <br> &nbsp; &nbsp; "User": {<br> &nbsp; &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; &nbsp; "firstName": STRING, <br> &nbsp; &nbsp; &nbsp; "lastName": STRING <br> &nbsp; &nbsp; }, <br> &nbsp; &nbsp; "Spot": {<br> &nbsp; &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; &nbsp; "ownerId": INT, <br> &nbsp; &nbsp; &nbsp; "address": STRING, <br> &nbsp; &nbsp; &nbsp; "city": STRING, <br> &nbsp; &nbsp; &nbsp; "state": STRING, <br> &nbsp; &nbsp; &nbsp; "country": STRING, <br> &nbsp; &nbsp; &nbsp; "lat": DEC, <br> &nbsp; &nbsp; &nbsp; "lng": DEC, <br> &nbsp; &nbsp; &nbsp; "name": STRING, <br> &nbsp; &nbsp; &nbsp; "price": DEC, <br> &nbsp; &nbsp; &nbsp; "previewImage": STRING,<br> &nbsp; &nbsp;} <br> &nbsp; "ReviewImages": [<br> &nbsp; &nbsp; {<br> &nbsp; &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; &nbsp; "url": STRING <br> &nbsp; &nbsp; &nbsp;}<br> &nbsp; &nbsp;]<br> &nbsp; } <br>] |
| GET /api/spots/:spotId/reviews | Returns all the reviews that belong to a spot/Lair specified by ID. | {<br> &nbsp; "Reviews": [<br> &nbsp; &nbsp; {<br> &nbsp; &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; &nbsp; "userId": INT, <br> &nbsp; &nbsp; &nbsp; "spotId": INT, <br> &nbsp; &nbsp; &nbsp; "review": STRING, <br> &nbsp; &nbsp; &nbsp; "stars": INT, <br> &nbsp; &nbsp; &nbsp; "createdAt": DATE, <br> &nbsp; &nbsp; &nbsp; "updatedAt": DATE, <br> &nbsp; &nbsp; &nbsp; "User": {<br> &nbsp; &nbsp; &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; &nbsp; &nbsp; "firstName": STRING, <br> &nbsp; &nbsp; &nbsp; &nbsp; "lastName": STRING, <br> &nbsp; &nbsp; &nbsp; }, <br> &nbsp; &nbsp; "ReviewImages": [<br> &nbsp; &nbsp; &nbsp; {<br> &nbsp; &nbsp; &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; &nbsp; &nbsp; "url": STRING <br> &nbsp; &nbsp; &nbsp; &nbsp;} <br> &nbsp; &nbsp; &nbsp;] <br> &nbsp; &nbsp; } <br> &nbsp;] <br>} |
| POST /api/spots/:spotId/reviews | Create and return a new review for a spot/Lair specified by ID. | {<br> &nbsp; "id": INT, <br> &nbsp; "userId": INT, <br> &nbsp; "spotId": INT, <br> &nbsp; "review": STRING, <br> &nbsp; "stars": INT, <br> &nbsp; "createdAt": DATE, <br> &nbsp; "updatedAt": DATE <br>} |
| POST /api/reviews/:reviewId/images | Create and return a new image for a review specified by ID. | {<br> &nbsp; "id": INT, <br> &nbsp; "url": STRING <br>} |
| PUT /api/reviews/:reviewId | Update and return an existing review. | {<br> &nbsp; "id": INT, <br> &nbsp; "userId": INT, <br> &nbsp; "spotId": INT, <br> &nbsp; "review": STRING, <br> &nbsp; "stars": INT, <br> &nbsp; "createdAt": DATE, <br> &nbsp; "updatedAt": DATE <br>} |
| DELETE /api/reviews/:reviewId | Delete an existing review. | {<br> &nbsp; "message": "Successfully deleted" <br>} |
| GET /api/bookings/current | Return all the bookings that the current user has made. | {<br> &nbsp; "Bookings": [<br> &nbsp; &nbsp; { <br> &nbsp; &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; &nbsp; "spotId": INT, <br> &nbsp; &nbsp; &nbsp; "Spot": {<br> &nbsp; &nbsp; &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; &nbsp; &nbsp; "ownerId": INT, <br> &nbsp; &nbsp; &nbsp; &nbsp; "address": STRING, <br> &nbsp; &nbsp; &nbsp; &nbsp; "city": STRING, <br> &nbsp; &nbsp; &nbsp; &nbsp; "state": STRING, <br> &nbsp; &nbsp; &nbsp; &nbsp; "country": STRING, <br> &nbsp; &nbsp; &nbsp; &nbsp; "lat": DEC, <br> &nbsp; &nbsp; &nbsp; &nbsp; "lng": DEC, <br> &nbsp; &nbsp; &nbsp; &nbsp; "name": STRING, <br> &nbsp; &nbsp; &nbsp; &nbsp; "price": DEC, <br> &nbsp; &nbsp; &nbsp; &nbsp; "previewImage": STRING <br> &nbsp; &nbsp; &nbsp;} <br> &nbsp; &nbsp; &nbsp; "userId": INT, <br> &nbsp; &nbsp; &nbsp; "startDate": DATE, <br> &nbsp; &nbsp; &nbsp;, <br> &nbsp; &nbsp; &nbsp; "endDate": DATE, <br> &nbsp; &nbsp; &nbsp; "createdAt": DATE, <br> &nbsp; &nbsp; &nbsp; "updatedAt": DATE &nbsp; &nbsp;} <br> &nbsp;] <br>} |
| GET /api/spots/:spotId/bookings | Return all the bookings for a spot/Lair specified by ID. | {<br> &nbsp; "Bookings": [<br> &nbsp; &nbsp; {<br> &nbsp; &nbsp; &nbsp; "User": {<br> &nbsp; &nbsp; &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; &nbsp; &nbsp; "firstName": STRING, <br> &nbsp; &nbsp; &nbsp; &nbsp; "lastName": STRING <br> &nbsp; &nbsp; &nbsp;}, <br> &nbsp; &nbsp; &nbsp; "id": INT, <br> &nbsp; &nbsp; &nbsp; "spotId": INT, <br> &nbsp; &nbsp; &nbsp; "userId": INT, <br> &nbsp; &nbsp; &nbsp; "startDate": DATE, <br> &nbsp; &nbsp; &nbsp; "endDate": DATE, <br> &nbsp; &nbsp; &nbsp; "createdAt":  DATE, <br> &nbsp; &nbsp; &nbsp; "updatedAt": DATE <br> &nbsp; &nbsp;} <br> &nbsp; ] <br>} |
| POST /api/spots/:spotId/bookings | Create and return a new booking from a spot specified by ID. | {<br> &nbsp; "id": INT, <br> &nbsp; "spotId": INT, <br> &nbsp; "userId": INT, <br> &nbsp; "startDate": DATE, <br> &nbsp; "endDate": DATE, <br> &nbsp; "createdAt": DATE, <br> &nbsp; "updatedAt": DATE <br>} |
| PUT /api/bookings/:bookingId | Update and return an existing booking. | {<br> &nbsp; "id": INT, <br> &nbsp; "spotId": INT, <br> &nbsp; "userId": INT, <br> &nbsp; "startDate": DATE, <br> &nbsp; "endDate": DATE, <br> &nbsp; "createdAt": DATE, <br> &nbsp; "updatedAt": DATE <br>} |
| DELETE /api/bookings/:bookingId | Delete an existing booking. | {<br> &nbsp; "message": "Successfully deleted" <br>} |
| DELETE /api/spot-images/:imageId | Delete an existing image for a spot/Lair. | {<br> &nbsp; "message": "Successfully deleted" <br>} |
| DELETE /api/review-images/:imageId | Delete an existing image for a Review. | {<br> &nbsp; "message": "Successfully deleted" <br>} |
