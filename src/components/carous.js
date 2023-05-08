import { useEffect, useState } from "react";
import img1 from "./carouselimg1.jpg";
import img3 from "./carouselimg3.jpg";
function Carous() {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages] = useState([img1, img3])
  
  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 3 ? selectedImage + 1 : 0)
    }, 5500)
  }, [])

  return (
    <div>
      <img width={1513} height={450} src={allImages[selectedImage]}  alt="image1,image3" /> <br />
     
    </div>
  );
}

export default Carous;

