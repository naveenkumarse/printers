import React from "react";
import { useState } from "react";
import { db } from "../../../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";


const ViewList = ({ product, index, pcategory }) => {
    const [name, setName] = useState(product.name);
    const [category, setCategory] = useState(product.category);
    const [desc, setDesc] = useState(product.desc);
    const [price, setPrice] = useState(product.price);
    const [size, setSize] = useState(product.size);
    const onUpdate = async (id) => {
        await updateDoc(doc(db, pcategory, id), {
            name: name,
            category: category,
            desc: desc,
            price: price,
            size: size
        })
    }
    const onDelete = async (id) => {
        await deleteDoc(doc(db, pcategory, id));
    }
    return (
        <tr class="flex w-full mb-4">
            <td class="p-4 w-1/4"> {index}</td>
            <td class="p-4 w-1/4"><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></td>
            <td class="p-4 w-1/4"><input type="text" value={category} onChange={(e) => setCategory(e.target.value)} /></td>
            <td class="p-4 w-1/4"><input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} /></td>
            <td class="p-4 w-1/4"><input type="text" value={price} onChange={(e) => setPrice(e.target.value)} /></td>
            <td class="p-4 w-1/4"><input type="text" value={size} onChange={(e) => setSize(e.target.value)} /></td>
            <td class="p-4 w-1/4"><button style={{color:"Green"}} onClick={() => onUpdate(product.id)}>Update</button></td>
            <td class="p-4 w-1/4"><button style={{color:"red"}}onClick={() => onDelete(product.id)}>Delete</button></td>
        </tr>
    )
}

export default ViewList;