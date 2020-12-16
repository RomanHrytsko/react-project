export default function UserComponent(props){
    const {item} = props
    return (
        <div>
            {item.id} - {item.name}
        </div>
    );
}