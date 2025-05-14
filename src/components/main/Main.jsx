import "../main/Main.css";
import "../header/Header.css";
import img1 from "../../assets/res.png";
import img2 from "../../assets/res1.png";
import img3 from "../../assets/fr.png";
import img4 from "../../assets/fr2.png";
import restangle from "../../assets/ress.png";
import img5 from "../../assets/rest3.png";
import sect1 from "../../assets/sect1.png";
import resv from "../../assets/resv.png";
import tell from "../../assets/tell.png";
import bf from "../../assets/body.png";
import ressssg from "../../assets/meme.png";
import group from "../../assets/group.png";
import section13 from "../../assets/mais.png"
export default function Main() {
  return (
    <>
      <section className="section-Main1">
        <h2 className="Mani-h2">
          Умная доставка материалов для сложных строительных площадок
        </h2>
        <div className="main-div1">
          <button className="by-demo">Заказать демо</button>
          <button className="about">Подробнее</button>
        </div>
      </section>
      <section>
        <img src={img1} className="img1" alt="" />
        <img src={img2} className="img2" alt="" />
      </section>
      <section className="section3">
        <article className="article1">
          <img src={img3} alt="" />
          <h2>Повышение эффективности</h2>
          <p>Эффективные проекты стоят дешевле и завершаются в срок.</p>
        </article>
        <article className="article1">
          <img src={img4} alt="" />
          <h2>Снижение потерь</h2>
          <p>
            Тщательно отслеживайте движение стройматериалов, чтобы избежать краж
            и повреждений.
          </p>
        </article>
        <article className="article1">
          <img src={img4} alt="" />
          <h2>Повышение эффективности</h2>
          <p>
            Обеспечьте здоровье и благополучие людей, работающих на вашей
            площадке.
          </p>
        </article>
      </section>
      <section className="stroymaterial">
        <div>
          <h2 className="haos">Строительство - это хаос</h2>
          <p className="udivitel">
            Хаос может быть удивительной творческой силой, воздвигающая новые
            здания из пыли. Хаос вызывает несчастные случаи, задержки и потери.
            Он вводит проекты в стресс и разочарование. Это означает, что вы
            действительно не контролируете ситуацию.
          </p>
        </div>
        <img src={restangle} alt="" />
      </section>
      <section className="section6">
        <h2>
          Пора навести порядок на вашей стройплощадке и взять под контроль свой
          проект
        </h2>
      </section>
      <section className="section7">
        <aside>
          <h2>
            Мы заботимся о доставке на стройплощадку и о людях, которые на них
            рассчитывают{" "}
          </h2>
          <p>
            Мы знаем всё о гордости от сияющего нового здания. Нам также
            известно всё о разочаровании от попыток завершить проект в срок и в
            рамках бюджета.
          </p>
          <p className="zdes">Мы здесь, чтобы помочь.</p>
        </aside>
        <aside>
          <img src={img5} alt="" />
        </aside>
      </section>
      <section>
        <img src={sect1} className="sect1" alt="" />
      </section>
      <section className="stroymaterial">
        <div>
          <h2 className="haos">Что такое СтройКонтроль?</h2>
          <p className="udivitel">
            СтройКонтроль - это интеллектуальная система управления доставкой,
            предоставляющая информацию и контроль материалов на сложных
            строительных площадках в режиме реального времени.
          </p>
        </div>
      </section>
      <section className="section7">
        <aside>
          <h2>Отслеживайте доставку по всей цепочке поставок </h2>
          <p>
            От поставщика до субподрядчика - вы всегда знаете, где находятся
            ваши материалы, благодаря чему обычные отходы уходят в прошлое и
            сокращаются несчастные случаи на месте.
          </p>
        </aside>
        <aside>
          <img src={resv} alt="" />
        </aside>
      </section>

      <section className="section7">
        <aside>
          <img src={tell} alt="" />
        </aside>
        <aside>
          <h2>Оптимизируйте и контролируйте свое прибытие на место </h2>
          <p>
            Транспортные средства доставки прибывают в фиксированные промежутки
            времени в заранее назначенные отсеки, где разгрузочное оборудование
            готово и ждет их.
          </p>
        </aside>
      </section>
      <section className="section7">
        <aside>
          <h2>Возьмите под контроль данные в режиме реального времени</h2>
          <p>
            Интеллектуальная отчетность дает вам возможность принимать решения в
            зависимости от того, как обстоят дела в данный момент. Больше
            никаких ручных отчетов по заливке бетона или ежемесячной проверки
            10.000 накладных со счетами, все это доступно онлайн без каких-либо
            усилий.
          </p>
        </aside>
        <aside>
          <img src={bf} alt="" />
        </aside>
      </section>

      <section className="delivery-section">
        <h2 className="title">Доставка стала проще</h2>
        <p className="subtitle">
          Мы позаботимся обо всех ваших различных поставках и их многочисленных
          специализированных требованиях к разгрузке.
        </p>
        <div className="items-grid">
          <div className="item">
            <div className="icon truck"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car-icon lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg></div>
            <div>
              <h3>Бетон</h3>
              <p>
                Поставки бетона точно планируются, а его состояние
                контролируется, что обеспечивает максимально возможное время для
                установки.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon trash"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-beer-icon lucide-beer"><path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"/><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/></svg></div>
            <div>
              <h3>Утилизация отходов</h3>
              <p>
                Отходы контролируются и сортируются, а заполненность контейнеров
                отслеживается в цифровом виде.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon package"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blocks-icon lucide-blocks"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg></div>
            <div>
              <h3>Опалубка</h3>
              <p>
                Вся опалубка отслеживается от прибытия до отправления, а ее
                состояние контролируется, что сводит к минимуму потери и
                повреждения.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon panels"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth-icon lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg></div>
            <div>
              <h3>Сборные панели</h3>
              <p>
                Сборные панели прибывают по очереди, их хранение на месте
                отслеживается, а установка планируется и контролируется.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon facade"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-app-window-mac-icon lucide-app-window-mac"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></svg></div>
            <div>
              <h3>Фасады</h3>
              <p>
                Элементы фасада поступают последовательно, их фиксированное
                положение и перемещения отслеживаются.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon finish"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-glass-water-icon lucide-glass-water"><path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg></div>
            <div>
              <h3>Отделка</h3>
              <p>
                Материалы поступают точно в срок, маркируются и детально
                отслеживаются для установки.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon scaffolding"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-close-icon lucide-panel-right-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg></div>
            <div>
              <h3>Строительные леса</h3>
              <p>
                Строительные леса отслеживаются от получения до хранения,
                использования и возврата, потому всегда ясно, что, где и на
                месте ли.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon equipment"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-close-icon lucide-panel-right-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg></div>
            <div>
              <h3>Оборудование</h3>
              <p>
                Оборудование и операторы гарантированно доступны в нужное время,
                а их местоположение, состояние и использование отслеживается.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon electric"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-close-icon lucide-panel-right-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg></div>
            <div>
              <h3>Электрика и сантехника</h3>
              <p>
                Доставка осуществляется в точной последовательности для сложных
                установок, что снижает ошибки или устраняет необходимость в
                переделках.
              </p>
            </div>
          </div>
        </div>
        <div className="itemsss">
          <h1 className="highlight">
            и все остальные материалы которые поступают или покидают вашу
            площадку
          </h1>
        </div>
      </section>
      <section className="directoeu">
        <div>
          <h2>Надёжность</h2>
          <p className="class-class">
            Благодаря надёжному строительству выигрывают все - муниципальные
            органы выполняют свои обязанности перед гражданами, инвесторы
            получают сертификаты своих проектов, а генеральные подрядчики
            получают повышенную репутацию.
          </p>
        </div>
        <div className="all-articlediv">
          <article>
            <img src="" alt="" />
            <h2>Сниженное загрязнение</h2>
            <p>
              При оптимизации логистики требуется меньше поездок, что приводит к
              снижению выбросов CO2. Выбрасываемый CO2 контролируется, что
              позволяет ставить цели и вносить ощутимые улучшения.
            </p>
          </article>
          <article>
            <img src="" alt="" />
            <h2>Сниженное загрязнение</h2>
            <p>
              При оптимизации логистики требуется меньше поездок, что приводит к
              снижению выбросов CO2. Выбрасываемый CO2 контролируется, что
              позволяет ставить цели и вносить ощутимые улучшения.
            </p>
          </article>
          <article>
            <img src="" alt="" />
            <h2>Сниженное загрязнение</h2>
            <p>
              При оптимизации логистики требуется меньше поездок, что приводит к
              снижению выбросов CO2. Выбрасываемый CO2 контролируется, что
              позволяет ставить цели и вносить ощутимые улучшения.
            </p>
          </article>
        </div>
      </section>
      <section>
        <div className="add-aboutcss">
          <h2>
            Надёжная конструкция СтройКонтроль входит в стандартную
            комплектацию.
          </h2>
          <button className="about">Подробнее</button>
        </div>
      </section>
      
      <section className="sectin12">
        <div className="artocl">
          <aside className="obsh-asaid">
            <h2>Создан для строительства</h2>
            <article className="articl1">
              <h2>Хорошо виден в любых условиях</h2>
              <p>
                Независимо от того, солнечно или темно, найдется подходящий
                режим экрана
              </p>
            </article>
            <article className="articl1">
              <h2>Поддержка международных языков</h2>
              <p>
                На современной стройке работают люди со всего мира. Язык не
                является проблемой для СтройКонтроля.
              </p>
            </article>
            <article className="articl1">
              <h2 className="roboto">
                Работает на любом устройстве - мобильном телефоне, планшете,
                ноутбуке
              </h2>
              <p>
                Независимо от того, солнечно или темно, найдется подходящий
                режим экранаЛюди на разных должностях используют разные
                устройства. СтройКонтроль автоматически настраивается в
                соответствии с требованиями. Вы также можете проецировать панели
                мониторинга живого проекта на настенные экраны.
              </p>
              <div className="main-div2">
                <button className="by-demo">Заказать демо</button>
                <button className="about">Подробнее</button>
              </div>
            </article>
          </aside>
          <aside>
            <img src={ressssg} alt="" />
          </aside>
        </div>
        <div className="section3">
          <article className="article2">
            <img src={img3} alt="" />
            <h2>Повышение эффективности</h2>
            <p>Эффективные проекты стоят дешевле и завершаются в срок.</p>
          </article>
          <article className="article2">
            <img src={img4} alt="" />
            <h2>Снижение потерь</h2>
            <p>
              Тщательно отслеживайте движение стройматериалов, чтобы избежать
              краж и повреждений.
            </p>
          </article>
          <article className="article2">
            <img src={img4} alt="" />
            <h2>Повышение эффективности</h2>
            <p>
              Обеспечьте здоровье и благополучие людей, работающих на вашей
              площадке.
            </p>
          </article>
        </div>
      </section>
 <section className="delivery-section">
        <h2 className="title">Доставка стала проще</h2>
        <p className="subtitle">
          Мы позаботимся обо всех ваших различных поставках и их многочисленных
          специализированных требованиях к разгрузке.
        </p>
        <div className="items-grid">
          <div className="item">
            <div className="icon truck"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car-icon lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg></div>
            <div>
              <h3>Бетон</h3>
              <p>
                Поставки бетона точно планируются, а его состояние
                контролируется, что обеспечивает максимально возможное время для
                установки.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon trash"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-beer-icon lucide-beer"><path d="M17 11h1a3 3 0 0 1 0 6h-1"/><path d="M9 12v6"/><path d="M13 12v6"/><path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"/><path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/></svg></div>
            <div>
              <h3>Утилизация отходов</h3>
              <p>
                Отходы контролируются и сортируются, а заполненность контейнеров
                отслеживается в цифровом виде.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon package"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blocks-icon lucide-blocks"><rect width="7" height="7" x="14" y="3" rx="1"/><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"/></svg></div>
            <div>
              <h3>Опалубка</h3>
              <p>
                Вся опалубка отслеживается от прибытия до отправления, а ее
                состояние контролируется, что сводит к минимуму потери и
                повреждения.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon panels"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth-icon lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg></div>
            <div>
              <h3>Сборные панели</h3>
              <p>
                Сборные панели прибывают по очереди, их хранение на месте
                отслеживается, а установка планируется и контролируется.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon facade"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-app-window-mac-icon lucide-app-window-mac"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></svg></div>
            <div>
              <h3>Фасады</h3>
              <p>
                Элементы фасада поступают последовательно, их фиксированное
                положение и перемещения отслеживаются.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon finish"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-glass-water-icon lucide-glass-water"><path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg></div>
            <div>
              <h3>Отделка</h3>
              <p>
                Материалы поступают точно в срок, маркируются и детально
                отслеживаются для установки.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon scaffolding"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-close-icon lucide-panel-right-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg></div>
            <div>
              <h3>Строительные леса</h3>
              <p>
                Строительные леса отслеживаются от получения до хранения,
                использования и возврата, потому всегда ясно, что, где и на
                месте ли.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon equipment"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-close-icon lucide-panel-right-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg></div>
            <div>
              <h3>Оборудование</h3>
              <p>
                Оборудование и операторы гарантированно доступны в нужное время,
                а их местоположение, состояние и использование отслеживается.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="icon electric"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-close-icon lucide-panel-right-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg></div>
            <div>
              <h3>Электрика и сантехника</h3>
              <p>
                Доставка осуществляется в точной последовательности для сложных
                установок, что снижает ошибки или устраняет необходимость в
                переделках.
              </p>
            </div>
          </div>
        </div>
        <div className="itemsss">
          <h1 className="highlight">
            и все остальные материалы которые поступают или покидают вашу
            площадку
          </h1>
        </div>
      </section>
      <section className="group-sectipn">
        <img src={group} alt="" />
      </section>
      
      <section className="group-sectipn">
        <img src={section13} alt="" />
      </section>
    </>
  );
}
