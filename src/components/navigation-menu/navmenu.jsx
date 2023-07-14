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
          <Item>Página Inicial</Item>
          <Item>Ensino</Item>
          <Item>Investigação</Item>
          <Item>Extensão</Item>
          <Item>Submissão de Protocolos</Item>
          <Item>Notícias</Item>
        </List>
      </Root>
    </>
  );
}