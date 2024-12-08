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
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
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
