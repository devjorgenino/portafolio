// re_RDugdJFC_J5F6SLvMBdWN5KVwa7NwwB1B
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const translations: Record<
  string,
  {
    send_success: string;
    send_error: string;
    email_subject: string;
    email_from_name: string;
  }
> = {
  en: {
    send_success: "Form sent successfully ✌🏽",
    send_error: "There was an error sending the form",
    email_subject: "Jorge Niño - Frontend Developer - New Contact Message",
    email_from_name: "Jorge Niño Developer",
  },
  es: {
    send_success: "Formulario enviado con éxito ✌🏽",
    send_error: "Hubo un error al enviar el formulario",
    email_subject:
      "Jorge Niño - Desarrollador Frontend - Nuevo mensaje de contacto",
    email_from_name: " Desarrollador Jorge Niño",
  },
};

function pickLocale(bodyLocale?: string | null, acceptLang?: string | null) {
  if (bodyLocale && (bodyLocale === "en" || bodyLocale === "es"))
    return bodyLocale;
  if (acceptLang) {
    const first = acceptLang.split(",")[0];
    if (first.startsWith("es")) return "es";
    if (first.startsWith("en")) return "en";
  }
  return "es";
}

export async function POST(req: Request) {
  let locale = "es";
  try {
    const dataForm = await req.json();
    locale = pickLocale(dataForm.locale, req.headers.get("accept-language"));

    try {
      const fromHeader = `${translations[locale].email_from_name} <onboarding@resend.dev>`;
      const subject = translations[locale].email_subject;

      const data = await resend.emails.send({
        from: fromHeader,
        to: ["jorgeninor21@gmail.com"],
        subject,
        react: EmailTemplate({
          firstName: dataForm.username,
          message: dataForm.message,
          email: dataForm.email,
          locale,
        } as any),
        text: translations[locale].email_from_name,
      });

      return new Response(
        JSON.stringify({
          ok: true,
          message: translations[locale].send_success,
          data,
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (err) {
      return new Response(
        JSON.stringify({ ok: false, message: translations[locale].send_error }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ ok: false, message: translations[locale].send_error }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
