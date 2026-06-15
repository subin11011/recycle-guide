function BagCard({ bag }) {
  return (
    <article className="bag-card">
      <img src={bag.icon} alt="" />
      <span>{bag.subtitle}</span>
      <h3>{bag.title}</h3>
      <p>{bag.desc}</p>
      <div className="chips">{bag.items.map(item => <em key={item}>{item}</em>)}</div>
      <div className="note">주의: {bag.note}</div>
    </article>
  )
}
export default BagCard
