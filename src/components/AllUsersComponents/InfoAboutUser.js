export default function InfoAboutUser (props){
    let{item}=props
    return (
        <div>
            {`ID: ${item.id}`}<br/>
            {`Name: ${item.name}`}<br/>
            {`Email: ${item.email}`}<br/>
            {`Phone: ${item.phone}`}<br/>
            {`Adress: ${item.address.city}`}<br/>
        </div>
    );
};