import prisma from "../db/db.config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res) => {
  const { firstName, lastName, email, age, password } = req.body;
  const findUser = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (findUser) {
    return res.json({
      status: 400,
      message: "email already exists,user another email",
    });
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const newUser = await prisma.users.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      password: hash,
    },
  });

  return res.json({ status: 201, message: "new user created", newUser });
};

export const getAllUser = async (req, res, next) => {
  try {
    const users = await prisma.users.findMany();
    handleResponse(res, 200, "user fetched successfully", users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const userById = await prisma.users.findUnique({
      where: {
        id: Number(userId),
      },
    });
    if (!userById) {
      return handleResponse(res, 404, "user not found");
    }
    handleResponse(res, 200, "user fetched successfully", userById);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const userId = req.params.id;
  const { firstName, lastName, email } = req.body;

  try {
    const updatedUser = await prisma.users.update({
      where: {
        id: Number(userId),
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
    });
    if (!updatedUser) {
      return handleResponse(res, 404, "user not found");
    }

    handleResponse(res, 200, "user updated successfully", updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const deletedUser = await prisma.users.delete({
      where: {
        id: Number(userId),
      },
    });
    if (!deleteUser) {
      return handleResponse(res, 404, "user not found");
    }

    handleResponse(res, 200, "user deleted successfully");
  } catch (err) {
    next(err);
  }
};

// login for Users

export const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.users.findFirst({
      where: {
        email: email,
      },
    });
  
    if (!user) {
      return handleResponse.json(
        res,
        401,
        "login email does not exist",
        
      );
    }
  
    const comparePassword = await bcrypt.compare(password, user.password);
  
    if (!comparePassword) {
      return res.json({message:"credentials invalid"}).status(401)
    }

    const payload={
      id:user.id,
      firstName:user.firstName,
      lastName:user.lastName,
      age:user.age,
      password:user.password
    }
const token=jwt.sign(payload,process.env.JWT_SECRET_KEY)


return res.json({message:"login successfully",token}).status(201)

  } catch (err) {
    next(err);
    
  }
};
