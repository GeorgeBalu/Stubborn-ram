import aboutImage from "../assets/obo-mne.png";
import Carousel from "./Carousel";
import Reveal from "./Reveal";
import BeforeAfter from "./BeforeAfter";
import {
  FaVk,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

function HomeContent() {
  return (
    <>
      <div className="bottomButtons">

        <Reveal>
  <h2 className="aboutTitle">
    Кто стоит за Stubborn Ram
  </h2>
</Reveal>

<Reveal delay={150}>
  <div className="aboutFrame">
    <img
      src={aboutImage}
      alt="Георгий Балухин"
      className="aboutImage"
    />
  </div>
</Reveal>

<Reveal>
  <h2 className="resultTitle">
    Что вы получите
  </h2>
</Reveal>

        <Reveal delay={150}>
          <Carousel />
        </Reveal>

        <Reveal>
          <h2 className="resultTitle">
            Результаты клиентов
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <BeforeAfter />
        </Reveal>

        <Reveal delay={240}>
          <button className="mainButton">
            Заполнить анкету
          </button>
        </Reveal>

        <Reveal delay={360}>
          <div className="socials">

            <a
              className="socialButton"
              href="https://vk.com/stubborn_ram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VK"
            >
              <FaVk />
            </a>

            <a
              className="socialButton"
              href="https://www.instagram.com/egor_baal?igsh=N29mZm54OW00bHpi&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              className="socialButton"
              href="https://t.me/stubborn_ram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegramPlane />
            </a>

          </div>
        </Reveal>

      </div>
    </>
  );
}

export default HomeContent;