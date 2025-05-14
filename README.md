# Mini Message Board!

A minimal mini message board written in EJS for the frontend, Node.js / Express and Postgres (hosted on Supabase) for the backend.
Live preview deployed and hosted on Render.

Live preview @ https://mini-message-board-tdoj.onrender.com/

Leave a message! P.S Please be nice :)

## Homepage

![demo-homepage](public/assets/demo.png)

## Submit new message!

![submit-msg-form](public/assets/submit_msg_form.png)

# To run this on your machine

1. Fork or clone a local copy on your machine.
2. Open up the repo in your favorite IDE.
3. Run `npm install` in your terminal.
4. Choose hosting of your liking (e.g Supabase, Render) that supports PostgreSQL, create an account and subsequently create a database.
5. Replace the `connectionString` property in `db/pool.js` with your own connection string from your chosen hosting service.
6. Seed the database by running `node db/populatedb.js` in your terminal and verify that the columns are populated on your hosting service.
7. Run `node app.js` in your terminal to start the app.
8. Navigate to `localhost:3000` (or set it to whatever port you like in `app.js`) in your favorite broswer to see the app in action!
