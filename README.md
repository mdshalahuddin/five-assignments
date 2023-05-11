# 5th Assignment

**Basic Express.js Assignment**

In this assignment, you will be building a simple web application using Express.js. The application will allow users to view and add books to a collection.

**Requirements**

1. Create a new Express.js application. The application should be named book-collection.
2. Implement a route that serves a static HTML file named index.html when a GET request is made to the root route.
3. Implement a route that returns a JSON array of books when a GET request is made to the **/books** route. The array should initially be empty.
4. Implement a route that allows a user to add a book to the collection when a POST request is made to the **/books** route. The route should accept a JSON object in the request body with the following properties:

- title (required): the title of the book
- author (required): the author of the book
- publishedDate (optional): the publication date of the book, in ISO 8601 format (e.g. "2022-05-07")

5. The route should generate a unique ID for the book and add it to the collection. The response should be a JSON object with the following properties:

- id: the unique ID assigned to the book
- title: the title of the book
- author: the author of the book
- publishedDate: the publication date of the book, in ISO 8601 format (if provided)

6. Implement a route that allows a user to delete a book from the collection when a DELETE request is made to the **/books/:id** route. The route should remove the book with the specified ID from the collection. The response should be a JSON object with the following property:

- message: a message indicating whether the book was successfully deleted or not

**What you should Submit :**

You should submit your GitHub repository link.
