
function NavItem({children, href = "#", onClick = () => {}}){
    return (
        <li>
            <a className="px-4 py-2 block text-xl hover:bg-sky-600 transition-all" href={href} onClick={onClick}>{children}</a>
        </li>
    )
}


export default function Nav({className}){
    return (
        <nav className={`hidden lg:block fixed h-full text-right border-l-4 border-orange-400 ${className}`}>
            <ul>
                <NavItem href="#home">home</NavItem>
                <NavItem href="#about">about</NavItem>
                <NavItem href="#works">works</NavItem>
                <NavItem href="#contacts">contacts</NavItem>
            </ul>
        </nav>
    )
}