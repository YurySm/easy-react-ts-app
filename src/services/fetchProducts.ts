import axios from "axios";
import {IProduct} from "../models";

const FetchProducts = async () => {
    return await axios.get<IProduct[]>('https://fakestoreapi.com/products');
};

export default FetchProducts;