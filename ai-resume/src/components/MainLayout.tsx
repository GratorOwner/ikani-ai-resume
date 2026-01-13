// MainLayout.tsx
import { Outlet } from "react-router-dom"

import SplashLander from "./SplashLander"
import { ChatWindow } from "./chat/ChatWindow"
import WorkHistory from "./WorkHistory"
import CurrentWork from "./CurrentWork"
import SiteFooter from "./SiteFooter"
import TitleBar from "./TitleBar"
import { useState } from "react"
import ContactDialog from "./ContactDialog"

export function MainLayout() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <>
      <TitleBar onContactClick={() => setContactOpen(true)} />
      <SplashLander />
      <ChatWindow />
      <WorkHistory />
      <CurrentWork />
      <SiteFooter />

      {/* This allows child routes to exist without changing your layout */}
      <Outlet />

      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}