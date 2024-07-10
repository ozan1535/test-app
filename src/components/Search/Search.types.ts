import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface ISearchComponent {
  setSearchValue: Dispatch<SetStateAction<string>>;
  handleFunction: MouseEventHandler<HTMLButtonElement>;
}
