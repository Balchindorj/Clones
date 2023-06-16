import { CustomButton } from "@/components";
import CustomImg from "@/components/CustomImg";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";

const Layout2 = () => {
  return (
    <Stack bgcolor="#FFF" pt={28.125}>
      <Container>
        <Stack direction={{ md: "row", xs: "column" }} mt={15} mb={13.8} spacing={4}>
          <Stack flex={1}>
            <Stack>
              <Stack spacing={1.25} mb={5} alignItems={{xs: "center"  ,lg: "flex-start"}}>
                <CustomImg src="/memorykid.png" height={40} />

                <Typography variant="h3" color="#583F99">
                  Дасгалын программ
                </Typography>
              </Stack>

              <Stack>
                <Typography variant="body1">
                  Монголын Оюун Ухааны Академ Та бүхэнд ой тогтоолтын хөтөлбөрт зориулсан дасгалын MemoKid Math
                  програмаа хүргэж байна. Амжилт хүсье!
                </Typography>

                {/* <Stack direction={{ md: "row", xs: "column-reverse" }} */}

                <Stack direction="row" spacing={{xs: "1", md: "2" }} mt={5} mb={3}
              gap={2}
              justifyContent={{xs: "space-evenly", md: "flex-start"}}>
                  <CustomButton variant="contained" color="primary">
                    Windows хувилбар татах
                  </CustomButton>
                  <Box mt={2.5}>
                    <Link href="#">
                      <CustomButton>Мас хувилбар татах</CustomButton>
                    </Link>
                  </Box>
                </Stack>
                <Typography textAlign={{ xs: "center", lg: "start" }}>Программын хувилбар 3.0.8</Typography>

                <Typography variant="h6" mt={5}>
                  Системийн шаардлага
                </Typography>
                <Typography variant="body1" mt={1.25}>
                  Super Memory програм нь Mac болон Windows үйлдлийн системд зориулагдан бүтээгдсэн ба хамгийн багадаа дараах үзүүлэлт бүхий систем дээр ажиллана. <br />
                  Windows: Windows 8 болон түүнээс дээш хувилбар Windows
                  7(64bit)-ийн сүүлийн үеийн хувилбар дээр ажиллана. <br />
                  Mac: Mac OS 10.13 болон түүнээс дээш хувилбар
                  Програмаа суулгахаас өмнө үйлдлийн системээ сайтар шалгаарай.
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Box flex={1} sx={{ display: "flex", justifyContent: "center" }}>
            <CustomImg src="/image1.png" />
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Layout2;
