import "./popover.css";

import { Root, Trigger, Portal, Content, Arrow } from "@radix-ui/react-popover";

export default function Popover({ trigger, content }) {
  return (
    <Root>
      <Trigger>{trigger}</Trigger>
      <Portal>
        <Content>{content}</Content>
        <Arrow />
      </Portal>
    </Root>
  );
}