import pool from "../db/db.config.js";

export const getAllUsersService = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const getUserByIdService = async (id) => {
  const result = await pool.query("SELECT  * FROM users where id= $1", [id]);
  return result.rows[0];
};

export const createUsersService = async (
  firstName,
  lastName,
  email,
  dob,
  password
) => {
  const result = await pool.query(
    "INSERT INTO users (firstName,lastName,email,dob,password) VALUES ($1, $2, $3, $4, $5 ) RETURNING *",
    [firstName, lastName, email, dob, password]
  );
  return result.rows[0];
};

export const updateUserService = async (id, firstName, lastName, email) => {
  const result = await pool.query(
    "UPDATE users SET firstName =$1,lastName=$2,email=$3 WHERE id=$4 RETURNING *",
    [firstName, lastName, email, id]
  );
  return result.rows[0];
};

export const deleteService = async (id) => {
  const result = await pool.query(
    "DELETE FROM users WHERE id= $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
