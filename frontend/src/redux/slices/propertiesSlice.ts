import { createSlice } from "@reduxjs/toolkit";

const propertiesSlice = createSlice({
    name: 'properties',
    initialState: {
        widthNavBar: 0,
    },
    reducers: {
        setWidth_navBar: (state, action) => {
            state.widthNavBar = action.payload;
        },
    }
});

export default propertiesSlice;