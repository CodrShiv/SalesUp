import Button from "@mui/material/Button";
import "./start.css";
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";
function Start () {
    return (
        <>
        <div className="branding_container">
            <h1 className="branding">SalesUp</h1>
            <img
              src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
              alt="SalesUp Logo depicting Growth of both Ventures and Influencers!"
            />
          </div>
          <main>
            <div className="welcome_text">
              <span className="sub_title">KNOCK KNOCK</span>
              <h2 className="title">Who's There?</h2>
            </div>
            <div className="opt_group">
              <NavLink to="/start/influencer">
                <Button variant="outlined" size="medium">
                  Influencer
                </Button>
              </NavLink>
              <span className="opt_or">OR</span>
              <NavLink to="/start/company">
                <Button variant="outlined" size="medium">
                  Company
                </Button>
              </NavLink>
            </div>
          </main>
        </>
    )
}
function App() {
  return (
    <div className="gradient gradient_anim">
      <Router>
        <div className="center_block">
            <Routes>
            <Route path="/start" exact element={<Start />}/>
            <Route path="/start/influencer" exact element={<Influencer />} />
            <Route path="/start/company" exact element={<Company />} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}
function Company() {
  return <div>
    <NavLink to='/start'>Go Back</NavLink>
    <h1>Company</h1>
  </div>;
}
function Influencer() {
  return <div>
    <NavLink to='/start'>Go Back</NavLink>
    <h1>Influencer</h1>
  </div>;
}
export default App;
