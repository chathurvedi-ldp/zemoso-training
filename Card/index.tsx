import { Card, CardContent } from "@mui/material";
import Chip1 from "../../atoms/Chip";
import Icon from "../../atoms/Icon";
import Typographys from "../../atoms/Typographys";
//import styled from "@emotion/styled/types/base";
import {styled} from '@mui/system'
const Card1 = (p:any) => {
    const StyleIcon = styled('div')({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        marginBottom: "32px",
        gap: "20px",
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
        gap: "8px",
        width: "164px",
        height: "64px",
        flex: "none",
        order: 1,
        flexGrow: 0,
    })
    return(
        <>
        <Card style={p.styles}>
            <CardContent>
                <Chip1 label={p.ChipLabel} />
                <StyleIcon> <Icon Icon={p.Icon1}/> </StyleIcon>
                {/* <Stack1 Item1={p.Item1} Item2={p.Item2}/> */}
                <StyleStack>
                <div style={{display:"flex", alignItems:"center",columnGap:"10px"}}>
                <Typographys variant="inherit" children={p.text1} />
                <Icon Icon={p.Icon2}/>
                </div>
                <Typographys variant="h5" children={p.text2} sx={{color:"white"}}/>
                </StyleStack>
            </CardContent>
        </Card>
        </>
    )
}
export default Card1;