function SectionHead({ eyebrow, title, description, className = '' }) {
  return (
    <div className={`section-head ${className}`}>
      <small>{eyebrow}</small>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default SectionHead
