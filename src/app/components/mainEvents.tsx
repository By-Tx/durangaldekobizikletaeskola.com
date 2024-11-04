import { FC } from "react";

interface MainEventsProps {
  div1?: string;
  div2?: string;
  div3?: string;
  title?: string;
  title2?: string;
  title3?: string;
  label?: string;
  label2?: string;
  label3?: string;
}

const MainEvents: FC<MainEventsProps> = ({ div1, div2, div3, title2, title3, title, label, label2, label3 }) => {
    const titles = [title, title2, title3];
    const labels = [label, label2, label3];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {[div1, div2, div3].map((content, index) => (
        <div
          key={index}
          className="relative flex flex-col items-start p-6 border border-gray-200 rounded-xl shadow-md bg-white hover:bg-gray-50 transition-colors duration-300"
        >
          <div className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-semibold uppercase py-1 px-3 rounded-full">
          {labels [index]}
          </div>
          <h2 className="text-gray-800 text-xl font-semibold mb-2">{titles [index]}</h2>
          <p className="text-gray-600 text-sm flex-grow">{content || "Descripción no disponible"}</p>
          
        </div>
      ))}
    </section>
  );
};

export default MainEvents;
