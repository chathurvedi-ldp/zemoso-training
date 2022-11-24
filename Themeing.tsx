import { createTheme } from "@mui/system";
import { purple } from "@mui/material/colors";

export const theme=createTheme({
  typography:{
    h1:{
      fontFamily:'Gilroy',
      fontWeight:600,
      fontSize:'24px',
      lineHeight:'29.4px',
      letterSpacing:'-0.5%',
    },
    h2:{
      fontFamily:'Gilroy',
      fontWeight:500,
      fontSize:'18px',
      lineHeight:'27px',
    },
    body1:{
      fontFamily:'Gilroy',
      fontWeight:500,
      fontSize:'16px',
      lineHeight:'22.4px',
    },
    body2:{
      fontFamily:'Gilroy',
      fontWeight:600,
      fontSize:'14px',
      lineHeight:'17.15px',
      letterSpacing:'1%',
    },
    caption:{
      fontFamily:'Gilroy',
      fontWeight:500,
      fontSize:'12px',
      lineHeight:'14.56px',
      letterSpacing:'2%',
    },
    button:{
      fontFamily:'Gilroy',
      fontWeight:600,
      fontSize:'16px',
      lineHeight:'19px',
    }
  },
    palette: {
      primary: {
        purple:500,
        white:600,
      },
      background:{
        elevation:'#2D2D30'
      },
      grey:100,
      text:'white',
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
})





// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import { red, green, blue } from '@mui/material/colors';
// import { Button, createTheme, ThemeProvider } from '@mui/material';
// import {purple} from '@mui/material/colors';

// const Root = styled('div')(({ theme }) => ({
//   padding: theme.spacing(1),
//   [theme.breakpoints.down('md')]: {
//     backgroundColor: red[500],
//   },
//   [theme.breakpoints.up('md')]: {
//     backgroundColor: blue[500],
//   },
//   [theme.breakpoints.up('lg')]: {
//     backgroundColor: green[500],
//   },
// }));

// export default function Themeing() {
//   const theme1 = createTheme({
//     palette: {
//       primary: {
//         main: purple[500],
//       },
//       secondary: {
//         main: '#11cb5f',
//       },
//     },
//   });
//   const theme2 = createTheme();
//   theme2.typography.h3={
//     fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme2.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
//   }
//   return (
//     <>
//     <Root>
//       <Typography>down(md): red</Typography>
//       <Typography>up(md): blue</Typography>
//       <Typography>up(lg): green</Typography>
//     </Root><br/> <br/>
//     <ThemeProvider theme={theme1}>
//       <Button variant="contained">Primary</Button>
//       <Button variant="contained" color="secondary">Secondary</Button>
//     </ThemeProvider><br/> <br/>
//     <ThemeProvider theme = {theme2}>
//       <Typography variant="h3">Responsive h3</Typography>
//     </ThemeProvider>
//     </>
//   );
// }