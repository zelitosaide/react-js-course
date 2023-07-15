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
            Ensino <CaretDownIcon className="CaretDown" aria-hidden />
          </Trigger>
          <div className="NavigationMenuContentWrapper">
            <Content className="NavigationMenuContent">
              <div className="NavigationMenuContentBoundary">
                <ul className="List one">
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

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Stitches</div>
                        <p className="ListItemText">CSS-in-JS with best-in-class developer experience.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Colors</div>
                        <p className="ListItemText">Beautiful, thought-out palettes with auto dark mode.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Icons</div>
                        <p className="ListItemText">A crisp set of 15x15 icons, balanced and consistent.</p>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Content>
          </div>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">
            Investigação <CaretDownIcon className="CaretDown" aria-hidden />
          </Trigger>
          <div className="NavigationMenuContentWrapper">
            <Content className="NavigationMenuContent">
              <div className="NavigationMenuContentBoundary">
                <ul className="List two">
                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Introduction</div>
                        <p className="ListItemText">Build high-quality, accessible design systems and web apps.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Getting started</div>
                        <p className="ListItemText">A quick tutorial to get you up and running with Radix Primitives.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Styling</div>
                        <p className="ListItemText">Unstyled and compatible with any styling solution.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Animation</div>
                        <p className="ListItemText">Use CSS keyframes or any animation library of your choice.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Accessibility</div>
                        <p className="ListItemText">Tested in a range of browsers and assistive technologies.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Releases</div>
                        <p className="ListItemText">Radix Primitives releases and their changelogs.</p>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Content>
          </div>
        </Item>
        <Item>
          <Link className="NavigationMenuLink" href="/">
            Extensão
          </Link>
        </Item>
        <Item>
          <Trigger className="NavigationMenuTrigger">
            Submissão de Protocolos <CaretDownIcon className="CaretDown" aria-hidden />
          </Trigger>
          <div className="NavigationMenuContentWrapper">
            <Content className="NavigationMenuContent">
              <div className="NavigationMenuContentBoundary">
                <ul className="List two">
                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Introduction</div>
                        <p className="ListItemText">Build high-quality, accessible design systems and web apps.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Getting started</div>
                        <p className="ListItemText">A quick tutorial to get you up and running with Radix Primitives.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Styling</div>
                        <p className="ListItemText">Unstyled and compatible with any styling solution.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Animation</div>
                        <p className="ListItemText">Use CSS keyframes or any animation library of your choice.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Accessibility</div>
                        <p className="ListItemText">Tested in a range of browsers and assistive technologies.</p>
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link asChild>
                      <a className="ListItemLink" href="/">
                        <div className="ListItemHeading">Releases</div>
                        <p className="ListItemText">Radix Primitives releases and their changelogs.</p>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Content>
          </div>
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