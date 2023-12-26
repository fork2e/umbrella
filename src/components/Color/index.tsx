import { useState } from "react";

export interface ColorProps {
  inputName: string,
  inputId: string,
  label: string,
}

export const Color = ({inputName, inputId, label}:ColorProps) => {

  const [currentColor, setCurrentColor] = useState("#000000");

  return(
    <div className="flex flex-col gap-4">
      <label htmlFor={inputId} className="text-sm font-bold">{label}</label>
      <label
        htmlFor={inputId}
        className="p-4 bg-white hover:bg-input border border-gray rounded-xl
          text-sm min-w-[300px] duration-300 flex items-center justify-between
          relative"
      >
        <span className="uppercase">{ currentColor }</span>
        <span
          className="w-[16px] h-[16px] rounded"
          style={{"backgroundColor": currentColor}}
        ></span>
        <input
        className="w-1 h-1 absolute right-5 opacity-0"
          type="color"
          name={inputName || inputId}
          id={inputId}
          onChange={e => setCurrentColor(e.currentTarget.value)}
        />
      </label>
    </div>
  )
}