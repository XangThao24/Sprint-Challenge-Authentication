<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
- Middleware is a function which has access to request response and next.  Depending on your function, you might go to the next middleware or not.
- Sessions is when you register or login and the server gives you back a cookie saying you are you.  There for you don't have to log back in everytime and have access to certain api's depending on the application.
- All bcrypt is, is that it hashes your password so that if a hacker does find a way to get to your database and see your password it will be hash and a lot hard to get the real text password.
- JWT is from what I understand is similar to session but you get a token to show you who you are. 

2.  What does bcrypt do in order to prevent attacks?
- Bcrypt hashes your password.

3.  What are the three parts of the JSON Web Token?
- The first part is the header which is the hashing algorithum.
- The second part is the payload which is the claims.
- The third part is the signature which is the secret key.