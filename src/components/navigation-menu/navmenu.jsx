import "./navmenu.css";
import { CaretDownIcon } from "@radix-ui/react-icons";

import {  Root, List, Item, Trigger, Content, Link, Indicator } from "@radix-ui/react-navigation-menu";

export default function Navmenu() {
  return (
    <Root className="NavigationMenuRoot">
      <List className="NavigationMenuList">
        <Item>
          <Link className="NavigationMenuLink" target="_blank" href="/">
            Página Inicial
          </Link>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">
            Ensino <CaretDownIcon aria-hidden />
          </Trigger>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">
            Investigação <CaretDownIcon aria-hidden />
          </Trigger>
        </Item>
        <Item>
          <Link className="NavigationMenuLink" target="_blank" href="/">
            Extensão
          </Link>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">
            Submissão de Protocolos <CaretDownIcon aria-hidden />
          </Trigger>
        </Item>
        <Item>
          <Link className="NavigationMenuLink" target="_blank" href="/">
            Notícias
          </Link>
        </Item>
      </List>
    </Root>
  );
}