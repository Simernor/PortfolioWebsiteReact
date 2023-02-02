import NavLinkBtn from './NavLinkBtn'

function NavBar()  {
	
    return(
        <div className = "buttonRow">
            <div><NavLinkBtn /></div>
            <div><NavLinkBtn /></div>
            <div><NavLinkBtn /></div>
        </div>
    )
}

export default NavBar;