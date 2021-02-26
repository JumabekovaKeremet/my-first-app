function BiggerNumber(props) {
    if (props.a > props.b) {
        return <div> The number {props.a} bigger than number {props.b} </div>
    }
    else if (props.a < props.b) {
        return <div> The number {props.b} bigger than number {props.a} </div>
    }
}
export default BiggerNumber;