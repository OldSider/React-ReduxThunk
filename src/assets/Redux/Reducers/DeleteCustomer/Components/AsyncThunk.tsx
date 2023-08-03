import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../../../Provider/Api";

const deleteCustomer = createAsyncThunk<void, number>(
    "dataBaseDelete/deleteCustomer",
    async(customerid, thunkAPI)=>{
        try{
            await Api.delete(`/informations/${customerid}`)
        } catch(error){
            thunkAPI.rejectWithValue(error)
        }
    }
)


export default deleteCustomer
