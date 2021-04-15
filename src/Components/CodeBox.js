import { useEffect, useState } from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBox = ({ language, file }) => {
  const [fileContent, setFileContent] = useState("");
  useEffect(() => {
    fetch(file)
      .then(content => content.text())
      .then(text => setFileContent(text))
      .catch(error => console.log(error));
  });
  return (
    <SyntaxHighlighter
      language={language}
      style={okaidia}
      showLineNumbers
      wrapLines={true}
    >
      {fileContent}
    </SyntaxHighlighter>
  );
};
