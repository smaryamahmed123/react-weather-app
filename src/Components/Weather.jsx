
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../Store/Slices/WhetherSlice';
import { TextField, Card, CardHeader, CardContent, CardActions, Button, Typography, Box, CssBaseline, Container, Grid, Skeleton } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClearImg from '../assets/clear.webp'
import CloudyImg from '../assets/cloudy.jpeg'
import DrizilImg from '../assets/drizile.jpeg'
import MistyImg from '../assets/misty.jpeg'
import MostClearImg from '../assets/mostCloudy.webp'
import RainyImg from '../assets/rainy.jpeg'
import SmokyImg from '../assets/smoky.jpg'
import SnowImg from '../assets/snow.jpeg'
import SunnyImg from '../assets/sunny.jpg'
const WeatherApp = () => {

    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.weather);


    const handleSubmit = event => {
        event.preventDefault();
        dispatch(fetchWeatherData(city));
        setCity('');
    };

    return (
        <>
            <Grid
                container
                sx={{
                    backgroundImage: (() => {
                        if (data) {
                            const weather = data.weather[0].main.toLowerCase();
                            switch (weather) {
                                case "thunderstorm":
                                    return `url(${ThunderstormImg})`;
                                case "clouds":
                                    return `url(${CloudyImg})`;
                                case "snow":
                                    return `url(${SnowImg})`;
                                case "drizzle":
                                    return `url(${DrizilImg})`;
                                case "rain":
                                    return `url(${RainyImg})`;
                                case "clear":
                                    return `url(${ClearImg})`;
                                case "smoke":
                                case "mist":
                                case "haze":
                                case "dust":
                                    return `url(${MistyImg})`;
                                default:
                                    return `url(${SmokyImg})`;
                            }
                        } else {
                            return `url(${MostClearImg})`; // Default background image
                        }
                    })(),
                    height: '100vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Grid item xs={12}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Card>
                            <CardHeader title="Get Weather Data" />
                            <CardContent>
                                {/* <form onSubmit={handleSubmit}>
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        label="Enter City Name"
                                        value={city}
                                        autoFocus
                                        onChange={(event) => setCity(event.target.value)}
                                    />
                                    <Button variant="contained" type="submit" color="inherit" disabled={loading}>
                                        Get Weather
                                    </Button>
                                </form> */}
                                <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'center' }}>
                                    <TextField
                                        fullWidth
                                        variant="standard"
                                        label="Enter City Name"
                                        value={city}
                                        autoFocus
                                        onChange={(event) => {
                                            setCity(event.target.value);
                                        }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'black',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'black',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'black',
                                                },
                                            },
                                            '& .MuiInputLabel-root': {
                                                color: 'black',
                                                '&.Mui-focused': {
                                                    color: 'black',
                                                },
                                            },
                                        }}
                                    />
                                    <Button variant="contained" type='submit' color="inherit" sx={{ mt: 5 }}>
                                        Get Weather
                                    </Button>
                                </Box>
                                {loading && <Skeleton variant="rectangular" width={310} height={118} />}
                                {error && <Typography color="error">{error}</Typography>}
                                {data && (
                                    <Box>
                                        <Typography variant="h2">{data.main.temp}&#176;C</Typography>
                                        <Typography variant="h5">{data.name}</Typography>
                                        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
                                        <Typography variant="body1">Description: {data.weather[0].description}</Typography>
                                    </Box>
                                )}
                            </CardContent>
                        </Card>
                    </Container>
                </Grid>
            </Grid>
        </>
    );
};

export default WeatherApp;
