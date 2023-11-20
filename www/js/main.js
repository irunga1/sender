
var number = 1;
document.addEventListener('deviceready', ()=> {
    const st = document.querySelectorAll(".st");
    
    // background cordova
    console.log("start");
    cordova.plugins.backgroundMode.enable();
    let isRuning = cordova.plugins.backgroundMode.isActive();
    console.log("isRunning2");
    console.log(isRuning);
    cordova.plugins.backgroundMode.on('disable', setInterval(counter, 10000));
    cordova.plugins.backgroundMode.on('enabled', setInterval(counter, 10000));
    cordova.plugins.backgroundMode.on('activate', setInterval(counter, 10000));
    cordova.plugins.backgroundMode.on('deactivate', setInterval(counter, 10000));
    setInterval(counter, 10000);
    let isRunning = cordova.plugins.backgroundMode.isActive();
    console.log("isRunning1: " + isRunning);
    // window.plugins.toast.show("isRunning: "+isRunning, 'short', 'top');
    // button selector function
}, false);
counter  =()=>{
    number++;
    document.getElementById("latlon").innerText = number;
}

st.forEach((el) => {
    el.addEventListener("click", (btn) => {
        console.log("it works");
        let prop = event.target.getAttribute('prop');
        
        if(prop == "iniciar"){
            cordova.plugins.backgroundMode.enable();
            cordova.plugins.backgroundMode.setEnabled(true);
            // window.plugins.toast.show(prop, 'short', 'top');
            // Verificar si el modo de fondo está activo
            let isRunning = cordova.plugins.backgroundMode.isActive();
            console.log("isRunning1: " + isRunning);
            // window.plugins.toast.show("isRunning: "+isRunning, 'short', 'top');
        }
        else{
            window.plugins.toast.show(prop, 'short', 'top');
            cordova.plugins.backgroundMode.disable();
        }
        // window.plugins.toast.show(prop, 'short', 'top');
        let option = document.getElementById("option");
        option.value = prop;
    })
});

