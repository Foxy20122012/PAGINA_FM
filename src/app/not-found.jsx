import Link from "next/link";
import {
  ErrorPage,
  ErrorTitle,
  ErrorMessage,
  ErrorButton,
  ErrorImage,
} from "../components/404/ErrorPage";

export default function Custom404() {
  return (
    <ErrorPage>
      <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-6 md:space-y-0">
        <ErrorImage src="/404.jpeg" alt="Página no encontrada" />
        <div className="text-center md:text-left">
          <ErrorTitle>404</ErrorTitle>
          <ErrorMessage>
            Lo sentimos, no pudimos encontrar la página que estabas buscando.
            <br /> Revisa la URL o vuelve al inicio.
          </ErrorMessage>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
            <ErrorButton href="/">Volver al Inicio</ErrorButton>
            <ErrorButton href="/contact" variant="outline">
              Contáctanos
            </ErrorButton>
          </div>
        </div>
      </div>
    </ErrorPage>
  );
}
