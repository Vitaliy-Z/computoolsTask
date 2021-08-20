import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://my-json-server.typicode.com/Vitaliy-Z/computoolsTask";

export const getTest = createAsyncThunk(
  "getTest",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/db");
      return data.test;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
