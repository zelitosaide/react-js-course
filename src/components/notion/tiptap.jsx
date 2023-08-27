import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [
  StarterKit
];

const content = "<h1>Hello world</h1>";

export default function TipTap() {
  return (
    <EditorProvider extensions={extensions} content={content}>
      <FloatingMenu>This is the floating meun</FloatingMenu>
      <BubbleMenu>This is the bubble menu</BubbleMenu>
    </EditorProvider>
  );
}