import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Professor from "../../assets/professor.svg";
import people from "../../assets/people.svg";
import managementPeople from "../../assets/management-people.svg";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import styles from "./styles.module.css";

function CoursePreviewBox() {
  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.imageContainer}>
        <Image src={managementPeople} className={styles.image} />
      </Box>
      <Box>
        <Typography className={styles.courseCategory}>Management</Typography>
      </Box>
      <Box>
        <Typography className={styles.courseTitle}>
          How to manage your small business
        </Typography>
      </Box>
      <Box className={styles.descriptionContainer}>
        <Box className={styles.rating}>
          {/* session Rating */}
          <Box>
            <Typography className={styles.totalRating}>5.0</Typography>
          </Box>
          <Box className={styles.ratingStarsContainer}>
            <StarOutlinedIcon className={styles.ratingStar} />
            <StarOutlinedIcon className={styles.ratingStar} />
            <StarOutlinedIcon className={styles.ratingStar} />
            <StarOutlinedIcon className={styles.ratingStar} />
            <StarOutlinedIcon className={styles.ratingStar} />
          </Box>
          <Box>
            <Typography className={styles.ratingCount}>(31)</Typography>
          </Box>
        </Box>
        <Box className={styles.totalStudentContainer}>
          <Box>
            <Image src={people} />
          </Box>
          <Box>
            <Typography className={styles.studentsCount}>
              55+ Students
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.getCourseContainer}>
        <Box className={styles.instructorContainer}>
          <Image src={Professor} className={styles.instructorDp} />
          <Box className={styles.instaructorNameContainer}>
            <Typography className={styles.instructorName}>
              Prof. Sammy James
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button className={styles.enrollButtonStyle}>Enroll</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CoursePreviewBox;
