import { configureStore } from "@reduxjs/toolkit"
import pictureReducer from "./features/picture/pictureSlice"

export const store = configureStore({
    reducer: {
        picture: pictureReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
