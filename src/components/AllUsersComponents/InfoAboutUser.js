import './userStyle.css'
export default function InfoAboutUser (props){
    let{item}=props
    let name
    if(item.name === undefined){
        name = 'hidden'
    }else{
        name = 'target'
    }
    return (
        <div className={name}>
            {`ID: ${item.id}`}<br/>
            <hr/>
            {`Name: ${item.name}`}<br/>
            <hr/>
            {`Email: ${item.email}`}<br/>
            <hr/>
            {`Phone: ${item.phone}`}<br/>
            {/*{`Adress: ${item.address.city}`}<br/>*/}
        </div>
    );
};