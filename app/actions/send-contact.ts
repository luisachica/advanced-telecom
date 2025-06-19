"use server"

export async function sendContactAction(formData: FormData) {
  const nombre = formData.get("nombre")?.toString() || ""
  const email = formData.get("email")?.toString() || ""
  const telefono = formData.get("telefono")?.toString() || ""
  const mensaje = formData.get("mensaje")?.toString() || ""
  const servicio = formData.get("servicio")?.toString() || ""

  if (!nombre || !email || !mensaje) {
    console.log("❌ Faltan campos")
    return { error: "Por favor completa todos los campos obligatorios." }
  }

  try {
    const res = await fetch("http://localhost:3000/api/contacto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre,
        email,
        telefono,
        servicio,
        mensaje,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error("❌ Error al enviar:", data.error)
      return { error: data.error || "Ocurrió un error desconocido" }
    }

    return { success: true }
  } catch (error) {
    console.error("❌ Error de red:", error)
    return { error: "No se pudo enviar el formulario. Intenta más tarde." }
  }
}
