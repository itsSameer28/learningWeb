import React from "react";
import { Box, Input } from "@mui/material";
import Button from "@mui/material/Button";
import { Typography, TextField } from "@mui/material";
import styles from "./styles.module.css";
import subscribeFlowerIcon from "../../assets/subscribeFlowerIcon.png";
import Image from "next/image";
import BlueStar from "../../assets/Bluestar.svg";
import WhiteStar from "../../assets/Whitestar.svg";
import HighLight from "../../assets/Highlight.svg";
export default function FaqHeader() {
  return (
    <Box>
      {" "}
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
        </Box>
      </Box>
      <Box className={styles.root}>
        <Box className={styles.mainHighlight}>
          {/* <Box className={styles.positionHighlight}>
            <Image src={subscribeFlowerIcon} className={styles.highlightImg} />
          </Box> */}
          <Typography variant="h1" component="h1" className={styles.heading}>
            Hi, How can we help you?
          </Typography>
        </Box>
        {/* <Box className={styles.parentSubHeadingContainer}>
          <Box className={styles.subHeadingContainer}>
            <Box className={styles.mainSearchBox}>
              <Input
                disableUnderline
                type="string"
                inputProps={{ maxLength: 20 }}
                placeholder="Search anything..."
                className={styles.headerSearchBar}
              />
              <Button className={styles.searchButton}>Search</Button>
            </Box>
          </Box>
        </Box> */}
        <Box className={styles.searchBarContainer}>
          <Input
            disableUnderline
            type="text"
            className={styles.textFieldStyle}
            placeholder="Search anything..."
          />
          <Box className={styles.buttonContainer}>
            <Button variant="contained" className={styles.buyNowButtonStyle}>
              Search
            </Button>{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
