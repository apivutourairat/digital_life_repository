import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import LogPage from './pages/LogPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="/log/:slug" element={<LogPage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
