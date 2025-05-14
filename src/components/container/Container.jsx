import Footer from "../footer/Footer"
import Header from "../header/Header"
import Main from "../main/Main"
import "./Container.css"
export default function Container(){
    return(
        <>
        <div className="components-div">
<Header />
<Main/>
<Footer/>
        </div>

        </>
    )
}