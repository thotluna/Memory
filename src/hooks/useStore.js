import { StoreContext } from "contexts/ContextReducer";
import { useContext } from "react";

export const useStore = () => useContext(StoreContext)[0];
