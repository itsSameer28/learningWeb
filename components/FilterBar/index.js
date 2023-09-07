import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import filter from "../../assets/filter.png";
import Image from "next/image";
function valuetext(value) {
  return `${value}°C`;
}

function FilterBar() {
  const category = [
    "All",
    "Design",
    "Business",
    "Programming",
    "Health",
    "Finance",
    "Art",
  ];
  const minDistance = 10;

  const discount = ["All", "Year Sale", "Flash Sale"];
  const [value1, setValue1] = React.useState([20, 37]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([20, 37]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  const [openFilterBar, setOpenFilterBar] = useState(false);

  const handleFilterTogglebar = () => {
    setOpenFilterBar(!openFilterBar);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1206) {
        setOpenFilterBar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const mainContainer = {
    padding: "36px",
    display: openFilterBar ? "block !important" : "block",
    position: openFilterBar && "absolute",
    width: "100%",
    zIndex: "996",

    backgroundColor: "white",
    "@media (max-width: 1024px)": {
      display: "none ",
    },
    "@media (max-width: 500px)": {
      display: "none ",
      height: "11%",
      overflow: "scroll",
    },
    "@media (max-width: 800px)": {
      display: "none ",
      height: "11%",
      overflow: "scroll",
    },
    "@media (max-width: 280px)": {
      padding: "18px",
    },
  };

  return (
    <div>
      <Box sx={mainContainer}>
        <Box className={styles.filterBarContainer}>
          <Box>
            <Typography className={styles.filterStyle}>
              <b>Filter</b>
            </Typography>
          </Box>
          <Box>
            <button className={styles.resetButtonStyle}>
              <b>Reset Filter</b>
            </button>
          </Box>
        </Box>
        <Box className={styles.filterContentContainer}>
          <Box>
            <Typography className={styles.categoryStyle}>Category</Typography>
          </Box>
          <Box className={styles.categoryContainer}>
            {category.map((value, index) => {
              return (
                <Box className={styles.categoryFields}>
                  <input
                    type="checkbox"
                    id={index}
                    name="vehicle1"
                    value={value}
                    style={{ color: "#8A8394" }}
                  />
                  <label for="vehicle1" style={{ color: "#8A8394" }}>
                    {value}
                  </label>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box>
          <Box sx={{ marginTop: "15px" }}>
            <Typography className={styles.discountStyle}>Price</Typography>
          </Box>
          <Box
            sx={{
              width: 300,
              "@media (max-width: 280px)": {
                width: "unset",
              },
            }}
          >
            <Box className={styles.priceBarStyle}>
              <Typography sx={{ color: "#8A8394" }}>${value1[0]}</Typography>
              <Typography sx={{ color: "#8A8394" }}>${value1[1]}</Typography>
            </Box>
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              getAriaValueText={valuetext}
              disableSwap
              sx={{ color: "#16629C" }}
            />
          </Box>
        </Box>
        <Box>
          <Box sx={{ marginTop: "5px" }}>
            <Typography className={styles.discountStyle}>Discounts</Typography>
          </Box>
          <Box className={styles.discountContainer}>
            {discount.map((value, index) => {
              return (
                <Box className={styles.discountFields}>
                  <input
                    type="checkbox"
                    id={index}
                    name="vehicle1"
                    value={value}
                    style={{ color: "#8A8394" }}
                  />
                  <label for="vehicle1" style={{ color: "#8A8394" }}>
                    {value}
                  </label>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box
        className={styles.toggleButtonContainer}
        onClick={handleFilterTogglebar}
      >
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <Typography sx={{ color: "black", marginTop: "2px" }}>
            Filter
          </Typography>
          {!openFilterBar && <Image src={filter} className={styles.filter} />}
          {openFilterBar && <Image src={filter} className={styles.filter} />}
        </Box>
      </Box>
    </div>
  );
}

export default FilterBar;
