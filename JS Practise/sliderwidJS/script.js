let flag=2   // hal kai image chale 6 by default eno number btave 6


function slider(num){
let slidesarr=document.getElementsByClassName("img-container");



 if(num==slidesarr.length){     // next upr click krta index 4 pachi array ne index 0 par set loop ma krva mate
    flag=0
    num=0
 }
 
 if(num<0){                    // prev upr click krta index 0 pachi array ne index 4 par set loop ma krva mate
    flag=slidesarr.length-1
    num=slidesarr.length-1
 }





 for(let P of slidesarr){     // by default badha image permenent show thay 6 slide thvana bdle to e problem krva
    P.style.display="none"
 }

slidesarr[num].style.display="block" 
//num ni value change thase flag thi and click mujab X thi so click mujab kai image show thase ena mate
    
}


function cantroler(x){

flag=flag+x

slider(flag)
}