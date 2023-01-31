import React, { useEffect, useState } from "react";

const Home = () => {

    const [productList, setProductList] = useState([])

    useEffect(()=>{
        window.fetch('/api/avo')
        .then((response) => response.json())
        .then(({data})=>{
            setProductList(data)
        })
    }, [])


    return(
        <div>
            <h1>
                Hola Mundo
            </h1>
            {productList.map(item=>(
                <p>
                    <a href={`/product/${item.id}`}>
                        {item.name}
                    </a>
                </p>
            ))}
        </div>
    )
}

export default Home;