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
        Натуральный бодибилдинг
      </h2>

      <div className="heroFeatures">

        <div className="featureCard">
          Персональное онлайн ведение
        </div>

        <div className="featureCard">
          Составление тренировочных программ
        </div>

        <div className="featureCard">
          Обучение грамотному тренингу
        </div>

        <div className="featureCard">
          Цельная экосистема фитнеса
        </div>

      </div>

      
    </section>
  );
}

export default Hero;