import { useRef } from "react";
import { useActionData } from "remix";
import Icon from "~/components/Icon";
import { NFTTag } from "~/components/NFTTag";
import { useImageChange } from "~/hooks/useImageChange";
import { useInputChange } from "~/hooks/useInputChange";

export default function Index() {
  const actionData = useActionData();

  const imageRef = useRef<HTMLInputElement | null>(null)
  const nameRef = useRef<HTMLInputElement | null>(null)
  const roleRef = useRef<HTMLInputElement | null>(null)
  const instagramRef = useRef<HTMLInputElement | null>(null)
  const cityRef = useRef<HTMLInputElement | null>(null)

  useImageChange(imageRef, '#image')
  useInputChange(nameRef, '#name')
  useInputChange(roleRef, '#role')
  useInputChange(instagramRef, '#instagram')
  useInputChange(cityRef, '#city')

  return (
    <main className="container">
      <div className="row center">
        <form method="post" encType="multipart/form-data" className="form">
          <label>
            Foto: 
            <div className="uploader">
              <input
                name="image"
                ref={imageRef}
                type="file"
                accept="image/png, image/jpeg"
                aria-invalid={
                  Boolean(actionData?.errors?.name) ||
                  undefined
                }
                aria-describedby={
                  actionData?.errors?.name
                    ? "name-error"
                    : undefined
                }
              />
              <span>
                Clique para selecionar uma foto (.png ou .jpeg)
              </span>
            </div>
            {actionData?.errors?.image && (
              <p
                className="form-validation-error"
                role="alert"
                id="image-error"
              >
                {actionData?.errors?.image}
              </p>
            )}
          </label>
          <label>
            Nome: 
            <input
              ref={nameRef}
              name="name"
              type="text"
              defaultValue={actionData?.formPayload?.name}
              key={actionData?.formPayload?.name}
              placeholder="Nome"
              aria-invalid={
                Boolean(actionData?.errors?.name) ||
                undefined
              }
              aria-describedby={
                actionData?.errors?.name
                  ? "name-error"
                  : undefined
              }
            />
            {actionData?.errors?.name && (
              <p
                className="form-validation-error"
                role="alert"
                id="name-error"
              >
                {actionData?.errors?.name}
              </p>
            )}
          </label>
          <label>
            Cargo/Profissão: 
            <input
              name="role"
              ref={roleRef}
              type="text"
              defaultValue={actionData?.formPayload?.role}
              key={actionData?.formPayload?.role}
              placeholder="Cargo ou Profissão"
              aria-invalid={
                Boolean(actionData?.errors?.role) ||
                undefined
              }
              aria-describedby={
                actionData?.errors?.role
                  ? "role-error"
                  : undefined
              }
            />
            {actionData?.errors?.role && (
              <p
                className="form-validation-error"
                role="alert"
                id="role-error"
              >
                {actionData?.errors?.role}
              </p>
            )}
          </label>
          <div className="row">
            <label>
              Instagram: 
              <input
                name="instagram"
                ref={instagramRef}
                type="text"
                placeholder="Instagram"
                defaultValue={actionData?.formPayload?.instagram}
                key={actionData?.formPayload?.instagram}
              />
            </label>
            <label>
              Cidade: 
              <input
                name="city"
                ref={cityRef}
                type="text"
                placeholder="Cidade"
                defaultValue={actionData?.formPayload?.city}
                key={actionData?.formPayload?.city}
                aria-invalid={
                  Boolean(actionData?.errors?.city) ||
                  undefined
                }
                aria-describedby={
                  actionData?.errors?.city
                    ? "city-error"
                    : undefined
                }
              />
              {actionData?.errors?.city && (
              <p
                className="form-validation-error"
                role="alert"
                id="city-error"
              >
                {actionData?.errors?.city}
              </p>
            )}
            </label>
          </div>
          <button className="button" type="submit">Salvar</button>
        </form>
        <NFTTag>
          <div className="card__image">
            <img id="image" src="/images/jardel.png" alt="Profile image" />
            <div className="card__image__content">
              <h2 id="name">John Doe</h2>
              <span id="role">Front End Developer</span>
              <div className="card__image__info">
                <Icon name="instagram"/> <span id="instagram">john.doe</span>
                <Icon name="location"/> <span id="city">Brazil</span>
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
    </main>
  );
}