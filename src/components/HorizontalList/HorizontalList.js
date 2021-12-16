import "./HorizontalList.scss"

const HorizontalList = (props) => (
    <ul className="horizontal-list">{
        props.data.map(dataItem => (
            <li key={dataItem} className="horizontal-list__item">
                {dataItem}
            </li>
            )
        )
    }
    </ul>
)

export default HorizontalList