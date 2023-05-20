"use client";
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from "react";

export type FilterAction = {
  type: "TOGGLE";
  isVisible: boolean;
};

type FilterContextType = {
  isVisible: boolean;
  setIsVisible: Dispatch<FilterAction>;
};

const filterReducer = (state: boolean, action: FilterAction): boolean => {
  switch (action.type) {
    case "TOGGLE":
      return action.isVisible;
    default:
      return state;
  }
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const FilterProvider: React.FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useReducer(filterReducer, true);

  const contextValue: FilterContextType = {
    isVisible,
    setIsVisible,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
