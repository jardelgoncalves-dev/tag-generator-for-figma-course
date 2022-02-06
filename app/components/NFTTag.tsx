type NFTTagProps = { children: JSX.Element } 

export function NFTTag({ children }: NFTTagProps) {
  return (
    <section className="nft column">
      <div className="row center">
          <a className="course-link" href="https://cursodefigma.com">cursodefigma.com</a>
        </div>
      <div className="card">
        <div className="card__logo">
          <img src="/images/logo.png" alt="Logo do curso de figma" />
        </div>
        <div className="card__diamond">
          <img src="/images/icon.png" alt="Circulo com bordas roxas e um desenho semelhante a um diamante" />
        </div>
        {children}
      </div>
    </section>
  )
}