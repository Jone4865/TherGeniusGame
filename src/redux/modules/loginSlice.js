import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
    error: null,
    data: [],
    isPost: [],
    isLogin: false,
};

//로그인
export const __login = createAsyncThunk(
    "login", 
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(process.env.REACT_APP_ENDPOINT + "/user/login", payload);
            //토큰 localStorage에 저장하기
            localStorage.setItem("token", res.data)
            (window.location.href=process.env.REACT_APP_SURVER)
            console.log(res)
            return res.data
<<<<<<< HEAD

        } catch (err) {
            console.log(err)
=======
        } catch (err) {
>>>>>>> 62165f33ddac877c0cb90d9ed00100c12f902494
            return err
        }
    });

//slice
export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder

        //로그인 
        .addCase(__login.fulfilled, (state, action) => {
            state.isPost = action
            state.isLogin = true;
        })
        .addCase(__login.rejected, (state, action) => {
            state.isLogin = false;
        })
        .addCase(__login.pending, (state, action) => {
            state.isLogin = false;
        })
    },
});


export const { login } = loginSlice.actions;
export default loginSlice.reducer;