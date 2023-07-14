import { CaretDownIcon } from "@radix-ui/react-icons";
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
    <>
      <Root>
        <List>
          <Item>
            <Trigger>Página Inicial</Trigger>
          </Item>
          <Item>
            <Trigger>
              Ensino <CaretDownIcon aria-hidden />
            </Trigger>
          </Item>
          <Item>
            <Trigger>
              Investigação <CaretDownIcon aria-hidden />
            </Trigger>
          </Item>
          <Item>
            <Trigger>Extensão</Trigger> 
          </Item>
          <Item>
            <Trigger>
              Submissão de Protocolos <CaretDownIcon aria-hidden />
            </Trigger>
          </Item>
          <Item>
            <Trigger>Notícias</Trigger>
          </Item>
          <Indicator />
        </List>
      </Root>
    </>
  );
}