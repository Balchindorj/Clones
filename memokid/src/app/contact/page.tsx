"use client";
import { CustomButton } from "@/components";
import CustomImg from "@/components/CustomImg";
import { Margin } from "@mui/icons-material";
import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Stack direction="row" spacing={20} >
        <Stack direction="row" alignItems="center" border={1} flex={2}>
          <img src="/image1.png" width={170} style={{ objectFit: "contain" }} />
          <Box> Монголын Оюун Ухааны Академи анх үүсгэн байгуулагдаж анхны үндэс суурь тавигдсан. </Box>
        </Stack>

        <Stack direction="row" alignItems="center" border={1} flex={3}>
          <img src="/image1.png" width={170} style={{ objectFit: "contain" }} />
          <Box>
            2021 оны 4 сарын 5-наас 11-ний хооронд онлайн хэлбэрээр Спорт өрөлтийн Дэлхийн аваргын тэмцээнд 27 улсын 611
            тамирчин оролцож манай улсаас 33 тамирчин өрсөлдсөн.{" "}
          </Box>
        </Stack>
      </Stack>

      <Stack justifyContent="center" position="relative" height={150}>
        <Box width="100%" height={3} bgcolor="blue" />
        <Stack
          left={60}
          right={160}
          top={0}
          bottom={0}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          zIndex={2}
          position="absolute"
        >
          <Stack alignItems="center" height="100%">
            <Box width="1px" bgcolor="red" height="50%" />
            <Box width={30} height={20} bgcolor="orange" borderRadius={2} />
            <Box width="1px" height="50%" />
          </Stack>

          <Stack alignItems="center" height="100%">
            <Box width="1px" height="50%" />
            <Box width={30} height={20} bgcolor="orange" borderRadius={2} />
            <Box width="1px" bgcolor="red" height="50%" />
          </Stack>

          <Stack alignItems="center" height="100%">
            <Box width="1px" bgcolor="red" height="50%" />
            <Box width={30} height={20} bgcolor="orange" borderRadius={2} />
            <Box width="1px" height="50%" />
          </Stack>

          <Stack alignItems="center" height="100%">
            <Box width="1px" height="50%" />
            <Box width={30} height={20} bgcolor="orange" borderRadius={2} />
            <Box width="1px" bgcolor="red" height="50%" />
          </Stack>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={20}>
        <Stack direction="row" alignItems="center" border={1} flex={1}>
          <img src="/image1.png" width={170} style={{ objectFit: "contain" }} />
          <Box>
            Монголын Оюун Ухааны Академийн Өвөрхангай аймаг дахь гэрээт салбар нь 2020 оны 9 сарын 29-нд нээлтээ хийж,
            оюуны хөгжлийн хөтөлбөрийг хэрэгжүүлэх албан ёсны эрхтэйгээр сургалтын үйл ажиллагаагаа эхлүүлээ.
          </Box>
        </Stack>

        <Stack direction="row" alignItems="center" border={1} flex={1}>
          <img src="/image1.png" width={170} style={{ objectFit: "contain" }} />
          <Box>
            2021 оны 7 сарын 8-нд Байгалийн сайхан Тэрэлжид 6-12 дугаар ангийн сурагчид дотуур байрандаа байрлаад,
            суралцах боломжтой Terelj Boarding School / Кембриджийн хөтөлбөр бүхий бүрэн дунд сургуультай боллоо.
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
