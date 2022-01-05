import "./Searchbar.scss"

interface searchbarProps {
    onInputChange: (value: string) => void;
}

const Searchbar = ({onInputChange}: searchbarProps) => (
    <div className="searchbar">
        <input className="searchbar__input" type="text" onChange={(event) => onInputChange(event.target.value)}/>
        <button className="searchbar__btn" type="button"></button>
    </div>
)

export default Searchbar