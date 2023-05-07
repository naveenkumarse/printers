import React, { useEffect, useState } from "react";
// import '../scss/_categorycarousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import CategoryBanner from "./categorybanner";



const Next = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <MdArrowForwardIos
                style={{ color: "black", fontSize: 25, fontWeight: 900 }}
            />
        </div>
    );
};
const Prev = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <MdOutlineArrowBackIosNew
                style={{ color: "black", fontSize: 25, fontWeight: 900 }}
            />
        </div>
    );
};

const CategoryCarousel = ({ BgImg, Title, BestOf }) => {
    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;
    const Settings = {
        dots: false,
        speed: 500,
        slidesToShow: isMobile ? 2 : 4,
        // slidesToScroll:4,
        infinite: false,
    };

    return (
        <div className="CategoryCarousel">
            <div
                className="CategoryCarousel-left"
                style={{ background: `url(${BgImg}) no-repeat 50% 50%` }}>
                <p className="CategoryCarousel-title">{Title}</p>
                <button className="CategoryCarousel-btn">View All</button>
            </div>
            <div className="CategoryCarousel-right">
                <Slider nextArrow={<Next />} prevArrow={<Prev />} {...Settings}>
                    {BestOf?.length > 0 && BestOf.map((item, index) => (
                        <Link key={index} to={"id"}>
                            <CategoryBanner
                                ImgSrc={item.ImgSrc}
                                Title={item.CategoryName}
                                Brand={item.Brand}
                            />
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CategoryCarousel;
