export interface TextFieldProps {
  textFieldId: string;
  textFieldName?: string;
  label: string;
}

export const TextField = ({ 
  textFieldId,
  textFieldName,
  label
}:TextFieldProps) => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={textFieldId} className="text-sm font-bold">{label}</label>
      <input
        className="p-4 bg-white hover:bg-input border border-gray rounded-xl text-sm min-w-[300px] duration-300 focus:outline-primary"
        type="text"
        name={textFieldName || textFieldId}
        id={textFieldId}
        placeholder="Malafak"
      />
    </div>
  )
}
