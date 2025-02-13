
const ContactForm = (props)=> {
 
    return(
        <>
            <input type="text" />
            <button onClick={()=> alert("Hello")}>submit</button>
            <button onClick={props.click}>Child Button</button>

            <ul>
                <li>Name: {props.item['name']}</li>
                <li>Age: {props.item['age']}</li>
                <li>City: {props.item['city']}</li>
            </ul>
        </>
    );
}

export default ContactForm;