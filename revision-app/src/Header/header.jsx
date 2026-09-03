import Link from './Link.jsx'
import "../CSS/Header.css"
import "../CSS/Container.css"
import Burgur from './Burgur.jsx'
import { useState } from 'react'
export default function Header(){
    const [burgurIcon , setBurgurIcon] = useState({c:"" , isOPen:false});
    function handleBurgurIcon(){
        if(burgurIcon.isOPen){
            setBurgurIcon({c:"" , isOPen:false})
        }
        else{
            setBurgurIcon({c:"show" , isOPen:true})
        }
    }
    const linksProps = [
        {id: 0, href: '#landing', linkName: 'landing'},
        {id: 1, href: '#about', linkName: 'About'},
        {id: 2, href: '#test', linkName: 'test'},
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
                 <Burgur click = {handleBurgurIcon}/>
                <nav className={burgurIcon.c}>
                    {Links}
                </nav>
            </div>
        </header>
    )
}