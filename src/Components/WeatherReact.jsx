// import React, { useState } from 'react';
// import { TextField, Card, CardHeader, CardContent, CardActions, Button, Typography, Box, CssBaseline, Container, Grid, Skeleton } from '@mui/material';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ClearImg from '../assets/clear.webp'
// import CloudyImg from '../assets/cloudy.jpeg'
// import DrizilImg from '../assets/drizile.jpeg'
// import MistyImg from '../assets/misty.jpeg'
// import MostClearImg from '../assets/mostCloudy.webp'
// import RainyImg from '../assets/rainy.jpeg'
// import SmokyImg from '../assets/smoky.jpg'
// import SnowImg from '../assets/snow.jpeg'
// import SunnyImg from '../assets/sunny.jpg'
// import ThunderstormImg from '../assets/thunderstorm.jpeg'
// import axios from 'axios';



// const WeatherApp = () => {
//     //   const classes = useStyles();
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);


//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!city.trim()) {
//             toast('Please enter a city name', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });
//             return;
//         }
//         try {
//             const API_KEY = `973dbcec3ab4241d2bed68fe8156b3f0`
//             const response = await
//                 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//             if (!response.ok) {
//                 if (response.status === 404) {
//                     throw new Error('City not found');
//                 } else {
//                     throw new Error('Failed to fetch weather data');
//                 }
//             }
//             const data = await response.json();
//             setWeatherData(data)
//             console.log(data);
//             setCity('');
//         } catch (error) {
//             toast(error.message, {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//                 // transition: Bounce,
//             });
//         }
//     };
//     // const timestamp = weatherData.dt * 1000;
//     // const date = new Date(timestamp);
//     // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
//     // const formattedDate = date.toLocaleDateString('en-US', options);

//     // const sunriseTimestamp = weatherData.sys.sunrise * 1000;
//     // const sunsetTimestamp = weatherData.sys.sunset * 1000;
//     // const sunriseTime = new Date(sunriseTimestamp).toLocaleTimeString();
//     // const sunsetTime = new Date(sunsetTimestamp).toLocaleTimeString();

//     //
//     return (
//         <>
//             <Grid
//                 container
//                 sx={{
//                     backgroundImage: (() => {
//                         if (weatherData) {
//                             const weather = weatherData.weather[0].main.toLowerCase();
//                             switch (weather) {
//                                 case "thunderstorm":
//                                     return `url(${ThunderstormImg})`;
//                                 case "clouds":
//                                     return `url(${CloudyImg})`;
//                                 case "snow":
//                                     return `url(${SnowImg})`;
//                                 case "drizzle":
//                                     return `url(${DrizilImg})`;
//                                 case "rain":
//                                     return `url(${RainyImg})`;
//                                 case "clear":
//                                     return `url(${ClearImg})`;
//                                 case "smoke":
//                                 case "mist":
//                                 case "haze":
//                                 case "dust":
//                                     return `url(${MistyImg})`;
//                                 default:
//                                     return `url(${SmokyImg})`;
//                             }
//                         } else {
//                             return `url(${MostClearImg})`; // Default background image
//                         }
//                     })(),
//                     height: '100vh',
//                     backgroundSize: 'cover',
//                     backgroundRepeat: 'no-repeat',
//                 }}
//             >

//                 <Grid item xs={12}>
//                     <Container component="main" maxWidth="xs"
//                         sx={{
//                             marginTop: 8,
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <CssBaseline />
//                         <Card
//                             sx={{
//                                 textAlign: 'center',
//                                 backgroundColor: 'transparent'
//                             }}
//                         >
//                             <CardHeader title="Get Weather Data" />
//                             <CardContent>
//                                 <Box component="form" onSubmit={handleSubmit} sx={{ textAlign: 'center' }}>
//                                     <TextField
//                                         fullWidth
//                                         variant="outlined"
//                                         label="Enter City Name"
//                                         value={city}
//                                         autoFocus
//                                         onChange={(event) => {
//                                             setCity(event.target.value);
//                                         }}
//                                         sx={{
//                                             '& .MuiOutlinedInput-root': {
//                                                 '& fieldset': {
//                                                     borderColor: 'black',
//                                                 },
//                                                 '&:hover fieldset': {
//                                                     borderColor: 'black',
//                                                 },
//                                                 '&.Mui-focused fieldset': {
//                                                     borderColor: 'black',
//                                                 },
//                                             },
//                                             '& .MuiInputLabel-root': {
//                                                 color: 'black',
//                                                 '&.Mui-focused': {
//                                                     color: 'black',
//                                                 },
//                                             },
//                                         }}
//                                     />
//                                     <Button variant="contained" type='submit' color="inherit" sx={{ mt: 5 }}>
//                                         Get Weather
//                                     </Button>
//                                 </Box>
//                                 {weatherData ? (
//                                     <Box key={weatherData.dt}>
//                                         <Typography variant="h2">{weatherData.main.temp}&#176;C</Typography>
//                                         <Typography variant="h5">{weatherData.name}</Typography>
//                                         <Typography variant="h5">{ }</Typography>
//                                         <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
//                                         <Typography variant="body1">Description: {weatherData.weather[0].description}</Typography>
//                                     </Box>
//                                 ): (  <Skeleton
//                                     // sx={{ bgcolor: 'grey.900' }}
//                                     variant="rectangular"
//                                     width={310}
//                                     height={118}
//                                   />)}
//                             </CardContent>
//                         </Card>
//                     </Container>
//                 </Grid>
//             </Grid>
//         </>
//     );
// };

// export default WeatherApp;




