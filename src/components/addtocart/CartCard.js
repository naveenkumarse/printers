import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";


const CartCard = (props) => {
    const navigate = useNavigate()
    const {product} = props;
    
    const [val,setVal] = useState()
    const { url, name, desc, price, pid, id, quantity } = product;
    console.log(id);
    const remove = async(id)=>{
            await deleteDoc(doc(db,'addtocart',id));
    }
    // useEffect(()=>{remove()},[])
    return (
        <>
            <div key={id} className="md:flex items-center py-8 border-t border-gray-200">
                <div className="w-1/4">
                    <img
                        src={`${url}`}
                        alt="product img"
                        className="w-full h-full object-center object-cover"
                    />
                </div>
                <div className="md:pl-3 md:w-3/4 h-48 flex flex-col  justify-between ">
                    <div className="flex w-full pt-1">
                        <p className="text-sm leading-3 text-gray-800 md:pt-0 pt-4">
                            {pid}
                        </p>
                    </div>
                    <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">
                            {name}
                        </p>
                        <p className="text-base font-black leading-none text-gray-800">
                            {quantity}
                        </p>

                    </div>

                    <p className=" text-xl text-gray-600">
                        {desc}
                    </p>
                    <div className="flex items-center justify-end pt-5 pr-6">
                        <p className="text-base font-black leading-none text-gray-800">
                            ₹{price}
                        </p>
                       
                    </div>
                    <div className="flex items-center justify-end pt-5 pr-3">
                            <button className=" bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={()=>remove(id)}>
                                Remove
                            </button>
                        </div>
                </div>

            </div>
        </>
    )
}

export default CartCard;