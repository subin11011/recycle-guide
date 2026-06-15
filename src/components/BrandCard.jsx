function BrandCard({ brand }) {
  return (
    <article className="brand-card">
      <div className={`brand-visual ${brand.badgeClass}`}>
        {brand.logo ? (
          <img src={brand.logo} alt={brand.logoAlt || brand.name} className="brand-logo" />
        ) : (
          brand.initial
        )}
      </div>

      <div className="brand-copy">
        <span className="brand-type">{brand.type}</span>
        <h3>{brand.name}</h3>
        <p>{brand.desc}</p>

        <div className="brand-point">
          <b>홍보 포인트</b>
          <p>{brand.point}</p>
        </div>

        <a href={brand.link} target="_blank" rel="noreferrer" className="brand-button">
          브랜드 더 알아보기
        </a>
      </div>
    </article>
  )
}

export default BrandCard
