export default function UserComponent (props){
        let {item} = props
    return (
        <div>
            {item.id} - {item.name}
        </div>
    );
}