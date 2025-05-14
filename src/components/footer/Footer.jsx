
import "./Footer.css";

export default function Footer ()  {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">СТРОЙКОНТРОЛЬ</div>
          <div className="footer-contact">
            <p>г. Москва</p>
            <p>Пресненская наб., 88, оф. 527</p>
            <p>info@stroycontrol.ru</p>
            <p>+7 (945) 123-45-67</p>
            <p><i className="fa fa-facebook" /></p>
          </div>
        </div>

        <div className="footer-column">
          <h4>Наш продукт</h4>
          <p>Процесс</p>
          <p>Продукция</p>
        </div>

        <div className="footer-column">
          <h4>Обслуживание</h4>
          <p>Клиенты</p>
          <p>Надёжность</p>
        </div>

        <div className="footer-column">
          <h4>Компания</h4>
          <p>О нас</p>
          <p>Связаться с нами</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2020 СтройКонтроль, Все права защищены.</p>
        <p>Политика конфиденциальности</p>
      </div>
    </footer>
  );
};


