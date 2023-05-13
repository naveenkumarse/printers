import React from "react";

import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../firebase";
import { useEffect } from "react";

import { useState } from "react";
import ViewList from "./view_list";

const ViewProducts = () => {
    const category = ["cards", "paper","stickers","covers","bondsheet","flex"]
    const [cards, setCards] = useState([]);
    const [paper, setPaper] = useState([]);
    const [stickers, setSticker] = useState([]);
    const [covers, setCover] = useState([]);
    const [bondsheet, setBondsheet] = useState([]);
    const [flex, setFlex] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'cards'))
        const unSubscribe = onSnapshot(q, (querySnapshot) => {
            let todoArr = []
            querySnapshot.forEach((doc) => {
                todoArr.push({ ...doc.data(), id: doc.id })
            });
            setCards(todoArr);
        })
        return () => unSubscribe();
    }, [])
    useEffect(() => {
        const q = query(collection(db, 'paper'))
        const unSubscribe = onSnapshot(q, (querySnapshot) => {
            let todoArr = []
            querySnapshot.forEach((doc) => {
                todoArr.push({ ...doc.data(), id: doc.id })
            });
            setPaper(todoArr);
        })
        return () => unSubscribe();
    }, [])
    useEffect(() => {
        const q = query(collection(db, 'stickers'))
        const unSubscribe = onSnapshot(q, (querySnapshot) => {
            let todoArr = []
            querySnapshot.forEach((doc) => {
                todoArr.push({ ...doc.data(), id: doc.id })
            });
            setSticker(todoArr);
        })
        return () => unSubscribe();
    }, [])
    useEffect(() => {
        const q = query(collection(db, 'covers'))
        const unSubscribe = onSnapshot(q, (querySnapshot) => {
            let todoArr = []
            querySnapshot.forEach((doc) => {
                todoArr.push({ ...doc.data(), id: doc.id })
            });
            setCover(todoArr);
        })
        return () => unSubscribe();
    }, [])
    useEffect(() => {
        const q = query(collection(db, 'bond sheet'))
        const unSubscribe = onSnapshot(q, (querySnapshot) => {
            let todoArr = []
            querySnapshot.forEach((doc) => {
                todoArr.push({ ...doc.data(), id: doc.id })
            });
            setBondsheet(todoArr);
        })
        return () => unSubscribe();
    }, [])
    useEffect(() => {
        const q = query(collection(db, 'flex'))
        const unSubscribe = onSnapshot(q, (querySnapshot) => {
            let todoArr = []
            querySnapshot.forEach((doc) => {
                todoArr.push({ ...doc.data(), id: doc.id })
            });
            setFlex(todoArr);
        })
        return () => unSubscribe();
    }, [])
    return (
        <>
            <h1>Cards</h1>
            <div class="container ml-24 w-full mt-20">
                <table class="text-left w-full">
                    <thead class="bg-black flex text-white w-full">
                        <tr class="flex w-full mb-4">
                            <th class="p-4 w-1/8">S.No</th>
                            <th class="p-4 w-1/6">Name</th>
                            <th class="p-4 w-1/5">Category</th>
                            <th class="p-4 w-1/6">Desc</th>
                            <th class="p-4 w-1/5">Prize</th>
                            <th class="p-4 w-1/5">Size</th>

                        </tr>
                    </thead>
                    <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{ height: "50vh" }}>
                        {cards.map((card, i) => {
                            return <ViewList key={i} index={i} product={card} pcategory={category[0]} />
                        })}
                    </tbody>
                </table>
            </div>
            <h1>papers</h1>
            <div class="container ml-24 w-full mt-20">
                <table class="text-left w-full">
                    <thead class="bg-black flex text-white w-full">
                        <tr class="flex w-full mb-4">
                            <th class="p-4 w-1/8">S.No</th>
                            <th class="p-4 w-1/6">Name</th>
                            <th class="p-4 w-1/5">Category</th>
                            <th class="p-4 w-1/6">Desc</th>
                            <th class="p-4 w-1/5">Prize</th>
                            <th class="p-4 w-1/5">Size</th>
                        </tr>
                    </thead>
                    <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{ height: "50vh" }}>
                        {paper.map((paper, i) => {
                            return <ViewList key={i} index={i} product={paper} pcategory={category[1]} />
                        })}
                    </tbody>
                </table>
            </div>
            <h1>stickers</h1>
            <div class="container ml-24 w-full mt-20">
                <table class="text-left w-full">
                    <thead class="bg-black flex text-white w-full">
                        <tr class="flex w-full mb-4">
                            <th class="p-4 w-1/8">S.No</th>
                            <th class="p-4 w-1/6">Name</th>
                            <th class="p-4 w-1/5">Category</th>
                            <th class="p-4 w-1/6">Desc</th>
                            <th class="p-4 w-1/5">Prize</th>
                            <th class="p-4 w-1/5">Size</th>
                        </tr>
                    </thead>
                    <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{ height: "50vh" }}>
                        {stickers.map((sticker, i) => {
                            return <ViewList key={i} index={i} product={sticker} pcategory={category[2]} />
                        })}
                    </tbody>
                </table>
            </div>
            <h1>covers</h1>
            <div class="container ml-24 w-full mt-20">
                <table class="text-left w-full">
                    <thead class="bg-black flex text-white w-full">
                        <tr class="flex w-full mb-4">
                            <th class="p-4 w-1/8">S.No</th>
                            <th class="p-4 w-1/6">Name</th>
                            <th class="p-4 w-1/5">Category</th>
                            <th class="p-4 w-1/6">Desc</th>
                            <th class="p-4 w-1/5">Prize</th>
                            <th class="p-4 w-1/5">Size</th>
                        </tr>
                    </thead>
                    <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{ height: "50vh" }}>
                        {covers.map((cover, i) => {
                            return <ViewList key={i} index={i} product={cover} pcategory={category[3]} />
                        })}
                    </tbody>
                </table>
            </div>
            <h1>Bondsheet</h1>
            <div class="container ml-24 w-full mt-20">
                <table class="text-left w-full">
                    <thead class="bg-black flex text-white w-full">
                        <tr class="flex w-full mb-4">
                            <th class="p-4 w-1/8">S.No</th>
                            <th class="p-4 w-1/6">Name</th>
                            <th class="p-4 w-1/5">Category</th>
                            <th class="p-4 w-1/6">Desc</th>
                            <th class="p-4 w-1/5">Prize</th>
                            <th class="p-4 w-1/5">Size</th>
                        </tr>
                    </thead>
                    <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{ height: "50vh" }}>
                        {bondsheet.map((bondsheet, i) => {
                            return <ViewList key={i} index={i} product={bondsheet} pcategory={category[4]} />
                        })}
                    </tbody>
                </table>
            </div>
            <h1>Flex</h1>
            <div class="container ml-24 w-full mt-20">
                <table class="text-left w-full">
                    <thead class="bg-black flex text-white w-full">
                        <tr class="flex w-full mb-4">
                            <th class="p-4 w-1/8">S.No</th>
                            <th class="p-4 w-1/6">Name</th>
                            <th class="p-4 w-1/5">Category</th>
                            <th class="p-4 w-1/6">Desc</th>
                            <th class="p-4 w-1/5">Prize</th>
                            <th class="p-4 w-1/5">Size</th>
                        </tr>
                    </thead>
                    <tbody class="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full" style={{ height: "50vh" }}>
                        {flex.map((flex, i) => {
                            return <ViewList key={i} index={i} product={flex} pcategory={category[5]} />
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ViewProducts;