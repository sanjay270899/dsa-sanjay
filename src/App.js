import file from "./Codes/Java/Hello.java";
import file2 from "./Codes/Cpp/Hello.cpp";
import { CodeBox } from "./Components/CodeBox";

function App() {
  return (
    <>
      <CodeBox language="java" file={file} />
      <CodeBox language="cpp" file={file2} />
    </>
  );
}

export default App;
