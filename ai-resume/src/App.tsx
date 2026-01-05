// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./components/MainLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main layout always renders */}
        <Route path="/" element={<MainLayout />}>
          {/* Home */}
          <Route index element={null} />

          {/* Recruiter-specific URL */}
          <Route path="r/:code" element={null} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
