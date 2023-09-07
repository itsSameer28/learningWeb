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
import styles from "./styles.module.css";
import axios from "axios";
import { UserSignUp } from "../Api/Api";
import { useRouter } from "next/router";
export default function LoginModal({ open, handleOpen, handleClose }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const handleLogin = () => {
    try {
      axios
        .post(`${UserSignUp}/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          localStorage.setItem(res.data.loginUser.token, "token");
          if (res.status === 200) {
            router.push("/plans");
          }
        });
    } catch (err) {
      console.log(err);
    }
    handleClose();
  };
  // React.useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   axios
  //     .get(`${UserSignUp}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((res) => {
  //       console.log(res, "response");
  //     });
  // }, []);
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
                    Hi, Welcome!
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
                    autoFocus
                  />
                </Box>
                <Box className={styles.passwordContainer}>
                  <Typography className={styles.textLabel}>
                    Your Password
                  </Typography>
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.inputField}
                    placeholder="••••••••••"
                    type="password"
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
              </Box>
              <Box className={styles.forgotPasswordContainer}>
                <Box className={styles.rememberMeContainer}>
                  <input type="checkbox" style={{ marginBottom: "4px" }} />
                  <Typography className={styles.rememberMeText}>
                    Remember Me
                  </Typography>
                </Box>
                <Box>
                  <Typography className={styles.forgotPasswordText}>
                    Forgot Password
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.buttonsContainer}>
                <Button className={styles.signInButton} onClick={handleLogin}>
                  Sign in
                </Button>
                <Button className={styles.signInWithGoogleButton}>
                  <Image src={google} className={styles.googleLogo} />
                  <Typography className={styles.signInWithGoogleText}>
                    <b> Sign in with google</b>
                  </Typography>
                </Button>
              </Box>
              <Box className={styles.noAccountContainer}>
                <Typography className={styles.noAccountText}>
                  Don’t have an account?{" "}
                </Typography>
                <Typography className={styles.signupText}>
                  Sign up for free
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
