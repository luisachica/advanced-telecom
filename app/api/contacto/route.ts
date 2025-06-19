import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("📥 Datos recibidos:", body) // <-- Para ver en consola

    const { nombre, email, telefono, mensaje, servicio } = body

    if (!nombre || !email || !telefono || !mensaje || !servicio) {
      return NextResponse.json({ error: "Faltan campos obligatorios" }, { status: 400 })
    }

    if (!/^\d{7,15}$/.test(telefono)) {
  return NextResponse.json(
    { error: "Número de teléfono no válido" },
    { status: 400 }
  );
}

    const response = await resend.emails.send({
      from: "Contacto Limpiezas en Madrid <onboarding@resend.dev>",
      to: "lfchica94@gmail.com", // 👈 Reemplaza esto por tu email real
      subject: `Nuevo mensaje de contacto de ${nombre}`,
      reply_to: email,
      html: `
  <h2>Nuevo mensaje desde el formulario</h2>
  <p><strong>Nombre:</strong> ${nombre}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Teléfono:</strong> ${telefono}</p>
  <p><strong>Servicio:</strong> ${servicio}</p>
  <p><strong>Mensaje:</strong><br>${mensaje}</p>
`
,
    })

    if (response.error) {
      console.error("❌ Error al enviar el correo:", response.error)
      return NextResponse.json({ error: "No se pudo enviar el correo." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("❌ Error inesperado:", error)
    return NextResponse.json({ error: "Error en el servidor." }, { status: 500 })
  }
}
