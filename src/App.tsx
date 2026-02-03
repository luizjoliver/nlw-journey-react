import { BrowserRouter, Route, Routes } from "react-router";
import CreateTripPage from "./pages/create-trip";
import TripsDetail from "./pages/trip-details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateTripPage />} />
        <Route path="/trips/:tripId" element={<TripsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
