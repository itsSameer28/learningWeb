import React from "react";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import curl from "../../assets/curl.svg";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./styles.module.css";

function Footer() {
  const router = useRouter();

  // Data for the footer lists and social media icons
  const companyList = [
    { name: "About Us", link: "aboutus" },
    { name: "Contact", link: "contactus" },
    { name: "Podcast", link: "https://starkes-muensterland.podigee.io/" },
    { name: "Blog", link: "blog" },
  ];
  const contactList = [
    { name: "Phone", link: "+91-1234567890" },
    { name: "Email", link: "support@cornelis.com" },
    { name: "Website", link: "http://learning-courses.surge.sh/" },
  ];
  // const supportList = ["Terms of Condition", "Privacy Policy", "FAQ"];
  const supportList = [
    {
      name: "Terms of Condition",
      link: "https://generator.lorem-ipsum.info/terms-and-conditions",
    },
    { name: "Privacy Policy", link: "https://loremipsum.io/privacy-policy/" },
    { name: "FAQ", link: "fAQ" },
  ];
  const socialIcons = [
    { name: faFacebook, link: "https://www.facebook.com/" },
    { name: faLinkedin, link: "https://in.linkedin.com/" },
    { name: faInstagram, link: "https://www.instagram.com/" },
  ];
  const telephone = [{ name: "+1 738 873 90", link: "+1 738 873 90" }];
  const textEmail = [{ name: "hi@company.com", link: "hi@company.com" }];
  // faFacebook, faLinkedin, faInstagram
  return (
    <Box className={styles.mainContainer}>
      <Box className={styles.footerContainer}>
        {/* Left section of the footer */}
        <Box className={styles.footerLeft}>
          {/* Top section of the left footer */}
          <Box className={styles.footerLeftTop}>
            <Box>
              {/* Logo */}
              <Image
                src={logo}
                className={styles.footerLogo}
                alt="logo"
                priority
              />
            </Box>
            <Box className={styles.headingContainer}>
              <Typography className={styles.mainHeading}>
                <b>
                  Find the best way to learn new things to improve your skills
                </b>
              </Typography>
            </Box>
          </Box>
          {/* Bottom section of the left footer */}
          <Box className={styles.footerLeftBottom}>
            <Box className={styles.contactContainers}>
              {/* Phone icon and text */}
              <Image src={phone} alt="phone" className={styles.contactLogo} />
              <Typography className={styles.contactText}>
                {telephone.map((value, index) => {
                  return (
                    <a
                      href={
                        value?.link?.includes("+1")
                          ? `tel:${value?.link}`
                          : `${value?.link}`
                      }
                    >
                      <b> {value?.name}</b>
                    </a>
                  );
                })}{" "}
              </Typography>
            </Box>
            <Box className={styles.contactContainers}>
              {/* Mail icon and text */}
              <Image src={mail} alt="mail" className={styles.contactLogo} />
              <Typography className={styles.contactText}>
                {textEmail.map((value, index) => {
                  return (
                    <a
                      href={
                        value?.link?.includes("@")
                          ? `mailto:${value?.link}`
                          : `${value?.link}`
                      }
                    >
                      <b> {value?.name}</b>
                    </a>
                  );
                })}{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Middle section of the footer */}
        <Box className={styles.footerMiddle}>
          <Image
            src={curl}
            alt="curl-design-middle-section"
            className={styles.curlImage}
          />
        </Box>
        {/* Right section of the footer */}
        <Box>
          <Box className={styles.listContainer}>
            {/* Company list */}
            <Box className={styles.list}>
              <Typography className={styles.listHeading}>
                <b>Company</b>
              </Typography>
              {companyList.map((value, index) => {
                return (
                  <a href={`${value?.link}`}>
                    <Typography
                      key={index}
                      className={styles.listItem}
                      onClick={() => {
                        if (value?.name === "Podcast") {
                          router.push(`${value?.link}`);
                        } else {
                          router.replace(`/${value?.link}`);
                        }
                      }}
                    >
                      {value?.name}
                    </Typography>
                  </a>
                );
              })}
            </Box>
            {/* Contact Us list */}
            <Box>
              <Box className={styles.list}>
                <Typography className={styles.listHeading}>
                  <b>Contact Us</b>
                </Typography>
                {contactList.map((value, index) => {
                  return (
                    <a
                      href={
                        value?.link?.includes("+91")
                          ? `tel:${value?.link}`
                          : value?.link?.includes("@")
                          ? `mailto:${value?.link}`
                          : `${value?.link}`
                      }
                    >
                      <Typography
                        key={index}
                        className={styles.listItem}
                        onClick={() => {
                          if (value?.name === "Website") {
                            router.push(`${value?.link}`);
                          } else {
                            router.replace(`/${value?.link}`);
                          }
                        }}
                      >
                        {value?.name}
                      </Typography>
                    </a>
                  );
                })}
              </Box>
            </Box>
            {/* Support list */}
            <Box>
              <Box className={styles.list}>
                <Typography className={styles.listHeading}>
                  <b>Support</b>
                </Typography>
                {supportList.map((value, index) => {
                  return (
                    <a href={`${value?.link}`}>
                      <Typography
                        key={index}
                        className={styles.listItem}
                        onClick={() => {
                          if (
                            value?.name === "Terms of Condition" ||
                            value?.name === "Privacy Policy"
                          ) {
                            router.push(`${value?.link}`);
                          } else {
                            router.replace(`/${value?.link}`);
                          }
                        }}
                      >
                        {value?.name}
                      </Typography>
                    </a>
                  );
                })}
              </Box>
            </Box>
            {/* Find Us list */}
            <Box>
              <Box className={styles.list}>
                <Typography className={styles.listHeading}>
                  <b>Find Us</b>
                </Typography>
                <Box className={styles.iconsContainer}>
                  {socialIcons.map((icon, index) => {
                    return (
                      <a href={`${icon?.link}`}>
                        <Box className={styles.socialIcon} key={index}>
                          <FontAwesomeIcon
                            onClick={() => router.push(`${icon?.link}`)}
                            icon={icon?.name}
                            style={{ height: "16px", fill: "#fff" }}
                          />
                        </Box>
                      </a>
                    );
                  })}
                  {/* {contactList.map((value, index) => {
                  return (
                    <a
                      href={
                        value?.link?.includes("+91")
                          ? `tel:${value?.link}`
                          : value?.link?.includes("@")
                          ? `mailto:${value?.link}`
                          : `${value?.link}`
                      }
                    >
                      <Typography
                        key={index}
                        className={styles.listItem}
                        onClick={() => {
                          if (value?.name === "Website") {
                            router.push(`${value?.link}`);
                          } else {
                            router.replace(`/${value?.link}`);
                          }
                        }}
                      >
                        {value?.name}
                      </Typography>
                    </a>
                  );
                })} */}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Bottom section of the footer */}
      <Box className={styles.footerBottom}>
        <Typography className={styles.copyrightText}>
          2023 logo inc. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
