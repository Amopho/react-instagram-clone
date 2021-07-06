import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import userDescription from "./components/userDescription";
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import Soon from "./components/Soon";

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route
          path={`${process.env.PUBLIC_URL}/`}
          exact
          component={userDescription}
        />
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route
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
        /> */}
        <Photo />
        <Footer />
        <Route path={() => "/main" || "/admin" || "/any-other-word"}>
          <Soon />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
