
import {Context} from "../../Services/ContextService";

export default function FullUsers (props){
    let {items} = props

    return (
        <Context.Consumer>
            {
                contextInfo => {
                    return (
                        <div>
                            {items.map(user=>(<div>{user.id} - {user.username} -{contextInfo}</div>))}
                        </div>)
                }
            }
        </Context.Consumer>
    );
}