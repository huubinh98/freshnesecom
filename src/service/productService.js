import { API } from "../constant/api";

const productService = {
    getProduct() {
        return fetch(`${API}/product`).then(res => res.json())
    },

    getCategory() {
        return fetch(`${API}/categories`).then(res => res.json())
    }
}

export default productService;