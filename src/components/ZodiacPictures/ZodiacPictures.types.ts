import { MouseEventHandler } from "react";
import { IZodiacSign } from "../AstrologyItems/AstrologyItems.types";

export interface IZodiacPicture {
    canShowTimeRange: boolean;
    onClick: (a: IZodiacSign, b?: string) => void
}