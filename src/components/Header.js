function Header(props){

    return (
        <div className = "header">
            <h1>React Thread</h1>
            <button onClick = {props.click}>POST</button>
        </div>
    );
}

export default Header;