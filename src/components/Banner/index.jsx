import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    fetchStoresAsync,
} from '../../redux/stores/StoreAction';
import StoreCard from '../StoreCard'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2'
import Carousel from 'react-material-ui-carousel'

export default function Banner() {
  var stores = useSelector((store) => store.store)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(fetchStoresAsync(10,0));
  },[])

  return (
    <Grid container spacing={3} padding={1}>
      <Grid xs={12}>
        <Paper elevation={3} sx={{padding:1}}>
          <h1>Destaques</h1>
          <Carousel>
          {
            stores.value.content.map(store => <StoreCard key={store.id} store={store}/>)
          }
          </Carousel>
        </Paper>
      </Grid>
    </Grid>
  );
}
