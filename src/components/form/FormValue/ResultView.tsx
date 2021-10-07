import PropTypes from "prop-types";

interface Props {
    output: string;
}

function ResultView(props: Props) {
    // CHANGE COLOR TO RED IF ERROR OCCURRED
    let colorStyle = {
        color: props.output === "Error" ? "#f11" : "#000",
    };

    return (
        <div
            style={colorStyle}
            className="w-full h-20 relative overflow-x-auto"
        >
            <div
                className={`right-9 w-full text-right absolute text-4xl bottom-4 ${
                    props.output === "Error" ? "text-sectext" : "text-primtext"
                }`}
            >
                {props.output}
            </div>
        </div>
    );
}

ResultView.propTypes = {
    history: PropTypes.string,
    output: PropTypes.string,
};

export default ResultView;
