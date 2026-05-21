import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Homepage.tsx";
import WorkDetailsPage from "./pages/WorkDetailsPage";

function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
                <Header />

                <main className="flex-1 pt-28">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/works/:slug" element={<WorkDetailsPage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;