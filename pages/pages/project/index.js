import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextPage from '../../src/component/Button/NextPage';
import PrevPage from '../../src/component/Button/PrevPage';

export default function Home(props) {
  return (
    <>
    <PrevPage link="/about" />
        <Paper>
          <Box sx={{
            minHeight:"100vh",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            padding:"2em"
          }}>
            <Stack spacing={2}>
                <Typography variant="h6" align="center">
                Project
                </Typography>
                <Typography variant="h6" align="center">
                Coming Soon
                </Typography>
            </Stack>
          </Box>
        </Paper>
        <NextPage link="/contact" />
    </>
  )
}
