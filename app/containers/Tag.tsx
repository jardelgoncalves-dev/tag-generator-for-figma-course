import { useLoaderData } from "remix";
import Icon from "~/components/Icon";
import { NFTTag } from "~/components/NFTTag";

export default function TagPage() {
  const tag = useLoaderData();
  return (
    <main className="container">
      <div className="column center">
        <NFTTag>
          <div className="card__image">
            <img id="image" src={tag?.avatar} alt={tag?.name} />
            <div className="card__image__content">
              <h2 id="name">{tag?.name}</h2>
              <span id="role">{tag?.role}</span>
              <div className="card__image__info">
                <Icon name="instagram"/> <span id="instagram">{tag?.instagram}</span>
                <Icon name="location"/> <span id="city">{tag?.city}</span>
              </div>
              <ul>
                <li>Status: <span>Cursando</span></li>
                <li>Turma: <span>#0001</span></li>
              </ul>
              <div className="row">
                <div className="tag">#cursofigma</div>
                <div className="tag">#feuxdesign</div>
              </div>
            </div>
          </div>
        </NFTTag>
      </div>
      <a className="link-download" download href={`/image/${tag.id}`}>baixar</a>
    </main>
  );
}