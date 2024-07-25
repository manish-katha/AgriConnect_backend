// import { Task } from "../models/task.js";
// import { connectDB } from "../data/database.js";

// export const newTask = async (req, res, next) => {
//   try {
//     const {
//       sender_name,
//       sender_email,
//       sender_phone,
//       receiver_name,
//       receiver_email,
//       receiver_phone,
//     } = req.body;

//     // Ensure the 'tasks' table exists
//     await Task();

//     // Establish database connection
//     const connection = await connectDB();

//     // Insert Entry
//     const createUserQuery = `
//       INSERT INTO tasks (sender_name, sender_email, sender_phone, receiver_name, receiver_email, receiver_phone)
//       VALUES (?, ?, ?, ?, ?, ?)
//     `;

//     await connection.query(createUserQuery, [
//       sender_name,
//       sender_email,
//       sender_phone,
//       receiver_name,
//       receiver_email,
//       receiver_phone,
//     ]);

//     // Respond with success message
//     res
//       .status(201)
//       .json({ success: true, message: "Task created successfully" });

//     // Release the connection
//     connection.release();
//   } catch (error) {
//     next(error); // Pass error to error handling middleware
//   }
// };
