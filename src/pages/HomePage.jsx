export function HomePage() {
  return (
    <div className="home-page">
      <h1>Look for Interesting Astronomy Information</h1>

      <p>
        The universe is much larger than you can imagine, and there are many
        beautiful things to see and more to learn. On this page, you can find
        interesting information and images about astronomy. You can navigate
        through astronomy pictures of the day, mars rover photos, and asteroid
        information.
      </p>
      <footer>
        <p>We use the Nasa API to provide the information</p>
        <img
          className="nasa-logo"
          alt="Nasa log"
          src="src\assets\OptNASALogo.webp"
        />
      </footer>
    </div>
  );
}
