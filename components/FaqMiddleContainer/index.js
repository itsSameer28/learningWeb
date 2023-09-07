import { Grid, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import add from "../../assets/add.svg";
import minus from "../../assets/minus.svg";

export default function FaqMiddleContainer() {
  const [openId, setOpenId] = useState(-1);
  const [secondGridButton, setSecondGridButton] = useState(-1);

  const faqListHeading = [
    "Is It Subscription?",
    "I Don't Have The Software, Is It Provided?",
    "How do I buy more than 1 class at a time?",
    "Will This Class Guarantee Me To Be Good?",
    "What is Forever Access What is it?",
  ];
  const faqListsecondHeading = [
    "How is the Learning System?",
    "Is it permissible to share an account with others?",
    "Can I still access the material when I haven't accessed the class for a long time?",
    "Bagaimana Prosedur Bertanya Kepada Mentor ?",
    "Can I Refund/Change Class When I Have Purchased?",
  ];

  return (
    <Box>
      <Grid container sx={{ margin: "4rem 0 4rem 0" }}>
        <Grid md={6} sm={6} xs={12} xl={6} my={1}>
          {faqListHeading.map((item, index) => {
            return (
              <Box className={styles.faqList}>
                <Box className={styles.FaqListMain}>
                  <Box className={styles.faqListHeadingContainer}>
                    <Typography variant="h6" className={styles.heading}>
                      {item}
                    </Typography>
                    {openId !== index ? (
                      <Image
                        className={styles.icon}
                        alt="add icon"
                        src={add}
                        onClick={() => {
                          setOpenId(index);
                        }}
                      />
                    ) : (
                      <Image
                        alt="minus icon"
                        className={styles.icon}
                        src={minus}
                        onClick={() => {
                          setOpenId(-1);
                        }}
                      />
                    )}
                  </Box>
                  <Box
                    className={
                      openId === index
                        ? styles.animation
                        : styles.animationHidden
                    }
                  >
                    <Typography className={styles.secondHeading} variant=" h6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae eu sem adipiscing mauris maecenas eu lorem accumsan
                      ut. Odio at velit, fames dui vitae commodo, diam id. Morbi
                      consectetur condimentum non nisl viverra nam. Blandit
                      volutpat volutpat nibh amet lorem eu dictum bibendum odio.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
        <Grid md={6} sm={6} xs={12} xl={6} my={1}>
          {faqListsecondHeading.map((item, index) => {
            return (
              <Box className={styles.faqList}>
                <Box className={styles.FaqListMain}>
                  <Box className={styles.faqListHeadingContainer}>
                    <Typography variant="h6" className={styles.heading}>
                      {item}
                    </Typography>
                    {secondGridButton !== index ? (
                      <Image
                        alt="add icon"
                        className={styles.icon}
                        src={add}
                        onClick={() => {
                          setSecondGridButton(index);
                        }}
                      />
                    ) : (
                      <Image
                        alt="minus icon"
                        className={styles.icon}
                        src={minus}
                        onClick={() => {
                          setSecondGridButton(-1);
                        }}
                      />
                    )}
                  </Box>

                  <Box
                    className={
                      secondGridButton === index
                        ? styles.animation
                        : styles.animationHidden
                    }
                  >
                    {" "}
                    <Typography className={styles.secondHeading} variant=" h6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae eu sem adipiscing mauris maecenas eu lorem accumsan
                      ut. Odio at velit, fames dui vitae commodo, diam id. Morbi
                      consectetur condimentum non nisl viverra nam. Blandit
                      volutpat volutpat nibh amet lorem eu dictum bibendum odio.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
