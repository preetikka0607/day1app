import './ItemOrder.css';
export function ItemOrder({title, weight, price, image}){
    return(
        <div className='detailed-wrapper'> 
            <div className='contentImage-wrapper'>
            <div>
            <p>{title}</p>
            <p>{weight}</p>
            <div className='priceButton-wrapper'>
            <p>{price}</p>
            <button>Add to Cart</button>
            </div>
            </div>
            <div className='dishImage'>
            <img src = {image} alt='altimg'/>
            </div>
            </div>
        </div>

    );
}