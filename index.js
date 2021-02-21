const mouseoverZone = document.querySelectorAll('.mouseoverZone');
const adZone = document.querySelector('.adZone');
const loadingPage = document.querySelector('.loadingPage');
const loadingPageImg = document.querySelector('.loadingPageImg');
const adClick = document.querySelectorAll('.adMother div')
const alertBoxZone = document.querySelector('.alertBoxZone')
const alertBut = document.querySelector('.alertBut')

const goWidth = adZone.offsetWidth;

let gooverTime1= null; 
let gooverTime2=null;

loadingPage.style.display = 'block';
loadingPageImg.style.transform ='rotate(1440deg)';

alertBoxZone.style.display = 'none';

window.addEventListener('load', function(){
    console.log('광고 플랫폼 테스트')

    setTimeout(function(){
      loadingPage.style.display = 'none';
    },3000)
    adZone.scrollTo(goWidth*0.975,0)
    
})

let i = 0;

while(i < adClick.length){
    adClick[i].addEventListener('click', function(){
        alertBoxZone.style.display = 'flex';
        
        alertBut.addEventListener('click', function(){
            alertBoxZone.style.display='none';
        })
    })
    i++;
}

mouseoverZone[0].addEventListener('mouseover', function(){
    console.log('mouseover1')

    adZone.scrollBy({
        left: -goWidth/2,
        behavior:"smooth"
    })

    gooverTime1 =
    setInterval(function(){
        adZone.scrollBy({
            left: -goWidth/2,
            behavior:"smooth"
        })
    },375)
})
mouseoverZone[0].addEventListener('mouseout',function(){
    clearInterval(gooverTime1)
})
mouseoverZone[1].addEventListener('mouseenter', function(){
    console.log('mouseover2')

    adZone.scrollBy({
        left: goWidth/2,
        behavior:"smooth"
    })

    gooverTime2 =
    setInterval(function(){
        adZone.scrollBy({
            left: goWidth/2,
            behavior:"smooth"
        })
    },375)
})
mouseoverZone[1].addEventListener('mouseout',function(){
    clearInterval(gooverTime2)
})