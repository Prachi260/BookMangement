# Project Title

Book Management 

## Description

CRUD operations for managing books. 

## Getting Started

### Dependencies

* Node v20.9.0
* MongoDB Atlas

### Installing

* After cloning the repository, make sure to install the dependencies with following command. 
  npm install

### Executing program

* How to run the program
* Run the program with following command
``` node index

### API Endpoints and their usage

1. Endpoint: localhost:9000/api/books
   Method: POST 
   Description: This API is used to create a book document in mongodb collection. You can create one book at a time.
   You need to send "title", "author" and "summary" in request body in json format. The new book will be created with given details.

2. Endpoint: localhost:9000/api/books
   Method: GET 
   Description: This API retrieves all the books from database and returns a array of books. 

3. Endpoint: localhost:9000/api/books/:id
   Method: GET 
   Description: This API returns a book details with given id in request params. 

4. Endpoint: localhost:9000/api/books/:id
   Method: PUT 
   Description: This API is used to update a book document in mongodb collection. You can update one book at a time.
   You need to send "title", "author" and "summary" which needs to be updated in request body in json format. The book will be updated with given details.

5. Endpoint: localhost:9000/api/books/:id
   Method: DELETE 
   Description: This API is used to delete a book with given id in request params. The book with this id will be deleted from mongodb collection. 

