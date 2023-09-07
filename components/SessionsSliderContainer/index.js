// SessionSliderConatienr.js
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import Image from "next/image";
import people from "../../assets/people.svg";
import Professor from "../../assets/professor.svg";
import managementPeople from "../../assets/management-people.svg";
import styles from './styles.module.css'

function SessionSliderConatienr() {
  return (
    <Box
      className={styles.mainContainer}
    >
      <Box
        className={styles.imageContainer}
      >
        {/* {session Image} */}
        <Image 
          src={managementPeople}
          className={styles.sessionImage}
        />
      </Box>
      <Box
        className={styles.sessionDetailsContainer}
      >
        {/* {session category} */}
        <Box className={styles.topContainer}>

        <Typography
          className={styles.sessionCategory}
        >
          Management
        </Typography>
        {/* {session title} */}
        <Typography
          className={styles.sessionTitle}
        >
          How to manage your small business
        </Typography>
        </Box>

        <Box className={styles.sessionRatingContainer}>
          {/* session Rating */}
          <Box className={styles.ratingLeft}>
            <Box>
              <Typography
                className={styles.totalRating}
              >
                5.0
              </Typography>
            </Box>
            <Box className={styles.starsContainer}>
              <StarOutlinedIcon
                className={styles.starIcon}
              />
              <StarOutlinedIcon
                className={styles.starIcon}
              />
              <StarOutlinedIcon
                className={styles.starIcon}
              />
              <StarOutlinedIcon
                className={styles.starIcon}
              />
              <StarOutlinedIcon
                className={styles.starIcon}
              />
            </Box>
            <Box>
              <Typography
                className={styles.ratingCount}
              >
                (31)
              </Typography>
            </Box>
          </Box>
          <Box className={styles.ratingRight}>
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
        <Box>
          <Typography
            className={styles.sessionDescription}
          >
            Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna
            tempus urna lectus. Nec tortor, vehicula nunc, duis orci. Nunc urna,
            vitae sit sapien diam diam cursus. Cras tempus venenatis consequat.
          </Typography>
        </Box>
        <Box
          className={styles.bottomContainer}
        >
          <Box className={styles.instructorContainer}>
            <Image src={Professor} className={styles.instructorDp} />
            <Box
              className={styles.instructorNameContainer}
            >
              <Typography
                className={styles.instructorName}
              >
                Prof. Sammy James
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              className={styles.enrollButton}
            >
              Enroll
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SessionSliderConatienr;
