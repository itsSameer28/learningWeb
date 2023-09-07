import React from "react";
import Image from "next/image";
import curl from "../../assets/curl.svg";
import { Box, Button, Typography } from "@mui/material";
import women from "../../assets/women.png";
import men from "../../assets/men.png";
import pencil from "../../assets/pencil.svg";
import playIcon from "../../assets/play-icon.svg";
import calender from "../../assets/calender.svg";
import styles from "./styles.module.css";

function LandingPageHeader() {
  return (
    <Box className={styles.mainConatinerStyle}>
      <Box className={styles.innerContainerStyle}>
        <Box>
          <Box className={styles.leftContainerStyle}>
            <Typography className={styles.leftContainerHeadingStyle}>
              Find the best way to learn new things to improve your skills{" "}
              <Image src={curl} className={styles.curlImage} />
            </Typography>
            <Typography className={styles.leftContainerDescriptionStyle}>
              Vitae integer pellentesque platea ipsum tristique turpis eros,
              ante sollicitudin. Ut sed eleifend duis morbi. Turpis id in nam
              aliquam amet, duis sedvolutpat sit ipsum facilisis. Mauris id
              fusce lectus justo
            </Typography>
            <Box className={styles.leftContainerButtonGroupStyle}>
              <Button className={styles.joinClassesButtonStyle}>
                Join Classes
              </Button>
              <Button className={styles.joinMemberShipButtonStyle}>
                Join Mentorship
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className={styles.rightConatinerStyle}>
          <Image src={women} className={styles.womenImage} />

          <Box className={styles.sessionContainerStyle}>
            <Image src={men} />
            <Box className={styles.sessionContainerInnerStyle}>
              <Typography className={styles.sessionHeadingStyle}>
                Learn basic ui ux design
              </Typography>
              <Typography className={styles.sessionTimingStyle}>
                Today at 12 PM
              </Typography>
              <Button className={styles.sessionJoinButtonStyle}>
                Join Now
              </Button>
            </Box>
          </Box>
          <Box className={styles.pencilIconStyle}>
            <Image src={pencil} className={styles.iconImage} />
          </Box>

          <Box className={styles.playIconStyle}>
            <Image src={playIcon} className={styles.iconImage1} />
          </Box>

          <Box className={styles.calenderIconStyle}>
            <Image src={calender} className={styles.iconImage2} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPageHeader;
