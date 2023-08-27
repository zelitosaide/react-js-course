import { useEffect, useState } from "react";
import "./notion.css";

export default function Notion() {
  const [title, setTitle] = useState(0);

  useEffect(function() {}, [title]);
  
  return (
    <h1 className="button">Notion</h1>
  );
}