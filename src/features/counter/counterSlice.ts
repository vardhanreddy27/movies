import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';
export interface CounterState {
  auth: boolean;
  name:string;
  email:string;
}
const initialState: CounterState = {
  auth: false,
  name:'',
  email:'',
};
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    login: (state,action) => {             
      try{
        state.email=action.payload.data[0].Email
        state.name=action.payload.data[0].Name
        state.auth = true;
      }
     catch(err){
       alert('incorrect email or password')
      window.location.replace("/Login");
    }
     
    },  logout: (state) => {  
      state.email=''
      state.name=''
      state.auth = false;
   
  },  
    resdata: (state,action) => {  
  
    try{
console.log(action.payload)

    }
   catch(err){
    alert('email already taken')
   }
   
  },
   
  },
 
});
export const {resdata, login,logout} = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.auth;
export const selectEmail = (state: RootState) => state.counter.email;
export const selectName = (state: RootState) => state.counter.name;
export default counterSlice.reducer;

