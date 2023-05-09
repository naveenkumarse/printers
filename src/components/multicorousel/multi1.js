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

import multi5car1 from "../../assets/1.100g.jpg";
import multi5car2 from "../../assets/2.100.jpg";
import multi5car3 from "../../assets/3.100.jpg";
import multi5car4 from "../../assets/4.100.jpg";
import multi5car5 from "../../assets/5.100.jpg";

import multi5car7 from "../../assets/1.130.jpg";
import multi5car8 from "../../assets/2.130.jpg";
import multi5car9 from "../../assets/3.130.jpg";
import multi5car10 from "../../assets/4.130.jpg";
import multi5car11 from "../../assets/5.130.jpg";
import multi5car13 from "../../assets/1.170.jpg";
import multi5car14 from "../../assets/2.170.jpg";
import multi5car15 from "../../assets/3.170.jpg";
import multi5car16 from "../../assets/4.170.jpg";
import multi5car17 from "../../assets/5.170.jpg";
import multi5car18 from "../../assets/6.170.jpg";

import multi5car19 from "../../assets/1.300.jpg";
import multi5car20 from "../../assets/2.300.jpg";
import multi5car21 from "../../assets/3.300.jpg";
import multi5car22 from "../../assets/4.300.jpg";
import multi5car23 from "../../assets/5.300.jpg";
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import CategoryBar from '../categorybar';
import Card from './card';
let slidesToShow = 5;
const CategoryBarData = [
    {
        imageSrc: "https://cdn-icons-png.flaticon.com/128/737/737804.png",
        category: "100 gsm paper",
        type: null,
        classnum: "bas0"
    },
    {
        imageSrc: "https://cdn-icons-png.flaticon.com/128/1482/1482599.png",
        category: "130 gsm paper",
        type: "mobiles",
        classnum: "bas1"
    },
    {
        imageSrc: "https://cdn-icons-png.flaticon.com/128/3725/3725453.png",
        category: "170 gsm paper",
        type: "electronics",
        classnum: "bas2"
    },
    {
        imageSrc: "https://cdn-icons-png.flaticon.com/128/1639/1639169.png",
        category: "300 gsm paper",
        type: "electronics",
        classnum: "bas3"
    },
    
];


export const data = [image1, image2, image3, image4, image5, image6];
export const multiData = [
    multi5car1,
    multi5car2,
    multi5car3,
    multi5car4,
    multi5car5,
    // multi5car6,
    
];
export const multiData1= [
    multi5car7,
    multi5car8,
    multi5car9,
    multi5car11,
    multi5car10,
    // multi5car12,
    
];
export const multiData2 = [
    multi5car13,
    multi5car14,
    multi5car15,
    multi5car16,
    multi5car17,
    multi5car18,
    
];
export const multiData3 = [
    multi5car19,
    multi5car20,
    multi5car21,
    multi5car22,
    multi5car23,
    
    
    
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

const MultiItemCarousel1 = () => {
    const [cards,setCards] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };
    useEffect(()=>{
        const q = query(collection(db,'paper'))
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
                <h1 >100 gsm</h1>
                <Slider  {...carouselProperties}>
                    {
          cards.filter(product => product.thickness == "100gsm").map((item) => {
            return <Card key={item.id} item={item} catu={"paper"} />
          })
        }
                </Slider>
            </div><br /><br />
            <div id='bas1' style={{ color: "var(--light-blue)" }}>
                <h1 >130 gsm</h1>
                <Slider {...carouselProperties}>
                {
          cards.filter(product => product.thickness == "130gsm").map((item) => {
            return <Card key={item.id} item={item} catu={"paper"} />
          })
        }
                </Slider>
            </div><br /><br />
            <div id='bas2' style={{ color: "var(--light-blue)" }}>
                <h1 >170 gsm</h1>
                <Slider {...carouselProperties}>
                {
          cards.filter(product => product.thickness == "170gsm").map((item) => {
            return <Card key={item.id} item={item} catu={"paper"} />
          })
        }
                </Slider>
            </div><br /><br />
            <div id='bas3' style={{ color: "var(--light-blue)" }}>
                <h1 >300 gsm</h1>
                <Slider {...carouselProperties}>
                {
          cards.filter(product => product.thickness == "300gsm").map((item) => {
            return <Card key={item.id} item={item} catu={"paper"}/>
          })
        }
                </Slider>
            </div>

        </div>

    );
};

export default MultiItemCarousel1;
