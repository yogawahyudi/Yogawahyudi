import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Astronaut from "../public/pngegg.png";
// import ElevationScroll from '../src/component/AppBar/ElevationScroll';
import NextPage from '../src/component/Button/NextPage';
export default function Home(props) {
  return (
    <>
        <Paper>
          <Box sx={{
            minHeight:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            padding:"2em"

          }}>
            <Grid container>
              <Grid xs={12} sm={8} display="flex" justifyContent="center">
                    <Stack direction="column" 
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    >
                      <Stack direction="row" spacing={0.5}
                      alignItems="center"
                      >
                        <Typography variant="subtitle1">
                          Hello, My name 
                        </Typography>
                        <Typography variant="h5">
                          Yoga Wahyudi
                        </Typography>
                      </Stack>
                      <Typography variant="subtitle1">
                        Freelance Web Developer
                      </Typography>
                    </Stack>
              </Grid>
              <Grid xs={12} sm={4}>
                <Box>
                  <Image alt="image" src={Astronaut} priority />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        <NextPage link="/about" />
    </>
  )
}
