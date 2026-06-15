import BrandCard from '../components/BrandCard'
import CycleInfoCard from '../components/CycleInfoCard'
import SectionHead from '../components/SectionHead'
import SubHero from '../components/SubHero'
import { brandData } from '../data/brandData'
import { cycleInfoData } from '../data/cycleInfoData'

function RecycleUpcyclePage() {
  return (
    <main className="sub-layout cycle-page">
      <SubHero
        className="cycle-hero"
        title="리사이클 & 업사이클"
      />

      <section className="content-wrap cycle-intro">
        <SectionHead
          className="cycle-head"
          eyebrow="RESOURCE CIRCULATION"
          title="다시 쓰는 방식이 다릅니다"
          description="리사이클은 폐기물을 다시 원료로 되돌리는 방식이고, 업사이클은 버려진 물건의 특징을 살려 더 가치 있는 제품으로 바꾸는 방식입니다."
        />

        <div className="cycle-compare">
          {cycleInfoData.map(item => <CycleInfoCard key={item.label} item={item} />)}
        </div>
      </section>

      <section className="brand-section">
        <div className="content-wrap">
          <SectionHead
            className="cycle-head"
            eyebrow="BRAND CASE"
            title="대표 브랜드 소개 & 홍보"
            description="리사이클 브랜드 1개와 업사이클 브랜드 1개를 골라, 브랜드가 어떤 방식으로 자원 순환을 실천하는지 보여줍니다."
          />

          <div className="brand-grid">
            {brandData.map(brand => <BrandCard key={brand.name} brand={brand} />)}
          </div>
        </div>
      </section>

      <section className="content-wrap campaign-box">
        <h2>오늘의 실천 메시지</h2>
        <p>
          분리배출은 리사이클의 시작이고, 낡은 물건을 새롭게 바라보는 태도는 업사이클의 시작입니다.
          우리가 버리는 순간을 조금만 바꾸면 쓰레기는 다시 자원이 될 수 있습니다.
        </p>
      </section>
    </main>
  )
}

export default RecycleUpcyclePage
