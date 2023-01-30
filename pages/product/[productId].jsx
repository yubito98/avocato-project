import React, { useState, useEffect, use }from "react";
import { useRouter } from "next/router";


const ProductItem = () =>{

    const [avo, setAvo] = useState();
    const {query:{productId}} = useRouter()

    useEffect(()=>{
        window.fetch(`/api/avo/${productId}`)
        .then((response) => response.json())
        .then((data)=> setAvo(data))
    },[productId])

    
    return(
        <h1>Bienvenido "{avo?.name}"</h1>
    )
}


export default ProductItem;