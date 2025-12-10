import Logo from "../../assets/icons/logo.svg?react";
import SearchIcon from "../..//assets/icons/search.svg?react";
import Navigations from "../navs/Navigations"
import Button from "../button/Button"
import "./Header.css"
const Header = () => {
  return (
    <div className="header_section">
      <div className="logo">
        <Logo/>
      </div>
      <Navigations/>
      <div>
        <SearchIcon/>
      </div>
      <Button variant="primary" size="lg">
        create account
      </Button>
    </div>
  )
}

export default Header
