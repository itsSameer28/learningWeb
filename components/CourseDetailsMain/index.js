import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import Image from "next/image";
import BlueStar from "../../assets/Bluestar.svg";
import WhiteStar from "../../assets/Whitestar.svg";
import HighLight from "../../assets/Highlight.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import data from "../../data.json";
import FilteredCourses from "../FilteredCourses";
import PaginationSection from "../PaginationSection";
import FilterBar from "../FilterBar";
import curl from "../../assets/curl.svg";
import Line from "../../assets/Line.svg";
import styles from "./styles.module.css";
function CourseDetailsMain() {
  const itemsPerPage = 6;

  return (
    <>
      {/* Upper Section */}
      <Box className={styles.mainContainer}>
        {/* Lower Section */}
        <Box className={styles.containerWrap}>
          <Box className={styles.blueStarContainer}>
            <Image
              src={BlueStar}
              className={styles.bluestar}
              width={""}
              height={""}
              alt="bluestar"
            />
          </Box>

          <Box className={styles.contentContainer}>
            {/* Text Elements */}
            <Box className={styles.headingContainerStyle}>
              <Box className={styles.highLightContainer}>
                <Image
                  className={styles.highlight}
                  src={HighLight}
                  height={""}
                  width={""}
                  alt="HighLight"
                />
              </Box>
              <Typography variant="h1" className={styles.headingStyle}>
                We provide various courses <br /> to improve your skills
              </Typography>

              <Box className={styles.curlContainer}>
                <Image
                  className={styles.curl}
                  src={curl}
                  width={""}
                  height={""}
                  alt="curl"
                />
              </Box>
              <Box className={styles.whiteStarContainer}>
                <Image
                  src={WhiteStar}
                  className={styles.whitestar}
                  width={""}
                  height={""}
                  alt="WhiteStar"
                />
              </Box>
            </Box>

            {/* Search Box */}
            <Box className={styles.searchBoxConatiner}>
              <Typography className={styles.searchCoursesStyle}>
                Search courses
              </Typography>

              <Box className={styles.searchBarContainer}>
                <TextField className={styles.textFieldStyle} placeholder="Search"></TextField>
                <Box className={styles.iconContainer}>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={styles.iconStyle}
                  />
                </Box>
              </Box>
            </Box>

            {/* Statistics Section */}
            <Box className={styles.statisticsContainer}>
              <Box className={styles.lineContainer}>
                <Image
                  className={styles.line}
                  src={Line}
                  width={""}
                  height={""}
                  alt="Line"
                />
              </Box>
              <Box className={styles.firstContentContainer}>
                <Typography className={styles.firstContentStyle}>
                  <b>125+</b>
                </Typography>
                <Typography className={styles.firstContent}>
                  Amazing Course
                </Typography>
              </Box>
              <Box className={styles.secondContentContainer}>
                <Typography className={styles.secondContentStyle}>
                  <b>12+</b>
                </Typography>
                <Typography className={styles.secondContent}>
                  Professional Mentor
                </Typography>
              </Box>
              <Box className={styles.thirdContentContainer}>
                <Typography className={styles.thirdContentStyle}>
                  <b>90k+</b>
                </Typography>
                <Typography className={styles.thirdContent}>
                  Good Reviews
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Filter section */}
      <Box className={styles.lowerSectionFirstContainer}>
       <FilterBar/>
        <Box className={styles.lowerSectionSecondContainer}>
          <Box className={styles.filterContentStyle}>
            {data.map((val) => {
              return (
                <FilteredCourses
                  mainImage={val.mainImage}
                  starRating={val.starRating}
                  totalRating={val.totalRating}
                  title={val.title}
                  description={val.description}
                  authPhoto={val.authPhoto}
                  authName={val.authName}
                  totalStudents={val.totalStudents}
                  totalLessons={val.totalLessons}
                  totalTime={val.totalTime}
                  discount={val.discount}
                  price={val.price}
                  totalStars={val.totalStars}
                  published={val.published}
                />
              );
            })}
          </Box>
          <Box className={styles.paginationConatiner}>
            <PaginationSection data={data} itemsPerPage={itemsPerPage} />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CourseDetailsMain;
