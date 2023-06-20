import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <div>
            <div>
              {/* <Header /> */}
              <main>
                <Routes>
                  {/* <Route
                    path="/"
                    element={<Home />}
                  /> */}
                  {/* <Route
                    path="/login"
                    element={<Login />}
                  /> */}
                  {/* <Route
                    path="/signup"
                    element={<Signup />}
                  /> */}
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
