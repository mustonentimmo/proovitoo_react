import "./HorizontalList.scss"

const HorizontalList = (props) => (
    <ul className="horizontal-list">{
        props.feedback.map(dataItem => (
            <li key={dataItem} className="horizontal-list__item">
                {dataItem}
            </li>
            )
        )
    }
    </ul>
)

export default HorizontalList