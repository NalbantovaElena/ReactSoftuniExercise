import {Link} from 'react-router-dom'
const Header = ()=>{
    return(
     
        <header id="site-header">
       
        <nav className="navbar">
            <section className="navbar-dashboard">
                <Link href="/">Dashboard</Link>
                
                <div id="guest">
                    <Link className="button" href="/login">Login</Link>
                    <Link className="button" href="/register">Register</Link>
                </div>
               
                <div id="user">
                    <span>Welcome, email</span>
                    <Link className="button" href="/my-pets">My Pets</Link>
                    <Link className="button" href="/create">Add Pet</Link>
                    <Link className="button" href="#">Logout</Link>
                </div>
            </section>
        </nav>
    </header>
    )
}

export default Header;
