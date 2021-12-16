import "./HorizontalList.scss"

const HorizontalList = (props) => (
    <ul className="list">{
        props.data.map(dataItem => (
            <li key={dataItem} className="list__item">
                {dataItem}
            </li>
            )
        )
    }
    </ul>
)

export default HorizontalList