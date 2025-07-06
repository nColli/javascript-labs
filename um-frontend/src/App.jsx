"use client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { GlobalProvider } from './context/GlobalProvider';
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import Footer from './components/Footer';

import { ErrorBoundary } from "react-error-boundary";
import FallbackRender from "./errors/FallbackRender";

function logErrorToService(error, info) {
    console.error("Hay an error:", error, info);
}

function App() {
    return (
        <>
            <ErrorBoundary fallbackRender={FallbackRender} onError={logErrorToService}>
                <BrowserRouter
                    future={{
                        v7_startTransition: true,
                        v7_relativeSplatPath: true,
                    }}
                >
                    <GlobalProvider>
                        <Toaster position="top-right" reverseOrder={false} />
                        <Routes>
                            <Route path="/add" element={<AddEmployee />} />
                            <Route path="/edit/:id" element={<EditEmployee />} />

                            <Route path="/" element={<Home />} />
                        </Routes>
                        <Footer />
                    </GlobalProvider>
                </BrowserRouter>
            </ErrorBoundary>
        </>
    );
}
export default App;