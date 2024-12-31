import {
  createUsersService,
  deleteService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "../model/userSchema.js";

const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createUsersService(name, email);
    handleResponse(res, 201, "user created successfully", newUser);
  } catch (err) {
    next(err);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, "user fetched successfully", users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const userById = await getUserByIdService(req.params.id);
    if (!userById) {
      return handleResponse(res, 404, "user not found");
    }
    handleResponse(res, 200, "user fetched successfully", getUserById);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const updatedUser = await updateUserService(req.params.id, name, email);
    if (!updatedUser) {
      return handleResponse(res, 404, "user not found");
    }

    handleResponse(res, 200, "user updated successfully", updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await deleteService(req.params.id);
    if (!deleteUser) {
      return handleResponse(res, 404, "user not found");
    }

    handleResponse(res, 200, "user deleted successfully", deletedUser);
  } catch (err) {
    next(err);
  }
};
