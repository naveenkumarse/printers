import React, { useEffect, useState } from "react";
import TableList from "./table_list";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../firebase";
const OrderTable = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'orders'))
        const unSubscribe = onSnapshot(q, (querySnapshot) => {
            let todoArr = []
            querySnapshot.forEach((doc) => {
                todoArr.push({ ...doc.data(), id: doc.id })
            });
            setOrders(todoArr);
        })
        return () => unSubscribe();
    }, [])
    return (
        <div class="container ml-24 w-full mt-20">
            <table class="text-left w-full">
                <thead class="bg-black flex text-white w-full">
                    <tr class="flex w-full mb-4">
                        <th class="p-4 w-1/4">S.No</th>
                        <th class="p-4 w-1/4">Name</th>
                        <th class="p-4 w-1/4">Products</th>
                        <th class="p-4 w-1/4">Date</th>
                        <th class="p-4 w-1/4">Address</th>
                        <th class="p-4 w-1/4">Amount</th>
                        <th class="p-4 w-1/4">phone</th>
                    </tr>
                </thead>
                <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{ height: "50vh" }}>
                    {orders.map((order, i) => {
                        return <TableList key={i} index={i} order={order} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default OrderTable;