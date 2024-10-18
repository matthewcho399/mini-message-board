const { Client } = require("pg");
require("dotenv").config();
const { argv } = require("node:process");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR (50),
    name VARCHAR (20),
    added TIMESTAMP
);

INSERT INTO messages (text, name, added)
VALUES
    ('Hello there!', 'Armando', NOW()),
    ('Hi World!', 'Charles', NOW()),
    ('Whats up with it?', 'Matthew', NOW()),
    ('Lebron is cool', 'Anthony', NOW());
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2],
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
