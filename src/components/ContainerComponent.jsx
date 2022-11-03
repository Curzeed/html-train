export default function Container(props){
    return (
        <div className={`container${props.type}`}>
            {props.children}
        </div>
    )
}