import { Chip } from "@mui/material";
import {styled} from "@mui/system";
import theme from "../../../Themeing"
interface ChipProps{
    label:string,
}
const Chip1 = ({label}:ChipProps) => {
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
        <Chip label={label} />
        </Styles>
        
        </>
    )
}

export default Chip1;