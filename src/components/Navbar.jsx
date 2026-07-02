import './Navbar.css'

function Navbar(){
    return (
            <nav className="navbar">
                <div className="nav-brand">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 35 1000 230"><rect x="0" y="35" width="1000" height="230" fill="white" /><text x="0" y="245" font-family="Times New Roman, Georgia, serif" font-size="260" font-style="italic" fill="black">SZ</text><text x="315" y="130" font-family="Times New Roman, Georgia, serif" font-size="88" letter-spacing="18" fill="black">SNĀZZE</text><line x1="315" y1="178" x2="975" y2="178" stroke="black" stroke-width="3" /><polygon points="650,164 664,178 650,192 636,178" fill="black" /><text x="430" y="235" font-family="Arial, Helvetica, sans-serif" font-size="34" letter-spacing="9" fill="black">CLOTHING WEAR</text></svg></a>
                </div>
                <div className="nav-links">
                    <a href="#">Login</a>
                    <a href="#"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></a>
                </div>
            </nav>
); 
}

export default Navbar;

