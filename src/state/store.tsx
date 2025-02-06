import { configureStore } from "@reduxjs/toolkit";
import namaReducer from "./nama/namaSlice";

export const store =   configureStore({
    reducer: {
        nama: namaReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;