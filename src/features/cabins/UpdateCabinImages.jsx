import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import {
  addProductImage,
  deleteProductImage,
} from "../../services/apis/product-api";
import toast from "react-hot-toast";
import { convertToBase64 } from "../../utils/helpers";

const UpdateCabinImages = ({ images, id }) => {
  const [imgs, setImg] = useState(images);
  const [newImage, setNewImage] = useState("");
  const [showAdd, setShowAdd] = useState(false);
  const handleImage = (e) => {
    const file = e.target.files[0];
    convertToBase64(file).then((img) => {
      setNewImage(img);
    });
    setShowAdd(true);
  };
  const handleDelete = async (link) => {
    const payload = {
      id: id,
      image_link: link,
    };
    await deleteProductImage(payload)
      .then((res) => {
        toast.success(res.message);
        const filtered = imgs.filter((where) => where !== link);
        setImg(filtered);
      })
      .catch((res) => {
        toast.error(res.response.data.message);
      });
  };
  const handleAdd = async () => {
    const payload = {
      id: id,
      images: [newImage],
    };
    await addProductImage(payload)
      .then((res) => {
        toast.success(res.message);
        setShowAdd(false)
        setImg([...imgs, newImage])
      })
      .catch((res) => {
        toast.error(res.response.data.message);
      });
  };
  return (
    <div>
      <div className="flex items-center gap-x-3">
        <div className="mb-3 flex gap-x-2 items-center relative">
          <IoAddCircleOutline className="!text-2xl" />
          <p>Add New Image</p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImage(e)}
            className="absolute w-full h-full opacity-0"
          />
        </div>
        {showAdd && <p onClick={handleAdd} className="px-4 py-1 rounded-lg bg-blue-400 text-white ">Add</p>}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {imgs.map((item, i) => (
          <div key={i} className="relative">
            <div
              className="absolute z-10 -right-2 -top-2 cursor-pointer text-white bg-red-600 w-12 h-12 flex rounded-full justify-center items-center"
              onClick={() => handleDelete(item)}
            >
              <MdOutlineCancel className="text-2xl" />
            </div>
            <img
              src={item}
              alt="product_image"
              className="w-[250px] h-[150px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateCabinImages;
