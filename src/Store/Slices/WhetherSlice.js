
//weatherSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


// export const fetchWeatherData =  createAsyncThunk('weather/fetch',  async dispatch => { 
//     // dispatch(fetchDataStart());
//     try {
//       const API_KEY = '973dbcec3ab4241d2bed68fe8156b3f0';
//       const response =
//        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//       // dispatch(fetchDataSuccess(response.data));
//       return response.data
//     } catch (error) {
//       console.log(error.message);
//     }
//   });


export const fetchWeatherData = createAsyncThunk('weather/fetch', async (city, thunkAPI) => { // Corrected thunk function definition
  try {
    const API_KEY = '973dbcec3ab4241d2bed68fe8156b3f0';
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const selectWeatherData = (state) => state.weather.data;
// export const selectWeatherLoading = (state) => state.weather.loading;
// export const selectWeatherError = (state) => state.weather.error;
export const {action, reducer} = weatherSlice

export default reducer;
