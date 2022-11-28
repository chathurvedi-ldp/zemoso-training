import { Chip } from "@mui/material";
import {styled} from "@mui/system";
import { createTheme } from "@mui/material/styles";
interface ChipProps{
    label:string,
}
const theme=createTheme({
    spacing: 4,
})
const Chip1 = (p:ChipProps) => {
    const Styles=styled("div")({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px 8px",
        gap: theme.spacing(2.5),
        position: "absolute",
        width: "140px",
        height: "25px",
        right: "20px",
        top: "20px",
        background: "#E39AB2",
        borderRadius: "4px",
        flex: "none",
        order: 1,
        flexGrow: 0,
        zIndex: 1,
    })
    return(
        <>
        <Styles>
        <Chip label={p.label} />
        </Styles>
        
        </>
    )
}

export default Chip1;