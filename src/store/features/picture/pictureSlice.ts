import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { fetchPicture } from "./picture.service"
import { type PictureReponse } from "./pircture.model"
import { type DataResponse } from "./../../../main/utils/api.model"

const initialState: DataResponse<PictureReponse> = {
    isLoading: false,
    isError: "",
    data: [],
}

export const pictureSlice = createSlice({
    name: "picture",
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<number>) => {
            const element = state.data.findIndex(elem => elem.id === action.payload)

            state.data[element].like = !state.data[element].like
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPicture.pending, (state) => {
            state.isError = ""
            state.isLoading = true
        })
        builder.addCase(fetchPicture.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
    },
})

export const { toggleLike, } = pictureSlice.actions

export default pictureSlice.reducer
