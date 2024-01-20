import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

const STAGES: string[] = ["PageInicial", "PageEmprestar", "PageBiblioteca", "PageIncluir", "PageDevolver", "PageRemover"];

interface State {
  PageStage: string;
}

type Action = { type: string };

const initialState: State = {
  PageStage: STAGES[0],
};

const PageReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'PageInicial':
      return {
        ...state,
        PageStage: STAGES[0],
      };
    case 'PageEmprestar':
      return {
        ...state,
        PageStage: STAGES[1],
      };
    case 'PageBiblioteca':
      return {
        ...state,
        PageStage: STAGES[2],
      };
    case 'PageIncluir':
      return {
        ...state,
        PageStage: STAGES[3],
      };
    case 'PageRemover':
      return {
        ...state,
        PageStage: STAGES[5],
      };
    case 'PageDevolver':
      return {
        ...state,
        PageStage: STAGES[4],
      };
    default:
      return state;
  }
};

interface PageProviderProps {
  children: ReactNode;
}

const defaultValue: [State, Dispatch<Action>] = [initialState, () => {}];

export const PageContext = createContext(defaultValue as [State, Dispatch<Action>]);

export const PageProvider: React.FC<PageProviderProps> = ({ children }: PageProviderProps) => {
  const value = useReducer(PageReducer, initialState);
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
