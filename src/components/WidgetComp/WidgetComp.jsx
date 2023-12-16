import './WidgetComp.css';
import WidgetButton from './WidgetButton.jsx';

function WidgetComp(props) {
    return (
        <div>
            <div className="widget-container">
                <h2>{props.title1}</h2>
                <h2>{props.title2}</h2><br></br>
                <p>{props.description1}</p>
                <p>{props.description2}</p><br></br>
                <WidgetButton/>
            </div>
        </div>

    );
}

export default WidgetComp;