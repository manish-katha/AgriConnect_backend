// import { connectDB } from "../data/database.js";

// export const Task = async () => {
//   try {
//     const connection = await connectDB(); // Establish database connection

//     const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS tasks (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       sender_name VARCHAR(255) NOT NULL,
//       sender_email VARCHAR(255) NOT NULL,
//       sender_phone VARCHAR(20) NOT NULL,
//       receiver_name VARCHAR(255) NOT NULL,
//       receiver_email VARCHAR(255) NOT NULL,
//       receiver_phone VARCHAR(20) NOT NULL
//     )
//   `;

//     await connection.query(createTableQuery); // Execute query
//     console.log("Refer table created or already exists");

//     connection.release(); // Release the connection
//   } catch (error) {
//     console.error("Error creating tables:", error);
//     throw error;
//   }
// };
