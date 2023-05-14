import React from "react";
const TableList = ({order,index}) => {
    return (
        <tr class="flex w-full mb-4">
            <td class="p-4 w-1/4">{index}</td>
            <td class="p-4 w-1/4">{order.name}</td>
            <td class="p-4 w-1/4">{order.products}</td>
            <td class="p-4 w-1/4">{order.date}</td>
            <td class="p-4 w-1/4">{order.address}</td>
            <td class="p-4 w-1/4">{order.amount}</td>
            <td class="p-4 w-1/4">{order.phone}</td>
        </tr>
    )
}

export default TableList;