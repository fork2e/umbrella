import './index.module.css';

export interface ToggleProps {
  children?: string;
  toggleName: string;
  toggleId: string;
}

export const Toggle = ({
  children,
  toggleName,
  toggleId,
}:ToggleProps) => {
  return (
    <label
      htmlFor={toggleId}
      className="flex items-center gap-4 cursor-pointer"
    >
      <input
        className="hidden"
        type="checkbox"
        name={toggleName}
        id={toggleId}
      />
      <span className="w-10 h-6 block bg-gray rounded flex before:content-['']
          before:w-4 before:h-4 before:bg-white before:block before:rounded-sm
          before:m-auto before:-translate-x-1/2"></span>

      { children && <p className="text-sm">{ children }</p> }
    </label>
  )  
}
