import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import HomePage from '../pages/HomePage'
import BagGuidePage from '../pages/BagGuidePage'
import QnaPage from '../pages/QnaPage'
import RecycleUpcyclePage from '../pages/RecycleUpcyclePage'
import ScrollToTop from '../components/ScrollToTop'

function Content() {
  return (
    <>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bag-guide" element={<BagGuidePage />} />
        <Route path="/qna" element={<QnaPage />} />
        <Route path="/recycle-upcycle" element={<RecycleUpcyclePage />} />
      </Routes>
    </>
  )
}

export default Content
