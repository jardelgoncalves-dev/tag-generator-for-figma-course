type NFTTagProps = { children: JSX.Element } 

export function NFTTag({ children }: NFTTagProps) {
  return (
    <section className="nft">
      <div className="card">
        <div className="card__logo">
          <img src="/images/logo.png" alt="Logo do curso de figma" />
        </div>
        <div className="card__diamond">
          <img src="/images/icon.png" alt="Circulo com bordas roxas e um desenho semelhante a um diamante" />
        </div>
        <div className="card__image">
          <img src="/images/jardel.png" alt="Jardel" />
          {children}
        </div>
      </div>
    </section>
  )
}