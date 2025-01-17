export default function TextInfo(props: { Text: string | undefined; SecondText: string | undefined; ThirdText: string | undefined }) {
    return (
        <section className="w-full max-w-5xl mx-auto bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg shadow-lg text-2xl p-8 transition duration-300 transform hover:scale-105 hover:shadow-2xl my-10">
            <p className="mb-6 text-white font-semibold tracking-wide leading-relaxed">{props.Text}</p>
            <p className="mb-6 text-white font-semibold tracking-wide leading-relaxed">{props.SecondText}</p>
            <p className="text-white font-semibold tracking-wide leading-relaxed">{props.ThirdText}</p>
        </section>
    );
}
