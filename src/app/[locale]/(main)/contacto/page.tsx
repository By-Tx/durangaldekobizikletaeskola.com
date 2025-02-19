import { getTranslations } from "next-intl/server";
export default async function Page() {
     const t =  await getTranslations("contact");

    return (
        <div className="flex flex-col items-center justify-center min-h-screen  p-6 mb-8">
            <h1 className="text-3xl font-bold mb-6">{t("title")}</h1>
            <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full text-black">
                <h2 className="text-2xl font-semibold mb-4">{t("title2")}</h2>
                <p className="mb-4">
                   {t("p1")}
                </p>
                <div className="mb-4">
                    <h3 className="font-bold">{t("address")}</h3>
                    <p>Murueta Torre Auzunea, 5D, 48200 Durango, Bizkaia</p>
                </div>
                <div className="mb-4">
                    <h3 className="font-bold">Email:</h3>
                    <a href="mailto:durangaldekobizikletaeskola@gmail.com" className="text-blue-500 hover:underline">
                        durangaldekobizikletaeskola@gmail.com
                    </a>
                </div>
                <div className="mb-4">
                    <h3 className="font-bold">{t("phone")}</h3>
                    <p className="text-blue-500">{`699 780 190 ibon`}</p>
                </div>
                <div className="mt-6">
                    <h3 className="font-bold mb-2">{t("location")}</h3>
                    <iframe
                        title="Ubicación"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5819.467136519978!2d-2.634083123264281!3d43.173116483348075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e3291d2578213%3A0x5320edb9cf962152!2sMurueta%20Torre%20Auzunea%20Etxetaldea%2C%205D%2C%2048200%20Durango%2C%20Bizkaia!5e0!3m2!1ses!2ses!4v1729780836710!5m2!1ses!2ses"
                        width="100%"
                        height="250"
                        className="border-0 rounded-lg"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            <div className="mt-24">
           
            </div>
        </div>
    );


}