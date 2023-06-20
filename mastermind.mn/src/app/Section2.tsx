import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ST } from "next/dist/shared/lib/utils";
import Link from "next/link";

const Layout2 = () => {
  return (
    <Stack className="page2" direction="column" height="100vh" width="100vw" bgcolor="white">
      <Container>
        <Stack direction="row" flex={1} spacing={6}>
          <Stack height="170px" flex={1} direction="row" boxShadow={3} borderRadius={3} overflow="hidden">
            <Stack height="170px" width="216px">
              <img src="history1.jpg" />
            </Stack>
            <Stack height="170px" width="264px" textAlign="center">
              TEXT
            </Stack>
          </Stack>

          <Stack height="170px" flex={1} direction="row" boxShadow="rgba(0, 0, 0, 0.3) 0px 1px 10px 1px">
            <Stack height="170px" width="336px">
              <img src="history3.jpg" alt="" />
            </Stack>
            <Stack height="170px" width="384px" bgcolor="white">
              TEXT
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="column" my={20}>
          <Stack direction="row">
            <Stack direction="row" flex={1} height="5px" bgcolor="blue" alignItems="flex-start">

              <Stack alignItems="center">
                <Stack bgcolor="blue" height="100px" width="2px" position="absolute"></Stack>
                <Stack bgcolor="orange" borderRadius={3} py={0.5} px={1} zIndex={2}>
                  2010
                </Stack>
              </Stack>

              <Stack alignItems="center" direction="column-reverse">
              <Stack bgcolor="blue" height="100px" width="2px" position="absolute"></Stack>
                <Stack bgcolor="orange" borderRadius={3} py={0.5} px={1} zIndex={2}>
                  2020
                </Stack>
              </Stack>

              <Stack alignItems="center">
                <Stack bgcolor="blue" height="100px" width="2px" position="absolute"></Stack>
                <Stack bgcolor="orange" borderRadius={3} py={0.5} px={1} zIndex={2}>
                  2010
                </Stack>
              </Stack>



            </Stack>

            <Stack direction="row">
              <Stack height="5px" width="80px" borderRadius="2px" ml="20px" bgcolor="blue"></Stack>
              <Stack height="5px" width="80px" borderRadius="2px" ml="20px" bgcolor="blue"></Stack>
              <Stack height="5px" width="80px" borderRadius="2px" ml="20px" bgcolor="blue"></Stack>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="row" flex={1} spacing={6}>
          <Stack height="200px" width="600px" direction="row" boxShadow="rgba(0, 0, 0, 0.3) 0px 1px 10px 1px">
            <Stack height="200px" width="276px">
              <img src="history2.jpg" alt="" />
            </Stack>
            <Stack height="200px" width="100%" bgcolor="white" textAlign="center">
              TEXT
            </Stack>
          </Stack>

          <Stack height="200px" width="600px" direction="row" boxShadow="rgba(0, 0, 0, 0.3) 0px 1px 10px 1px">
            <Stack height="200px" width="276px">
              <img src="history4.jpeg" />
            </Stack>
            <Stack height="200px" width="100%" bgcolor="white" textAlign="center">
              TEXT
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Layout2;
