import { Header } from "./Components/Header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Categories } from "./Pages/Categories";
import { Error404 } from "./Pages/Error404";
import { route } from "./Data/Route";
import { Questions } from "./Pages/Questions";
import { Solutions } from "./Pages/Solutions";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {route.categories.map((r, index) => (
          <Route path={r.path} exact key={index}>
            <Categories
              categories={r.data}
              title={r.title}
              buttonText={r.buttonText}
            />
          </Route>
        ))}
        {route.questions.map((c, index) => (
          <Route path={c.path} exact key={index}>
            <Questions main={c.from} />
          </Route>
        ))}
        {route.solutions.map((s, index) => (
          <Route path={s.path} exact key={index}>
            <Solutions />
          </Route>
        ))}
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
