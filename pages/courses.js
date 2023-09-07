import React from "react";
import { Navbar, Footer } from "../components";
import CourseDetailsMain from "../components/CourseDetailsMain";
import Head from "next/head";
const Home = () => {
  return (
    <div>
      <Head>
        <title>Courses</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&family=Plus+Jakarta+Sans&family=Red+Hat+Display&display=swap');
        </style>
      </Head>
      <header>
        <Navbar pageName={"courses"} />
      </header>
      <CourseDetailsMain />
      <footer>
        <Footer />
      </footer>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0 !important;
          font-family: "Plus Jakarta Sans";
        }
        * {
          box-sizing: border-box;
        }
        a,
        a:hover,
        a:visited,
        a:active {
          color: inherit;
          text-decoration: none;
        }
        /* width */
        ::-webkit-scrollbar {
          width: 5px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey;
          border-radius: 10px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #464646;
          border-radius: 10px;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #313131;
        }
      `}</style>
    </div>
  );
};

export default Home;
