import "./navmenu.css";
import { CaretDownIcon } from "@radix-ui/react-icons";

import {  Root, List, Item, Trigger, Content, Link, Indicator } from "@radix-ui/react-navigation-menu";

export default function Navmenu() {
  return (
    <Root className="NavigationMenuRoot">
      <List className="NavigationMenuList">
        <Item>
          <Link className="NavigationMenuLink" href="/">
            Página Inicial
          </Link>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">
            Ensino <CaretDownIcon aria-hidden />
          </Trigger>
          <div className="NavigationMenuContentWrapper">
            <Content className="NavigationMenuContent">
              <ul className="List">
                <li style={{ gridRow: 'span 3' }}>
                  <Link asChild>
                    <a className="Callout" href="/">
                      <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                        <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                        <path d="M12 0H4V8H12V0Z"></path>
                        <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                      </svg>
                      <div className="CalloutHeading">Radix Primitives</div>
                      <p className="CalloutText">Unstyled, accessible components for React.</p>
                    </a>
                  </Link>
                </li>
              </ul>
            </Content>
          </div>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">
            Investigação <CaretDownIcon aria-hidden />
          </Trigger>
        </Item>
        <Item>
          <Link className="NavigationMenuLink" href="/">
            Extensão
          </Link>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">
            Submissão de Protocolos <CaretDownIcon aria-hidden />
          </Trigger>
        </Item>
        <Item>
          <Link className="NavigationMenuLink" href="/">
            Notícias
          </Link>
        </Item>

        <Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </Indicator>
      </List>
    </Root>
  );
}