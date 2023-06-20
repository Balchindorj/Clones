import { Stack, Typography } from "@mui/material";

interface Props {
  position: "left" | "right";
  number: number;
  title: string;
}

const A = ({ position, number, title }: Props) => {
  const content = (
    <Stack border="1px solid #DAC5A7" spacing={2} flex={1}>
      <Typography variant="h5" color="#fff">
        {title}
      </Typography>
    </Stack>
  );


  //   if(position === 'left'){
  //     return content
  //   }else{
  //     return <Stack flex={1} />
  //   }

  return (
    <Stack flex={1} direction="row">
      {position === "left" ? (
        content
      ) : (
        <Stack flex={1} bgcolor="orange" border="1px solid transparent" />
      )}
      <Stack alignItems="center" spacing={1}>
        <Stack height={200} width="1px" bgcolor="#dac5a7"></Stack>
        <Stack
          width="30px"
          height="30px"
          borderRadius="15px"
          bgcolor="grey"
          color="#dac5a7"
          textAlign="center"
          justifyContent="center"
        >
          <Typography>{number}</Typography>
        </Stack>
        <Stack height={200} width="1px" bgcolor="#dac5a7"></Stack>
      </Stack>
      {position === "right" ? (
        content
      ) : (
        <Stack flex={1} bgcolor="yellow" border="1px solid transparent" />
      )}
    </Stack>
  );
};

export default A;
