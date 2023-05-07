import React, { useEffect, useState } from "react";
import '../scss/_categorybar.css'
import '../scss/index.scss';
import CategoryBar from "../components/categorybar";
import CategoryCarousel from "../components/categorycarousel";
const CategoryBarData = [
  {
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/178cf5a874cd697a.png?q=100",
    category: "Top Offers",
    type: null,
  },
  {
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/e2268d56d09df684.png?q=100",
    category: "Mobiles & Tablets",
    type: "mobiles",
  },
  {
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6e3e1efa83bc56c3.png?q=100",
    category: "Electronics",
    type: "electronics",
  },
  {
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/b3e1225e6bda1c9e.png?q=100",
    category: "TVs & Appliances",
    type: "electronics",
  },
  {
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f09b2d254acb48a.png?q=100",
    category: "Beauty",
    type: "electronics",
  },
  {
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5972d5da375c81c7.png?q=100",
    category: "Home & Furniture",
    type: "electronics",
  },
  {
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/1cfc2d91f717510a.png?q=100",
    category: "Flights",
    type: "electronics",
  },
  {
    imageSrc: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/d154c0b4d536c1cf.png?q=100",
    category: "Grocery",
    type: "electronics",
  },
];
const BestOf =
  [
    {
      ImgSrc:
        "https://rukminim1.flixcart.com/image/200/200/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70",
      CategoryName: "Top Mirrorless Cameras",
      Brand: "Canon,Sony",
      type: "electronics",
    },
    {
      ImgSrc:
        "https://rukminim1.flixcart.com/image/200/200/l1pc3gw0/power-bank/e/u/y/-original-imagd7dzan7sakt2.jpeg?q=70",
      CategoryName: "Premium PowerBanks",
      Brand: "Mi & Realme",
      type: "mobiles",
    },
    {
      ImgSrc:
        "https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
      CategoryName: "Printers",
      Brand: "HP",
      type: "electronics",
    },
    {
      ImgSrc:
        "https://rukminim1.flixcart.com/image/200/200/ks7tuvk0/gimbal/v/z/7/0-43-om4-se-dji-original-imag5u6rgsdh6k4g.jpeg?q=70",
      CategoryName: "Top Deals of Camera Accessories",
      Brand: "Tripods,Gimbals,Bags",
      type: "camera",
    },
    {
      ImgSrc:
        "https://rukminim1.flixcart.com/image/200/200/xif0q/monitor/9/b/n/va249he-23-8-inch-eye-care-fhd-full-hd-23-8-90lm02w1-b01310-asus-original-imaghfhmyvwz9x53.jpeg?q=70",
      CategoryName: "Asus Monitors",
      Brand: "Top Rated",
      type: "mobiles",
    },
    {
      ImgSrc:
        "https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70",
      CategoryName: "Best of Hair Dryers",
      Brand: "Philips,Nova,Havells & more",
      type: "electronics",
    },
    {
      ImgSrc:
        "https://rukminim1.flixcart.com/image/200/200/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
      CategoryName: "Moniters",
      Brand: "Dell",
      type: "electronics",
    },
  ];
const Categorypage = () => {
  const [filteredType, setFilteredType] = useState(null)
  const [filteredRecords, setFilteredRecords] = useState(null)

  useEffect(() => {
    if (filteredType) {
      let tempArr = Object.assign([], BestOf)
      setFilteredRecords(tempArr.filter((x) => x.type == filteredType))
    } else {
      setFilteredRecords(BestOf)
    }
  }, [filteredType])

  return (
    <>
      <div className="Home">
        <div className="Home-CategoryContainer">
          <div className="Home-CategoryBar">
            {CategoryBarData.map((item, index) => (
              <CategoryBar
                key={index}
                Imgsrc={item.imageSrc}
                CategoryName={item.category}
                type={item.type}
                setFilteredType={setFilteredType}
              />
            ))}
          </div>
        </div>
      </div>
      <CategoryCarousel BgImg={
        "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
      }
        Title={"Beauty,Food,Toys"}
        BestOf={filteredRecords} />
    </>


  )
}
export default Categorypage;
