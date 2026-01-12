// MainLayout.tsx
import { Outlet } from "react-router-dom"

import SplashLander from "./SplashLander"
import { ChatWindow } from "./chat/ChatWindow"
import WorkHistory from "./WorkHistory"
import CurrentWork from "./CurrentWork"
import SiteFooter from "./SiteFooter"
import TitleBar from "./TitleBar"

export function MainLayout() {
  return (
    <>
      <TitleBar />
      <SplashLander />
      <ChatWindow />
      <WorkHistory />
      <CurrentWork />
      <SiteFooter />

      {/* This allows child routes to exist without changing your layout */}
      <Outlet />
    </>
  )
}