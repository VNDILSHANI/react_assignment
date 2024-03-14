import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProCard from './Components/ProCard';
import Selecter from './Components/Selecter'

const Home = () => {

  return (

    <Box sx={{ flexGrow: 1, }} padding={5} >

      <Grid container spacing={4}>

        <Grid item md={6}>
          <Paper elevation={3} sx={{ padding: 0.5 }}>

            <Grid container spacing={1}>

              <Grid item md={6} xs={12} sm={6} >

                <Selecter />

              </Grid>

              <Grid item md={6}>
                <Selecter />
              </Grid>
            </Grid>

            <Grid container spacing={2} marginTop={2}>
              <Grid item md={4}>
                <Selecter />
              </Grid>
              <Grid item md={4} >
                <Selecter />
              </Grid>

              <Grid item md={4}>
                <Selecter />
              </Grid>

            </Grid>

          </Paper>

        </Grid>

        <Grid item md={6}  >
          <Paper elevation={3} sx={{ padding: 0.5 }}>
            <Grid container spacing={1}>

              <Grid item md={6} xs={12} sm={6} >

                <Selecter />

              </Grid>

              <Grid item md={6}>
                <Selecter />
              </Grid>
            </Grid>

          </Paper>

          <Box sx={{ padding: 5, width: '100%' }}>
            <ProCard />
          </Box>

        </Grid>
      </Grid>
    </Box>
  );


};
export default Home