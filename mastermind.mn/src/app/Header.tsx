import { Box, Typography, Container, Hidden, Stack, Icon, SvgIcon } from "@mui/material";
import Link from "next/link";
import { Instagram, Facebook, Twitter, YouTube } from "@mui/icons-material";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';





const Header = () => {
  return (
<Stack direction="column">
<Stack direction="row" bgcolor="rgb(255, 190, 2)" width="100%" height="32px">
<Stack flex={3}></Stack>
<Stack flex={3}></Stack>

<Stack
 flex={3}
 alignItems="center" 
 direction="row"  
 spacing={1.5}
 >   
  <PhoneIphoneIcon color="secondary" fontSize="small" />
 <Typography color="rgb(74, 40, 126)"> 
  7000-2266
 </Typography>

 <EmailIcon color="secondary" fontSize="small" />
 <Typography color="rgb(74, 40, 126)">
 support@mastermind.mn
 </Typography>
 <Stack height="100%" width="0.1px" bgcolor="rgb(74, 40, 126)"> </Stack>
  <Instagram color="secondary" fontSize="small" />
   <YouTube color="secondary" fontSize="small" />
   <Twitter color="secondary" fontSize="small" />
   <Facebook color="secondary" fontSize="small" /> 
</Stack>
<Stack flex={1}></Stack>

</Stack>  



<Stack direction="row" height="69px" width="100%"  bgcolor="rgb(74, 40, 126)" alignItems="center">  

<Stack height={100} width={180} bgcolor="rgb(74, 40, 126)"
 padding="24px" left="312px" top="0px" position="absolute">
<img src="logo.png" /> 
</Stack>

<Stack flex={1}>

</Stack>

<Stack direction="row" color="white" spacing={2} justifyContent="center" flex={1} >
<a href="#">ТАНИЛЦУУЛГА</a> 
<a href="#">СУРГАЛТ</a> 
<a href="#">САЛБАР</a>   
<a href="#">ФРАНЧАЙЗ</a> 
<a href="#">МЭДЭЭ</a> 
<a href="#">БҮТЭЭГДЭХҮҮН</a> 
<a href="#">ПРОГРАМ</a> 
<a href="#">ЭЛСЭЛТ</a> 
</Stack>

<Stack flex={1}> </Stack>


</Stack>
</Stack>
  )
};

export default Header;
