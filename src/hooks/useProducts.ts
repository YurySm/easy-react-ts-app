import {useEffect, useState} from "react";
import {IProduct} from "../models";
import fetchProducts from "../services/fetchProducts";

export const useProducts = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [products, setProducts] = useState<IProduct[]>([])

    const addProduct = (product: IProduct) => {
        setProducts(prev => [...prev, product])
    }


    useEffect(() => {
        setError('')
        fetchProducts()
            .then(res => setProducts(res.data))
            .catch((e) => {
                setLoading(false)
                setError(e.message)
            })
            .finally(() => setLoading(false))
    }, [])

    return  {
        loading,
        error,
        products,
        addProduct
    }
}