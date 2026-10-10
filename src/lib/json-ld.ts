/** Escapa "<" para que ningún valor pueda cerrar el <script> del JSON-LD. */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
