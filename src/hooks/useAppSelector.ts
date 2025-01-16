import { RootState } from "@store/store";
import { useSelector as useSelectorUntyped } from 'react-redux';
import { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelectorUntyped;
