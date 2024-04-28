import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { TodoData } from "./slices/todosSlice";

export const fetchTodos = createAsyncThunk(
  "todos/fetchForUser",
  async (userId: string, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "users", userId, "todos")
      );
      const todos = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as TodoData),
      }));
      console.log(todos);

      return todos;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
