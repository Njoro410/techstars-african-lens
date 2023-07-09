/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Modal from "react-modal";
import { AiFillEye, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import images from "./Images";
// import { UserAuth } from "../context/AuthContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Adjust the opacity as needed
    borderRadius: "10px", // Adjust the border radius as needed
    padding: "20px", // Adjust the padding as needed
    backdropFilter: "blur(20px)", // Apply the blur effect
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
  },
};

Modal.setAppElement("#root");

const Pictures = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // const { user, logOut } = UserAuth();

  const handleClick = (index) => {
    setSelectedImage(images[index]);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div name="pictures" className="w-full h-full font-Acme">
      <div className="container mx-auto px-8 mt-12 mb-12">
        <div className="flex justify-center items-center ">
          <span className="w-12 h-1 mb-6 rounded-lg bg-yellow-400"></span>
        </div>
        <div className="pb-24">
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />

          <Modal
            isOpen={selectedImage !== null}
            onRequestClose={handleCloseModal}
            style={customStyles}
          >
            {selectedImage && (
              <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="max-h-[25rem]"
                />
                <div className="flex flex-col justify-center flex-1 p-6 card w-96 glass">
                  <span className="text-xs uppercase ">Featured</span>
                  <h3 className="text-3xl font-bold">
                    {selectedImage.caption}
                  </h3>
                  <div className="my-6 flex items-center gap-4 justify-between">
                    <span className="flex items-center gap-3">
                      <AiFillEye /> 25486
                    </span>
                    <span className="flex items-center gap-3">
                      <AiFillHeart /> 12458562
                    </span>
                    <span>
                      <AiOutlineShareAlt />
                    </span>
                  </div>
                  <div className="flex gap-5">
                    <button className="btn btn-neutral px-8 py-3 text-lg font-semibold rounded bg-[#e38330]">
                      Free download
                    </button>
                    <button className="btn btn-neutral px-8 py-3 text-lg font-semibold rounded bg-[#e38330]">
                      buy
                    </button>
                  </div>
                </div>
              </div>
            )}
            <button className="btn" onClick={handleCloseModal}>
              Close
            </button>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
