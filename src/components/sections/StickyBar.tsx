export function StickyBar() {
  return (
    <nav className="pk-sticky-bar" aria-label="Quick actions">
      <a
        href="https://connect.poscraft.co.uk/"
        className="pk-btn pk-btn--primary pk-sticky-bar__btn"
      >
        Order now
      </a>
      <a
        href="tel:01730263348"
        className="pk-btn pk-btn--outline-on-dark pk-sticky-bar__btn"
      >
        Call
      </a>
    </nav>
  );
}
