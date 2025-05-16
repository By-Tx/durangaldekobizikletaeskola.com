import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server"; 

interface EmailRequestBody {
    name: string;
    birthDate: string;
    address: string;
    city: string;
    school: string;
    guardianName: string;
    phone: string;
    email: string;
    message: string;
}

export async function POST(req: NextRequest) {
    if (req.method === "POST") {
        try {
            
            const { name, birthDate, address, city, school, guardianName, phone, email, message }: EmailRequestBody = await req.json();

         
            if (!name || !birthDate || !address || !city || !school || !guardianName || !phone || !email || !message) {
                return NextResponse.json({ message: "Faltan datos en el formulario" }, { status: 400 });
            }

            // Nodemailer Config
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
                subject: "Nuevo formulario recibido",
                text: `Nombre: ${name}
                        Fecha de Nacimiento: ${birthDate}
                        Dirección: ${address}
                        Ciudad: ${city}
                        Centro de Estudios: ${school}
                        Tutor: ${guardianName}
                        Teléfono: ${phone}
                        Email: ${email}
                        Mensaje: ${message}`,
            });

           
            return NextResponse.json({ message: "Correo enviado correctamente" }, { status: 200 });
        } catch (error) {
            console.error("Error enviando el correo:", error);
            return NextResponse.json({ message: "Hubo un error enviando el correo" }, { status: 500 });
        }
    } else {
       
        return NextResponse.json(
            { message: `Método ${req.method} no permitido` }, 
            { status: 405, headers: { Allow: "POST" } }
        );
    }
}
