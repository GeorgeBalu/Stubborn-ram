import logo from "../assets/obshee-logo.png";
import aboutImage from "../assets/obo-mne.jpg";
import Carousel from "./Carousel";
import Reveal from "./Reveal";
import BeforeAfter from "./BeforeAfter";
import {
  FaVk,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="topBar hero-topbar">
        <button className="topButton">
          Регистрация
        </button>

        <button className="topButton">
          Вход
        </button>
      </div>

      <img
        src={logo}
        alt="Stubborn Ram"
        className="logo hero-logo"
      />

      <h2 className="heroTitle hero-title">
        Натуральный бодибилдинг
      </h2>

      <div className="heroFeatures">

        <Reveal immediate delay={1300}>
          <div className="featureCard">
            Персональное онлайн ведение
          </div>
        </Reveal>

        <Reveal delay={1450}>
          <div className="featureCard">
            Составление тренировочных программ
          </div>
        </Reveal>

        <Reveal immediate delay={1600}>
          <div className="featureCard">
            Обучение грамотному тренингу
          </div>
        </Reveal>

        <Reveal immediate delay={1750}>
          <div className="featureCard">
            Цельная экосистема фитнеса
          </div>
        </Reveal>

      </div>

      <div className="bottomButtons">

        <Reveal>
          <h2 className="aboutTitle">
            Кто я
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <img
            src={aboutImage}
            alt="Кто я"
            className="aboutImage"
          />
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

    </section>
  );
}

export default Hero;