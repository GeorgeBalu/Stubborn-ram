import logo from "../assets/obshee-logo.png";

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

<div className="heroDivider"></div>

      <div className="heroFeatures">

        <div className="featureCard">
  <div className="featureTitle">
    Полное сопровождение
  </div>

  <div className="featureText">
    Все аспекты прогресса — под контролем
  </div>
</div>

<div className="featureCard">
  <div className="featureTitle">
    Индивидуальная стратегия
  </div>

  <div className="featureText">
    Без шаблонов. Под ваши цели и возможности
  </div>
</div>

<div className="featureCard">
  <div className="featureTitle">
    Научный подход
  </div>

  <div className="featureText">
    Современные исследования вместо мифов
  </div>
</div>

<div className="featureCard">
  <div className="featureTitle">
    Всё в одном приложении
  </div>

  <div className="featureText">
    План, коммуникация и прогресс — в одном месте
  </div>
</div>

      </div>

      
    </section>
  );
}

export default Hero;