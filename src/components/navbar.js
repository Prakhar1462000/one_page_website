const Navbar = () =>{
    return(
        <>
            <nav>
                <div className="Logo"></div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Log</a></li>
                    <li><a href="#">Skills</a></li>
                </ul>
                <div className="btns">
                    <span><a href="#">Sign in</a></span>
                    <span>  <a href="#">Sign up</a>
                    </span>
                </div>
            </nav>
        </>
    )

}
export default Navbar;