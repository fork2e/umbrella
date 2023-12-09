export interface IconProps {
  type: "about" | "account" | "calendar" | "chart" | "clock" | "closed-eye" | 
    "contact" | "copy" | "customization" | "dashboard" | "delete" | "device" | 
    "arrow-down" | "edit" | "eye" | "home" | "arrow-left" | "logout" | "menu" | 
    "locked" | "page" | "plate" | "chart" | "arrow-right" | "settings" | 
    "arrow-up",
  color: "black" | "purple" | "white"
}

export const Icon = ({ type = "edit", color = "white" }) => {
  return (
    <span className={`ui-${type}-${color}`}></span>
  );
}