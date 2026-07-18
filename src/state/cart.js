import { create } from 'zustand';

const useStore = create((set) => ({
user : {
    name: "Bob",
    cohort: "68"
}
}))

//export the customhook so it can be used in components
export default useStore;