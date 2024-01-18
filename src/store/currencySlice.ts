import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrencyState {
  list: string[];
}

const initialState: CurrencyState = {
  list: [],
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    addCurrency: (state, action: PayloadAction<string>) => {
      state.list.push(action.payload);
    },
    removeCurrency: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((currency) => currency !== action.payload);
    },
  },
});

export const { addCurrency, removeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
