import { Link } from 'react-router-dom'
import LogoImage from "../ui/Logo.png"

const Logo = ({ color = 'dark' }) => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src={LogoImage} 
        alt="Datroi Logo" 
        className={`h-12 w-auto ${color === 'dark' ? 'brightness-0' : 'brightness-0 invert'}`}
      />
    </Link>
  )
}

export default Logo