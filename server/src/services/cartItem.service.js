const { Error } = require("mongoose");
const userService = require("../services/user.service.js");

async function updateCartItem(userId, cartItemId, cartItemdata) {
    try {
        const item = await findCartItemById(cartItemId);

        if (!item) {
            throw new Error("cart item not found : ", cartItemId)
        }

        const user = await userService.findUserById(item.userid);

        if (!user) {
            throw new Error("user not found :", userId)
        }

        if (user._id.toString() === userId.toString) {
            item.quantity = cartItemdata.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.discounted.Price;
            const updatedCartItem = await item.save();
            return updatedCartItem;
        }
        else {
            throw new Error("you can't update this cart item");
        }
    } catch (error) {
        throw new Error("error.message");
    }
}

async function removeCartItem(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);

    if (user._id.toString() === cartItem.userId.toString()) {
        await cartItem.findByIdAndDelete(cartItemId)
    }
    throw new Error("you cant remove another user's item")
}

async function findCartItemById(cartItemId) {
    const cartItem = await functionCartItemById(cartItemId);
    if (cartItem) {
        return cartItem
    }
    else {
        throw new Error("cart item not Found!")
    }
}

module.exports = {
    updateCartItem,
    removeCartItem,
    findCartItemById
}