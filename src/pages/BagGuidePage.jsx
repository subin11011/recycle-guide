import BagCard from '../components/BagCard'
import BulkyWasteCard from '../components/BulkyWasteCard'
import SectionHead from '../components/SectionHead'
import SubHero from '../components/SubHero'
import { bagData } from '../data/bagData'
import { bulkyWasteData } from '../data/bulkyWasteData'

function BagGuidePage() {
  return (
    <main className="sub-layout">
      <SubHero
        className="bag-hero"
        title="종량제 봉투 안내"
      />

      <section className="content-wrap">
        <div className="card-grid">
          {bagData.map(bag => <BagCard key={bag.title} bag={bag} />)}
        </div>
      </section>

      <section className="content-wrap bulky-waste-section">
        <SectionHead
          className="bulky-head"
          eyebrow="BULKY WASTE GUIDE"
          title="대형폐기물은 이렇게 배출해요"
          description="종량제 봉투에 담기 어려운 가구, 대형 생활용품 등은 일반 봉투가 아닌 별도 신고 절차를 통해 배출해야 합니다."
        />

        <div className="bulky-grid">
          {bulkyWasteData.map(method => (
            <BulkyWasteCard key={method.title} method={method} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default BagGuidePage
