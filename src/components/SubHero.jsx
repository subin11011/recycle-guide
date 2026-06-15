function SubHero({ className = '', title, description }) {
  return (
    <section className={`sub-hero ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}

export default SubHero
