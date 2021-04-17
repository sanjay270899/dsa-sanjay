import file from "./Codes/Java/Hello.java";
import file2 from "./Codes/Cpp/Hello.cpp";
import { CodeBox } from "./Components/CodeBox";
import { Header } from "./Components/Header";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Categories } from "./Pages/Categories";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact>
        <Categories />
        {/* <CodeBox language="java" file={file} />
        <CodeBox language="cpp" file={file2} /> */}
      </Route>
    </Router>
  );
}

export default App;
