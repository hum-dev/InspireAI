import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { PageSkeleton } from "@/components/PageSkeleton";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "./components/Layout";

// Lazy load all pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Programs = lazy(() => import("./pages/Programs"));
const Impact = lazy(() => import("./pages/Impact"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Resources = lazy(() => import("./pages/Resources"));
const Events = lazy(() => import("./pages/Events"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="about"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <About />
                  </Suspense>
                }
              />
              <Route
                path="programs"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Programs />
                  </Suspense>
                }
              />
              <Route
                path="impact"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Impact />
                  </Suspense>
                }
              />
              <Route
                path="get-involved"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <GetInvolved />
                  </Suspense>
                }
              />
              <Route
                path="resources"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Resources />
                  </Suspense>
                }
              />
              <Route
                path="events"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Events />
                  </Suspense>
                }
              />
              <Route
                path="contact"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Contact />
                  </Suspense>
                }
              />
              <Route
                path="privacy"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <PrivacyPolicy />
                  </Suspense>
                }
              />
              <Route
                path="terms"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <TermsOfService />
                  </Suspense>
                }
              />
              <Route
                path="cookies"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <CookiePolicy />
                  </Suspense>
                }
              />
              <Route
                path="*"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <NotFound />
                  </Suspense>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
