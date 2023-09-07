import React from "react";
import { Box, Typography } from "@mui/material";
import people from "../../assets/people.svg";
import book from "../../assets/lesson.svg";
import clock from "../../assets/clock.svg";
import Image from "next/image";
import styles from "./styles.module.css";
import Button from "@mui/material/Button";
import WorkingPeople from "../../assets/workingPeople.png";
function FilteredCourses({
  mainImage,
  totalStars,
  starRating,
  totalRating,
  title,
  description,
  published,
  totalStudents,
  totalLessons,
  totalTime,
  discount,
  price,
}) {
  const starsRating = (count) => {
    switch (count) {
      case 1:
        return "★☆☆☆☆";
      case 2:
        return "★★☆☆☆";
      case 3:
        return "★★★☆☆";
      case 4:
        return "★★★★☆";
      case 5:
        return "★★★★★";
      default:
        return "";
    }
  };

  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.imageContainer}>
        <Image
          className={styles.image}
          style={{ width: "100%" }}
          src={WorkingPeople}
          alt={title}
          width={253}
          height={195}
        />
      </Box>
      <Box className={styles.middleContainer}>
        <Box className={styles.ratingContainer}>
          <Typography className={styles.starRatingStyle}>
            {starRating}
          </Typography>

          <Box className={styles.starContainer}>
            <Typography className={styles.totalStarsStyle}>
              {starsRating(totalStars)}
            </Typography>
          </Box>

          <Typography
            className={styles.totalRatingStyle}
          >{`(${totalRating})`}</Typography>
        </Box>

        <Typography className={styles.titleStyle}>{title}</Typography>
        <Typography className={styles.descriptionStyle}>
          {description}
        </Typography>
        <Box className={styles.lastContainer}>
          <Box className={styles.publisherContainer}>
            <Box>
              <Image
                src={published.authPhoto}
                alt={published.authName}
                width={25}
                height={25}
              />
            </Box>
            <Typography className={styles.authorNameStyle}>
              {published.authName}
            </Typography>
          </Box>
          <Box className={styles.studentContainer}>
            <Box>
              <Image src={people} alt="Students" />
            </Box>
            <Typography className={styles.totalStudentStyle}>
              {totalStudents > 55
                ? "55+ Students"
                : `${totalStudents} students`}
            </Typography>
          </Box>
          <Box className={styles.bookContainer}>
            <Box>
              <Image src={book} alt="Lessons" />
            </Box>
            <Typography className={styles.totalBookStyle}>
              {`${totalLessons} Lessons`}
            </Typography>
          </Box>
          <Box className={styles.timeContainer}>
            <Box>
              <Image src={clock} alt="Time" />
            </Box>
            <Typography className={styles.totalTimeStyle}>
              {totalTime}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.discountContainer}>
        <Box className={styles.priceDiscountContainer}>
          <Typography className={styles.discountStyle}>${discount}</Typography>
          <Typography className={styles.priceStyle}>${price}</Typography>
        </Box>
        <Box>
          <Button variant="contained" className={styles.buyNowButtonStyle}>
            Enroll Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default FilteredCourses;
