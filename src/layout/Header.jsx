import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  const menuItems = [
    { label: '메인', path: '/' },
    { label: '종량제 봉투', path: '/bag-guide' },
    { label: '쓰레기 Q&A', path: '/qna' },
    { label: '리사이클·업사이클', path: '/recycle-upcycle' }
  ]

  return (
    <header className="floating-header">
      <button type="button" className="brand header-brand-button" onClick={() => navigate('/')}>
        <strong>Re:Cycle</strong>
        <span>분리배출 생활 안내</span>
      </button>

      <nav>
        {menuItems.map(item => (
          <button type="button" key={item.path} onClick={() => navigate(item.path)}>
            {item.label}
          </button>
        ))}
      </nav>

      <div className="header-util" aria-hidden="true"></div>
    </header>
  )
}

export default Header
