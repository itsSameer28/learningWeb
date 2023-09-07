import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Image from "next/image";
import google from "../../assets/google.svg";
import CloseIcon from "@mui/icons-material/Close";
import { UserSignUp } from "../Api/Api";
import styles from "./styles.module.css";
import axios from "axios";
import { Cookie } from "@mui/icons-material";
import { cookies } from "next/dist/client/components/headers";
export default function SignUpModal({ open, handleOpen, handleClose }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const handleAllInput = () => {
    alert("Please Fill All Fields");
  };
  const handleSignUp = () => {
    try {
      axios
        .post(`${UserSignUp}/signup`, {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phoneNo: phoneNo,
        })
        .then((res) => {
          alert("Signup Successfully");
        });
    } catch (error) {
      console.log("error");
    }
    handleClose();
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className={styles.mainContainer}>
            <Box className={styles.innerContainer}>
              <Box className={styles.headingContainer}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    id="transition-modal-title"
                    className={styles.mainHeading}
                  >
                    Join with us now!
                  </Typography>
                  <Box
                    onClick={handleClose}
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      cursor: "pointer",
                    }}
                  >
                    <CloseIcon />
                  </Box>
                </Box>
                <Box className={{ width: "90%" }}>
                  <Typography className={styles.subHeading}>
                    Vitae integer pellentesque platea ipsum tristique turpis
                    eros, ante sollicitudin. Ut sed eleifend duis morbi.
                  </Typography>
                </Box>
              </Box>

              <Box className={styles.inputFieldsContainer}>
                <Box className={styles.nameContainer}>
                  <Box className={styles.name}>
                    <Typography className={styles.textLabel}>
                      First Name
                    </Typography>
                    <TextField
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="e.g.John"
                      InputProps={{
                        style: {
                          borderRadius: "12px",
                          height: "40px",
                          fontSize: "12px",
                          color: "#A79FB3",
                          fontWeight: "600",
                        },
                      }}
                      autoFocus
                    ></TextField>
                  </Box>

                  <Box className={styles.name}>
                    <Typography className={styles.textLabel}>
                      Last Name
                    </Typography>
                    <TextField
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      setLastName
                      placeholder="e.g.Tornto"
                      InputProps={{
                        style: {
                          borderRadius: "12px",
                          height: "40px",
                          fontSize: "12px",
                          color: "#A79FB3",
                          fontWeight: "600",
                        },
                        setLastName,
                      }}
                    ></TextField>
                  </Box>
                </Box>
                <Box className={styles.emailContainer}>
                  <Typography className={styles.textLabel}>
                    Your Email
                  </Typography>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.inputField}
                    placeholder="Insert your Email  here"
                    InputProps={{
                      style: {
                        borderRadius: "12px",
                        height: "40px",
                        fontSize: "12px",
                        color: "#A79FB3",
                        fontWeight: "600",
                      },
                    }}
                  />
                </Box>
                <Box className={styles.passwordContainer}>
                  <Typography className={styles.textLabel}>
                    Your Phone Number
                  </Typography>
                  <TextField
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    className={styles.inputField}
                    placeholder="Insert your Phone Number  here"
                    InputProps={{
                      style: {
                        borderRadius: "12px",
                        height: "40px",
                        fontSize: "12px",
                        color: "#A79FB3",
                        fontWeight: "600",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box className={styles.name}>
                    <Typography className={styles.textLabel}>
                      Your Password
                    </Typography>
                    <TextField
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="••••••••••"
                      InputProps={{
                        style: {
                          borderRadius: "12px",
                          height: "40px",
                          fontSize: "12px",
                          color: "#A79FB3",
                          fontWeight: "600",
                        },
                      }}
                    ></TextField>
                  </Box>

                  <Box className={styles.name}>
                    <Typography className={styles.textLabel}>
                      Confirm Password
                    </Typography>
                    <TextField
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      placeholder="••••••••••"
                      InputProps={{
                        style: {
                          borderRadius: "12px",
                          height: "40px",
                          fontSize: "12px",
                          color: "#A79FB3",
                          fontWeight: "600",
                        },
                      }}
                    ></TextField>
                  </Box>
                </Box>
              </Box>

              <Box className={styles.buttonsContainer}>
                {firstName &&
                lastName &&
                phoneNo &&
                email &&
                password &&
                confirmPassword ? (
                  <Button
                    className={styles.signInButton}
                    onClick={handleSignUp}
                  >
                    Sign up
                  </Button>
                ) : (
                  <Button
                    className={styles.signInButton}
                    onClick={handleAllInput}
                  >
                    Sign up
                  </Button>
                )}
                <Button className={styles.signInWithGoogleButton}>
                  <Image src={google} className={styles.googleLogo} />
                  <Typography className={styles.signInWithGoogleText}>
                    <b> Sign up with google</b>
                  </Typography>
                </Button>
              </Box>
              <Box className={styles.noAccountContainer}>
                <Typography className={styles.noAccountText}>
                  Already have an account?{" "}
                </Typography>
                <Typography className={styles.signupText}>Sign in</Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
