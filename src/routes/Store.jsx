import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Store (){
    const {id} = useParams()
    var stores = useSelector((store) => store.store)
    const currentStore = stores?.value?.content.filter(store => store.id == id)[0]

    console.log(currentStore)
    return (
    <Grid xs={12}>
        <img src="https://cloudfront-us-east-1.images.arcpublishing.com/estadao/MHEB7V2WRFDVHBXPFP6RFYZ66U.jpg" width={"100%"}/>
        

    </Grid>);
}
