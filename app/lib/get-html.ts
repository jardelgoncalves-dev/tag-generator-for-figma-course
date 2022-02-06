import { base64Encode } from "./base64-encode";

import bg from '~/assets/bg.png'
import logo from '~/assets/logo.png'
import icon from '~/assets/icon.png'
import { Tag } from "@prisma/client";

function getCss() {
  const background = base64Encode(bg);
  return `
    *,
    *::after,
    *::before {
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
    }
    
    body {
      background-color: #481452;
    }
    
    body, input, select, button {
      font-family: 'Roboto', sans-serif;
    }
    
    .container {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .nft {
      height: 648px;
      width: 648px;
      background-image: url(${background});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .card {
      background: rgba(228, 60, 255, 0.1);
      border: 2px solid rgba(228, 60, 255, 0.3);
      box-sizing: border-box;
      backdrop-filter: blur(5px);
      border-radius: 24px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      position: relative;
      padding: 20px;
    }
    
    .card__logo {
      margin-bottom: 16px;
    }
    
    .card__diamond {
      position: absolute;
      right: 32px;
      top: 46px;
      z-index: 2;
    }
    
    .card__diamond img {
      width: 90px;
      height: auto;
    }
    
    
    .card__image {
      width: 242px;
      height: 340px;
      border-radius: 24px;
      border: 2px solid rgba(228, 60, 255, 0.3);
      position: relative;
      overflow: hidden;
    }
    
    .card__image img {
      width: 242px;
      height: 340px;
      object-fit: cover;
      border-radius: 24px;
    }
    .card__image::after {
      content:"";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 33.26%, #140025 73.88%);
    }
    
    .card__image__content {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 42%;
      width: 100%;
      color: #fff;
      z-index: 2;
      font-weight: bold;
      font-size: 14px;
      padding: 0 16px;
    }
    
    .card__image__content span{
      font-size: 12px;
      color: #E43CFF;
    }
    .card__image__info {
      font-size: 12px;
      font-weight: 400;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }
    
    .card__image__info svg {
      width: 16px;
    }
    
    .card__image__content ul {
      list-style: none;
      font-size: 12px;
      padding: 6px 0;
      font-weight: 400;
    }
    
    .row {
      display: flex;
      gap: 4px;
    }
    
    div.tag {
      border: 2px solid rgba(228, 60, 255, 0.3);
      font-size: 10px;
      padding: 4px 8px;
      border-radius: 20px;
      font-weight: 400;
    }
  `
}

export function getHtml(tag: Tag) {
  const logoImage = base64Encode(logo)
  const iconImage = base64Encode(icon)

  return `<!DOCTYPE html>
  <html>
      <meta charset="utf-8">
      <title>Generated Image</title>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
          ${getCss()}
      </style>
      <body>
        <main class="container">
          <section class="nft">
            <div class="card">
              <div class="card__logo">
                <img src="${logoImage}" alt="Logo do curso de figma" />
              </div>
              <div class="card__diamond">
                <img src="${iconImage}" alt="Circulo com bordas roxas e um desenho semelhante a um diamante" />
              </div>
              <div class="card__image">
                <img src="${tag.avatar}" alt=${tag.name} />
                <div class="card__image__content">
                  <h2>${tag.name}</h2>
                  <span>${tag.role}</span>
                  <div class="card__image__info">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="23"
                      fill="none"
                      viewBox="0 0 24 23"
                    >
                      <path
                        fill="#fff"
                        d="M18.062 5.396a.66.66 0 11-1.318 0 .66.66 0 011.318 0z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M18.609 2.54a.66.66 0 00.7-1.117l-.7 1.118zm2.919.886a.66.66 0 00-1.04.81l1.04-.81zM9.493 1.44h5.273V.122H9.493V1.44zm12.524 7.252v5.273h1.319V8.692h-1.319zM2.241 13.965V8.692H.923v5.273H2.24zm7.252 7.252a7.251 7.251 0 01-7.252-7.252H.923a8.57 8.57 0 008.57 8.57v-1.319zm12.524-7.252a7.251 7.251 0 01-7.25 7.252v1.318a8.57 8.57 0 008.569-8.57h-1.319zM9.493.122a8.57 8.57 0 00-8.57 8.57H2.24A7.251 7.251 0 019.493 1.44V.122zm5.932 11.206a3.296 3.296 0 01-3.296 3.296v1.319a4.614 4.614 0 004.615-4.615h-1.319zm-3.296 3.296a3.296 3.296 0 01-3.296-3.296H7.515a4.614 4.614 0 004.614 4.615v-1.319zm-3.296-3.296a3.296 3.296 0 013.296-3.296V6.714a4.614 4.614 0 00-4.614 4.614h1.318zm3.296-3.296a3.296 3.296 0 013.296 3.296h1.319a4.614 4.614 0 00-4.615-4.614v1.318zm5.274-2.636v1.318c.728 0 1.318-.59 1.318-1.318h-1.318zm0 0h-1.318c0 .728.59 1.318 1.318 1.318V5.396zm0 0V4.077c-.728 0-1.318.59-1.318 1.319h1.318zm0 0h1.318c0-.729-.59-1.319-1.318-1.319v1.319zm-2.637 15.82H12.13v1.319h2.637v-1.319zm-2.637 0H9.493v1.319h2.636v-1.319zM14.766 1.44c1.413 0 2.729.404 3.843 1.1l.7-1.117A8.533 8.533 0 0014.765.122V1.44zm5.722 2.797a7.217 7.217 0 011.53 4.455h1.318a8.536 8.536 0 00-1.808-5.266l-1.04.81z"
                      ></path>
                    </svg> ${tag.instagram}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="23"
                      fill="none"
                      viewBox="0 0 20 23"
                    >
                      <path
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.318"
                        d="M14.785 2.294A8.623 8.623 0 009.888.78c-4.733 0-8.57 3.778-8.57 8.438 0 7.232 8.57 12.657 8.57 12.657s8.57-5.425 8.57-12.657a8.31 8.31 0 00-1.536-4.822M13.56 9.22c0 1.997-1.645 3.616-3.673 3.616S6.215 11.216 6.215 9.22 7.86 5.603 9.888 5.603s3.673 1.619 3.673 3.616z"
                      ></path>
                    </svg> ${tag.city}
                  </div>
                  <ul>
                    <li>Status: <span>Cursando</span></li>
                    <li>Turma: <span>#0001</span></li>
                  </ul>
                  <div class="row">
                    <div class="tag">#cursofigma</div>
                    <div class="tag">#feuxdesign</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
  </html>`;
}