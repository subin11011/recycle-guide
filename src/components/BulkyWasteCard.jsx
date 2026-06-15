function BulkyWasteCard({ method }) {
  return (
    <article className="bulky-card">
      <img src={method.icon} alt="" />
      <span>{method.subtitle}</span>
      <h3>{method.title}</h3>
      <p>{method.desc}</p>

      <ol>
        {method.steps.map(step => <li key={step}>{step}</li>)}
      </ol>

      <div className="note">{method.note}</div>
    </article>
  )
}

export default BulkyWasteCard
