import React, {useContext} from 'react';
import {useProducts} from "../hooks/useProducts";
import {ModalContext} from "../conetxt/ModalContetx";
import {IProduct} from "../models";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Product from "../components/Product";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";

const ProductsPage = () => {
    const {loading, error, products, addProduct} = useProducts();
    const {modal, open, close} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (

        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loading/>}
            {error && <Error error={error}/>}
            {
                products.map(product => {
                    return <Product key={product.id} product={product}/>
                })
            }
            {
                modal && <Modal title="Create new product" onClose={() => close()}>
                    <CreateProduct onCreate={createHandler}/>
                </Modal>
            }

            <button className="fixed bottom-2 right-3 text-4xl px-4 py-2 bg-red-700 rounded-full text-white" onClick={() => open()}>+</button>


        </div>
    );
};

export default ProductsPage;