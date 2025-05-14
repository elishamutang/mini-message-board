import pool from "./pool.js";

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR (255),
        message VARCHAR (255),
        created_at TIMESTAMPTZ
    );

    INSERT INTO messages (username, message, created_at)
    VALUES
    ('John Cena', 'You can''t see me!', CURRENT_TIMESTAMP),
    ('Catdog', 'Meow Woof', CURRENT_TIMESTAMP);

`;

async function main() {
  console.log("seeding");

  const client = await pool.connect();
  await client.query(SQL);
  client.release();

  console.log("done");
}

main();
