import React from "react";
import { useState } from "react";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button } from "@material-ui/core";
const AddBondsheet = () => {
    const [image, setImage] = useState(null);
    const [category, setcategory] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrice] = useState(0);
    const [about, setAbout] = useState("");
    const [url, setUrl] = useState(null);

    const handleImgChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  console.log(image);

  const uploadImg = () => {
    if (image === null) {
      alert("NO IMG SELECTED");
      return;
    } else {
      console.log(image.name);

      const imgRef = ref(storage, `/bondsheet/${image.name}`);

      uploadBytes(imgRef, image)
        .then(() => {
          getDownloadURL(imgRef)
            .then((url) => {
              setUrl(url);
            })
            .catch((error) => {
              console.log(error.message, "error getting url");
            });
            setImage(null);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    alert(url);   
  };
    return (
        <>
            <div className="flex justify-center mt-7">
                <div className="w-full max-w-xl">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="username"
                            >
                                image
                                
                            </label>
                            <div className="flex justify-between items-center">
                               
                                <input
                  className=" w-3/5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="file"
                  placeholder="Image"
                  onChange={handleImgChange}
                />
                                <Button onClick={uploadImg}> Upload </Button> 
                            </div>

                        </div>
                        <br />

                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="text"
                            >
                                category
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                placeholder="category"
                                onChange={(e) => setcategory(e.target.value)}
                                value={category}
                            />
                            {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br />
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="text"
                            >
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br />
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="text"
                            >
                                Description
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                placeholder="Description"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                            {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br />
                       
                      
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="text"
                            >
                                size
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                placeholder="size"
                                onChange={(e) => setSize(e.target.value)}
                                value={size}
                            />
                            {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br/>
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                Price
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="number"
                                placeholder="Price"
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                            />

                            {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br />
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="password"
                            >
                                about
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="text"
                                placeholder="Price"
                                onChange={(e) => setAbout(e.target.value)}
                                value={about}
                            />

                            {/* <p className="text-red-500 text-xs italic">Please enter a password.</p> */}
                        </div>
                        <br />
                        <div className="w-full justify-center px-3 mb-6 md:mb-0 ">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                                type="button"> Add
                            </button>
                        </div>
                    </form>
                </div>
            </div> 
        </>
    )
}

export default AddBondsheet;