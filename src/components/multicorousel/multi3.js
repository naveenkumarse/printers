import {db} from '../../firebase';
import {query,collection, onSnapshot} from 'firebase/firestore';
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

import multi3car1 from "../../assets/multi3car1.jpeg";
import multi3car2 from "../../assets/multi3car2.jpeg";
import multi3car3 from "../../assets/multi3car3.jpeg";
import multi3car4 from "../../assets/multi3car4.jpeg";
import multi3car5 from "../../assets/multi3car5.jpeg";
import multi3car6 from "../../assets/multi3car6.jpeg";

import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import CategoryBar from '../categorybar';
import Card from './card';
let slidesToShow = 5;
const CategoryBarData = [
    {
        imageSrc: "https://cdn-icons-png.flaticon.com/128/4371/4371234.png",
        category: "Office Covers",
        type: null,
        classnum: "bas0"
    },
    {
        imageSrc: "https://cdn-icons-png.flaticon.com/128/5279/5279770.png",
        category: "Mobiles & Tablets",
        type: "mobiles",
        classnum: "bas1"
    },
   
];


export const data = [image1, image2, image3, image4, image5, image6];
export const multiData1 = [
    multi3car1,
    multi3car2,
    multi3car3,
    multi3car4,
    multi3car5,
    multi3car6,

    
    
];
export const multiData2 = [
   
    
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

const MultiItemCarousel3 = () => {
    const [cards,setCards] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };
    useEffect(()=>{
        const q = query(collection(db,'covers'))
        const unSubscribe = onSnapshot(q,(querySnapshot)=>{
          let todoArr = []
          querySnapshot.forEach((doc)=>{
            todoArr.push({...doc.data(),id:doc.id})
          });
          setCards(todoArr);
        })
        return ()=> unSubscribe(); 
    },[])
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
           
            <div id='bas1' style={{ color: "var(--light-blue)" }}>
                <h1 >Office Covers</h1>
                <Slider {...carouselProperties}>
                {
          cards.filter(product => product.category == "Office Covers").map((item) => {
            return <Card key={item.id} item={item} />
          })
        }
                </Slider>
            </div>
            <div id='bas2' style={{ color: "var(--light-blue)" }}>
                <h1 >covers</h1>
                <Slider {...carouselProperties}>
                {
          cards.filter(product => product.category == "covers").map((item) => {
            return <Card key={item.id} item={item} />
          })
        }
                </Slider>
            </div>
           
        </div>

    );
};


export default MultiItemCarousel3;
