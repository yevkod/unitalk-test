import { useSelector } from 'react-redux';
import { Image } from '../../types';
import { selectImages } from '../../store/imagesSlice';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import s from './Images.module.css';

export const Images = () => {
  const imageStore = useSelector(selectImages);

  return (
    <>
      {imageStore.loading || !imageStore.images || imageStore.error.hasError ? (
        <>
          {imageStore.error.hasError && (
            <>
              <Typography variant="h6" color="error.main">
                Error: {imageStore.error.errorMessage}
              </Typography>
            </>
          )}
          {!imageStore.images &&
            !imageStore.loading &&
            !imageStore.error.hasError && (
              <>
                <Typography variant="h6" color="error.main">
                  No images...
                </Typography>
              </>
            )}
          <Grid container spacing={2} padding={6}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Skeleton height={240} className={s.skeleton} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Grid container spacing={2} padding={6}>
          {imageStore.images.map((item: Image) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
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
      )}
    </>
  );
};