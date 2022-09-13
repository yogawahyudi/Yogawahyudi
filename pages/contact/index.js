import React from 'react'
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Image from "next/image"
import Avatar from "../../public/avatar.png";
import { Avatar as AvatarWrapper } from '@mui/material'
import PrevPage from '../../src/component/Button/PrevPage'
import NextPage from '../../src/component/Button/NextPage'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from "@mui/icons-material/Send"

const Index = () => {
  return (
      <>
      <PrevPage link="/project" />
      <Paper>
          <Box alignItems="center"
          justifyContent="center"
          display="flex"
          paddingX={6}
          sx={{
              minHeight:"100vh"
          }}>
            <Stack direction="column"
            spacing={3}>
              <Stack direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}>
                  <Typography variant="h6" align="center">
                        Interested in collaborating with me?
                    </Typography>
                    <Typography variant="body1" align="center">
                        I&apos;m Interested in freelance opportunities - especially ambitious
                        or large projects. However, if you have other request or question, don&apos;t hesitate to contact me.
                    </Typography>
              </Stack>
              <Box paddingX={5}>
                <Paper elevation={6}>
                    <Box component="form"
                    autoComplete='off'
                    padding={5}
                    >
                        <Stack direction="column"
                            spacing={2}>
                            <Typography vaiant="body1" align="center" marginBottom={2}>
                                Send me message here, I&apos;ll reply your message ASAP.
                            </Typography>
                            <Stack direction={{sx:"column", sm:"row"}} justifyContent="space-evenly"
                            alignItems="center"
                            spacing={2}>
                                <TextField
                                id="outlined-textarea"
                                label="Name"
                                placeholder="Your Name"
                                required
                                fullWidth
                                sx={{
                                    marginBottom:{
                                        xs:"1em",
                                        sm: 0
                                    }
                                }}
                                />
                                <TextField
                                id="outlined-textarea"
                                label="Email"
                                placeholder="example@mail.com"
                                required
                                fullWidth
                                />
                            </Stack>
                            <TextField
                            id="outlined-textarea"
                            label="Message"
                            placeholder="Type Your Message"
                            multiline
                            required
                            />
                        </Stack>
                        <Stack direction="row" justifyContent="end">
                            <Button variant="contained" endIcon={<SendIcon />} sx={{
                                marginTop:"1em",
                            }}>
                                Send
                            </Button>
                        </Stack>
                    </Box>
                </Paper>
              </Box>
            </Stack>
          </Box>
      </Paper>
    </>
  )
}

export default Index