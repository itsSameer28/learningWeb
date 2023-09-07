import React, { useState } from "react";
import styles from "./style.module.css";
import { Box, Button, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import phoneicon from "../../assets/phoneicon.svg";
import messageicon from "../../assets/messageicon.svg";
import Image from "next/image";
import location from "../../assets/location.svg";
import { Input } from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import BlueStar from "../../assets/Bluestar.svg";
import WhiteStar from "../../assets/Whitestar.svg";
import HighLight from "../../assets/Highlight.svg";
function ContactUsBody() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");

  function handleSubmit() {
    // Clear previous errors
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPhoneNoError("");

    // Validation for First Name
    if (firstName.trim() === "") {
      setFirstNameError("First Name is required");
      return;
    } else if (firstName.length > 10) {
      setFirstNameError("First Name should not be longer than 10 characters");
      return;
    }

    // Validation for Last Name
    if (lastName.trim() === "") {
      setLastNameError("Last Name is required");
      return;
    } else if (lastName.length > 10) {
      setLastNameError("Last Name should not be longer than 10 characters");
      return;
    }

    // Validation for Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return;
    }

    // Validation for Phone Number
    if (!/^\d{10}$/.test(phoneNo)) {
      setPhoneNoError("Phone Number should be a 10-digit number");
      return;
    }
  }
  const telephone = [{ name: "+1 738 873 90", link: "+1 738 873 90" }];
  const textEmail = [{ name: "hello@company.com", link: "hello@company.com" }];
  const mapLocation = [
    {
      name: "105 Street, Seatle-US",
      link: "https://www.google.com/maps/place/Sector+43,+Chandigarh/@30.7190446,76.7384858,15z/data=!3m1!4b1!4m6!3m5!1s0x390fec32df9549b9:0xbb82cd32657fcb44!8m2!3d30.7190586!4d76.7487044!16s%2Fg%2F11bzs58n3b?entry=ttu",
    },
  ];
  return (
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
      <Box className={styles.topBannerBox}>
        <Box className={styles.contactUsBox}>
          <Typography
            variant="h1"
            component="h1"
            className={styles.BannerAboutus}
          >
            Get In Touch
          </Typography>
        </Box>
        <Box className={styles.boxdis}>
          <Typography
            variant="h5"
            component="h5"
            className={styles.bannerDescription}
          >
            Contact Us
          </Typography>
        </Box>
      </Box>
      {/*  */}

      <Grid container className={styles.form}>
        <Grid md={4} xs={12} xl={4} my={2} style={{ marginTop: "31px" }}>
          <Box>
            <Typography variant="h2" className={styles.Heading}>
              Contact information
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" className={styles.headingDescription}>
              Fill up the form and our team will get back to you with in 24
              hours.
            </Typography>
          </Box>
          <Box className={styles.contactDetails}>
            <Box className={styles.iconwidth}>
              <Image src={phoneicon} />
            </Box>
            <Box className={styles.textwidth}>
              {telephone.map((value, index) => {
                return (
                  <a
                    href={
                      value?.link?.includes("+1")
                        ? `tel:${value?.link}`
                        : `${value?.link}`
                    }
                  >
                    <Typography variant="body1" className={styles.number}>
                      {" "}
                      {value?.name}{" "}
                    </Typography>
                  </a>
                );
              })}{" "}
            </Box>
          </Box>
          {/*  */}
          <Box className={styles.contactDetails}>
            <Box className={styles.iconwidth}>
              <Image src={messageicon} />
            </Box>
            <Box className={styles.textwidth}>
              {textEmail.map((value, index) => {
                return (
                  <a
                    href={
                      value?.link?.includes("@")
                        ? `mailto:${value?.link}`
                        : `${value?.link}`
                    }
                  >
                    <Typography variant="body1" className={styles.number}>
                      {" "}
                      {value?.name}{" "}
                    </Typography>
                  </a>
                );
              })}{" "}
            </Box>
          </Box>
          <Box className={styles.contactDetails}>
            <Box className={styles.iconwidth}>
              <Image src={location} />
            </Box>
            <Box className={styles.textwidth}>
              {mapLocation.map((value, index) => {
                return (
                  <a href={`${value?.link}`}>
                    <Typography variant="body1" className={styles.number}>
                      {value?.name}{" "}
                    </Typography>
                  </a>
                );
              })}{" "}
            </Box>
          </Box>
        </Grid>
        <Grid md={6} xs={12} xl={8} my={4}>
          <Box>
            <Box className={styles.contains}>
              <Typography variant="h2" className={styles.container2firstname}>
                First Name
              </Typography>
              <Input
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className={styles.inputContainer}
                placeholder="Insert your first name"
                disableUnderline
              />
              {firstNameError && (
                <Typography className={styles.error} variant="body1">
                  {firstNameError}
                </Typography>
              )}
            </Box>
            <Box className={styles.contains}>
              <Typography variant="h2" className={styles.container2firstname}>
                Last Name
              </Typography>
              <Input
                required
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className={styles.inputContainer}
                placeholder="Insert your last name"
                disableUnderline
              />
              {lastNameError && (
                <Typography className={styles.error} variant="body1">
                  {lastNameError}
                </Typography>
              )}
            </Box>
            <Box className={styles.contains}>
              <Typography variant="h2" className={styles.container2firstname}>
                Email
              </Typography>
              <Input
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={styles.inputContainer}
                placeholder="Insert your email"
                disableUnderline
              />
              {emailError && (
                <Typography className={styles.error} variant="body1">
                  {emailError}
                </Typography>
              )}
            </Box>
            <Box className={styles.contains}>
              <Typography variant="h2" className={styles.container2firstname}>
                Phone Number
              </Typography>
              <Input
                required
                value={phoneNo}
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                className={styles.inputContainer}
                placeholder="Insert your phone number"
                disableUnderline
              />
              {phoneNoError && (
                <Typography className={styles.error} variant="body1">
                  {phoneNoError}
                </Typography>
              )}
            </Box>
            <Box className={styles.contains}>
              <Typography variant="h2" className={styles.container2discription}>
                Message the host (Optional)
              </Typography>

              <Textarea
                minRows={4}
                size="lg"
                color="none"
                placeholder="Type here..."
                className={styles.inputContainer}
              />
            </Box>
            <Box>
              <Button
                className={styles.button}
                type="submit"
                color="primary"
                variant="contained"
                onClick={() => handleSubmit()}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUsBody;
