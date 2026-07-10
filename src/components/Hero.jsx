import logo from "../assets/obshee-logo.png";
import Reveal from "./Reveal";

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
  Экосистема
  <span>натурального бодибилдинга</span>
</h2>


     <div className="heroFeatures">

  <Reveal delay={3500}>
    <div className="heroDivider"></div>
  </Reveal>

  <Reveal delay={3650}>
    <div className="featureCard">
      <div className="featureTitle">
        Полное сопровождение
      </div>

      <div className="featureText">
        Все аспекты подготовки — под контролем
      </div>
    </div>
  </Reveal>

  <Reveal delay={3800}>
    <div className="featureCard">
      <div className="featureTitle">
        Индивидуальная стратегия
      </div>

      <div className="featureText">
        Под ваши цели и возможности
      </div>
    </div>
  </Reveal>

  <Reveal delay={3950}>
    <div className="featureCard">
      <div className="featureTitle">
        Научный подход
      </div>

      <div className="featureText">
        Основано на современных исследованиях
      </div>
    </div>
  </Reveal>

  <Reveal delay={4100}>
    <div className="featureCard">
      <div className="featureTitle">
        Всё в одном приложении
      </div>

      <div className="featureText">
        План, сопровождение и прогресс — в одном месте
      </div>
    </div>
  </Reveal>

</div>

      
    </section>
  );
}

export default Hero;