import "./style.scss";

const Pagination = ({ selectPageHandler, currPage, totalEmojis }) => {
    return (
        <div className='pagination'>
            <button onClick={ () => selectPageHandler(currPage - 1) }>Prev</button>
            { [...Array(Math.floor(totalEmojis / 10))].map((page, ind) => {
                if (ind + 1 <= currPage + 5 && ind + 1 >= currPage - 5) {
                    return (
                        <button
                            key={ ind }
                            onClick={ () => selectPageHandler(ind + 1) }
                            className={ currPage === ind + 1 ? "active" : "btn" }>
                            { ind + 1 }
                        </button>
                    )
                }
            }) }
            <button onClick={ () => selectPageHandler(currPage + 1) }>Next</button>
        </div>
    );
};

export default Pagination;