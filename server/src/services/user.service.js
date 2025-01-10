const User = require("../models/user.model");
const bcrpyt = require("bcrput");
const jwtProvider = require("../config/jwtProvider.js");

const createUser = async (userData) => {
    try {
        let { firstName, lastName, email, password } = userData;

        const isUserExist = await User.findOne({ email });

        if (isUserExist) {
            throw new Error("user already exist with email :", email)
        }

        password = await bcrpyt.hash(password, 8);

        const user = await User.create({ firstName, lastName, email, password });

        console.log("created user", user)
        return user;
    } catch (error) {

        throw new Error(error.message)

    }
};

const findUserById = async (userId) => {
    try {

        constuser = await User.findById(userId).populate("address");

        if (!user) {
            throw new Error("user not foundwith id :", userId)
        }
        return user;


    } catch (error) {
        throw new Error(error.message)
    }
};

const getUserByEmail = async (email) => {
    try {

        const user = await User.findOne(email);

        if (!user) {
            throw new Error("user not found with email:", email)
        }
        return user;


    } catch (error) {
        throw new Error(error.message)
    }
};

const getUserProfileByToken = async (token) => {
    try {
        const userId = jwtProvider.getUserIdFromToken(token);

        const user = await findUserById(userId)

        if (!user) {
            throw new Error("user not found with id:", userId)
        }


    } catch (error) {

        throw new Error(error.message);
    }
};

const getAllUser = async () => {
    try {
        const user = await User.find();
        return user;
    } catch {
        throw new Error(error.message);
    }
};

module.exports = { createUser, getUserByEmail, findUserById, getUserProfileByToken, getAllUser };