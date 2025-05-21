import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartItems: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const res = await fetch("http://localhost:3000/product");
    return await res.json();
  }
);

const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id != action.payload
      );
    },
    removeAllFromCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "Something went wrong";
        state.loading = false;
      });
  },
});

export const { addToCart, deleteFromCart, removeAllFromCart } =
  productSlide.actions;
export default productSlide.reducer;
