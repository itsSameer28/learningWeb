// Testimonials.js
import Head from "next/head";
import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import TestimonialCard from "../TestimonialCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Slider from "react-slick";
import styles from "./styles.module.css";

function Testimonials() {
  const sliderRef = useRef(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 1600,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    // Responsive settings
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1183,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Functions to handle previous and next actions
  const handlePrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <>
      <Head>
        <style>
          {`.slick-prev,
          .slick-next {
            display: none !important;
          }
          `}
        </style>
      </Head>
      <Box className={styles.mainConatinerStyle}>
        <Box className={styles.innerContainerStyle}>
          <Box className={styles.leftConatainerStyle}>
            <Box>
              <Typography className={styles.leftContainerHeading}>
                What they say about us
              </Typography>
            </Box>
            <Box>
              <Typography className={styles.leftConatinerDescriptionStyle}>
                Elit quam cras sollicitudin ridiculus commodo a eget. Quisque
                magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
                Nunc urna, vitae sit sapien diam diam cursus. Cras tempus
                venenatis consequat.
              </Typography>
            </Box>
            <Box className={styles.buttonGroupContainer}>
              {/* Attach click events to the buttons */}
              <button
                className={styles.previousButtonStyle}
                onClick={handlePrevious}
              >
                <KeyboardArrowLeftIcon />
              </button>
              <button className={styles.nextButtonStyle} onClick={handleNext}>
                <KeyboardArrowRightIcon />
              </button>
            </Box>
          </Box>
          <Box className={styles.sliderContainer}>
            {/* Pass the ref to the Slider component */}
            <center>
              <Slider ref={sliderRef} {...settings}>
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
              </Slider>
            </center>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Testimonials;
