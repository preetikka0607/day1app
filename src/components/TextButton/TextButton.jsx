import './TextButton.css';
// import ButtonComp from '../ButtonComp/ButtonComp';
import { useState } from 'react';
import { BrandData } from '../../data/brand.js';
export default function TextButton(){
    const [brand, setbrand] = useState('KFC');
    function handleSelect(name){
        setbrand(name);

    }
    return(
        <div>
        <div className="txtbutton-wrapper">
            {/* <ButtonComp styleatt="" onSelect={() => handleSelect('KFC')} label="KFC"/>
            <ButtonComp onSelect={() => handleSelect('PizzaHut')} label="Pizza Hut"/>
            <ButtonComp onSelect={() => handleSelect('PizzaHut')} label="Burger King"/>
            <ButtonComp onSelect={() => handleSelect('Dominos Pizza')} label="Dominos Pizza"/>
            <ButtonComp onSelect={() => handleSelect('Oyalo Pizza')} label="Oyalo Pizza"/>
            <ButtonComp onSelect={() => handleSelect('McDonalds')} label="McDonalds"/>
            <ButtonComp onSelect={() => handleSelect("Eat-Fit")} label="Eat-Fit"/>
            <ButtonComp onSelect={() => handleSelect("Annapoorna")} label="Annapoorna"/>
            <ButtonComp onSelect={() => handleSelect("Junior Kuppana")} label="Junior Kuppana"/>
            <ButtonComp onSelect={() => handleSelect("Burger Lit")} label="Burger Lit"/> */}
            <div className='tabs'>
            <button className={brand === 'KFC'? "active": ""} onClick={()=>handleSelect('KFC')}>KFC</button>
            <button className={brand === 'PizzaHut'? "active": ""} onClick={()=>handleSelect('PizzaHut')}>Pizza Hut</button>
            <button className={brand === 'BurgerKing'? "active": ""} onClick={()=>handleSelect('BurgerKing')}>Burger King</button>
            <button className={brand === 'DominosPizza'? "active": ""} onClick={()=>handleSelect('DominosPizza')}>Dominos Pizza</button>
            <button className={brand === 'Oyalo'? "active": ""} onClick={()=>handleSelect('Oyalo')}>Oyalo Pizza</button>
            <button className={brand === 'McDonalds'? "active": ""} onClick={()=>handleSelect('McDonalds')}>McDonalds</button>
            <button className={brand === 'EatFit'? "active": ""} onClick={()=>handleSelect('EatFit')}>Eat Fit</button>
            <button className={brand === 'Annapoorna'? "active": ""} onClick={()=>handleSelect('Annapoorna')}>Annapoorna</button>
            <button className={brand === 'JuniorK'? "active": ""} onClick={()=>handleSelect('JuniorK')}>Junior Kuppana</button>
            <button className={brand === 'BurgerLit'? "active": ""} onClick={()=>handleSelect('BurgerLit')}>Burger Lit</button>
            <button className={brand === 'A2B'? "active": ""} onClick={()=>handleSelect('A2B')}>A 2 B</button>
            </div>
        </div>
        <div className='brand-detail'>
            <div>
            <h3>{BrandData[brand].title}</h3>
            <p>{BrandData[brand].description}</p>
            <ul>
                {BrandData[brand].arr.map((item)=><li>{item}</li>)}
            </ul>
            </div>
            <div className='image-box'>
              <img src = {BrandData[brand].image} alt='kfc'/>
              {/* <img src = {kfcImg} alt='kj'></img> */}
              
            </div>
        </div>
        </div>
    );
}