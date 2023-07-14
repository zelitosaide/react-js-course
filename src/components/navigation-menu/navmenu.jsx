import "./navmenu.css";

import { 
  Root,
  Sub,
  List,
  Item,
  Trigger,
  Content,
  Link,
  Indicator,
  Viewport
} from "@radix-ui/react-navigation-menu";

export default function Navmenu() {
  return (
    <Root className="NavigationMenuRoot">
      <List className="NavigationMenuList">
        <Item>
          <Trigger className="NavigationMenuTrigger">Item one</Trigger>
          <Content className="NavigationMenuContent">Item one content</Content>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">Item two</Trigger>
          <Content className="NavigationMenuContent">Item Two content</Content>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">Item three</Trigger>
          <Content className="NavigationMenuContent">Item Three content</Content>
        </Item>
      </List>
    </Root>
  );
}