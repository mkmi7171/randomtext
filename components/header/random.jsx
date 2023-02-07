import { useState, useEffect, useCallback } from "react";

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const words = alpha.map((x) => String.fromCharCode(x));

const len = words.length;

function Random({ leng }) {
    const [text, setText] = useState("");
    const [colors, setColors] = useState(['1%', '5%', '10%', "15%", '20%']);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRefresh(prevRefresh => prevRefresh + 1);
        }, 400);
        return () => clearInterval(intervalId);
    }, []);

    const randomColor = () => {
        return colors[(Math.random() * colors.length) >> 0];
    };

    const generateRandom = useCallback(() => {
        let result = ''
        for (let i = 0; i < leng; i++) {
            result += words[Math.floor(Math.random() * len)]
            setText(result);
        }

    }, [len]);

    useEffect(() => {
        generateRandom();
    }, [generateRandom]);


    return (
        <div className="flex uppercase">
            {text.split("").map((letter) => {
                return <span className={`colorChange opacity-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl mx-5 font-medium font-mono text-white duration-700`} style={{ opacity: randomColor() }}>{`${letter} `}</span>
            })}
        </div>
    );
}

export default Random;