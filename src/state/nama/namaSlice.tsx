import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type NamaState = {
    value: string;
}

const initialState: NamaState = {
    value: ''
}

const namaSlice = createSlice({
    name: 'nama',
    initialState,
    reducers: {
        setNama: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { setNama } = namaSlice.actions;
export default namaSlice.reducer;