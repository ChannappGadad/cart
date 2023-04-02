import "./formInput.css";

const FormInput = (props) => {
    const{name, description, price, handleClick} = props;

    return(
        <div>
            <h2>{name}</h2>
            <h4>{description}</h4>
            <h4>{price}</h4>
            <div>
                <button onClick={() => {handleClick(props)}}>Add</button>
            </div>
        </div>
    );
}

export default FormInput;