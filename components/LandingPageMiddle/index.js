import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import SessionSliderContainer from "../SessionsSliderContainer";
import CoursePreviewBox from "../CourseBoxMini";
import Image from "next/image";
import koreanBoy from "../../assets/Image.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Slider from "react-slick";
import styles from "./styles.module.css";
import Head from "next/head";

function LandingPageMiddle() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2600,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: null,
    nextArrow: null,
  };

  const [selectedFilterOption, setSelectedFilterOption] = useState(0);

  const filterTypesList = [
    "All",
    "Design",
    "Programming",
    "Finance",
    "Art",
    "Science",
    "Big Data",
    "Management",
  ];

  return (
    <>
      <Head>
        <style>{`
      .slick-dots{
            bottom:-40px;
          }
        .slick-dots li button:before {
          color: rgba(37, 60, 110, 0.4); 
          height:18px;
          width:18px;
          line-height:12px;
          font-size:12px;
        }
        .slick-dots li.slick-active button:before {
          color: rgba(37, 60, 110, 1); 
          height:18px;
          width:18px;
        }`}</style>
      </Head>
      <Box className={styles.mainContainer}>
        <Box className={styles.topContainer}>
          <Box className={styles.imageContentContainer}>
            <Box >
              <Image src={koreanBoy} className={styles.image} />
            </Box>
            <Box className={styles.contentContainer}>
              <Box className={styles.content}>
                <Typography variant="h2" className={styles.heading}>
                  Learn with various materials and various fields in a modern way
                </Typography>

              </Box>
              <Box>
                <Typography className={styles.headingContent}>
                  Elit quam cras sollicitudin ridiculus commodo a eget.
                  Quisque magna tempus urna lectus. Nec tortor, vehicula
                  nunc, duis orci. Nunc urna, vitae sit sapien diam diam cursus.
                  Cras tempus venenatis consequat, in amet urna, tempor. Augue elit,
                  ultrices sapien tellus. Tellus sapien, risus mauris pretium. At tortor,
                  blandit lorem sit ac, malesuada.
                </Typography>
              </Box>
              <Box className={styles.aboutUs}>
                <Typography className={styles.aboutUsText}>About us</Typography>
                <KeyboardArrowRightIcon className={styles.rightArrowIcon} />
              </Box>
            </Box>
          </Box>
          <Box className={styles.upcomingSessionsContainer}>
            <Box className={styles.upcomingSessionsInner}>
              <Typography className={styles.upcomingSessionsHeading}>
                Upcoming Sessions
              </Typography>
              <center>
                <Typography className={styles.upcomingSessionsDescription}>
                  Elit quam cras sollicitudin ridiculus commodo a eget. Quisque
                  magna tempus urna lectus. Nec tortor, vehicula nunc, duis
                  orci. Nunc urna, vitae sit sapien diam diam cursus. Cras
                  tempus venenatis consequat.
                </Typography>
              </center>
            </Box>
            <Slider {...settings}>
              <SessionSliderContainer />
              <SessionSliderContainer />
              <SessionSliderContainer />
            </Slider>
          </Box>
        </Box>
        <Box className={styles.featuredCoursesContainer}>
          {" "}
          <Box className={styles.featuredCoursesInner}>
            <Typography className={styles.featuredCoursesHeading}>
              Featured Courses
            </Typography>
            <center>
              <Typography className={styles.featuredCoursesDescription}>
                Elit quam cras sollicitudin ridiculus commodo a eget. Quisque
                magna tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
                Nunc urna, vitae sit sapien diam diam cursus. Cras tempus
                venenatis consequat.
              </Typography>
            </center>
          </Box>
        </Box>
        <Box>
          <Box className={styles.filterOptionsContainer}>
            {filterTypesList.map((value, index) => {
              return (
                <Button
                  key={index}
                  sx={{
                    borderRadius: "200px",
                    minWidth: "54px",
                    border: "none",
                    backgroundColor:
                      selectedFilterOption === index ? "#253C6E" : "#FFFFFF",
                    color: selectedFilterOption === index ? "#fff" : "#9891A3",
                    fontSize: "12px",
                    padding: "12px",
                    fontFamily: "Plus Jakarta Sans",
                    "&:hover": {
                      backgroundColor:
                        selectedFilterOption === index ? "#253C6E" : "#FFFFFF",
                      color:
                        selectedFilterOption === index ? "#fff" : "#9891A3",
                    },
                  }}
                  onClick={() => setSelectedFilterOption(index)}
                >
                  {value}
                </Button>
              );
            })}
          </Box>
        </Box>
        <Box className={styles.filteredCoursesContainer}>
          <CoursePreviewBox />
          <CoursePreviewBox />
          <CoursePreviewBox />
          <CoursePreviewBox />
          <CoursePreviewBox />
          <CoursePreviewBox />
          <CoursePreviewBox />
          <CoursePreviewBox />
        </Box>
      </Box>
    </>
  );
}

export default LandingPageMiddle;
