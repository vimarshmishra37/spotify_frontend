const IconText = (props) => {
    return (
        <div className="icon-text-container">
<img className="icon-text-icon" src={props.icon} />
            <p className="icon-text-text text-white ">{props.text}</p>
        </div>  
    )
}

export default IconText;