import './ImgDesc.css';
export function ImgDesc({description, dishImg, selectedItem}){
    return(
        <div className='ImgAndDesc-container' onClick={selectedItem}>
            <div className='dish-box'>
            <img src={dishImg} alt='dish'/>
            </div>
            <p>{description}</p>
        </div>
    );
}