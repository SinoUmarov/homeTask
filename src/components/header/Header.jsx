import "../header/Header.css"
import logoimg from "../../assets/logo.png"
export default function Header(){
    return(
        <>
        <nav className="navbar">
            <div>
                <img src={logoimg} alt="" />
            </div>
            <div className="ul-div">
                <ul>
                    <li>
                        Главная
                    </li>
                    <li>О нас</li>
                    <li>Продукция</li>
                    <li>Процесс</li>
                    <li>Надёжность</li>
                    <li>Клиенты</li>
                    <li>Связаться с нами</li>
                </ul>
                <button className="by-demo">Заказать демо</button>
            </div>
        </nav>
        </>
    )
}