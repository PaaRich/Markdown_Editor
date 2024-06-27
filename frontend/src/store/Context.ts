import { createContext } from "react";
interface Api {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: Date;
}
export interface ApiArray {
  [index: number]: Api;
}

//context interface
interface MyInterface {
  apiValue: ApiArray;
  setApiValue: (value: ApiArray) => void;
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  reSet: () => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccessful: boolean;
  setIsSuccessful: React.Dispatch<React.SetStateAction<boolean>>;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  nameError: boolean;
  setNameError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CONTEXT_VALUE = createContext<MyInterface>({} as MyInterface);
