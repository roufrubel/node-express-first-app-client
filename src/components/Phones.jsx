import { Link, useLoaderData } from "react-router-dom";


const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>All Phones: {phones.length }</h2>
            {
                phones.map(phone =><li key={phone._id}>
                    <Link to={`/phone/${phone._id}`}>
                    {phone.estate_title}
                    </Link></li>)
            }
        </div>
    );
};

export default Phones;