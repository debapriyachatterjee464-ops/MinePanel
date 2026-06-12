import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { DownloadPage } from "./pages/DownloadPage";
import { DocsPage, DocArticlePage } from "./pages/DocsPage";
import { SupportPage } from "./pages/SupportPage";
import { TrustPage } from "./pages/TrustPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/download/windows" element={<DownloadPage platform="windows" />} />
        <Route path="/download/linux" element={<DownloadPage platform="linux" />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/docs/*" element={<DocArticlePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/security" element={<TrustPage type="security" />} />
        <Route path="/privacy" element={<TrustPage type="privacy" />} />
        <Route path="/faq" element={<TrustPage type="faq" />} />
        <Route path="/changelog" element={<TrustPage type="changelog" />} />
        <Route path="/legal" element={<TrustPage type="legal" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
