import { useLoaderData } from "react-router-dom";


const Phone = () => {
    const phone = useLoaderData();
    console.log(phone)
    return (
        <div>
            <h2>{phone.estate_title}</h2>
            <p>{phone.description}</p>            
        </div>
    );
};

export default Phone;