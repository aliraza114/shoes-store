import React, {createContext, useReducer} from 'react'

import AppReducers from '../state/AppReducers'


let initialState = {
    products: [
        {
            id: 1,
            name: 'Classic Clog',
            desc: 'Classic Clog (Toddler/Little Kid/Big Kid)',
            price: 29.99,
            quantity: 1,
            url: 'https://m.media-amazon.com/images/I/71SwYgEnxEL._AC_SR700,525_.jpg'
        },
        {
            id: 2,
            name: 'LiteRide Pacer',
            desc: 'LiteRide Pacer (Toddler/Little Kid/Big Kid)',
            price: 44.99,
            quantity: 1,
            url: 'https://m.media-amazon.com/images/I/71Y3CgAiI+L._AC_SR700,525_.jpg'
        },
        {
            id: 3,
            name: 'Cap Toe Oxford',
            desc: 'Cole Haan Gramercy Cap Toe Oxford',
            price: 300,
            quantity: 1,
            url: 'https://m.media-amazon.com/images/I/717MAZ+uTGL._AC_SR700,525_.jpg'
        },
        {
            id: 4,
            name: 'McAllister',
            desc: 'Allen Edmonds McAllister',
            price: 184.05,
            quantity: 1,
            url: 'https://m.media-amazon.com/images/I/81Q7roNI2BL._AC_SR700,525_.jpg'
        },
        {
            id: 5,
            name: 'Stitchlite Wing Tip',
            desc: 'Cole Haan Original Grand Stitchlite Wing Tip Oxford',
            price: 126.00,
            quantity: 1,
            url: 'https://m.media-amazon.com/images/I/71duY7VVqlL._AC_SR700,525_.jpg'
        },
        {
            id: 6,
            name: 'Howland Penny',
            desc: 'Cole Haan Howland Penny',
            price: 79.95,
            quantity: 1,
            url: 'https://m.media-amazon.com/images/I/81s-XputRoL._AC_SR700,525_.jpg'
        },
        {
            id: 7,
            name: 'Sneaker',
            desc: 'Cole Haan Cloudfeel Knit Slip-On Sneaker',
            price: 90.00,
            quantity: 1,
            url: 'https://m.media-amazon.com/images/I/71FsZCo+-sL._AC_SR700,525_.jpg'
        },
        {
            id: 8,
            name: 'Ascot',
            desc: 'UGG Ascot',
            price: 119.95,
            quantity: 1,
            url: 'https://m.media-amazon.com/images/I/71lN5PbE7fL._AC_SR700,525_.jpg'
        },
        {
            id: 9,
            name: 'Kebab Peshawari Chappal',
            desc: 'Slipper Mianwali Kaptaan Chappal Chapli ',
            price: 20.10,
            quantity: 1,
            url: 'https://cdn.shopify.com/s/files/1/0016/0074/9623/products/000000002-054-Peshawari-NBK_Soyasauce.jpg?v=1551077305'
        },
        {
            id: 10,
            name: 'Peshawari Chapli',
            desc: 'Captan Orange Swede Leather Peshawari Chapli For Men – Desire Deal',
            price: 45.00,
            quantity: 1,
            url: 'https://www.unze.com.pk/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/g/s/gs6955_1.jpg'
        },
        {
            id: 11,
            name: 'Warm Fur Winter Boots',
            desc: 'Imported Shoes Fashion Warm Fur Winter Men Boots',
            price: 200.95,
            quantity: 1,
            url: 'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/1726/5712/DEKABR-2017-Hot-Men-Shoes-Fashion-Warm-Fur-Winter-Men-Boots-Autumn-Leather-Footwear-For-Man__42948.1514025919.jpg?c=2?imbypass=on'
        }
    ],
    cart: [
        {
            id: 10,
            name: 's',
            desc: 'Captan Orange Swede Leather Peshawari Chapli For Men – Desire Deal',
            price: 4500,
            quantity: 1,
            url: 'https://www.church-footwear.com/content/dam/churchs_products/E/EEG/EEG018/9ACEF0ABK/EEG018_9ACE_F0ABK_F_000000_SLS.png'
        },
        {
            id: 11,
            name: 'Warm Fur Winter Boots',
            desc: 'Imported Shoes Fashion Warm Fur Winter Men Boots',
            price: 500,
            quantity: 0,
            url: 'https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/1726/5712/DEKABR-2017-Hot-Men-Shoes-Fashion-Warm-Fur-Winter-Men-Boots-Autumn-Leather-Footwear-For-Man__42948.1514025919.jpg?c=2?imbypass=on'
        }
    ],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducers, initialState);

    function addProd(product){
        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        });
    }

    function addToCardFunction(product){
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: product
        });
    }

    function addProductQuantity(productId){
        dispatch({
            type: 'ADD_PRODUCT_QUANTITY',
            payload: productId
        })
    }

    function removeProductQuantity(productId){
        dispatch({
            type: 'REMOVE_PRODUCT_QUANTITY',
            payload: productId
        })
    }

    return (<GlobalContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                addProd,
                addToCardFunction,
                addProductQuantity,
                removeProductQuantity,
            }}>
            {children}
        </GlobalContext.Provider>)
}
