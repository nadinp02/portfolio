import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="container-page py-24 md:py-36">
      <p className="label text-ink-soft">Error 404</p>
      <h1 className="mt-5 max-w-[18ch] text-display">Esta página no existe.</h1>
      <p className="mt-5 max-w-xl text-lead text-ink-soft">
        Puede que el enlace esté mal escrito o que la página se haya movido.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Volver al inicio</ButtonLink>
      </div>
    </section>
  );
}
