import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/Homepage";
import WorkDetailsPage from "./pages/WorkDetailsPage";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/works/:slug" element={<WorkDetailsPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;