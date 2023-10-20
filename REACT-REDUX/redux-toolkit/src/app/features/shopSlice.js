import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	loading: false,
	data: [],
	error: "",
};

const URL = "https://fakestoreapi.com/products";

/* always should return a promise object. */
export const fetchProducts = createAsyncThunk(
	"fetch/shop-details",
	async function () {
		const res = await (await fetch(URL)).json();
		return res;
	}
);

const shopSlice = createSlice({
	name: "shop",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchProducts.pending, state => {
			state.loading = true;
		});

		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.data = action.payload;
			state.loading = false;
		});

		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		});
	},
});

export const {} = shopSlice.actions;

export default shopSlice.reducer;
