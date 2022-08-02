import React, {useState} from 'react';
import {IProduct} from "../models";
import axios from "axios";
import Error from "./Error";


const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 23,
        count: 3
    }
}
interface CreateProductProps{
    onCreate: (product: IProduct) => void
}

const CreateProduct = ({onCreate}: CreateProductProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHendler = async (event : React.FormEvent) => {
        event.preventDefault();
        setError('')

        if(value.trim().length === 0) {
            setError('Please enter valid title')
            return;
        }

        productData.title = value

        const res = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(res.data)
    }

    const changeHandler = (event : React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <form onSubmit={(event) => submitHendler(event)}>
            <input
                value={value}
                onChange={changeHandler}
                placeholder="enter product title"
                type="text"
                className="border px-4 py-2 mt-2 w-full"/>

            {error && <Error error={error}/>}

            <button type="submit" className="border px-4 py-2 bg-yellow-400 mt-2">
                Create
            </button>
        </form>
    );
};

export default CreateProduct;