import { IItemLista } from "../../screens/Home/HomeScreen.types";

export interface ICheckboxComponentProps {
  item: IItemLista;
  onChange: (id: number, value: boolean) => void;
}
