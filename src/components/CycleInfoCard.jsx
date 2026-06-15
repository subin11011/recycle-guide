function CycleInfoCard({ item }) {
  return (
    <article className={`cycle-card ${item.className}`}>
      <span className="cycle-label">{item.label}</span>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>

      <ul>
        {item.points.map(point => <li key={point}>{point}</li>)}
      </ul>
    </article>
  )
}

export default CycleInfoCard
