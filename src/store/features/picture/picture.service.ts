import { createAsyncThunk } from "@reduxjs/toolkit"
import { type PictureReponse } from "./pircture.model"

export const fetchPicture = createAsyncThunk(
    "todos/fetchPicture",
    async function (page: number, { rejectWithValue, }) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${page * 20}`)

            if (!response.ok) {
                throw new Error("Server Error!")
            }

            return (
                await response.json() as PictureReponse
            )
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
