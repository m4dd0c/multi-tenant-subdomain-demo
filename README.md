# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`
3. Open the app in your browser:
   `http://localhost:3000`
4. Open the user's portfolio:
   `https://john.localhost:3000`

> [!Note]
> We have prevented direct access to the portfolio routing folder from the main domain.
> If a user types localhost:3000/portfolio/john, force a 404 Not Found.i
