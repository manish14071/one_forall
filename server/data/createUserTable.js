import pool from "../db/connect.js";

const createUserTable = () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
)
    `;
  try {
    pool.query(queryText);
    console.log("User table created");
  } catch (error) {
    console.log("error in creating user table");
  }
};

export default createUserTable;
