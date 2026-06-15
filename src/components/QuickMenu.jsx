import { Link } from 'react-router-dom'

function QuickMenu() {
  return (
    <div className="quick-menu">
      <h2>바로가기</h2>
      <Link to="/bag-guide">종량제 봉투 안내</Link>
      <Link to="/qna">쓰레기 Q&A</Link>
      <Link to="/recycle-upcycle">리사이클·업사이클 소개</Link>
    </div>
  )
}

export default QuickMenu
