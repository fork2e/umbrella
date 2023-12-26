import './index.module.css';

export interface RadioProps {
  children: string;
  radioName: string;
  radioId: string;
  radioValue: string;
}

export const Radio = ({
  children,
  radioName,
  radioId,
  radioValue
}:RadioProps) => {
  return (
    <label htmlFor={radioId} className="flex gap-4 cursor-pointer">
      <input
        className="hidden"
        type="radio"
        name={radioName}
        id={radioId}
        value={radioValue}
      />
      <span
        className="w-5 h-5 bg-gray block rounded-lg flex before:content-['']
          before:w-2.5 before:h-2.5 before:bg-white before:block before:rounded
          before:m-auto before:scale-0">
      </span>
      <p className="text-sm">{ children }</p>
    </label>
  )  
}