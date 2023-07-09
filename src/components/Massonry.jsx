/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Modal from "react-modal";
import { AiFillEye, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import images from "./Images";
import { UserAuth } from "../context/AuthContext";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";
import Swal from "sweetalert2";

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
  const { user } = UserAuth();

  const [details, setDetails] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);
  const [like, setLike] = useState(false);
  const imageID = doc(db, "users", `${user?.email}`);

  const handleClick = (index) => {
    setSelectedImage(images[index]);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "green",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  const likeImage = async () => {
    if (user?.email) {
      setLike(!like);
      await updateDoc(imageID, {
        likedPics: arrayUnion({
          id: 1,
        }),
      });
      Toast.fire({
        icon: "success",
        title: "Gallery's Collection",
        text: "Image liked",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Log in to like a picture",
        icon: "error",
      });
    }
  };

  const download = () => {
    if(!user?.email) {
      Swal.fire({
        title: "Error!",
        text: "Must be logged in to download",
        icon: "error",
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "Gallery's Collection",
        text: "Download starting....",
      });
    }
  }

  const buy = () => {
    if(!user?.email) {
      Swal.fire({
        title: "Error!",
        text: "Must be logged in to buy",
        icon: "error",
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "Gallery's Collection",
        text: "Processing buying..",
      });
    }
  }

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
                    <button onClick={likeImage} className="btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      1254866
                    </button>
                    <span>
                      <AiOutlineShareAlt />
                    </span>
                  </div>
                  <div className="flex gap-5">
                    
                    <button onClick={download} className="btn btn-neutral px-8 py-3 text-lg font-semibold rounded bg-[#e38330]">
                      Free download
                    </button>
                    <button onClick={buy} className="btn btn-neutral px-8 py-3 text-lg font-semibold rounded bg-[#e38330]">
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
