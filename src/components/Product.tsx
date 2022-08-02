import React, {useState} from 'react';
import {IProduct} from "../models";

interface  ProductProps {
    product: IProduct
}


const Product = (props : ProductProps) => {
    const [details, setDetails] = useState(false)
    const {title, image, description, price, rating} = props.product

    const btnBg = details ? 'bg-yellow-400' : 'bg-blue-400'
    return (
        <div
            className='border py-2 px-4 rounded flex flex-col items-center mb-2'
            >
            <img
                className="w-1/6"
                alt={title}
                src={image}/>
            <h2>{title}</h2>
            <span className="font-bold">
                {price}$
            </span>
            <button
                onClick={() => setDetails(prev => !prev)}
                className={`py-2 px-4 mt-1 border rounded ${btnBg}`}>
                {details ? 'Hide descr' : 'Show descr'}
            </button>
            {
                details ?

                    <div>
                        <p className="mt-2">{description}</p>
                        <p>Rate: <span style={{fontWeight: 700}}>{rating?.rate}</span></p>
                    </div>


                    :null
            }
        </div>
    )
};

export default Product;