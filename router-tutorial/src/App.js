import About from "./About";
import "./App.css";
import Home from "./Home";
import { Route, Switch, Link } from "react-router-dom";
import Profile from "./Profile";
import Profiles from "./Profiles";

function App() {
  return (
    <div>
      <div>
        <ul>
          <li>
            {/* 페이지 이동 컴포넌트: a태그로 이루어져 있지만 페이지 전환 방지 기능 내장. */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profiles">프로필</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Switch>
        {/* url이 일치하는것만 랜더할려면 exact 사용 */}
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/profile/:username" component={Profile}></Route>
        <Route exact path="/profiles" component={Profiles}></Route>
      </Switch>
    </div>
  );
}

export default App;
