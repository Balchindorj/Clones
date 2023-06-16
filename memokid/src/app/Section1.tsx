import React, { useState } from "react";
import { Box, Typography, Container, Hidden, Stack } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";
import { CustomImg, CustomButton } from "@/components";

const Layout1 = () => {
  return (
    <Stack bgcolor="#EAF5F5" maxWidth="100vw" position="relative" pb={28.125}>
      <Container>
        <Stack position="absolute" bottom={-225} height={450} sx={{ overflowX: "hidden" }} left={0} right={0}>
          <Stack direction="row" spacing={6} alignItems="center" justifyContent="center" position="relative">
            <Hidden smDown={true}>
              <CustomImg src="/ohin1.png" alt="" />
            </Hidden>
            <CustomImg src="/ohin2.png" alt="" />
            <Hidden smDown={true}>
              <CustomImg src="/ohin3.png" alt="" />
            </Hidden>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Layout1;
