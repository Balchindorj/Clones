import React, { useRef, useEffect } from "react";
import { Box, Typography, Container, Hidden, Stack } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import A from "@/components/A";

const Layout1 = () => {
  return (
    <Stack
      bgcolor="black"
      width="100vw"
      direction="column"
      position="relative"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        height={40}
        width={500}
        bgcolor="rgba(218, 197, 167, 0.05)"
        position="fixed"
        border="1px solid rgba(218, 197, 167, 0.15)"
        direction="row"
        top="4%"
        spacing={4}
        color="rgba(218, 197, 167, 1)"
        alignItems="center"
        padding="12px 12px 12px 20px"
        zIndex={2}
      >
        <Typography>arik</Typography>
        <Typography>SERVICES</Typography>
        <Typography>WORK</Typography>
        <Typography>ABOUT</Typography>
        <Typography>BLOG</Typography>
        <Typography padding="10px 16px">LET'S TALK</Typography>
      </Stack>

      <Box position="relative">
        <img src="/next.webp" height={622} width={500} />x
      </Box>

      <Stack textAlign="center" spacing={5}>
        <Typography variant="h1" color="#dac5a7">
          Web Designer & Developer
        </Typography>
        <Typography color="#dac5a7">
          Premium Web Design, Development, and SEO services to help your
          business stand out.
        </Typography>
      </Stack>

      <Stack direction="column" mb={5} mt={5} spacing={5}>
        <Stack>
          <SouthIcon color="primary" />
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          marginLeft="auto"
          marginRight="auto"
          spacing={5}
        >
          <Stack
            spacing={1.5}
            height={200}
            width={445}
            border="1px solid #DAC5A7"
            textAlign="center"
          >
            <Typography color="#dac5a7">01</Typography>
            <Typography variant="h5" color="#dac5a7">
              {" "}
              WEB DESIGN{" "}
            </Typography>
            <Typography color="#dac5a7">
              Visually stunning web designs that captivate your audience by
              blending your brand voice and customer needs.
            </Typography>
            <Stack direction="row" spacing={2}>
              {" "}
              <NorthEastIcon color="primary" />
              <Typography color="#dac5a7"> ABOUT WEB DESIGN </Typography>{" "}
            </Stack>
          </Stack>

          <Stack
            spacing={1.5}
            height={200}
            width={445}
            border="1px solid #DAC5A7"
            textAlign="center"
          >
            <Typography color="#dac5a7">02</Typography>
            <Typography variant="h5" color="#dac5a7">
              {" "}
              DEVELOPMENT{" "}
            </Typography>
            <Typography color="#dac5a7">
              Get custom web development solutions that are tailored to your
              specifications, designed to deliver a flawless user experience.
            </Typography>
            <Stack direction="row" spacing={2}>
              <NorthEastIcon color="primary" />{" "}
              <Typography color="#dac5a7"> ABOUT DEVELOPMENT </Typography>{" "}
            </Stack>
          </Stack>

          <Stack
            spacing={1.5}
            height={200}
            width={445}
            border="1px solid #DAC5A7"
            textAlign="center"
          >
            <Typography color="#dac5a7">03</Typography>
            <Typography variant="h5" color="#dac5a7">
              {" "}
              CONTENT & SEO{" "}
            </Typography>
            <Typography color="#dac5a7">
              Proven SEO strategies that enhance your online performance,
              bringing you to the forefront of organic search results.
            </Typography>
            <Stack direction="row" spacing={2} mt={40}>
              <NorthEastIcon color="primary" />{" "}
              <Typography color="#dac5a7"> ABOUT SEO </Typography>{" "}
            </Stack>
          </Stack>
        </Stack>
        {""}
        <Stack>
          <A position="left" title="ene bol garjig" number={1111} />
          <A position="right" title="" number={2} />
          <A position="left" title="" number={3} />
          <A position="right" title="" number={4} />
        </Stack>
        {}{" "}
      </Stack>
    </Stack>
  );
};

export default Layout1;
