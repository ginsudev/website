import { Routes, Route, HashRouter } from 'react-router'
import HomePage from './Features/Home/HomePage'
import RepoPage from './Features/Repo/RepoPage'
import SubatomicPage from './Features/Subatomic/SubatomicPage'
import PackageDepictionPage from './Features/Packages/PackageDepictionPage'
import VersionsPage from './Features/Packages/VersionsPage'
import MaxWidthWrapper from './Components/MaxWidthWrapper'

function App() {
  return (
    <MaxWidthWrapper>
      <HashRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/repo' element={<RepoPage />} />
          <Route path='/subatomic' element={<SubatomicPage />} />
          <Route path='/depiction/:id' element={<PackageDepictionPage />} />
          <Route path='/versions/:id' element={<VersionsPage />} />
        </Routes>
      </HashRouter>
    </MaxWidthWrapper>
  )
}

export default App
