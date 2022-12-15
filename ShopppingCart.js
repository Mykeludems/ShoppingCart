const PlusKey = document.querySelector(".plus")
const MinusKey = document.querySelector(".minus")
const middleNumber = document.querySelector(".middleNumber")
const button = document.querySelector("#button")
const itemsCartNumber = document.querySelector(".itemsCartNumber")
const downUserImage1 = document.querySelector(".downUserImage1")
const downUserImage2 = document.querySelector(".downUserImage2")
const downUserImage3 = document.querySelector(".downUserImage3")
const downUserImage4 = document.querySelector(".downUserImage4")
const UserImage = document.querySelector("#UserImage")
const Collections = document.querySelector(".Collections")
const Men = document.querySelector(".Men")
const Women = document.querySelector(".Women")
const About = document.querySelector(".About")
const Contact = document.querySelector(".Contact")
const collectionColor = document.querySelector(".collectionColor")
const MenColor = document.querySelector(".MenColor")
const WomenColor = document.querySelector(".WomenColor")
const AboutColor = document.querySelector(".AboutColor")
const ContactColor = document.querySelector(".ContactColor")



let counter = 0;

PlusKey.addEventListener("click" , function(){
    counter++;
    console.log(counter)
    // console.log("counter")
    

    if(counter <= 5){
        middleNumber.innerHTML = counter;
    }else{
        alert("you cannot add up more than 5 items at once")
    }

})
MinusKey.addEventListener("click" , function(){
    counter--;
    console.log(counter)
    // console.log("counter")
    

    if(counter <= 5 && counter >=0){
        middleNumber.innerHTML = counter;
    }else{
        alert("you cannot minus below this items at once")
    }

})
button.addEventListener("click" , function(){
    if(counter <= 5){
        itemsCartNumber.classList.add("itemsCartNumberColor")
        itemsCartNumber.innerHTML = counter;
        itemsCartNumber.classList.add("newColor")
    }else{
        let Counter = 5;
        itemsCartNumber.classList.add("itemsCartNumberColor")
        itemsCartNumber.innerHTML = Counter;

    }
    
})
downUserImage1.addEventListener("click" , function(){
    UserImage.src="file:///Users/macbook/Desktop/image-product-1.jpg";
})

downUserImage2.addEventListener("click" , function(){
    UserImage.src="file:///Users/macbook/Desktop/image-product-2-thumbnail.jpg";
    
});
downUserImage3.addEventListener("click" , function(){
    UserImage.src="file:///Users/macbook/Desktop/image-product-3-thumbnail.jpg";
    
});
downUserImage4.addEventListener("click" , function(){
    UserImage.src="file:///Users/macbook/Desktop/image-product-4-thumbnail.jpg";
    
});

Collections.addEventListener("click" , function(){
    collectionColor.classList.add("newColor")
    WomenColor.classList.remove("newColor")
    AboutColor.classList.remove("newColor")
    ContactColor.classList.remove("newColor")
    MenColor.classList.remove("newColor")
})

Men.addEventListener("click" , function(){
    MenColor.classList.add("newColor")
    WomenColor.classList.remove("newColor")
    AboutColor.classList.remove("newColor")
    ContactColor.classList.remove("newColor")
    collectionColor.classList.remove("newColor")
})
Women.addEventListener("click" , function(){
    WomenColor.classList.add("newColor")
    MenColor.classList.remove("newColor")
    AboutColor.classList.remove("newColor")
    ContactColor.classList.remove("newColor")
    collectionColor.classList.remove("newColor")
    
})
About.addEventListener("click" , function(){
    AboutColor.classList.add("newColor")
    MenColor.classList.remove("newColor")
    WomenColor.classList.remove("newColor")
    ContactColor.classList.remove("newColor")
    collectionColor.classList.remove("newColor")
})
Contact.addEventListener("click" , function(){
    ContactColor.classList.add("newColor")
    WomenColor.classList.remove("newColor")
    MenColor.classList.remove("newColor")
    AboutColor.classList.remove("newColor")
    collectionColor.classList.remove("newColor")

})

const cartImage = document.querySelector("#cartImage")
const cart = document.querySelector(".cart")
const black = document.querySelector(".black")
const cartshelfBorderline = document.querySelector(".cartshelfBorderline")
const cartshelfBorderlineShow = document.querySelector(".cartshelfBorderlineShow")
const EmptyCart = document.querySelector(".EmptyCart")
const cartshelf = document.querySelector(".cartshelf")
const buttonCart = document.querySelector(".buttonCart")
const buttonCartOrange = document.querySelector(".buttonCartOrange")
const PriceMultiple = document.querySelector(".PriceMultiple")
const bold = document.querySelector(".bold")
const SmallUserImage = document.querySelector(".SmallUserImage")
const backgroundBlack = document.querySelector(".backgroundBlack")
const priceSection = document.querySelector(".priceSection")
const deletetra  = document.querySelector(".deletetra");
const cartLine  = document.querySelector(".cartLine");
const SmallUserImageUnhide  = document.querySelector(".SmallUserImageUnhide");





cartImage.addEventListener("click" , function(){

    if(counter === 0 ){
    cart.classList.add("black")
    cartshelfBorderline.classList.add("cartshelfBorderlineShow")
    EmptyCart.classList.add("black")
    cartshelf.classList.add("Carshelfshow")
    }else if( counter >= 1){
        let  shoePrice = `$${125.00} x ${counter}`;
        let  shoeCombinedPrice = `$${125.00 * counter}`;
        cart.classList.add("black")
        cartshelfBorderline.classList.add("cartshelfBorderlineShow")
        buttonCart.classList.add("buttonCartOrange")
        cartshelf.classList.add("Carshelfshow")
        PriceMultiple.innerHTML = shoePrice;
        bold.innerHTML = shoeCombinedPrice;
        SmallUserImage.src = UserImage.src;
        bold.classList.add("black")
        PriceMultiple.classList.add("black")
        cartLine.classList.add("black")
        SmallUserImage.classList.remove("SmallUserImageUnhide")
        
    }else{
        
    }
 
})
