function Window({ openWindow }) {
    return (
      <div className="window">
        <div className="close" onClick={openWindow}>
        </div>
        <h1>Народная мудрость</h1>
        <p className="text-content">
          Что вершит судьбу человечества в этом мире? Некое незримое существо или закон, подобно
          Длани Господней парящей над миром? По крайне мере истинно то, что человек не властен даже над своей волей.
        </p>
      </div>
    );
  }
  
  export default Window;