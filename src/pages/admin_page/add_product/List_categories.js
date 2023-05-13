import React from "react";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import category1 from "../../../assets/category1.png";
import category2 from "../../../assets/category2.png";
import category3 from "../../../assets/category3.png";
import category4 from "../../../assets/category4.png";
import category5 from "../../../assets/category5.png";
import category6 from "../../../assets/category6.png";
import Categorypage from "../../../pages/category_page";


function ListCategories({work,val}) {
    const categories = [
        {
            image: category1,
            name: 'category1',
            path: './addcard',
            title: "Cards",
            description: "Grab your Cards",
        },
        {
            image: category2,
            name: 'category2',
            path: './addpaper',
            title: "Paper",
            description: "Write Print Play",
        },
        {
            image: category3,
            name: 'category3',
            path: './addsticker',
            title: "Sticker",
            description: "Beautiful Anime",
        },
        {
            image: category4,
            name: 'category4',
            path: './addcover',
            title: "Cover",
            description: "Protect with this",
        },
        {
            image: category5,
            name: 'category5',
            path: './addbondsheet',
            title: "Bond Sheet",
            description: "Stay Formal",
        },
        {
            image: category6,
            name: 'category6',
            path: './addflex',
            title: "Flex",
            description: "Make Publicity",
        },
    ];
    const viewcategories = [
        {
            image: category1,
            name: 'category1',
            path: './viewcard',
            title: "Cards",
            description: "Grab your Cards",
        },
        {
            image: category2,
            name: 'category2',
            path: './viewpaper',
            title: "Paper",
            description: "Write Print Play",
        },
        {
            image: category3,
            name: 'category3',
            path: './viewsticker',
            title: "Sticker",
            description: "Beautiful Anime",
        },
        {
            image: category4,
            name: 'category4',
            path: './viewcover',
            title: "Cover",
            description: "Protect with this",
        },
        {
            image: category5,
            name: 'category5',
            path: './viewbondsheet',
            title: "Bond Sheet",
            description: "Stay Formal",
        },
        {
            image: category6,
            name: 'category6',
            path: './viewflex',
            title: "Flex",
            description: "Make Publicity",
        },
    ];
    const myroute = categories.map(({path},index)=>{
<Routes>
        <Route key={index} path={path} element={<Categorypage/>}/>
</Routes>
    })
    const links = categories.map(({ image,name,title,description, path },index) => (
        <Link style={{ textDecoration:"none"}} key={name} to={path}>
           <div className="category" key={index}>
                <img src={image} alt="Category" className="cimg" />
                <h4 >{title}</h4>
                <p>{description}</p>
              </div>
        </Link>
      ));
      const view = viewcategories.map(({ image,name,title,description, path },index) => (
        <Link style={{ textDecoration:"none"}} key={name} to={path}>
           <div className="category" key={index}>
                <img src={image} alt="Category" className="cimg" />
                <h4 >{title}</h4>
                <p>{description}</p>
              </div>
        </Link>
      ));
    return (    
        <div className="categories-container mx-3 py-3">
            <div className="container">
                <div className="title-container">
                    <h2>{work}</h2>
                </div>
                <div style={{textDecoration:"none"} } className="categories">             
              {val==1?links:view}       
                </div>
                {/* <button>Show All</button> */}
            </div>
        </div>
    );
}

export default ListCategories;