import { useState } from 'react'

function QnaAccordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="qna-list">
      {data.map((item, index) => {
        const isOpen = activeIndex === index

        return (
          <div className="qna-item" key={item.q}>
            <button
              type="button"
              className="qna-button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
            >
              <div className="q-title">
                <img src={item.image} alt="" />
                <b>Q. {item.q}</b>
              </div>
              <span className="qna-arrow">{isOpen ? '−' : '+'}</span>
            </button>

            {isOpen && (
              <div className="q-body">
                <img src={item.image} alt="" />
                <p>{item.a}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default QnaAccordion
