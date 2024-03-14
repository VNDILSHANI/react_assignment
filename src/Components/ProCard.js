import * as React from 'react';
import { Card, Grid, Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Data from '../cardDara.json'
import { useState, useRef, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';




const ProCard = () => {

    // Automatically Change Image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    // Scroll
    const [cardsToShow, setCardsToShow] = useState(6);


    // Automatically Change Image
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const loadMore = () => {
        setCardsToShow(cardsToShow + 3);
    };



    return (


        <InfiniteScroll
            dataLength={cardsToShow}
            next={loadMore}
            hasMore={cardsToShow < Data.length}
        >

            <Grid container spacing={3}>
                {Data.slice(0, cardsToShow).map((result, index) => (

                    <Grid item xs={12} sm={6} md={3} key={index} marginRight={2} >

                        <Card sx={{ maxWidth: 245 }}>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={Array.isArray(result.image) ? result.image[currentImageIndex] : result.image}
                                />

                                <CardContent>
                                    <Typography color="blue" align="center">
                                        {result.id}
                                    </Typography>

                                    <Typography align="center"> 
                                        {result.quantity}
                                    </Typography>

                                    <Typography>
                                        {result.name}
                                    </Typography>


                                    <Typography>
                                        {result.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>



                ))}

            </Grid>
        </InfiniteScroll>


    );

}

export default ProCard 