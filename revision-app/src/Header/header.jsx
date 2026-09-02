import Link from './Link.jsx'
import "../CSS/Header.css"
import "../CSS/Container.css"

export default function Header(){
    const linksProps = [
        {id: 0, href: '#Home', linkName: 'Home'},
        {id: 1, href: '#about', linkName: 'About'},
        {id: 2, href: '#contact', linkName: 'Contact'},
        {id: 3, href: '#team', linkName: 'Team'},
        {id: 4, href: '#testimonials', linkName: 'Testimonials'}
    ]
    let Links = linksProps.map((linkProp) => {
        return <Link key={linkProp.id} href={linkProp.href} linkName={linkProp.linkName} />
    });
    return (
        <header>
            <div className="container">
                 <h1>My App</h1>
                <nav>
                    {Links}
                </nav>
            </div>
        </header>
    )
}