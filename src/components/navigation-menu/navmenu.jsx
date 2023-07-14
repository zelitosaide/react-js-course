import "./navmenu.css";
import { CaretDownIcon } from "@radix-ui/react-icons";

import {  Root, List, Item, Trigger, Content, Link, Indicator } from "@radix-ui/react-navigation-menu";

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
        <Item>
          <Trigger>
            Investigação <CaretDownIcon aria-hidden />
          </Trigger>
        </Item>
        <Item>
          <Link target="_blank" href="/">
            Extensão
          </Link>
        </Item>
        <Item>
          <Trigger>
            Submissão de Protocolos <CaretDownIcon aria-hidden />
          </Trigger>
        </Item>
        <Item>
          <Link target="_blank" href="/">
            Notícias
          </Link>
        </Item>
      </List>
    </Root>
  );
}