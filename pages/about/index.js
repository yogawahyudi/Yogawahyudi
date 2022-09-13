import React from 'react'
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Image from "next/image"
import Avatar from "../../public/avatar.png";
import PrevPage from '../../src/component/Button/PrevPage'
import NextPage from '../../src/component/Button/NextPage'

const Index = () => {
  return (
      <>
      <PrevPage link="/" />
      <Paper>
          <Box alignItems="center"
          justifyContent="center"
          display="flex"
          paddingX={5}
          sx={{
              minHeight:"100vh"
          }}>
              <Stack direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}>
                  <Typography variant="h6">
                      About Me
                  </Typography>
                  <Grid container display="flex" alignItems="center" justifyContent="center" spacing={2}>
                      <Grid md={6} display="flex" alignItems="center" justifyContent="center" paddingX={5}>
                          <Typography variant="body2" align="justify">
                              Lives in Jakarta, as a day freelance worker, and night student at Darma Persada University. <br />
                              I am passionate for the job of Web Developer, as I oferring a strong attention to detail, and problem-solving skilss.
                          </Typography>
                      </Grid>
                      <Grid md={6} display="flex" alignItems="center" justifyContent="center">
                          <Box width="100%" borderRadius={50} overflow="hidden" display="flex" alignItems="center" justifyContent="center">
                              <Image alt="avatar" src={Avatar} height={300} width={300}  />
                          </Box>
                      </Grid>
                  </Grid>
              </Stack>
          </Box>
      </Paper>
      <NextPage link="/project" />
    </>
  )
}

export default Index