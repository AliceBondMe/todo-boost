import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { TodoData } from "./slices/todosSlice";

interface TodoPayload {
  todo: TodoData;
  userId: string | null;
}

interface TodoStatusPayload {
  todo: {
    id: string;
    completed: boolean;
  };
  userId: string | null;
}

interface DeleteTodoPayload {
  id: string;
  userId: string | null;
}

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

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (todoPayload: TodoPayload, thunkAPI) => {
    try {
      const { todo, userId } = todoPayload;
      const userTodosRef = collection(db, `users/${userId}/todos`);
      await addDoc(userTodosRef, todo);
      return todo;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async (todoPayload: TodoPayload, thunkAPI) => {
    try {
      const { todo, userId } = todoPayload;
      const todosQuery = query(
        collection(db, "users", userId as string, "todos"),
        where("id", "==", todo.id)
      );
      const querySnapshot = await getDocs(todosQuery);
      console.log(querySnapshot);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        console.log(docRef);
        const todoToUpdate: { [x: string]: any } & TodoData = todo;
        await updateDoc(docRef, todoToUpdate);
        return todo;
      } else {
        throw new Error("Todo not found");
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTodoStatus = createAsyncThunk(
  "todos/editTodoStatus",
  async (todoPayload: TodoStatusPayload, thunkAPI) => {
    try {
      const { todo, userId } = todoPayload;
      const todosQuery = query(
        collection(db, "users", userId as string, "todos"),
        where("id", "==", todo.id)
      );
      const querySnapshot = await getDocs(todosQuery);
      console.log(querySnapshot);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        console.log(docRef);

        await updateDoc(docRef, {
          completed: todo.completed,
        });

        return todo;
      } else {
        throw new Error("Todo not found");
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (deleteData: DeleteTodoPayload, thunkAPI) => {
    try {
      const { id, userId } = deleteData;
      const todosQuery = query(
        collection(db, "users", userId as string, "todos"),
        where("id", "==", id)
      );
      const querySnapshot = await getDocs(todosQuery);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;

        await deleteDoc(docRef);

        return id;
      } else {
        throw new Error("Todo not found");
      }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
