import { Box, Typography, Container, Hidden, Stack, Icon, SvgIcon } from "@mui/material";
import Link from "next/link";
import { CustomButton } from "@/components";
import { Instagram, Facebook, Twitter, YouTube } from "@mui/icons-material";

const Header = () => {
  return (
    <Stack bgcolor="#EAF5F5" maxWidth="100vw" position="relative" pb={28.125}>
      <Container>
        <Stack mt={7.5} bgcolor="#EAF5F5">
          <Stack flex={1} direction="row">
            <Box flex={1} display="flex" alignItems="center">
              <img src="/memok.png" alt="" />
            </Box>
            <Stack direction="row" spacing={1}>
              <Hidden smDown={true}>
                <Stack direction="row" alignItems="center" spacing={4} marginRight={3}>
                  <Link href="Home">
                    <Typography>Home</Typography>
                  </Link>
                  <Link href="About">
                    <Typography>About</Typography>
                  </Link>
                  <Link href="#">
                    <Typography>Download</Typography>
                  </Link>
                  <Link href="contact">
                    <Typography>Contact</Typography>
                  </Link>
                </Stack>
              </Hidden>
              <Stack direction="row" alignItems="center" spacing={1} color="secondary.dark">
                <Hidden mdDown={true}>
                  <Facebook fontSize="small" />
                  <Instagram fontSize="small" />
                  <YouTube fontSize="small" />
                  <Twitter fontSize="small" />
                </Hidden>
                <img src="/English.png" alt="" />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems="center" justifyContent="center" mt={7.5}>
          <Typography variant="h1" textAlign="center" component="div">
            Mongolian Intellectual <br />
            Academy{" "}
          </Typography>
          <Typography variant="body1" mt={3}>
            The best way to learn and practice your brain powerful.
          </Typography>
          <Stack direction="row" spacing={2} mt={3}>
            <CustomButton variant="contained" color="info">
              Download
            </CustomButton>
            <CustomButton variant="outlined" color="primary">
              Contact Seller
            </CustomButton>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
