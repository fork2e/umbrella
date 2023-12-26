import { Button } from "../Button";
import './index.module.css'

export interface FileProps {
  children: string;
  inputName: string;
  inputId: string;
  column?: boolean;
  white?: boolean;
}

export const File = ({
  inputName,
  inputId,
  column,
  white = false,
  children = "Choisir un fichier"
}:FileProps) => {
  return(
    <div
      className={`flex items-center gap-4 cursor-pointer
        ${column && "flex-col justify-center"}`}
    >
      <label htmlFor={inputId}>
        <Button white={white}>{ children }</Button>
      </label>
      <input className={`${white && "text-white"}`} type="file" name={inputName} id={inputId} />
    </div>
  );
}
