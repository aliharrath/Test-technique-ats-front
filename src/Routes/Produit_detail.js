import React, {useEffect, useState} from 'react';
import axios from 'axios' ;
import {useParams} from 'react-router-dom' ;
export default function SingleProducts() {
    let { id } = useParams();
    console.log(id);
    let [produitdetail, setproduitdetail] = useState({}) ;
    useEffect( () => axios.get("http://localhost:5000/api/products/" + id).then(data => {setproduitdetail(data.data); console.log(data.data); }) , []);
    return (
        <div>
           {"ProductName: " + produitdetail.productName }<br/>
        {"description: " + produitdetail.description }<br/>
            <a href={"/products/"+produitdetail._id}> <img height={120} width={120}  src = {produitdetail.imageUrl}/> </a><br/>     
            {"Price: " + produitdetail.price }<br/>
            {produitdetail.reviews?.map( (review, index) => { return <div key={index} > {"Review Value: \n"+review.value } <br/> {"Review content: "+review.content} </div>})}
        </div>
    )
}