import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { Box, ListItem, Typography, List, Button } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./styles.module.css";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";
import Link from "next/link";
import { useRef } from "react";
function Navbar({ pageName }) {
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const navbarRef = useRef(null);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //navbar items list
  const navItems = [
    "home",
    "plans",
    "courses",
    "fAQ",
    "about us",
    "contact us",
  ];

  const [openNavbar, setOpenNavbar] = useState(false);

  const handleToggleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  //this useEffect will setup the open and close of navbar
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1068) {
        setOpenNavbar(false);
      }
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (openNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openNavbar]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenNavbar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //navitem style
  const navItemStyle = {
    //navbar items style
    width: "auto",
    paddingLeft: "24px",
    display: openNavbar ? "block !important" : "flex",
    marginLeft: openNavbar && "30px",
    fontFamily: "Plus Jakarta Sans",
    fontSize: "14px",
  };

  //nav container style
  const navConatinerStyle = {
    //the nav conatiner style
    display: openNavbar ? "block !important" : "flex",
    justifyContent: "space-between",
  };

  const loginSignupButtonStyle = {
    // login signup button group style
    display: "flex",
    padding: "21px",
    marginLeft: openNavbar && "15px",
  };

  //navbar style
  const navbarStyle = { display: openNavbar ? "block !important" : "flex" };

  const navigationItemsContainer = {
    display: openNavbar ? "block !important" : "flex",
    paddingRight: "30px",
    "@media (max-width: 1088px)": {
      display: "none",
    },
  };

  return (
    <>
      <Box className={styles.mainContainerStyle} ref={navbarRef}>
        <Box sx={navConatinerStyle}>
          <Box className={styles.logoContainer}>
            <Link href={"/"}>
              <Image
                src={logo}
                className={styles.logoStyle}
                alt="logo"
                priority
              />
            </Link>
          </Box>
          <Box sx={navigationItemsContainer}>
            {/* Navigation items */}
            <List component="nav" sx={navbarStyle}>
              {navItems.map((navItem, index) => {
                return (
                  <ListItem key={index} sx={navItemStyle}>
                    <p
                      style={{
                        borderBottom: pageName === navItem && "2px solid black",
                        paddingBottom: "5px",
                        width: "fit-content",
                        textTransform: "capitalize",
                      }}
                    >
                      {navItem === "home" ? (
                        <Link href={`/`}> {navItem}</Link>
                      ) : (
                        <Link href={`/${navItem.split(" ").join("")}`}>
                          {" "}
                          {navItem}
                        </Link>
                      )}
                    </p>
                  </ListItem>
                );
              })}
            </List>
            {/* Login/Signup buttons */}
            <Box sx={loginSignupButtonStyle}>
              <Button
                className={styles.signupButtonStyle}
                onClick={() => handleOpen()}
              >
                Log in
              </Button>
              <Button
                className={styles.loginButtonStyle}
                onClick={() => handleOpenModal()}
              >
                Sign up
              </Button>
            </Box>
          </Box>
        </Box>
        {/* Navbar toggle button */}
        <Box className={styles.toggleButton} onClick={handleToggleNavbar}>
          {!openNavbar && <DensityMediumIcon />}
          {openNavbar && <CloseIcon />}
        </Box>
      </Box>
      <LoginModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <SignUpModal
        open={openModal}
        handleClose={handleCloseModal}
        handleOpen={handleOpenModal}
      />
    </>
  );
}

export default Navbar;
