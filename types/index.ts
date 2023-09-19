import { RadioOptionProps } from "@/node_modules/@headlessui/react/dist/index";
import { MouseEventHandler } from "react";

export interface  customButtonProps{
   title: string;
   containerStyles?: string;
   handleClick?: MouseEventHandler<HTMLButtonElement>;
   btnType?: "button" | "submit";
   textStyles?: string;
   rightIcon?: string;

}
export interface searchManufacturerProps{
   manufacturer: string;
   setManufacturer: (manufacturer:string)=> void;
}
export interface carProps {
   city_mpg: number;
   class: string;
   combination_mpg: number;
   cylinders: number;
   displacement: number;
   drive: string;
   fuel_type: string;
   highway_mpg: number;
   make: string;
   model: string;
   transmission: string;
   year: number;
}
export interface filterprops{
   manufacturer?: string;
   year?: number;
   model?: string;
   limit?: number;
   fuel?: string;
}
export interface optionProps{
   title: string;
   value: string;
}
export interface customFilterProps {
   title: string;
   options: optionProps[];
}
export interface showMoreProps {
   pageNamber: number;
   isNext: boolean;
}