import "./tiptap.css";

import { 
  // EditorProvider, 
  FloatingMenu, 
  BubbleMenu, 
  useEditor,
  EditorContent
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const extensions = [
  StarterKit
];

const content = "<h1>Hello worldd</h1>";

export default function TipTap() {
  const editor = useEditor({
    content, extensions
  });

  return (
    // <EditorProvider extensions={extensions} content={content}>
    <EditorContent editor={editor}>
      <FloatingMenu editor={editor}>This is the floating meun</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
    </EditorContent>
    // </EditorProvider>
  );
}