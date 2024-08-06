import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, address, phone, password } = req.body; // Destructuring the request body
  const hashedPassword = bcryptjs.hashSync(password, 10); // Hashing the password
  const newUser = new User({ username, email, address, phone, password: hashedPassword }); // Creating a new user
  try {
   await newUser.save(); // Saving the user
   res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
