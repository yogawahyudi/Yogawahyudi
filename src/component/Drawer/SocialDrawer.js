import React from 'react'
import Box from '@mui/material/Box';
import { Paper, Stack } from '@mui/material';
import SocialList from '../SocialList/SocialList';

const SocialDrawer = () => {
  return (
    <Paper backgroundcolor="transparent">
        <Box width="50px" display={{xs:"none", sm:"flex"}} height="max-content" paddingY={2} marginLeft={2} sx={{
            position: "fixed",
            top: "35vh",
            alignItems:"center",
            justifyContent: "center"
        }}>
            <SocialList />
        </Box>
    </Paper>
  )
}

export default SocialDrawer