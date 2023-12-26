import type { IconProps } from '../Icon';
import { Icon } from '../Icon';

import '../../index.css';

export interface ButtonProps {
  children: string,
  white?: boolean,
  withIcon?: boolean,
  fullWidth?: boolean,
  iconPosition?: "left" | "right",
  iconType?: IconProps["type"],
}

export const Button = ({
  children,
  white = false,
  withIcon = false,
  fullWidth = false,
  iconPosition = "left",
  iconType,
}:ButtonProps) => {
  return (
    <div
      className={`
        ${ white ? "bg-white" : "bg-primary" }
        ${ white ? "text-primary" : "text-white" } 
        ${ white ? "hover:bg-whiteDark" : "hover:bg-primaryDark" }
        ${ withIcon && iconPosition === "right" && "flex-row-reverse" }
        ${ fullWidth ? "w-full" : "w-min" }
        justify-center text-base font-bold rounded-[10px] px-8 py-4 
        hover:cursor-pointer transition-all flex items-center gap-4 leading-4
        `}
    >
      { withIcon && <Icon type={iconType}/> }
      { children }
    </div>
  );
};
