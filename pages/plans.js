import React from 'react'
import { Navbar, Footer, PlansHeader } from '../components'
import { Box, ListItem, Typography, List, Button } from "@mui/material";
import Head from 'next/head';
import AppPlans from '../components/AppPlans';

export default function plans() {
  return (
    <>
      
      <Box>
      <Head>
        <title>Plans</title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans&family=Plus+Jakarta+Sans&family=Red+Hat+Display&display=swap');
        </style>
      </Head>
        <Box>
          <Navbar pageName={"plans"}/>
        </Box>
        <Box >
          <PlansHeader />
        </Box>
        <Box >
          <AppPlans/>
        </Box>
        <Box>
          <Footer />
        </Box>

      </Box>
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
    </>
  )
}
