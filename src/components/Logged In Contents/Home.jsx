import React from "react";
import { motion, useScroll } from "framer-motion";
import { Modal } from "@mui/material";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // On scroll
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <motion.div
        className="progress-bar sticky z-30 top-0 left-0 right-0 h-[10px] origin-left bg-red-600"
        style={{ scaleX: scrollYProgress }}
      />
      {/* // Modal start */}
      <div className="bg-black min-h-screen">
        <button
          className="text-white border border-white rounded-full p-3"
          onClick={handleOpen}
        >
          Open Child Modal
        </button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          {/* <Box sx={{ ...style, width: 200 }}> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              // position: 'absolute' as 'absolute',
              top: "100%",
              left: "50%",
              // transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              pt: 2,
              px: 4,
              pb: 3,
            }}
            className="bg-white translate-x-1/2 translate-y-1/2 p-3 rounded-xl"
          >
            <h2 id="child-modal-title" className="text-xl font-bold">
              Text in a child modal
            </h2>
            <p id="child-modal-description" className="my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <button
              className="border border-black rounded-full p-3"
              onClick={handleClose}
            >
              Close Child Modal
            </button>
          </motion.div>
          {/* </Box> */}
        </Modal>
      </div>
      {/* // Modal end */}
      <div className="min-h-screen">
        <div className="md:w-2/5">Stages of The User Journey</div>
        <img className="md:w-3/5" src="" alt="" />
      </div>
      <div className="bg-black text-white text-left md:pl-10 md:pt-16 md:pb-24 md:pr-9">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="font-bold text-4xl pb-8"
        >
          Product <br /> Growth Goals.
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="flex flex-wrap"
        >
          <div className="min-w-[100px] max-w-[29vw]">
            <div className="text-xs border text-gray-300 border-gray-300 w-fit py-1 px-2 rounded-full">
              COMPANIES
            </div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="text-5xl font-bold py-4 text-gradient bg-gradient-to-r from-orange-400 via-red-600 to-purple-600"
            >
              750+
            </motion.div>
            <div className="text-gray-200">Track and Analyze Your Product</div>
          </div>
          <div className="min-w-[100px] max-w-[29vw]">
            <div className="text-xs border text-gray-300 border-gray-300 w-fit py-1 px-2 rounded-full">
              COMPANIES
            </div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="text-5xl font-bold py-4 text-gradient bg-gradient-to-r from-orange-400 via-red-600 to-purple-600"
            >
              30k+
            </motion.div>
            <div className="text-gray-200">Track and Analyze Your Product</div>
          </div>
          <div className="min-w-[100px] max-w-[29vw]">
            <div className="text-xs border text-gray-300 border-gray-300 w-fit py-1 px-2 rounded-full">
              COMPANIES
            </div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.7,
                ease: "easeOut",
              }}
              className="text-5xl font-bold py-4 text-gradient bg-gradient-to-r from-orange-400 via-red-600 to-purple-600"
            >
              90%
            </motion.div>
            <div className="text-gray-200">Track and Analyze Your Product</div>
          </div>
        </motion.div>
      </div>
      <div className="min-h-screen flex flex-wrap md:px-10 md:py-20">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="md:w-2/5 bg-black text-white md:p-5 flex flex-col justify-center"
        >
          <div className="text-3xl font-semibold py-10">Hello Everyone</div>
          <div className="text-3xl font-semibold py-10">Hello Everyone</div>
          <div className="text-3xl font-semibold py-10">Hello Everyone</div>
          <div className="text-3xl font-semibold py-10">Hello Everyone</div>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="md:w-3/5 p-10 bg-gray-200"
        >
          <div className="bg-white rounded-md p-10 h-full flex flex-col justify-center items-center">
            <img
              className="rounded-md mb-7"
              src="https://imgs.search.brave.com/bbnqvFqXVWZFNyONtKw5p7qUpGsEgaI0rDg8SC8KMVc/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/Sjl3YkZidlJYYXRI/c3o5MEZNWkpBSGFF/SyZwaWQ9QXBp"
              alt=""
            />
            <div className="font-bold">I am cute</div>
            <div className="my-4 text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam
              officiis in facilis a possimus!
            </div>
            <motion.button
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="bg-black mt-3 text-white max-w-[150px] text-sm rounded-md py-2 px-10"
            >
              Meow
            </motion.button>
          </div>
        </motion.div>
      </div>
      <div className="min-h-screen p-10 text-left">
        <div className="text-4xl mb-5 font-bold">I am CSS Expert</div>
        <div className="flex flex-wrap">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="border-2 border-black rounded-full px-4 py-2 mr-5 my-3 font-semibold text-xl"
          >
            CREATIVE
          </motion.div>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="border-2 border-black rounded-full px-4 py-2 mr-5 my-3 font-semibold text-xl"
          >
            CREATIVE
          </motion.div>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="border-2 border-black rounded-full px-4 py-2 mr-5 my-3 font-semibold text-xl"
          >
            CREATIVE
          </motion.div>
        </div>
        <div className="flex flex-wrap">
          <motion.img
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="rounded-md md:w-[40vw] md:mr-6 my-7"
            src="https://imgs.search.brave.com/bbnqvFqXVWZFNyONtKw5p7qUpGsEgaI0rDg8SC8KMVc/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/Sjl3YkZidlJYYXRI/c3o5MEZNWkpBSGFF/SyZwaWQ9QXBp"
            alt=""
          />
          <motion.img
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
              ease: "easeOut",
            }}
            className="rounded-md md:w-[40vw] md:mr-6 my-7"
            src="https://imgs.search.brave.com/bbnqvFqXVWZFNyONtKw5p7qUpGsEgaI0rDg8SC8KMVc/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/Sjl3YkZidlJYYXRI/c3o5MEZNWkpBSGFF/SyZwaWQ9QXBp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
