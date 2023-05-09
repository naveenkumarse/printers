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

import multi2car1 from "../../assets/multi2car1.jpeg";
import multi2car2 from "../../assets/multi2car2.jpeg";
import multi2car3 from "../../assets/multi2car3.jpeg";
import multi2car4 from "../../assets/multi2car4.jpeg";
import multi2car5 from "../../assets/multi2car5.jpeg";
import multi2car6 from "../../assets/multi2car6.jpeg";
import multi2car7 from "../../assets/multi2car7.jpeg";
import multi2car8 from "../../assets/multi2car8.jpeg";
import multi2car9 from "../../assets/multi2car9.jpeg";
import multi2car10 from "../../assets/multi2car10.jpeg";
import multi2car11 from "../../assets/multi2car11.jpeg";
import multi2car12 from "../../assets/multi2car12.jpeg";
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import CategoryBar from '../categorybar';
import Card from './card';
let slidesToShow = 5;
const CategoryBarData = [
    {
        imageSrc: "https://cdn-icons-png.flaticon.com/128/8024/8024587.png",
        category: "Mirror coat stickers",
        type: null,
        classnum: "bas0"
    },
    {
        imageSrc: "https://cdn-icons-png.flaticon.com/128/3261/3261182.png",
        category: "Chrome Art stickers",
        type: "mobiles",
        classnum: "bas1"
    },
    
];


export const data = [image1, image2, image3, image4, image5, image6];
export const multiData1 = [
    multi2car1,
    multi2car2,
    multi2car3,
    multi2car4,
    multi2car5,
    multi2car6,
    
];
export const multiData2 = [
    multi2car7,
    multi2car8,
    multi2car9,
    multi2car10,
    multi2car11,
    multi2car12,
   
    
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

const MultiItemCarousel2 = () => {
    const [cards,setCards] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };
    useEffect(()=>{
        const q = query(collection(db,'stickers'))
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
            <div id='bas0' style={{ color: "var(--light-blue)" }}>
                <h1 >Mirror Coat Stickers</h1>
                <Slider {...carouselProperties}>
                {
          cards.filter(product => product.category == "MirrorCoatStickers").map((item) => {
            return <Card key={item.id} item={item} />
          })
        }
                </Slider>
            </div><br /><br/>
            <div id='bas1' style={{ color: "var(--light-blue)" }}>
                <h1 >Chrome Art Stickers</h1>
                <Slider {...carouselProperties}>
                {
          cards.filter(product => product.category == "ChromeArtStickers").map((item) => {
            return <Card key={item.id} item={item} />
          })
        }
                </Slider>
            </div>
            
        </div>

    );
};



export default MultiItemCarousel2;
