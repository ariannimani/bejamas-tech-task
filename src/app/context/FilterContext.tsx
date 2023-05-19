import { createContext, Dispatch, SetStateAction } from "react";

export const FilterContext = createContext(false);
export const FilterDispatchContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(() => {});
