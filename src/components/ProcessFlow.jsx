import { processData } from '../data/processData'

function ProcessFlow() {
  return (
    <section className="process-section">
      <div className="section-head">
        <small>RECYCLE PROCESS</small>
        <h2>분리배출된 쓰레기는 어디로 갈까요?</h2>
        <p>집에서 버려진 재활용품이 수거, 선별, 가공을 거쳐 새 제품으로 돌아오는 과정을 한눈에 보여줍니다.</p>
      </div>
      <div className="process-flow">
        {processData.map((item, index) => (
          <article className="process-item" key={item.title}>
            <div className="process-num">{String(index + 1).padStart(2, '0')}</div>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
export default ProcessFlow
