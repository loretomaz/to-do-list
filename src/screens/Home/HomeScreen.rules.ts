import { useState } from "react";
import { IItemLista } from "./HomeScreen.types";

export const useHomeScreen = () => {
  const [lista, setLista] = useState<IItemLista[]>([]);
  const [inputState, setInputState] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const getDate = () => {
    const date = new Date();
    return date.toLocaleString();
  };

  const handleAddValue = () => {
    if (inputState) {
      setLista([
        ...lista,
        {
          id: lista.length + 1,
          title: inputState,
          done: null,
        },
      ]);
      setInputState("");
    } else {
      setErrorMessage("oops, this entry is invalid :(");
    }
  };

  const handleChangeInput = (value: string) => {
    if (errorMessage) {
      setErrorMessage("");
    }
    setInputState(value);
  };

  const handleDeleteValue = (id: number) => {
    setLista(lista.filter((item) => item.id !== id));
  };

  const handleUpdateValue = (id: number, value: boolean) => {
    setLista((listaAtual) => {
      return listaAtual.map((itemAtualDalista) => {
        if (itemAtualDalista.id === id) {
          return {
            ...itemAtualDalista,
            done: value ? getDate() : null,
          };
        }
        return itemAtualDalista;
      });
    });
  };

  return {
    handleAddValue,
    handleChangeInput,
    handleDeleteValue,
    handleUpdateValue,
    errorMessage,
    inputState,
    lista,
    setInputState,
    setLista,
  };
};
