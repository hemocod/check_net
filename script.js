// اولا واه شي الامساك والتاكد والتحكم بالعناصر كما هو موضح
let titel= document.querySelector('.title');
let ul= document.querySelector('ul');
let reload= document.querySelector('.reload');



window.onload = function(){
// اهم عمل وظيفه في البرنامج 
    if(window.navigator.onLine){
        online();
    }else{
        offline();
    }
}
// onlien   لما يكون عندك نت شغل وظيفه  event  انتظر مني  
window.addEventListener("online",function(){
    online();
});
// وهنا العكس 
window.addEventListener("offline",function(){
    offline();
});
// هذي لتفعيل زر اعاده تحميل عند الظغط عليه 
reload.onclick = function(){
    window.location.reload()
}

function online(){
    titel.innerHTML= 'ONLINE';
    titel.style.color ='green';
    ul.classList.add('hide');
    reload.classList.add('hide');

}



function offline(){
    titel.innerHTML= 'OFFLINE';
    titel.style.color ='red';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}