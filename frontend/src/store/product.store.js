import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.imageURL) {
      return { success: false, message: "Please provide all fields" };
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!res.ok) {
      return { success: false, message: `Error: ${res.statusText}` };
    }

    const data = await res.json();
    set((state) => ({
      products: [...state.products, data.data],
    }));
    return { success: true, message: "Product created!" };
  },
}));
