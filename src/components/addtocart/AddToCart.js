import React, { useEffect, useState } from "react";


import { Checkout } from "../checkout/CheckOut";
import CartCard from "./CartCard";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase";


const MyCart = () => {
    const [mycart, setMyCart] = useState([])
    const [buy, setBuy] = useState(false);
    const uid = localStorage.getItem("email");


    // console.log(subtotal);
    console.log(mycart)
   
    const body = { uid };
    useEffect(async () => {
        const q = query(collection(db, 'addtocart'))
        const unSubscribe = onSnapshot(q, (querySnapshot) => {
            let todoArr = []
            querySnapshot.forEach((doc) => {
                todoArr.push({ ...doc.data(), id: doc.id })
            });
            setMyCart(todoArr);
        })
        return () => unSubscribe();
    }, []);
    const subtotal = mycart.filter(product => product.uid == uid && product.ordered == false).reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    const total = subtotal;



    return (
        <>
            {!buy ? <div
                className="w-full h-full bg-black bg-opacity-50 top-0 overflow-y-auto overflow-x-hidden "
                id="chec-div"
            >
                <div
                    className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
                    id="checkout"
                >
                    <div className="flex md:flex-row flex-col justify-end" id="cart">
                        <div
                            className="lg:w-3/4 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                            id="scroll"
                        >
                            <p className="text-5xl font-black leading-10 text-gray-800 pt-3 mb-20">
                                Your Cart
                            </p>
                            {mycart ? (
                                mycart.filter(product => product.uid == uid && product.ordered == false).map((product) => (
                                    <CartCard key={product._id} product={product} />
                                ))
                            ) : (
                                <div> No Items In Cart </div>
                            )}
                        </div>
                        <div className="xl:w-1/3 md:w-1/3 w-full bg-teal-100	background-color: rgb(204 251 241) h-full">
                            <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                <div>
                                    <p className="text-4xl font-black leading-9 text-gray-800">
                                        Summary
                                    </p>
                                    <div className="flex items-center justify-between pt-16">
                                        <p className="text-base leading-none text-gray-800">
                                            Subtotal
                                        </p>
                                        <p className="text-base leading-none text-gray-800">
                                            ₹{subtotal}
                                        </p>
                                    </div>


                                </div>
                                <div>
                                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                        <p className="text-2xl leading-normal text-gray-800">
                                            Total
                                        </p>
                                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                                            ₹{subtotal}
                                        </p>
                                    </div>

                                    <button className="text-base leading-none w-full py-5 bg-cyan-950 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white" onClick={() => setBuy(!buy)}>
                                        Buy
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <Checkout uid={uid} total={total} mycart={mycart} />}
        </>
    )
}


export default MyCart;