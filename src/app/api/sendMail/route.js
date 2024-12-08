import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    console.log("Datos recibidos:", { name, email, phone, subject, message });

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Tu correo
        pass: process.env.EMAIL_PASS, // Contraseña de aplicación
      },
    });

    await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.EMAIL_RECEIVER, // Destinatario
        subject: `Nuevo mensaje de contacto: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
            <!-- Header -->
            <div style="padding: 20px; text-align: center; background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
              <h1 style="margin: 0; font-size: 24px; color: #333;">Nuevo Mensaje de Contacto</h1>
              <p style="margin: 5px 0 0; font-size: 14px; color: #555;">Detalles del mensaje enviado desde tu sitio web</p>
            </div>
      
            <!-- Body -->
            <div style="padding: 20px; background-color: #ffffff;">
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr style="background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
                  <td style="padding: 12px; font-weight: bold; color: #333; width: 30%;">Nombre:</td>
                  <td style="padding: 12px; color: #555;">${name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 12px; font-weight: bold; color: #333;">Correo:</td>
                  <td style="padding: 12px; color: #555;">${email}</td>
                </tr>
                <tr style="background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
                  <td style="padding: 12px; font-weight: bold; color: #333;">Teléfono:</td>
                  <td style="padding: 12px; color: #555;">${phone}</td>
                </tr>
                <tr style="border-bottom: 1px solid #ddd;">
                  <td style="padding: 12px; font-weight: bold; color: #333;">Asunto:</td>
                  <td style="padding: 12px; color: #555;">${subject}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                  <td style="padding: 12px; font-weight: bold; color: #333;">Mensaje:</td>
                  <td style="padding: 12px; color: #555;">${message}</td>
                </tr>
              </table>
      
              <p style="font-size: 14px; color: #555; line-height: 1.6;">
                Si necesitas más información, no dudes en contactarnos. Este mensaje fue enviado automáticamente desde el formulario de contacto de tu página web.
              </p>
            </div>
      
            <!-- Footer -->
            <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #777; border-top: 1px solid #ddd;">
              <p style="margin: 0;">&copy; ${new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
            </div>
          </div>
        `,
      });
      

    return new Response(
      JSON.stringify({ message: "Correo enviado exitosamente" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error enviando correo:", error);
    return new Response(
      JSON.stringify({ message: "Error enviando correo", error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
