function getCss() {
  return `
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
   
    body {
      height: 100vh;
      width: 100%;
      font-family: 'Sohne', sans-serif;
      background-color: red;
    }
    main {
      padding: 100px;
    }
    body, main {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h1 {
      width: 100%;
      text-align: left;
      font-size: 40px;
      color: #fff;
    }
    span {
      margin-bottom: 16px;
      color: #fff;;
      opacity: 0.8;
    }
  `
}

export function getHtml() {
  return `<!DOCTYPE html>
  <html>
      <meta charset="utf-8">
      <title>Generated Image</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
          ${getCss()}
      </style>
      <body>
        <main>
          <span>Jardel Gonçalves</span>
          <h1>First HTML</h1>
        </main>
      </body>
  </html>`;
}