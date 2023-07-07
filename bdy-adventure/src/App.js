import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { StateProvider } from "./utils/Context";
import Home from './pages/Home'
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageFour from "./pages/PageFour";
import AcquireShades from "./pages/AcquireShades";
import BurnEyes from "./pages/BurnEyes";
import Starvation from "./pages/Starvation";
import Brunch from "./pages/Brunch";
import Library from "./pages/Library";
import PageFive from "./pages/PageFive";

function App() {
  return (
    <StateProvider>
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
                  <Route
                    path="/AcquireShades"
                    element={<AcquireShades />}
                  />
                  <Route
                    path="/BurnEyes"
                    element={<BurnEyes />}
                  />
                  <Route
                    path="/Starvation"
                    element={<Starvation />}
                  />
                  <Route
                    path="/Brunch"
                    element={<Brunch />}
                  />
                  <Route
                    path="/Library"
                    element={<Library />}
                  />
                  <Route
                    path="/PageFive"
                    element={<PageFive />}
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
    </StateProvider>

  );
}

export default App;
