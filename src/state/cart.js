import { create } from 'zustand';

const useStore = create((set) => ({
user : {
    name: "Titan",
    cohort: "68"
},
cart: [],

clearCart: ()=>
    set(() => ({
        cart: []
    })),

addProductToCart: (product) =>
    set((state)=>({
        cart: [...state.cart, product]
    }))

}))

//export the customhook so it can be used in components
export default useStore;