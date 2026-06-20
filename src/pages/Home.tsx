import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <div className="home-bg">
        <div className="bg-blob bg-blob--1" />
        <div className="bg-blob bg-blob--2" />
      </div>

      <div className="home-content">
        <div className="home-text">
          <span className="home-eyebrow">Introducing ProBook Ultra</span>
          <h1 className="home-title">
            Power meets
            <br />
            portability.
          </h1>
          <p className="home-desc">
            The thinnest laptop we've ever built. With an all-day 18-hour
            battery, blazing-fast performance, and a stunning OLED display,
            ProBook Ultra is built for the way you work — wherever that takes
            you.
          </p>
          <p className="home-pricing">From $1,199 or $49.95/mo. for 24 mo.</p>
          <div className="home-actions">
            <button className="btn-primary" onClick={() => navigate("/users")}>
              Meet the team
            </button>
            <button className="btn-secondary">Learn more</button>
          </div>
        </div>

        <div className="home-visual">
          <div className="laptop">
            <div className="laptop-screen">
              <div className="screen-inner">
                <div className="screen-bar" />
                <div className="screen-bar screen-bar--short" />
                <div className="screen-bar screen-bar--shorter" />
                <div className="screen-circle" />
              </div>
            </div>
            <div className="laptop-hinge" />
            <div className="laptop-base">
              <div className="laptop-keyboard" />
              <div className="laptop-trackpad" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
