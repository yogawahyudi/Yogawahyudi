import React, {useState} from 'react'
import { Backdrop, Typography, Stack } from '@mui/material'
import { useTheme } from "@mui/material/styles";

const UnderDevelopment = () => {
  const theme = useTheme()
    const [open, setOpen ] = useState(true)
    const hadleClick = () => {
        setOpen(false);
    }

  return (
        <Backdrop
        sx={{ padding:"2em", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={()=>hadleClick()}
      >
        <Stack spacing={5}
        alignItems="center"
            justifyContent="center">
            <Typography variant="h5" align="center" sx={{color: theme.palette.primary.contrastText}}>
                This website is under development, some functions may not work
            </Typography>
            <Typography variant="body1" align="center" sx={{color: theme.palette.primary.contrastText}}>
                (click anywhere to continue)
            </Typography>
        </Stack>
      </Backdrop>
  )
}

export default UnderDevelopment