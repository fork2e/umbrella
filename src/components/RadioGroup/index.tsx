import { ReactNode } from "react";

export interface RadioGroupProps {
  title: string;
  children: ReactNode;
}

export const RadioGroup = ({title, children}:RadioGroupProps) => {
  return(
    <fieldset className="flex flex-col gap-4">
      <legend className="text-sm font-bold mb-4">{ title }</legend>
      { children }
    </fieldset>
  )
}