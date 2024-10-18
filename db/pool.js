const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

pool.connect((err) => {
  console.log(process.env.DATABASE_PUBLIC_URL);
  console.log(process.env.DATABASE_URL);
  if (err) {
    console.error("Failed to connect to PostgreSQL:", err);
  } else {
    console.log("Successfully connected to PostgreSQL");
  }
});

module.exports = pool;
