import "./formInput.css";

const FormInput = (props) => {
    const{name, description, price} = props;
    return(
        <div>
            
            <h2>{name}</h2>
            <label>{description}</label>
            <label>{price}</label>
        </div>
    );
}

export default FormInput;