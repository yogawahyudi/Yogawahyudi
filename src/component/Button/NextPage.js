import React, {useState} from 'react'
import Box from "@mui/material/Box"
import  IconButton from '@mui/material/IconButton'
import ArrowDownwardIcon  from '@mui/icons-material/ArrowDownward'
import Link from "../../Link"

const NextPage = (props) => {
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
          bottom: "75px",
        }}
        >
          <IconButton component={Link} href={props.link} sx={{
            opacity:`${opacity}`
          }}
                  onMouseEnter={()=>mouseInHandle()}
        onMouseLeave={()=>mouseOutHandle()}>
            <ArrowDownwardIcon />
          </IconButton>
        </Box>
  )
}

export default NextPage