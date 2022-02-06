import { Link } from "react-router-dom";

export default function Index() {
  return (
    <main className="container">
      <div className="column center">
        <img src="/images/logo@3x.png" alt="Logo" className="lg" />
        <Link to="/create">
          <button className="button">Criar Tag</button>
        </Link>
      </div>
    </main>
  );
}
