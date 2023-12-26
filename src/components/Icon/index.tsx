export interface IconProps {
  type:
    "about" | "account" | "arrow-down" | "arrow-left" | "arrow-right" | 
    "arrow-up" | "calendar" | "chart" | "clock" | "closed-eye" | "contact" |
    "copy" | "customization" | "dashboard" | "delete" | "device" | "edit" |
    "eye" | "home" | "locked" | "logout" | "menu" | "page" | "plate" |
    "pie-chart" | "settings",
}

export const Icon = ({ type = "edit" }) => {
  return (
    <span className={`ui-${type} text-lg`}></span>
  );
}
