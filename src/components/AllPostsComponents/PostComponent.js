import './PostsStyles.css'

export default function (props) {
    let {item} = props
    return (
        <div className={'blockWithPostInfo'}>
            <b>{item.id}. {item.title}</b>
            <br/>
            <div className={'postBodyText'}>
                {item.body}
            </div>
        </div>
    );
}