import { create } from 'zustand';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

type ProductStore = {
    // State
    selectedProduct: Product | null;

    // Sync Actions
    setSelectedProduct: (product: Product | null) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
    // Initial State
    selectedProduct: null,

    // Sync Actions
    setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

// API functions
export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};

export const fetchProductById = async (id: number): Promise<Product> => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }
    return response.json();
}; 