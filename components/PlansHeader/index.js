import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import styles from "./style.module.css";
import Image from "next/image";
import BlueStar from "../../assets/Bluestar.svg";
import WhiteStar from "../../assets/Whitestar.svg";
import HighLight from "../../assets/Highlight.svg";
export default function PlansHeader() {
  return (
    <Box>
      <Box className={styles.root}>
        <Box>
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
            <Box className={styles.highLightContainer}>
              <Image
                className={styles.highlight}
                src={HighLight}
                height={""}
                width={""}
                alt="HighLight"
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
          <Typography variant="h1" component="h1" className={styles.heading1}>
            Subscribe with us now
          </Typography>
        </Box>
        <Box className={styles.parentSubHeadingContainer}>
          <Box className={styles.subHeadingContainer}>
            <Typography
              variant="h6"
              component="h6"
              className={styles.subHeading}
            >
              by subscribing now you will be able to access the material easily
              and cheaply, so you will be very efficient and benefit
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
