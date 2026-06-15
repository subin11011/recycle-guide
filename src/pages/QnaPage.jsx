import QnaAccordion from '../components/QnaAccordion'
import SubHero from '../components/SubHero'
import { qnaData } from '../data/qnaData'

function QnaPage() {
  return (
    <main className="sub-layout">
      <SubHero
        className="qna-hero"
        title="헷갈리는 쓰레기 10가지"
      />

      <section className="content-wrap narrow">
        <QnaAccordion data={qnaData} />
      </section>
    </main>
  )
}

export default QnaPage
