import React, { useEffect } from 'react';
import spcard1 from '../../assets/spcard1.jpg'
import { useParams } from 'react-router-dom';
import { addDoc, collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

import { doc, getDoc } from "firebase/firestore";
import { useState } from 'react';


    //     {"_id": "1",
    //     "title": "Nike Shoes",
    //     "src": [
    //         "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
    //         "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
    //         "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
    //         "https://www.upsieutoc.com/images/2020/06/27/img4.jpg"
    //       ],
    //     "description": "UI/UX designing, html css tutorials",
    //     "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
    //     "price": 23,
    //     "colors":["red","black","crimson","teal"],
    //     "count": 1
    // }



const Description = () => {
    
    const [item,setItems] = useState({});
    let { productId } = useParams();
    let { categoryId } = useParams();
    const uid = localStorage.getItem("email");
    // alert(typeof productId)
    useEffect(async () => {
        const docRef = doc(db,categoryId,productId);
        const docSnap = await getDoc(docRef);
        
        try {
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
            setItems(docSnap.data());
        } catch (error) {
            console.log(error)
        }
    }, [])
    
  const addToCart = async(e)=>{
    e.preventDefault();
    const quantity = prompt("Please enter the quantity",1);
    console.log(item.name);
    await addDoc(collection(db,'addtocart'),{
      name: item.name,
      category:item.category,
      desc:item.desc,
      about:item.about,
      price:parseInt(item.price),
      size:item.size,
      url:item.url,
      quantity:parseInt(quantity),
      uid:uid,
      ordered:false
    })
    window.location.reload();
  }

    return (
        <div className="describe">
            
             
                    <div className="details" >
                        <div className="big-img">
                            <img src={item.url} alt="" />
                        </div>

                        <div className="box">
                            <div className="row">
                                <h2>{item.name}</h2>
                                <span>Rs.{item.price}</span>
                            </div>


                            <p><b>Product Name:</b>{item.name}</p>
                            <p><b>Type:</b>{item.desc}</p>
                            <p>{item.thickness}</p>
                            <p><b>Size:</b>{item.size}</p>


                            <button className="cart" onClick={addToCart}>Add to cart</button>
                            <span style={{ padding: "30px" }}></span>
                            {/* <button className="cart" >Buy Now</button> */}
                        </div>
                    </div>
                
        </div>

    )
}


export default Description
