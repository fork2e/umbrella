import { Toggle, ToggleProps } from "../Toggle"

export interface DraggableProps {
  children: string,
  order: number,
  toggleId: ToggleProps['toggleId'],
  toggleName?: ToggleProps['toggleName'],
}

export const Draggable = ({
  children,
  order,
  toggleId,
  toggleName
}:DraggableProps) => {
  return(
    <div
      className="p-4 flex items-center justify-between min-w-[350px] bg-white hover:bg-input border border-gray rounded-xl hover:cursor-grab"
      data-order={order}>
      <div className="flex items-center gap-4">
        <img src="/draggable.svg" alt="Drag it" />
        <p>{ children }</p>
      </div>
      <Toggle toggleId={toggleId} toggleName={toggleName || toggleId}/>
    </div>
  )
}
