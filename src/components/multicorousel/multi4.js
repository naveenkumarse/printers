import { db } from '../../firebase';
import { query, collection, onSnapshot } from 'firebase/firestore';

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

import multi4car1 from "../../assets/multi4car1.jpeg";
import multi4car2 from "../../assets/multi4car2.jpeg";
import multi4car3 from "../../assets/multi4car3.jpeg";
import multi4car4 from "../../assets/multi4car4.jpeg";
import multi4car5 from "../../assets/multi4car5.jpeg";
import multi4car6 from "../../assets/multi4car6.jpeg";
import multi4car7 from "../../assets/multi4car7.jpeg";
import multi4car8 from "../../assets/multi4car8.jpeg";
import multi4car9 from "../../assets/multi4car9.jpeg";
import multi4car10 from "../../assets/multi4car10.jpeg";
import multi4car11 from "../../assets/multi4car11.jpeg";
import multi4car12 from "../../assets/multi4car12.jpeg";
import multi4car13 from "../../assets/multi4car13.jpeg";
import multi4car14 from "../../assets/multi4car14.jpeg";
import multi4car15 from "../../assets/multi4car15.jpeg";
import multi4car16 from "../../assets/multi4car16.jpeg";
import multi4car17 from "../../assets/multi4car17.jpeg";
import multi4car18 from "../../assets/multi4car18.jpeg";


import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import CategoryBar from '../categorybar';
import Card from './card';
let slidesToShow = 5;
const CategoryBarData = [
    {
        imageSrc: "https://cdn-icons-png.flaticon.com/128/5434/5434394.png",
        category: "Bond Sheet",
        type: null,
        classnum: "bas0"
    },
    {
        imageSrc: "https://cdn-icons-png.flaticon.com/128/9414/9414892.png",
        category: "Letter head-80gsm",
        type: "paper",
        classnum: "bas1"
    },
    {
        imageSrc: "https://cdn-icons-png.flaticon.com/128/2493/2493056.png",
        category: "Letter head-100gsm",
        type: "paper",
        classnum: "bas2"
    },

];


export const data = [image1, image2, image3, image4, image5, image6];
export const multiData = [
    multi4car1,
    multi4car2,
    multi4car3,
    multi4car4,
    multi4car5,
    multi4car18,



];
export const multiData1 = [
    multi4car6,
    multi4car7,
    multi4car8,
    multi4car15,
    multi4car16,
    multi4car17,


];
export const multiData2 = [
    multi4car9,
    multi4car10,
    multi4car11,
    multi4car12,
    multi4car13,
    multi4car14,


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

const MultiItemCarousel4 = () => {
    const [cards, setCards] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        const q = query(collection(db, 'bond sheet'))
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
                <h1 >Bond Sheets</h1>
                <Slider {...carouselProperties}>
                    {
                        cards.filter(product => product.category == "Bond Sheets").map((item) => {
                            return <Card key={item.id} item={item} />
                        })
                    }
                </Slider>
            </div><br /><br />
            <div id='bas1' style={{ color: "var(--light-blue)" }}>
                <h1 >80 gsm</h1>
                <Slider {...carouselProperties}>
                    {
                        cards.filter(product => product.category == "80 gsm").map((item) => {
                            return <Card key={item.id} item={item} />
                        })
                    }
                </Slider>
            </div><br /><br />
            <div id='bas2' style={{ color: "var(--light-blue)" }}>
                <h1 >100 gsm</h1>
                <Slider {...carouselProperties}>
                    {
                        cards.filter(product => product.category == "100 gsm").map((item) => {
                            return <Card key={item.id} item={item} />
                        })
                    }
                </Slider>
            </div>


        </div>

    );
};



export default MultiItemCarousel4;
