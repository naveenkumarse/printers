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

import spcard1 from "../../assets/spcard1.jpg";
import spcard2 from "../../assets/spcard2.webp";
import spcard3 from "../../assets/spcard3.webp";
import spcard4 from "../../assets/spcard4.webp";
import spcard5 from "../../assets/spcard5.webp";
import spcard6 from "../../assets/spcard6.webp";

import cgloss1 from "../../assets/cgloss1.jpg";
import cgloss2 from "../../assets/cgloss2.jpg";
import cgloss3 from "../../assets/cgloss3.webp";
import cgloss4 from "../../assets/cgloss4.jpg";
import cgloss5 from "../../assets/cgloss5.jpg";
import cgloss6 from "../../assets/cgloss6.jpg";
import cmatte1 from "../../assets/cmatte1.webp";
import cmatte2 from "../../assets/cmatte2.jpg";
import cmatte3 from "../../assets/cmatte3.jpg";
import cmatte4 from "../../assets/cmatte4.jpg";
import cmatte5 from "../../assets/cmatte5.webp";
import cmatte6 from "../../assets/cmatte6.jpg";
import csynth1 from "../../assets/csynthetic1.jpg";
import csynth2 from "../../assets/csynthetic2.webp";
import csynth3 from "../../assets/csynthetic3.webp";
import csynth4 from "../../assets/csynthetic4.jpg";
import csynth5 from "../../assets/csynthetic5.jpg";
import csynth6 from "../../assets/csynthetic6.jpg";
import csynth7 from "../../assets/csynthetic7.webp";
import csynth8 from "../../assets/csynthetic8.jpg";



import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";

import { ArrowBackIos, ArrowForwardIos, SignalCellularConnectedNoInternet3BarTwoTone } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import CategoryBar from '../categorybar';
import { Link } from 'react-router-dom';
import Card from './card';
let slidesToShow = 5;
const CategoryBarData = [
    {
        imageSrc: card1,
        category: "Special Cards",
        type: null,
        classnum: "bas0"
    },
    {
        imageSrc: card2,
        category: "Gloss-Finish",
        type: "mobiles",
        classnum: "bas1"
    },
    {
        imageSrc: card3,
        category: "Matte-Finish",
        type: "electronics",
        classnum: "bas2"
    },
    {
        imageSrc: card4,
        category: "Synthetic-Finish",
        type: "electronics",
        classnum: "bas3"
    },


];


export const data = [image1, image2, image3, image4, image5, image6];
export const multiData = [
    {
        img: spcard1,
        url: "id1",
        myname: "Valentine Card",
        from: "5000",
        upto: "6000"
    },
    {
        img: spcard2,
        url: "id1",
        myname: "Christmas Card",
        from: "5000",
        upto: "7000"
    },
    {
        img: spcard3,
        url: "id1",
        myname: "Birthday Card",
        from: "5000",
        upto: "7000"
    },
    {
        img: spcard4,
        url: "id1",
        myname: "Greeting Card",
        from: "5000",
        upto: "7000"
    },
    {
        img: spcard5,
        url: "id1",
        myname: "Greeting Card",
        from: "5000",
        upto: "7000"
    },
    {
        img: spcard6,
        url: "id1",
        myname: "Self-Love Card",
        from: "5000",
        upto: "7000"
    },

];
export const multiData1 = [
    {
        img: cgloss1,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "6000"
    },
    {
        img: cgloss2,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: cgloss3,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: cgloss4,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: cgloss5,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: cgloss6,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },

];

export const multiData2 = [

    {
        img: cmatte1,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: cmatte2,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: cmatte3,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: cmatte4,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: cmatte5,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: cmatte6,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "6000"
    },

];

export const multiData3 = [

    {
        img: csynth1,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: csynth2,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: csynth3,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: csynth4,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: csynth5,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "7000"
    },
    {
        img: csynth6,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "6000"
    },
    {
        img: csynth7,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "6000"
    },
    {
        img: csynth8,
        url: "id1",
        myname: "ProductTv",
        from: "5000",
        upto: "6000"
    },

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

const MultiItemCarousel = () => {
    const [cards, setCards] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };
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
                <h1 >Special Cards</h1>
                <Slider {...carouselProperties}>
                    {
                        cards.filter(product => product.category == "SpecialCards").map((item) => {
                            return <Card key={item.id} item={item} catu={"cards"} />
                        })
                    }
                </Slider>
            </div>
            <div id='bas1' style={{ color: "var(--light-blue)" }}>
                <h1 >Gloss-Finish Cards</h1>
                <Slider {...carouselProperties}>
                    {
                        cards.filter(product => product.category == "GlossFinishCards").map((item) => {
                            return <Card key={item.id} item={item} catu={"cards"} />
                        })
                    }
                </Slider>
            </div>
            <div id='bas2' style={{ color: "var(--light-blue)" }}>
                <h1 >Matte-Finish Cards</h1>
                <Slider {...carouselProperties}>
                    {
                        cards.filter(product => product.category == "MatteFinishCards").map((item) => {
                            return <Card key={item.id} item={item} catu={"cards"}/>
                        })
                    }
                </Slider>
            </div>
            <div id='bas3' style={{ color: "var(--light-blue)" }}>
                <h1 >Synthetic-Finish Cards</h1>
                <Slider {...carouselProperties}>
                    {
                        cards.filter(product => product.category == "SyntheticFinishCards").map((item) => {
                           
                            return <Card key={item.id} item={item} catu={"cards"} />
                        })
                    }
                </Slider>
            </div>

        </div>

    );
};


export default MultiItemCarousel;
