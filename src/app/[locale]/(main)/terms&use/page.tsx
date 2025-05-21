import Title from "@/app/[locale]/components/mainPage/Titles/Title";
import P from "@/app/[locale]/components/main/P";
import Section from "../../components/main/Section";
import SubTitle from "../../components/mainPage/Titles/SubTitle";

export default function TermsOfUsePage() {
    return (
        <>
        <Title title="Terminos y condiciones "/>
        <Section>
            <P>
                Bienvenido/a a nuestro sitio web. Al acceder y utilizar esta página, aceptas cumplir con los siguientes Términos y Condiciones. Si no estás de acuerdo con ellos, si no aceptas estos terminos no podras usar la web.
            </P>
            <SubTitle subTitle="Uso de los datos personales"/>
            <div className="text-justify font-fredoka text-3xl px-8 font-light mx-8  mb-6">
                Al utilizar esta web, puedes proporcionar ciertos datos personales (como nombre, correo electrónico, etc.) a través de formularios de contacto, suscripciones o navegación. Estos datos son recogidos exclusivamente para los siguientes fines:
                <ul className="list-disc list-inside mt-4">
                    <li>Garantizar el correcto funcionamiento técnico del sitio web.</li>
                    <li>Mejorar la experiencia del usuario.</li>
                    <li>Gestionar servicios solicitados por el propio usuario.</li>
                </ul>
            </div>
           <SubTitle subTitle="Cookies"/>
            <P>
                Este sitio puede utilizar cookies propias que permiten el funcionamiento adecuado de la web y la mejora de los servicios ofrecidos. No se utilizan cookies con fines publicitarios ni para rastreo de terceros.
                
            </P>
             <SubTitle subTitle="Seguridad de los datos"/>
            <P>
                Adoptamos las medidas de seguridad adecuadas para proteger tus datos contra accesos no autorizados, alteraciones o pérdidas accidentales. Aun así, ningún sistema es 100% infalible y no podemos garantizar la seguridad total de la información transmitida por internet.
                
            </P>
             <SubTitle subTitle=" Derechos del usuario"/>
            <P>
                Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición (ARCO) en relación con tus datos personales escribiéndonos a: 
                <a href="mailto:durangaldekobizikletaeskola.com">durangaldekobizikletaeskola.com</a>
                
            </P>
            <SubTitle subTitle=" Modificaciones"/>
            <P>
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones se publicarán en esta misma página con fecha de actualización.
                
            </P>
        </Section>
        </>
    )
}