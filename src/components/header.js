import Navbar from "./navbar";
import img from "../image/img.svg";
const Header =() => {
     return(<>
     <header>
     <Navbar/>

     <div className="content">
                  <div className="text-content">
                  <h5>This is my website <span>Please have a look</span></h5>
                   <h1>I have created this using react js <br/>of <span>UI/UX</span><br/>design</h1>
                    <p>So i am also hosting this website .</p>
                  </div>
                  <div className="image-content">
                  <img src={img} />
                  </div>

               </div>
     </header>
     </>
        
     );
}
export default Header;