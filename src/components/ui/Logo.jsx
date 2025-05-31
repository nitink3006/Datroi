import { Link } from 'react-router-dom'

const Logo = ({ color = 'dark' }) => {
  return (
    <Link to="/" className="flex items-center">
      <span className={`font-bold text-2xl ${color === 'dark' ? 'text-primary-600' : 'text-white'}`}>
        Datroi
      </span>
    </Link>
  )
}

export default Logo