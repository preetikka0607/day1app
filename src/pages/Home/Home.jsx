import NavComp from '../../components/NavComp/NavComp.jsx';
import WidgetComp from '../../components/WidgetComp/WidgetComp.jsx';
import './Home.css';
import {WidgetData} from '../../data/data.js';
import TextButton from '../../components/TextButton/TextButton.jsx';
import { ItemsComp } from '../../components/ItemsComp/ItemsComp.jsx';

function Home(){
    return(
        <div>
            <NavComp/>
            <div className='widget'>
            <div className='widget-wrapper'>
            {/* <WidgetComp 
            title1 = {WidgetData[0].title1}
            title2 = {WidgetData[0].title2}
            description1 = {WidgetData[0].description1}
            description2 = {WidgetData[0].description2}
            /> */}
            {/* <WidgetComp title1="Avail 2 free Deliveries" title2="50% Off on delicious food!" description1="This party season Go Big" description2="And Go Bold on tasty delights."/> */}
            <WidgetComp {...WidgetData[0]}/>
            <WidgetComp {...WidgetData[1]}/>
            <WidgetComp {...WidgetData[2]}/>
            </div>
            </div >
            <div className='text-div'>
            <div className='innertext-div'>
            <h2>Top Brands Near Your Location...</h2>
            </div>
            </div>
            <TextButton/>
            <div className='text-div'>
            <div className='innertext-div'>
            <h2>What do you like to Have?..</h2>
            </div>
            </div>
            <div>
            <ItemsComp></ItemsComp>
            </div>

        </div>
    );
}
export default Home;