const JumpingWords = ({ title }) => {
    let arrayWithWords = title.split(" ");
    return (
        <p>
            {arrayWithWords.map((word, index) => (
                <span
                    key={index}
                    style={{
                        position: "relative",
                        top: index % 2 !== 0 ? "0.5rem" : "-0.5rem",
                        display: "inline-block",
                        margin: 0,
                    }}
                >
                    {word}
                </span>
            ))}
        </p>

    );
}

export default JumpingWords;
