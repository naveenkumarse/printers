import { useEffect, useState } from "react";
import img1 from "./carousimg1.jpg";
import img2 from "./carousimg2.jpg";
import img3 from "./carousimg3.jpg";


function Carous() {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages] = useState([img1,img2, img3])
  
  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 2 ? selectedImage + 1 : 0)
    }, 5500)
  }, [])

  return (
    <div>
      <img class="center" src={allImages[selectedImage]}  alt="image1,image3" /> <br />
     
    </div>
      // <div>
      //   <img className="image" width={1513} height={100} src={allImages[selectedImage]}  alt="image1,image2,image3" /> <br />
       
      // </div>
    );
}

export default Carous;

