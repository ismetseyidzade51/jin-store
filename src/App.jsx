import React from "react";
import { Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/details" element={<Details />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;