import Navigations from "./Navigations"
import Button from "./Button"
const Header = () => {
  return (
    <div className="header_section">
      <h3>hello world</h3>
      <div className="logo">
        <h2>edunity</h2>
      </div>
      <Navigations/>

      <Button variant="primary" size="md">
          this is another primary button
      </Button>
     
    </div>
  )
}

export default Header
