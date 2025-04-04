import { createSlice } from "@reduxjs/toolkit";
import productsAll from "@/data/productsALL";

const initialState = {
  filters: {
    category: "",
    size: "",
    color: "",
    rating: "",
    operatingSystem: "",
    sliderValue: 22000, 
  },
  filteredProducts: productsAll,
};

const applyFilters = (filters) => {
  return productsAll.filter((product) => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value || value === "") return true; // Ignore les filtres vides

      if (key === "sliderValue") return product.price <= value; // Gestion du prix

      return product[key] === value;
    });
  });
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredProducts = applyFilters(state.filters);
    },
    resetFilters: (state) => {
      state.filters = { ...initialState.filters }; // Clonage pour éviter une référence partagée
      state.filteredProducts = productsAll;
    },
    sortProducts: (state, action) => {
      const { order } = action.payload;
      state.filteredProducts = [...state.filteredProducts].sort((a, b) =>
        order === "Croissant" ? a.price - b.price : b.price - a.price
      );
    },
  },
});

export const { setFilter, resetFilters, sortProducts } = shopSlice.actions;
export default shopSlice.reducer;
