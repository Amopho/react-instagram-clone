import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import FilterBar from "./components/FilterBar";
import UserDescription from "./components/UserDescription";
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import Soon from "./components/Soon";

function App() {
  return (
    <Router>
      <Menu />
      <UserDescription />
      <FilterBar />
      <Photo />
      {/* <Route path={() => "/main" || "/admin" || "/any-other-word"}>
        <Soon />
      </Route> */}
      <Footer />
    </Router>
  );
}

export default App;

{
  /* <Switch> */
}
{
  /*  */
}
{
  /* </Switch> */
}

{
  /* <Route path="/" exact component={Home} /> */
}
{
  /* <Route
          path="/projects"
          exact
          component={() => <Projects data={Portfolio} />}
        />
        <Route
          path="/projects/:id"
          component={({ match }) => {
            console.log(match);
            return <ProjectsInfo data={Portfolio} id={match.params.id} />;
          }}
        /> */
}
