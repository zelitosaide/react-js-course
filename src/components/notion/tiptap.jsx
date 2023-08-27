import "./tiptap.css";

import { 
  // EditorProvider, 
  FloatingMenu, 
  BubbleMenu, 
  useEditor,
  EditorContent,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { content } from "./content";

const extensions = [
  StarterKit
];

export default function TipTap() {
  const editor = useEditor({
    content, extensions
  });

  return (
    // <EditorProvider extensions={extensions} content={content}>
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor}>
        <FloatingMenu editor={editor}>This is the floating meun</FloatingMenu>
        <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
      </EditorContent>
    </>
    // </EditorProvider>
  );
}

function MenuBar({ editor }) {
  if (!editor) return null;

  return (
    <>
      <button 
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        strike
      </button>
    </>
  );
}