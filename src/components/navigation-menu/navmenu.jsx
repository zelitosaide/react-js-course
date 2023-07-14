import "./navmenu.css";
import { CaretDownIcon } from "@radix-ui/react-icons";

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
    <Root>
      <List>
        <Item>
          <Link target="_blank" href="/">
            Página Inicial
          </Link>
        </Item>
        <Item>
          <Trigger>
            Ensino <CaretDownIcon aria-hidden />
          </Trigger>
        </Item>
      </List>
    </Root>
  );
}