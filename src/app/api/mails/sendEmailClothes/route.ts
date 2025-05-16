import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { nombre, mail, productos } = await req.json();

        if (!nombre || !mail || !productos || !Array.isArray(productos) || productos.length === 0) {
            return NextResponse.json({ message: "Faltan datos en el formulario" }, { status: 400 });
        }

        
        const productosTexto = productos
            .map((p, idx) => `${idx + 1}. ${p.name} - Tipo: ${p.type} - Talla: ${p.talla || "No especificada"}`)
            .join("\n");

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECIPIENT,
            subject: "Nuevo pedido de ropa recibido",
            text: `Nombre: ${nombre}
            Email: ${mail}
            Productos seleccionados:
            ${productosTexto}
            `,
        });

        return NextResponse.json({ message: "Correo enviado correctamente" }, { status: 200 });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
    }
}
