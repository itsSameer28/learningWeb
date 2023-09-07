import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import test1 from "../../assets/test1.svg";
import StarRateIcon from "@mui/icons-material/StarRate";
import styles from "./styles.module.css"
function TestimonialCard() {
  return (
    <Box
      className={styles.mainContainer}
    >
      {/* testimonial content */}
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Image src={test1} style={{ height: "75px", width: "75px" }} />
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}
      >
        <Typography
          sx={{
            fontSize: "13px",
            color: "#322F37",
            lineHeight: "28px",
            fontWeight: "500",
            fontFamily: "Plus Jakarta Sans",
            color: "#322F37",
          }}
        >
          Elit quam cras sollicitudin ridiculus commodo a eget. Quisque magna
          tempus urna lectus. Nec tortor, vehicula nunc, duis orci.
        </Typography>
      </Box>
      <Box
        sx={{
          borderTop: "1px solid #A79FB3",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          paddingTop: "15px",
          alignItems: "center",
          boxShadow: "90px 0px 90px 0px rgba(225, 217, 236, 0.40);",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography
              style={{
                margin: 0,
                fontSize: "13px",
                fontWeight: "600",
                fontFamily: "Plus Jakarta Sans",
                color: "#322F37",
              }}
            >
              Frederica Koen
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                margin: 0,
                fontSize: "13px",
                fontFamily: "Plus Jakarta Sans",
                color: "#322F37",
              }}
            >
              @fredericakoen
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <StarRateIcon
            sx={{ color: "#FFD05B", height: "18px", width: "18px" }}
          />
          <StarRateIcon
            sx={{ color: "#FFD05B", height: "18px", width: "18px" }}
          />
          <StarRateIcon
            sx={{ color: "#FFD05B", height: "18px", width: "18px" }}
          />
          <StarRateIcon
            sx={{ color: "#FFD05B", height: "18px", width: "18px" }}
          />
          <StarRateIcon
            sx={{ color: "#FFD05B", height: "18px", width: "18px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default TestimonialCard;
