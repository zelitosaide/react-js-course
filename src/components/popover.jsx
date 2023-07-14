import "./popover.css";

import { Root, Trigger, Portal, Content, Arrow } from "@radix-ui/react-popover";

export default function Component({ trigger, content }) {
  return (
    <Root>
      <Trigger className="PopoverTrigger">{trigger}</Trigger>
      <Portal>
        <Content>
          {content}
          <Arrow />
        </Content>
      </Portal>
    </Root>
  );
}