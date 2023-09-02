import './Amin.css';

function Amin(props) {


    let a = "name is:" + props;

    return (
        <div className='amin'>
            this is the koskhole amin! with color {props.color} -
            {props.weight? "and my weight is " + props.weight : ""}
            {props.weight && "weight vojod darad!"}
        </div>
    )
}

export default Amin;