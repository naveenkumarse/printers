import React from 'react';
import spcard1 from '../../assets/spcard1.jpg'



const items = [
    {
        "_id": "1",
        "title": "Special Valentine Card",
        src: spcard1,
        "description": "Specially made for Couples!",
        "content": "About this item: Package Contents- 1 Love Card",
        "content2": "  Size of the card : H-5.5 Inch & L-4 Inch",
        "content3": "Perfect Gift: Love card is an ideal gift for husband, wife, boyfriend, girlfriend, Fiancé, or someone special.",
        "price": 23,
        "colors": ["red", "black", "crimson", "teal"],
        "count": 1
    },
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

];

const Description = () => {
    return (
        <div className="describe">
            {
                items.map((item, i) => (
                    <div className="details" key={i}>
                        <div className="big-img">
                            <img src={item.src} alt="" />
                        </div>

                        <div className="box">
                            <div className="row">
                                <h2>{item.title}</h2>
                                <span>Rs.{item.price}</span>
                            </div>


                            <p>{item.description}</p>
                            <p>{item.content}</p>
                            <p>{item.content2}</p>
                            <p>{item.content3}</p>


                            <button className="cart">Add to cart</button>
                            <span style={{ padding: "30px" }}></span>
                            <button className="cart" >Buy Now</button>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}


export default Description
