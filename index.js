var mouseoverZone = document.querySelectorAll('.mouseoverZone')
var adZone = document.querySelector('.adZone')
var goWidth = adZone.offsetWidth;
var overTime = 1;

var gooverTime1= null; 
var gooverTime2=null;

adZone.style.display = 'none';
// 로딩 화면에서 display = 'none'

window.addEventListener('load', function(){
    console.log('광고 플랫폼 테스트')

    adZone.style.display = 'grid';
    adZone.scrollTo(goWidth*0.975,0)
    
})

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
