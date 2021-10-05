let get_products = document.getElementsByClassName('productCard');
let displayContainer = document.getElementsByClassName('test')[0];
let delete_button = document.getElementsByClassName('fa-trash');
var count = document.getElementById('top-right').innerHTML;
var Total = 0;
// console.log(count);

// console.log(get_products);
for(i=0; i<get_products.length; i++){
    // console.log(get_products[i].innerHTML);
    get_products[i].addEventListener('click', addToCart);

}
function addToCart(event){
    let btn = event.target;
    // console.log(btn);
    let parentbtn = event.target.parentElement;
    // console.log(parentbtn);
    let itemImage = parentbtn.children[0].src;
    // console.log(itemImage);
    let itemText = parentbtn.children[1].innerText;
    let itemPrice = parentbtn.children[2].innerHTML;
    let ItemPri = parseInt(itemPrice);
    Total = Total + ItemPri ;
    console.log(Total);
    document.getElementById('subto').innerHTML = "BDT " + Total;
    document.getElementById('total').innerHTML = "BDT " + Total;
    document.getElementById('pay').innerHTML = "BDT " + Total;

    // itemPrices1 = parseInt(itemPrice)
    // Total = Total+itemPrices1;
    // console.log(Total);
    // console.log(itemText);
    // console.log(count);

    // if (document.getElementById('top-right').innerHTML>=1){
    //     document.getElementById('top-right').innerHTML++
    // }
    // else{
    let itemContainer = document.createElement('tr')
    itemContainer.innerHTML = ` <div class="daynamic">
                                <div>
                                    <img class="img" src="${itemImage}" alt="Snow" style="width:50px; height:50px;">
                                </div>

                                <div id="top-right">1</div>
                                <div id="imageTitle">
                                    <h4>${itemText}</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <h4> BDT <span>${itemPrice}</span></h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <i class="fa fa-trash" style="margin-top: 20px;"></i>
                                </div> 
                                </div>`
    
    displayContainer.append(itemContainer)
    

    for(let i = 0; i < delete_button.length; i++){
        delete_button[i].addEventListener('click', removeItem)
        // console.log(delete_button[i]);
    }
}   
  
    // console.log(delete_button.length);
    function removeItem(event){
    del_btn = event.target;
    del_btn_parent = del_btn.parentElement.parentElement;
    del_btn_parent_parent = del_btn_parent.parentElement
    // console.log(del_btn_parent);
    del_btn_parent.remove();
    // console.log(del_btn)
    
}
