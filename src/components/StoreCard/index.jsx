import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function StoreCard({store}) {
  const navigate = useNavigate();

  return (
      <Card elevation={0}>
        <CardActionArea onClick={()=> navigate(`store/${store.id}`)}>
          <CardMedia
            component="img"
            height="140"
            image="https://cloudfront-us-east-1.images.arcpublishing.com/estadao/MHEB7V2WRFDVHBXPFP6RFYZ66U.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {store.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Entrega em {store.deliverTimeInMinutes} minutos
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}