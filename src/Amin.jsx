import './Amin.css';

function Amin(props) {
    return (
        <div className='amin'>
            this is the koskhole amin! with color {props.color} -
            and my weight is : {props.weight}
        </div>
    )
}

export default Amin;