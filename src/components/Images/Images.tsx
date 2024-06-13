import { useSelector } from 'react-redux';
import { Image } from '../../types';
import { selectImages} from '../../store/imagesSlice';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';
import s from './Images.module.css';

export const Images = () => {

  const imageStore = useSelector(selectImages);

  if (imageStore.loading) {
    return (
      <Typography variant="body2" color="text.secondary">
        Loading...
      </Typography>
    );
  }

  if (imageStore.error.hasError) {
    return (
      <Typography variant="body2" color="text.secondary">
        Error: {imageStore.error.errorMessage}
      </Typography>
    );
  }

  if (!imageStore.images) {
    return (
      <Typography variant="body2" color="text.secondary">
        Loading...
      </Typography>
    );
  }

  return (
    <Grid container spacing={2} padding={6}>
      {imageStore.images.map((item: Image) => (
        <Grid item key={item.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={item.urls.small}
              alt="Image"
              className={s.image}
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                className={s.likes}
              >
                Likes: {item.likes}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Author: {item.user.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};