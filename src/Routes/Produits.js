import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
 function Produits() {
    let {page} = useParams();
    let [produits, Setproduits] = useState([]) ;
    let navigate = useNavigate();
    const location = useLocation();
    let [pagenumber, setpagenumber] = useState(location.search.substring(6)) ;
    useEffect( () => axios.get("http://localhost:5000/api/products?page="+ location.search.substring(6) ).then(data => {Setproduits(data); console.log(data.data); }) , []);
    console.log(location.search.substring(6));
    const handlepagination = (e) => {setpagenumber(e.target.value) ; navigate("/products?page="+e.target.value)};
    
    return (
        <div>

    "Pagination"
    <select onChange={(e)=> handlepagination(e) }>
 <option value="0" >0</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
            {produits.data?.map( (produit, index) => { return <><div key={index} ><br/>
           {"ProductName: " + produit.productName } <br/>
            {"Category: " + produit.category }<br/>
               {"Price: " + produit.price }<br/>
            <a href={"/products/"+produit._id}> <img height={120} width={120}  src = {produit.imageUrl}/> </a><br/>

            {"review avg: "+ produit.reviews?.reduce( (previousvalue, currentvalue) =>  previousvalue+parseInt(currentvalue.value))}
            
          
                </div> <br></br><br></br></>  } )}
              

        </div>
    )
}
export default Produits ;