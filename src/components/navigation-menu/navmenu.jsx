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
    <>
      <Root className="NavigationMenuRoot">
        <List className="NavigationMenuList">
          <Item>
            <Link className="NavigationMenuLink" href="https://github.com/radix-ui">
              Página Inicial
            </Link>
          </Item>
          <Item>
            <Trigger className="NavigationMenuTrigger">
              Ensino <CaretDownIcon aria-hidden />
            </Trigger>
            <Content className="NavigationMenuContent">
              <ul>
                <li>
                  <Link asChild>
                    <a href="/">
                      <svg style={{ fill: "black" }} aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                        <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                        <path d="M12 0H4V8H12V0Z"></path>
                        <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                      </svg>
                      <div>Radix Primitives</div>
                      <p>Unstyled, accessible components for React.</p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="https://stitches.dev/">
                      <div>Stitches</div>
                      <p>
                        CSS-in-JS with best-in-class developer experience.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Colors</div>
                      <p>
                        Beautiful, thought-out palettes with auto dark mode.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Icons</div>
                      <p>
                        A crisp set of 15x15 icons, balanced and consistent.
                      </p>
                    </a>
                  </Link>
                </li>
              </ul>
            </Content>
          </Item>
          <Item>
            <Trigger className="NavigationMenuTrigger">
              Investigação <CaretDownIcon aria-hidden />
            </Trigger>
            <Content className="NavigationMenuContent">
              <ul>
                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Introduction</div>
                      <p>
                        Build high-quality, accessible design systems and web apps.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Getting started</div>
                      <p>
                        A quick tutorial to get you up and running with Radix Primitives.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Styling</div>
                      <p>
                        Unstyled and compatible with any styling solution.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Animation</div>
                      <p>
                        Use CSS keyframes or any animation library of your choice.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Accessibility</div>
                      <p>
                        Tested in a range of browsers and assistive technologies.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Releases</div>
                      <p>
                        Radix Primitives releases and their changelogs.
                      </p>
                    </a>
                  </Link>
                </li>
              </ul>
            </Content>
          </Item>
          <Item>
            <Link className="NavigationMenuLink" href="https://github.com/radix-ui">
              Extensão
            </Link>
          </Item>
          <Item>
            <Trigger className="NavigationMenuTrigger">
              Submissão de Protocolos <CaretDownIcon aria-hidden />
            </Trigger>
            <Content className="NavigationMenuContent">
              <ul>
                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Introduction</div>
                      <p>
                        Build high-quality, accessible design systems and web apps.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Getting started</div>
                      <p>
                        A quick tutorial to get you up and running with Radix Primitives.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Styling</div>
                      <p>
                        Unstyled and compatible with any styling solution.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Animation</div>
                      <p>
                        Use CSS keyframes or any animation library of your choice.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Accessibility</div>
                      <p>
                        Tested in a range of browsers and assistive technologies.
                      </p>
                    </a>
                  </Link>
                </li>

                <li>
                  <Link asChild>
                    <a href="/">
                      <div>Releases</div>
                      <p>
                        Radix Primitives releases and their changelogs.
                      </p>
                    </a>
                  </Link>
                </li>
              </ul>
            </Content>
          </Item>
          <Item>
            <Link className="NavigationMenuLink" href="https://github.com/radix-ui">
              Notícias
            </Link>
          </Item>
        </List>
      </Root>
    </>
  );
}