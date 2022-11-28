import { Card, CardContent } from "@mui/material";
import Chip1 from "../../atoms/Chip";
import Icon from "../../atoms/Icon";
import Typographys from "../../atoms/Typographys";
import { createTheme } from "@mui/material/styles";
import {styled} from '@mui/system'
import { ReactNode } from "react";
interface CardProps{
    ChipLabel:string,
    Icon1:ReactNode,
    text1:string,
    Icon2:ReactNode,
    text2:string,
  };
  const theme=createTheme({
    spacing: 4,
  })
const Card1 = (p:CardProps) => {
    const StyleIcon = styled('div')({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(5),
        marginBottom: "32px",
        gap: theme.spacing(5),
        width: "80px",
        height: "80px",
        background: "#262529",
        border: "1px solid #28272B",
        borderRadius: "12px",
    })
    const StyleStack= styled("div")({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        color: "#C9C8CC",
        gap: theme.spacing(2),
        width: "164px",
        height: "64px",
        flex: "none",
        order: 1,
        flexGrow: 0,
    })
    const StyleTypoIcon=styled("div")({
        display:"flex",
        alignItems:"center",
        columnGap:theme.spacing(2.5),
    })
    const StyleCard = styled("div")({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(8),
    gap: theme.spacing(3),
    isolation: "isolate",
    position: "absolute",
    width: "340px",
    height: "259px",
    left: "278px",
    top: "143px",
    background: "#201F24",
    border: "1px solid #28272B",
    borderRadius: "12px",
    })
    return(
        <>
        <Card>
        <StyleCard>
            <CardContent>
                <Chip1 label={p.ChipLabel} />
                <StyleIcon> <Icon Icon={p.Icon1}/> </StyleIcon>
                <StyleStack>
                <StyleTypoIcon>
                <Typographys variant="inherit" children={p.text1} />
                <Icon Icon={p.Icon2}/>
                </StyleTypoIcon>
                <Typographys variant="h5" children={p.text2} sx={{color:"white"}}/>
                </StyleStack>
            </CardContent>
        
        </StyleCard>
        </Card>
        </>
    )
}
export default Card1;