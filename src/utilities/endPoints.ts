import { USERID } from "./config";

export const endPoints = {
    login: "auth/login",
    register: "users",
    products: "products?",
    productWithCatgory: "products/category/",
    carts: "carts?",
    catgoryAll: "products/categories",
    addCart: "carts",
    cartWithUser: `carts/user/${USERID}`,
}