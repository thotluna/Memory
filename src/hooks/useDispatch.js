import { useContext } from "react";
import { StoreContext } from "contexts/ContextReducer";

export const useDispatch = () => useContext(StoreContext)[1];
