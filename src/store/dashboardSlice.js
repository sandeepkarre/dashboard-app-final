import {createSlice} from '@reduxjs/toolkit';
import dashboardData from '../data/dashboardData.json';

const slice=createSlice({name:'dashboard',initialState:dashboardData,reducers:{addWidget:(s,a)=>{const{categoryId,widget}=a.payload;const c=s.categories.find(x=>x.id===categoryId);if(c)c.widgets.push(widget);},removeWidget:(s,a)=>{const{categoryId,widgetId}=a.payload;const c=s.categories.find(x=>x.id===categoryId);if(c)c.widgets=c.widgets.filter(w=>w.id!==widgetId);}}});
export const{addWidget,removeWidget}=slice.actions;export default slice.reducer;