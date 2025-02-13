import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { HomePage } from "./pages/home/home";
import { ArticlePage } from "./pages/article/article";
import { DashboardPage } from "./pages/dashboard/dashboard";
import { CallbackPage } from "./pages/callback/callback";
import { NoPage } from "./pages/error/error";

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route path="/category/:category" element={<HomePage />} />
                </Route>

                <Route path="/article/:article_id" element={<ArticlePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route
                    path="/callback/:access_token"
                    element={<CallbackPage />}
                />

                <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
        </>
    );
};
