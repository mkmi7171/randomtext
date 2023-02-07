
export default function FixText({ text, n }) {

    const fixArr = text.split('')
    return (
        <div className="flex">
            {fixArr.map((letter, index) => {
                return <p className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl mx-5 font-bold font-mono text-white ${index === n ? 'text-mainOrange' : ''}`} key={index}>{letter}</p>
            })}
        </div>
    )
}