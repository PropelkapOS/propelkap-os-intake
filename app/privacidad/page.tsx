import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | PropelKap",
  description:
    "Aviso de privacidad de PropelKap: qué datos recabamos, con qué finalidad y cómo ejercer tus derechos ARCO.",
};

export default function AvisoDePrivacidad() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "48px 20px",
        lineHeight: 1.7,
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#1a1a1a",
      }}
    >
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Aviso de Privacidad</h1>
      <p style={{ color: "#666", fontSize: 14 }}>
        Última actualización: 30 de septiembre de 2026
      </p>

      <h2 style={{ fontSize: 20, marginTop: 32 }}>Responsable</h2>
      <p>
        PropelKap (en adelante, &quot;PropelKap&quot;, &quot;nosotros&quot;) es
        responsable del tratamiento de los datos personales que nos
        proporciones a través de nuestros sitios, formularios, aplicaciones y
        canales de contacto (incluidos WhatsApp, correo electrónico y nuestros
        canales de contenido como YouTube), conforme a la Ley Federal de
        Protección de Datos Personales en Posesión de los Particulares
        (LFPDPPP).
      </p>

      <h2 style={{ fontSize: 20, marginTop: 32 }}>Datos que recabamos</h2>
      <ul>
        <li>Datos de identificación y contacto: nombre, teléfono, WhatsApp y correo electrónico.</li>
        <li>Respuestas que proporciones en nuestros formularios y cuestionarios de diagnóstico.</li>
        <li>Datos de uso y navegación recabados mediante cookies y píxeles de medición (por ejemplo, Meta y TikTok), conforme a la configuración de tu navegador.</li>
      </ul>

      <h2 style={{ fontSize: 20, marginTop: 32 }}>Finalidades</h2>
      <ul>
        <li>Contactarte y dar seguimiento a tu solicitud o diagnóstico.</li>
        <li>Prestar y personalizar nuestros servicios.</li>
        <li>Enviarte información, contenido y comunicaciones comerciales relacionadas con nuestros servicios (finalidad secundaria; puedes oponerte en cualquier momento).</li>
        <li>Medir y mejorar nuestros sitios, contenidos y campañas.</li>
      </ul>

      <h2 style={{ fontSize: 20, marginTop: 32 }}>Transferencias</h2>
      <p>
        No vendemos tus datos personales. Utilizamos proveedores tecnológicos
        (alojamiento, mensajería, analítica y plataformas publicitarias) que
        tratan datos por cuenta de PropelKap y bajo obligaciones de
        confidencialidad.
      </p>

      <h2 style={{ fontSize: 20, marginTop: 32 }}>Derechos ARCO</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de Acceso,
        Rectificación, Cancelación y Oposición (ARCO), así como revocar tu
        consentimiento, escribiéndonos a{" "}
        <a href="mailto:contacto@propelkap.com">contacto@propelkap.com</a>.
        Responderemos en los plazos previstos por la LFPDPPP.
      </p>

      <h2 style={{ fontSize: 20, marginTop: 32 }}>Cambios a este aviso</h2>
      <p>
        Cualquier modificación a este aviso de privacidad se publicará en esta
        misma página.
      </p>
    </main>
  );
}
