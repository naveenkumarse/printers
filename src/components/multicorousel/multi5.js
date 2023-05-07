import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './carousel.css';
import image1 from "../../assets/carouselImage1.jpg";
import image2 from "../../assets/carouselImage2.jpg";
import image3 from "../../assets/carouselImage3.jpg";
import image4 from "../../assets/carouselImage4.jpg";
import image5 from "../../assets/carouselImage5.jpg";
import image6 from "../../assets/carouselImage6.jpg";

import nflex1 from "../../assets/nflex1.jpg";
import nflex2 from "../../assets/nflex2.jpg";
import nflex3 from "../../assets/nflex3.webp";
import nflex4 from "../../assets/nflex4.jpg";
import nflex5 from "../../assets/nflex5.jpg";
import nflex6 from "../../assets/nflex6.webp";
import sflex1 from "../../assets/sflex1.webp";
import sflex2 from "../../assets/sflex2.webp";
import sflex3 from "../../assets/sflex3.webp";
import sflex4 from "../../assets/sflex4.webp";
import sflex5 from "../../assets/sflex5.webp";
import sflex6 from "../../assets/sflex6.jpg";
import bflex1 from "../../assets/bflex1.jpg";
import bflex2 from "../../assets/bflex2.webp";
import bflex3 from "../../assets/bflex3.jpg";
import bflex4 from "../../assets/bflex4.webp";
import bflex5 from "../../assets/bflex5.jpg";
import bflex6 from "../../assets/bflex6.jpg";
import vflex1 from "../../assets/vflex1.jpg";
import vflex2 from "../../assets/vflex2.jpg";
import vflex3 from "../../assets/vflex3.jpg";
import vflex4 from "../../assets/vflex4.webp";
import vflex5 from "../../assets/vflex5.jpg";
import vlex6 from "../../assets/vlex6.webp";


import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6 (2).png";
import card7 from "../../assets/card7.png";
import card8 from "../../assets/card8.png";

import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import CategoryBar from '../categorybar';
let slidesToShow = 5;
const CategoryBarData = [
    {
        imageSrc: card5,
        category: "Normal Banner-Flex",
        type: null,
        classnum: "bas0"
    },
    {
        imageSrc: card6,
        category: "Star-Flex",
        type: "mobiles",
        classnum: "bas1"
    },
    {
        imageSrc: card7,
        category: "Backligh-Flex",
        type: "electronics",
        classnum: "bas2"
    },
    {
        imageSrc: card8,
        category: "Vinyl-Flex",
        type: "electronics",
        classnum: "bas3"
    },
    
];


export const data = [image1, image2, image3, image4, image5, image6];
export const multiData = [
   nflex1,
   nflex2,
   nflex3,
   nflex4,
   nflex5,
   nflex6,
];
export const multiData1 = [
    sflex1,
    sflex2,
    sflex3,
    sflex4,
    sflex5,
    sflex6,
 ];
 export const multiData2 = [
    bflex1,
    bflex2,
    bflex3,
    bflex4,
    bflex5,
    bflex6,
 ];
 export const multiData3 = [
    vflex1,
    vflex2,
    vflex3,
    vflex4,
    vflex5,
    vlex6,
 ];

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick, currentSlide } = props;
    return (
        <>
            {currentSlide !== 0 && (
                <div className={className} onClick={onClick}>
                    <ArrowBackIos style={{ color: 'blue', fontSize: '30px' }} />
                </div>
            )}
        </>
    );
};
const NextBtn = (props) => {
    const { className, onClick, slideCount, currentSlide } = props;
    console.log(props);
    return (
        <>
            {currentSlide !== slideCount - slidesToShow && (
                <div className={className} onClick={onClick}>
                    <ArrowForwardIos style={{ color: 'blue', fontSize: '30px' }} />
                </div>
            )}
        </>
    );
};

const carouselProperties = {
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
    infinite: false,
    // slidesToScroll={3}
    responsive: [
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                centerMode: false,
            },
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                centerMode: false,
            },
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
                centerMode: false,
                slidesToScroll: 2,
            },
        },
    ],
};

const MultiItemCarousel5 = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    if (width <= 426) {
        slidesToShow = 1;
    } else if (width > 426 && width <= 769) {
        slidesToShow = 3;
    } else if (width > 769 && width <= 1025) {
        slidesToShow = 4;
    } else {
        slidesToShow = 5;
    }

    return (
        <div style={{ margin: '30px' }} className='carousel'>
            <div className="Home">
                <div className="Home-CategoryContainer">
                    <div className="Home-CategoryBar">
                        {CategoryBarData.map((item, index) => (
                            <CategoryBar
                                key={index}
                                Imgsrc={item.imageSrc}
                                CategoryName={item.category}
                                type={item.type}
                                classnum={item.classnum}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div id='bas0' style={{ color: "var(--light-blue)" }}>
                <h1 >Normal Banner-Flex</h1>
                <Slider {...carouselProperties}>
                    {multiData.map((item) => (
                        <Card item={item} />
                    ))}
                </Slider>
            </div>
            <div id='bas1' style={{ color: "var(--light-blue)" }}>
                <h1 >Star-Flex</h1>
                <Slider {...carouselProperties}>
                    {multiData1.map((item) => (
                        <Card item={item} />
                    ))}
                </Slider>
            </div>
            <div id='bas2' style={{ color: "var(--light-blue)" }}>
                <h1 >Backligh-Flex</h1>
                <Slider {...carouselProperties}>
                    {multiData2.map((item) => (
                        <Card item={item} />
                    ))}
                </Slider>
            </div>
            <div id='bas3' style={{ color: "var(--light-blue)" }}>
                <h1 >Vinyl-Flex</h1>
                <Slider {...carouselProperties}>
                    {multiData3.map((item) => (
                        <Card item={item} />
                    ))}
                </Slider>
            </div>

        </div>

    );
};

const Card = ({ item }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                className='multi__image'
                src={item}
                alt=''
                style={{
                    width: '100%',
                    height: '170px',
                    objectFit: 'contain',
                    marginBottom: '10px',
                }}
            />
            <p style={{ fontSize: '14px', padding: '5px 0' }}>TOP TRNDING TVs</p>
            <p style={{ fontSize: '16px', padding: '5px 0', color: 'green' }}>
                From ₹ 7,000
            </p>
            <p style={{ fontSize: '14px', padding: '5px 0', color: 'gray' }}>
                Up To ₹ 5,000 Off on HDFC
            </p>
        </div>
    );
};

export default MultiItemCarousel5;
