import PropTypes from "prop-types";

function ResultView({ output }) {
    // CHANGE COLOR TO RED IF ERROR OCCURRED
    let colorStyle = {
        color: output === "Error" ? "#f11" : "#000",
    };

    return (
        <div
            style={colorStyle}
            className="w-full h-20 relative overflow-x-auto"
        >
            <div className="right-9 w-full text-right absolute text-4xl bottom-4">
                {output}
            </div>
        </div>
    );
}

ResultView.propTypes = {
    history: PropTypes.string,
    output: PropTypes.string,
};

export default ResultView;
