import "./style.scss";

const Filter = ({ allCategories, allGroups, setSelectedCategory, setSelectedGroup }) => {
    return (
        <div className="filter">
            <div className="filter-section">
                <label>Catagory: </label>
                <select className="select-tag" onChange={ (e) => setSelectedCategory(e.target.value) }>
                    { allCategories.map((item, ind) => <option key={ ind }>{ item }</option>) }
                </select>
            </div>
            <div className="filter-section">
                <label>Group: </label>
                <select className="select-tag" onChange={ (e) => setSelectedGroup(e.target.value) }>
                    { allGroups.map((item, ind) => <option key={ ind }>{ item }</option>) }
                </select>

            </div>
        </div>
    )
}

export default Filter;