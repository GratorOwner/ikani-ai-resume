// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainLayout } from "./components/MainLayout"
import { AddChunks } from "./components/chunks/AddChunks"

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
        <Route path="/AddChunks" element={<AddChunks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
