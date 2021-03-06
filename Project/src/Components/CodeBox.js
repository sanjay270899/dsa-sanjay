import { useEffect, useState } from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBox = ({ language, link }) => {
  const [fileContent, setFileContent] = useState("");
  useEffect(() => {
    fetch(link)
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
