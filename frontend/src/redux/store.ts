import { configureStore } from "@reduxjs/toolkit";
import propertiesSlice from "./slices/propertiesSlice";
import userSlice from "./slices/userSlice";
import notificationSlice from "./slices/notificationSlice";
import articleSlice from "./slices/articleSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        properties: propertiesSlice.reducer,
        notification: notificationSlice.reducer,
        article: articleSlice.reducer,
    },
});

export default store;