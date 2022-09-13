import React from 'react'
import { Stack } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import IconButton from "@mui/material/IconButton";
import { GitHub as GithubIcon } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import  LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialList = () => {
  return (
        <Stack direction={{xs:"row", sm:"column"}}
            justifyContent="center"
            alignItems="center"
            spacing={3}>
                <IconButton href="https://github.com/yogawahyudi" target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                </IconButton>
                 <IconButton href="https://instagram.com/yogawhyd8_/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </IconButton>
                 <IconButton href="https://linkedin.com/in/yoga-wahyudi-a17954206" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </IconButton>
        </Stack>  
    )
}

export default SocialList