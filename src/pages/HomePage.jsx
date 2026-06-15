import ProcessFlow from '../components/ProcessFlow'
import NoticeCard from '../components/NoticeCard'
import QuickMenu from '../components/QuickMenu'
import { noticeData } from '../data/homeData'

function HomePage() {
  return (
    <main>
      <section className="main-visual">
        <div className="hero-copy">
          <h1>분리배출<br />함께 해봐요</h1>
          <div className="hero-dots"><span></span><span></span><span></span></div>
        </div>
      </section>

      <section className="notice-zone">
        {noticeData.map(item => (
          <NoticeCard key={item.title} title={item.title} description={item.description} />
        ))}
        <QuickMenu />
      </section>

      <ProcessFlow />
    </main>
  )
}

export default HomePage
