

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Home } from "./page/home";
import { Destination } from "./page/destination";
import { Crew } from "./page/crew";
import { Technology } from "./page/technology";
import { Page404 } from "./page/page404";
import { Store } from "./store";

function WrapperApp() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export const App = () => (
  <Provider store={Store}>
    <WrapperApp />
  </Provider>
);
