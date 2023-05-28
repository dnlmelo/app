import { createSlice } from '@reduxjs/toolkit'
export interface ITicker {
    id:number
    amount:number
    amount_str:string
    price:number
    price_str:string
    type:number
    timestamp:string
    microtimestamp:number
    buy_order_id:string
    sell_order_id:string
}

export const tickerReducer = createSlice({
  name: 'tickerSlice',
  initialState: {
    value: [] as ITicker[]
  },
  reducers: {
    incrementByAmount: (state, action:{type:string, payload:ITicker}) => {
      state.value.push(action.payload)
      console.log(state.value)
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = tickerReducer.actions

export default tickerReducer.reducer