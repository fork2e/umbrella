import type { IconProps } from '../Icon/Icon';
import { Icon } from '../Icon/Icon';

import '../../index.css';

export interface ButtonProps {
  link: string,
  children: string,
  white?: boolean,
  withIcon?: boolean,
  iconPosition?: "left" | "right",
  iconType?: IconProps["type"],
}

export const Button = ({
  link = "#",
  children,
  white = false,
  withIcon = false,
  iconPosition = "left",
  iconType,
}:ButtonProps) => {
  return (
    <a
      href={link}
      className={`bg-${white ? "white" : "primary"} text-${white ? "primary" : "white"} text-base font-bold rounded-[10px] px-8 py-4 hover:bg-${white ? "white" : "primary"}Dark hover:cursor-pointer transition-all`}
    >
      { withIcon && iconPosition === "left" && 
        <Icon type={iconType} color={white ? "purple" : "white"}/>
      }
      { children }
      { withIcon && iconPosition === "right" &&
        <Icon type={iconType} color={white ? "purple" : "white"}/> }
    </a>
  );
};