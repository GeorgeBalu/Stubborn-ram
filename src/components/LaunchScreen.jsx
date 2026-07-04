import "./LaunchScreen.css";

export default function LaunchScreen({ visible }) {
  return (
    <div className={`launch-screen ${!visible ? "hide" : ""}`}>
      <img
        src="/ram-logo.png"
        alt="Stubborn Ram"
        className="launch-logo"
      />
    </div>
  );
}