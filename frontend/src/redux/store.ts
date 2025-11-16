import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import propertiesReducer from './slices/propertiesSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const appReducer = combineReducers({
    properties: propertiesReducer,
});

function createStorage() {
    return {
        getItem: async (key: string) => {
            if (typeof window === 'undefined') {
                return null; // Trả về null trong SSR
            }
            // const rememberMe = Cookies.get('rememberMe') === 'true';
            // const storage = rememberMe ? localStorage : sessionStorage;
            // return storage.getItem(key);
        },
        setItem: async (key: string, value: string) => {
            if (typeof window === 'undefined') {
                return; // Không lưu trong SSR
            }
            // const rememberMe = Cookies.get('rememberMe') === 'true';
            // const storage = rememberMe ? localStorage : sessionStorage;
            // storage.setItem(key, value);
        },
        removeItem: async (key: string) => {
            if (typeof window === 'undefined') {
                return; // Không xóa trong SSR
            }
            // const rememberMe = Cookies.get('rememberMe') === 'true';
            // const storage = rememberMe ? localStorage : sessionStorage;
            // storage.removeItem(key);
        },
    };
};

const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
    }
    return appReducer(state, action);
};

const persistConfig = {
    key: 'shift-and-attendance-system',
    storage: createStorage(),
    whitelist: [
        'profile',
        'properties',
        'setting',
    ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // tránh cảnh báo khi dùng redux-persist
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);
export { store, persistor };