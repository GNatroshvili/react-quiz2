import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">ProBook</p>
        <p className="footer-copy">
          © {year} ProBook Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
