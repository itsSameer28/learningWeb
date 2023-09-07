import React from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import styles from "./style.module.css";
import visionIcon from "../../assets/visionIcon.png";
import missionIcon from "../../assets/missionIcon.png";
import Boy1 from "../../assets/boy1.png";
import Boy2 from "../../assets/boy2.png";
import SquareSpaceLogo from "../../assets/SquareSapceLogo.png";
import BaseCampLogo from "../../assets/BaseCampLogo.png";
import AttentiveLogo from "../../assets/ateentiveLogo.png";
import FramerLogo from "../../assets/FramerLogo.png";
import GithubLogo from "../../assets/GithubLogo.png";
import RipplingLogo from "../../assets/RipplingLogo.png";
import Image from "next/image";
import BlueStar from "../../assets/Bluestar.svg";
import WhiteStar from "../../assets/Whitestar.svg";
import HighLight from "../../assets/Highlight.svg";
function AboutUsBody() {
  return (
    <div>
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
        <Box className={styles.topBannerBox}>
          <Box className={styles.aboutUsBox}>
            <Typography
              variant="h1"
              component="h1"
              className={styles.BannerAboutus}
            >
              About Us
            </Typography>
          </Box>
          <Box className={styles.boxdis}>
            <Typography
              variant="h6"
              component="h6"
              className={styles.bannerDescription}
            >
              by subscribing now you will be able to access the material easily
              and cheaply, so you will be very efficient and benefit
            </Typography>
          </Box>
        </Box>
        <Box className={styles.headingBox}>
          <Box>
            <Typography variant="h2" component="h2" className={styles.heading}>
              Improving lives through learning
            </Typography>
          </Box>
          <Box className={styles.headingDescriptionBox}>
            <Typography
              variant="h6"
              component="h6"
              className={styles.headingDescription}
            >
              Whether you want to learn or to share what you know, you’ve come
              to the right place. As a global destination for online learning,
              we connect people through knowledge.
            </Typography>
          </Box>
        </Box>
        <Grid container className={styles.gridContainer}>
          <Grid md={6} xs={12} xl={6} className={styles.grid1Item}>
            <Box className={styles.grid1ItemBox}>
              <Box>
                <Image
                  src={visionIcon}
                  className={styles.grid1ItemBoxImg}
                  alt="visionMissionIcon"
                />
              </Box>
              <Box className={styles.visionParentBox}>
                <Box>
                  <Typography
                    variant="h6"
                    component="h6"
                    className={styles.visionTitle}
                  >
                    Vision
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="p" className={styles.visionDescription}>
                    Elit quam cras sollicitudin ridiculus commodo a eget.
                    Quisque magna tempus urna lectus. Nec tortor, vehicula nunc,
                    duis orci. Nunc urna.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid md={6} xs={12} xl={6}>
            <Box className={styles.imgBox}>
              <Box>
                <Image
                  src={missionIcon}
                  className={styles.grid1ItemBoxImg}
                  alt="visionMissionIcon"
                />
              </Box>
              <Box className={styles.visionParentBox}>
                <Box>
                  <Typography
                    variant="h6"
                    component="h6"
                    className={styles.visionTitle}
                  >
                    Mission
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="p" className={styles.visionDescription}>
                    Elit quam cras sollicitudin ridiculus commodo a eget.
                    Quisque magna tempus urna lectus. Nec tortor, vehicula nunc,
                    duis orci. Nunc urna.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography
            variant="h6"
            component="h6"
            className={styles.ourTeamTopography}
          >
            Our Team
          </Typography>
          <Box className={styles.desname}>
            <Typography variant="h6" className={styles.headingDescription}>
              Sloosh has a team of unique people and specialists in their
              respective fields. Sloosh welcomes talents from all kinds of
              different backgrounds and this allows us to continue to grow and
              learn from each other.
            </Typography>
          </Box>
        </Box>
        <Grid container className={styles.bottomGridContainer}>
          <Grid md={5}>
            <Image src={Boy2} className={styles.leftImg} />
          </Grid>
          <Grid md={7} sm={7}>
            <Typography variant="h6" className={styles.vastDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in
              ipsum condimentum tellus nisl quis tellus faucibus bibendum. Elit
              ornare morbi vitae ultrices. Ullamcorper tristique diam
              scelerisque arcu nam urna, sollicitudin orci, pharetra. Non risus
              egestas dui mauris ut congue consequat, a, vitae. Dignissim
              blandit quam vulputate pulvinar. Id venenatis in et nisi,
              parturient mi id pharetra cursus. Lacinia ut laoreet lectus
              libero. Tortor viverra donec rhoncus posuere lacus vel facilisis
              fringilla. Ullamcorper vitae turpis vitae risus, nisl. Viverra
              vitae ante id quisque adipiscing convallis. Eget justo, risus
              sapien nibh pulvinar.
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              className={styles.GustavoGeorge}
            >
              Gustavo George
            </Typography>
            <Typography variant="h6" className={styles.founder}>
              Founder
            </Typography>
          </Grid>
        </Grid>

        {/*  */}
        <Grid container className={styles.topGridContainer}>
          <Grid md={7} sm={7}>
            <Typography variant="h6" className={styles.vastDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in
              ipsum condimentum tellus nisl quis tellus faucibus bibendum. Elit
              ornare morbi vitae ultrices. Ullamcorper tristique diam
              scelerisque arcu nam urna, sollicitudin orci, pharetra. Non risus
              egestas dui mauris ut congue consequat, a, vitae. Dignissim
              blandit quam vulputate pulvinar. Id venenatis in et nisi,
              parturient mi id pharetra cursus. Lacinia ut laoreet lectus
              libero. Tortor viverra donec rhoncus posuere lacus vel facilisis
              fringilla. Ullamcorper vitae turpis vitae risus, nisl. Viverra
              vitae ante id quisque adipiscing convallis. Eget justo, risus
              sapien nibh pulvinar.
            </Typography>
            <Typography
              variant="h5"
              component="h5"
              className={styles.GustavoGeorge}
            >
              Jakob Ekstrom Bothman
            </Typography>
            <Typography variant="h6" className={styles.founder}>
              Founder
            </Typography>
          </Grid>
          <Grid md={5} sm={5}>
            <Image src={Boy1} className={styles.rightImg} />
          </Grid>
        </Grid>
        <Box className={styles.trustedText}>
          <Typography variant="h4" component="h4" className={styles.bigcompany}>
            We have been trusted by various big companies
          </Typography>
        </Box>
        <Grid container className={styles.contain}>
          <Grid md={2} xs={12} sm={12}>
            <Image src={SquareSpaceLogo} className={styles.margin} />
          </Grid>
          <Grid md={2} xs={12} sm={12}>
            <Image src={BaseCampLogo} className={styles.margin} />
          </Grid>
          <Grid md={2} xs={12} sm={12}>
            <Image src={AttentiveLogo} className={styles.margin} />
          </Grid>
          <Grid md={2} xs={12} sm={12}>
            <Image src={FramerLogo} className={styles.margin} />
          </Grid>
          <Grid md={2} xs={12} sm={12}>
            <Image src={GithubLogo} className={styles.margin} />
          </Grid>
          <Grid md={2} xs={12} sm={12}>
            <Image src={RipplingLogo} className={styles.margin} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AboutUsBody;
