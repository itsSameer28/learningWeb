import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import plansData from "../../plansData.json";
import tick from "../../assets/tick.svg";
import Circle from "../../assets/checkCircleWhite.svg";
import Image from "next/image";
import styles from "./styles.module.css";

function AppPlans() {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [mouseEnterId, setMouseEnterId] = useState(-1);

  const textWhite = {
    color: mouseEnter && "#fff !important",
  };

  const mainBackground = {
    backgroundColor: mouseEnter && "#253C6E !important",
    transform: "translate(0px, -50px)",
    transition: "transform 1.9s",
    boxShadow: "0px 42px 34px 0px rgba(82, 67, 194, 0.30)",
  };
  return (
    <Box className={styles.mainContainer}>
      {plansData.map((plan, index) => {
        return (
          <>
            
            <Box
              key={plan?.id}
              className={styles.planCard}
              onMouseEnter={() => {
                setMouseEnterId(index);
                setMouseEnter(true);
              }}
              onMouseLeave={() => {
                setMouseEnterId(-1);
                setMouseEnter(false);
              }}
              sx={index === mouseEnterId && mainBackground}
            >
              {index === mouseEnterId && plan?.type === "Pro" && (
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography
                  sx={{
                    color: "red",
                    backgroundColor: "#E1E9FD",
                    padding: "6px 15px",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    color: "#16629C",
                    borderRadius: "15px",
                  }}
                >
                  Most Popular
                </Typography>
              </Box>
            )}
              <Box>
                <Box className={styles.planCardPriceSection}>
                  <Typography
                    className={styles.planCardPrice}
                    sx={index === mouseEnterId && textWhite}
                  >
                    {plan?.price}
                  </Typography>
                  <Typography
                    className={styles.priceSeparator}
                    sx={index === mouseEnterId && textWhite}
                  >
                    /
                  </Typography>
                  <Typography
                    className={styles.planValue}
                    sx={index === mouseEnterId && textWhite}
                  >
                    {plan?.value}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    className={styles.planType}
                    sx={index === mouseEnterId && textWhite}
                  >
                    {plan?.type}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    className={styles.planDescription}
                    sx={index === mouseEnterId && textWhite}
                  >
                    {plan?.description}
                  </Typography>
                </Box>
                <Box>
                  <ul className={styles.listStyle}>
                    {plan?.features?.map((item, id) => {
                      return (
                        <li key={id}>
                          <Box className={styles.listItemContainer}>
                            <Image
                              src={index === mouseEnterId ? Circle : tick}
                            />
                            <Typography
                              className={styles.listItemValue}
                              sx={index === mouseEnterId && textWhite}
                            >
                              {" "}
                              {item.name}
                            </Typography>
                          </Box>
                        </li>
                      );
                    })}
                  </ul>
                </Box>
              </Box>
              <Box className={styles.buttonContainer}>
                <Button
                  className={styles.buttonStyle}
                  sx={{
                    color: index === mouseEnterId && "#fff !important",
                    backgroundColor: index === mouseEnterId && "#16629C",
                  }}
                >
                  Choose Plan
                </Button>
              </Box>
            </Box>
          </>
        );
      })}
    </Box>
  );
}

export default AppPlans;
