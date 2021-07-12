import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import FilterBar from "./components/FilterBar";
import UserDescription from "./components/UserDescription";
import Photo from "./components/Photo";
import Footer from "./components/Footer";
import Soon from "./components/Soon";
import PhotoList from "./components/PhotoList";
import Data from "./data.json";
import Tshirts from "./tshirts.json";
import ProductList from "./components/ProductList";

function App() {
  const [data, setData] = useState(Data);
  const [tshirts, setTshirts] = useState(Tshirts);

  return (
    <Router>
      <Menu />
      <UserDescription />
      <FilterBar />
      {/* <Route path="/photo" exact component={Photo} /> */}
      {/* <Route path={() => "/main" || "/admin" || "/any-other-word"}>
        <Soon />
      </Route> */}
      <PhotoList data={data} />
      {/* <ProductList tshirts={tshirts} /> */}
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
