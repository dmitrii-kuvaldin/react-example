import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadItems = createAsyncThunk(
  'products/loadItems',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://dummyjson.com/products')
      console.log(res.data);
      return res.data.products
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

