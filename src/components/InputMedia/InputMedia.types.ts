import { ChangeEventHandler } from "react";

export interface IInputMedia {
  media?: File;
  handleMediaChange: ChangeEventHandler<HTMLInputElement>;
}
