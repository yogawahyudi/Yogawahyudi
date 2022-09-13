import React,{useState} from 'react'
import Box from "@mui/material/Box"
import  IconButton from '@mui/material/IconButton'
import  ArrowUpwardIcon  from '@mui/icons-material/ArrowUpward'
import Link from "../../Link"

const PrevPage = (props) => {
    const [opacity, setOpacity] = useState(0.2)
    const mouseInHandle = () => {
        setOpacity(1);
    }
    const mouseOutHandle = () => {
        setOpacity(0.2);
    }
    return (
     <Box sx={{
          position:"absolute",
          display:"flex",
          alignItems:"center",
          width:"100%",
          justifyContent:"center",
          top: "75px",
        }}>
          <IconButton component={Link} href={props.link} sx={{
                      opacity:`${opacity}`

          }}
        onMouseEnter={()=>mouseInHandle()}
        onMouseLeave={()=>mouseOutHandle()}>            <ArrowUpwardIcon />
          </IconButton>
        </Box>  )
}

export default PrevPage