import { createTheme } from "@mui/system";

export const theme=createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  typography:{
    title: {
      fontFamily: 'Gilroy',
      fontSize: '36px',
      fontWeight: '700',
      lineHeight: '42px',
      letterSpacing: '-0.015em',
      textAlign: 'left',
  },
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
        purple:{
          600:'#393552',
          500:'#6C5DD3',
          400:'#B4A9FF',
        },
        white:{
          600:'#D8D8D9',
          500:'#E8E8E9',
        }
      },
      background:{
        elevation2:'#2D2D30',
        elevation1:'#201F24',
        elevation0:'#19181C',
      },
      grey:{
        100:'#262529',
        50:'#3A3A3D',
      },
      text:{
        highEmp:'#FFFFFF',
        medEmp:'#E8E7F0',
        lowEmp:'#A5A5A6',
      },
      icon:{
        highEmp:'#D4D2DE',
        lowEmp:'#727080',
      },
      border:{
        highEmp:'#413F4D',
        lowEmp:'#28272B'
      },
      accent:{
        DarkOverlay:'#333333',
        pink:'#E39AB2',
        aquaBlue:'#A0D7E7',
        lightLavender:'#CFC8FF',
        peachYellow:'#E5CB9B',
        redOrange:'#EC977D'
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
})