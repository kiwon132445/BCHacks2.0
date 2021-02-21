const wrapper = document.querySelector('.wrapper');    
    
    
    wrapper.addEventListener('mousemove', animateCircles);
    
    
    var colors = ['#ccc','#6cf','#eba13a'];
    
    function animateCircles (event) {
    
        console.log('hello')
    var circle = document.createElement("div");
    circle.style.position = 'fixed';
    circle.style.zIndex = 999;
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);
    
    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';
    
    var color = colors[Math.floor(Math.random() * colors.length)]
    circle.style.borderColor = color;
    circle.style.transition = "all 0.5s linear 0s";
    circle.style.left = circle.offsetLeft - 20 + 'px';
    circle.style.top = circle.offsetTop - 20 +'px';
    
    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderWidth = "5px";
    circle.style.opacity = 0;
    }  