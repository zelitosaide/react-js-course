import "./menubar.css";

import { 
  Root, 
  Menu, 
  Trigger, 
  Portal, 
  Content, 
  Item, 
  Separator,
  Sub,
  SubTrigger,
  SubContent
} from "@radix-ui/react-menubar";

export default function Menubar() {
  return (
    <Root>
      <Menu></Menu>

      <Menu></Menu>

      <Menu></Menu>
      
      <Menu></Menu>
    </Root>
  );
}