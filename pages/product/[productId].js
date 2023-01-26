import React from "react";
import { useRouter } from "next/router";

const ProductItem = () =>{
    const {query:{productId}} = useRouter()

    
    return(
        <h1>Bienvenido {productId} </h1>
    )
}


export default ProductItem;