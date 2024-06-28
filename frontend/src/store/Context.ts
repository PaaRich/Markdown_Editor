import { createContext } from "react";
interface Api {
  id?: number;
  name?: string;
  description?: string;
  createdAt?: Date;
}
export interface ApiArray {
  // [Symbol.iterator](): Iterator<T>;
  // reverse(): ApiArray<T>;

  length: number;
  map(
    arg0: (
      item: import("../Components/Nav").Item
    ) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  [index: number]: Api;
}

//context interface
interface MyInterface {
  post: ApiArray;
  setPost: (value: ApiArray) => void;
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
  isDeleted: boolean;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
  isUpdate: boolean;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
}

export const CONTEXT_VALUE = createContext<MyInterface>({} as MyInterface);
