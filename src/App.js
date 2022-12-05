import { useState } from 'react';
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img1 from './images/img1.jpg'
import './App.css';
import Popup from './popup.js';

function App() {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div class="split left">
      <h2>My BAG</h2>
      <hr></hr>
      <div class="container">
    <img src={img2} width='180' height='230' align='left'/>
    <h3>Half sleeve women T-Shirt</h3>
    <h4>₹ 480</h4>
    <h4>This classic crew neck t-shirt will become a staple
       in your everyday collection. 
       <h4>Made with super
        combed cotton, its soft handle <h4> reflective trims are
         sure to help you lounge in comfort and style.</h4></h4></h4>
         <p class='unit1'><p class="unit">Quantity: <input type='button' class='size' name="" value="-"/><input class='size' name="" value="2"/><input type='button' class='size'name="" value="+"/></p></p>
         <div class='delete'>
         <input type="image" src={img3} name="submit" width="50" height="48" alt="submit"/> 
         </div>
</div>


<div class="container">

    <img class='container1' src={img1} width='180' height='230' align='left'/>
    <div class='heading'><h3>Half sleeve men T-Shirt</h3></div>
    <div class='heading1'>
    <h4 class='price'>₹ 400</h4>
    <h4 class='desc'>This classic crew neck t-shirt will become a staple
       in your everyda collection. 
       <h4 class='desc1'>Made with super
        combed cotton, its soft handle <h4 class='desc2'> reflective trims are
         sure to help you lounge in comfort and style.</h4></h4></h4>
         <p class="unit">Quantity: <input type='button' class='size' name="" value="-"/><input class='size' name="" value="2"/><input type='button' class='size'name="" value="+"/></p>
         </div>
         <div class='delete'>
         <input type="image" src={img3} name="submit" width="50" height="48" alt="submit"/> 
         </div>
</div>
<div class="split right">
<div class="square"></div>
<div class='align'>
<h2>Total</h2>
<hr class='fromright' color='black'></hr>
<h3><pre>sub-total                                      ₹880</pre></h3>
<h3><pre>delivery                                        COD</pre></h3>
<h3><pre>Total                                          ₹880</pre></h3>


<input
      class='button'
      type="button"
      value="Checkout"
      onClick={togglePopup}
    />
    {isOpen && <Popup
      content={
        <div>
      <div class="container">
    <img src={img2} width='180' height='230' align='left'/>
    <h3>Half sleeve women T-Shirt</h3>
    <h4>₹ 480</h4>
    <h4>This classic crew neck t-shirt will become a staple
       in your everyda collection. 
       <h4>Made with super
        combed cotton, its soft handle <h4> reflective trims are
         sure to help you lounge in comfort and style.</h4></h4></h4>
         <p class='unit1'><p class="unit">Quantity: <input class='size' name="" value="2"/></p></p>
</div>


    <div class="container2">
    <img  src={img1} width='180' height='230' align='left'/>
    <div class='head'><h3>Half sleeve men T-Shirt</h3></div>
    <div>
    <h4 class='head'>₹ 400</h4>
    <h4 class='head'>This Summer Indian homegrown brand ADRO brings you the best quality 100% cotton Half Sleeve T-Shirts to keep you Stylish. 
       <h4>Made with super
        combed cotton, its soft handle <h4> reflective trims are
         sure to help you lounge in comfort and style.</h4></h4></h4>
         <p class='unit1'>Quantity: <input class='size' name="" value="2"/></p>
         </div>
</div>
</div>        
        }
        handleClose={togglePopup}
        />}
</div>
</div>
    </div>
  )
}

export default App
