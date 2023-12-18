import { ImgDesc } from './ImgDesc';
import { useState } from 'react';
import pizza from '../../assets/pizza.png';
import dosa from '../../assets/dosa.jpg';
import ramen from '../../assets/ramen.png';
import burndrink from '../../assets/burgerndrink.jpg';
import soup from '../../assets/soup.jpg';
import idli from '../../assets/idli.jpg';
import briyani from '../../assets/briyani.avif'
import './ItemsComp.css';
export function ItemsComp(){
    const[itemData, setItemData] = useState('Pizza');
    function handleOnImg(name){
        setItemData(name);
        console.log(itemData);
    }
    return(
        <div className='container'>
            <div className='image-container'>
                <ImgDesc selectedItem={()=>handleOnImg('Pizza')} dishImg = {pizza} description = 'Pizza' />
                <ImgDesc selectedItem={()=>handleOnImg('Dosa')} dishImg = {dosa} description = 'Dosa'/>
                <ImgDesc selectedItem={()=>handleOnImg('Ramen')} dishImg = {ramen} description= 'Ramen'/>
                <ImgDesc selectedItem={()=>handleOnImg('Burger')} dishImg = {burndrink} description= 'Burger'/>
                <ImgDesc selectedItem={()=>handleOnImg('Idli')} dishImg = {idli} description='Idli'/>
                <ImgDesc selectedItem={()=>handleOnImg('Soup')} dishImg = {soup} description='Soup'/>
                <ImgDesc selectedItem={()=>handleOnImg('Briyani')} dishImg = {briyani} description='Briyani'/>
            </div>
            <div>
              
            </div>
        </div>
    );
}