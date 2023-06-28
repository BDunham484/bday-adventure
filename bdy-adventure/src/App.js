import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";

function App() {
  return (
    <div className="App">
      <Router>
          <div>
            <div>
              {/* <Header /> */}
              <main>
                <Routes>
                  <Route
                    path="/"
                    element={<Home />}
                  />
                  <Route
                    path="/PageOne"
                    element={<PageOne />}
                  />
                  <Route
                    path="/PageTwo"
                    element={<PageTwo />}
                  />
                  <Route
                    path="/PageThree"
                    element={<PageThree />}
                  />
                  <Route
                    path="/PageFour"
                    element={<PageFour />}
                  />
                  {/* <Route path="/profile">
                    <Route path=":username" element={<Profile />} />
                    <Route path="" element={<Profile />} />
                  </Route> */}
                  {/* <Route path="/show/:artists" element={<Show />} /> */}
                  {/* <Route path="/venue/:venueName" element={<ShowsByVenue />} /> */}
                  {/* <Route
                    path="*"
                    element={<NoMatch />}
                  /> */}
                </Routes>
              </main>
            </div>
            {/* <Footer /> */}
          </div>
        </Router>
    </div>
  );
}

export default App;
