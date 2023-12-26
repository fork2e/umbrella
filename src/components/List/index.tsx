import { ReactNode } from "react";

export interface ListProps {
  children: string;
  items: ReactNode;
}

export const List = ({ children }:ListProps) => {
  return(
    <div>
      {children}
      <select name="pets" id="pet-select">
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
    </div>
  )
}
