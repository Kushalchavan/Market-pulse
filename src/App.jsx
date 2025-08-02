import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import StocksPage from "./pages/StocksPage";
import MarketsPage from "./pages/MarketsPage";
import CurrenciesPage from "./pages/CurrenciesPage";
import GlobalPage from "./pages/GlobalPage";
import PortfolioPage from "./pages/PortfolioPage";
import PerformancePage from "./pages/PerformancePage";
import AnalysisPage from "./pages/AnalysisPage";
import SettingsPage from "./pages/SettingsPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/stock" element={<StocksPage />} />
          <Route path="/market" element={<MarketsPage />} />
          <Route path="/currencies" element={<CurrenciesPage />} />
          <Route path="/global" element={<GlobalPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/performance" element={<PerformancePage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
