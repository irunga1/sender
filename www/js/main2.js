class Sender {
    constructor(cla="btn") {
        this.btn1 = cla
    }
    setFunction = ()=>{
        const st = document.querySelectorAll(this.btn1);
        st.forEach((el) => {
            el.addEventListener("click", (btn) => {
                console.log("it works");
                let prop = event.target.getAttribute('prop');
                // window.plugins.toast.show(prop, 'short', 'top');
                this.showToast(prop);
                localStorage.setItem("prop", prop);
                if(prop =="iniciar"){
                    document.getElementById("clicked").innerHTML=prop;
                }
                else{
                    document.getElementById("clicked").innerHTML=prop;
                } 
                console.log("prop:"+prop);
                let option = document.getElementById("option");
                option.value = prop;
                
            })
        });
    }
    showToast  = (message="--")=>{
        window.plugins.toast.showWithOptions({
            message: message,
            duration: "short", // 2000 ms
            position: "bottom",
            styling: {
              opacity: 0.75, // 0.0 (transparent) to 1.0 (opaque). Default 0.8
              backgroundColor: '#FF0000', // make sure you use #RRGGBB. Default #333333
              textColor: '#FFFF00', // Ditto. Default #FFFFFF
              textSize: 20.5, // Default is approx. 13.
              cornerRadius: 16, // minimum is 0 (square). iOS default 20, Android default 100
              horizontalPadding: 20, // iOS default 16, Android default 50
              verticalPadding: 16 // iOS default 12, Android default 30
            }
        });
    }
}




async function onSuccess(position) {
    // let doit = document.getElementById("option").value;
    let doit = localStorage.getItem("prop");
    if(doit == "iniciar"){
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; // meses de 1 a 12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var hour = dateObj.getHours();
        var min = dateObj.getMinutes();
        date = year + "-" + month + "-" + day + " " + hour + ":" + min;
        var pos = {
            "lat": position.coords.latitude,
            "lon": position.coords.longitude,
            "idmensajero": document.getElementById("user").value,
            "idpaquete": document.getElementById("user").value,
            "date": date,
            "time": date
        };
        // console.log(pos);
        // var url = "https://precious-subdued-hen.glitch.me/entrega/insert?" + new URLSearchParams(pos);
        document.getElementById("latlon").innerText = `Latitud: ${position.coords.latitude} Longitud:${position.coords.longitude}`;
        // var url = "https://precious-subdued-hen.glitch.me/entrega/insert?" + new URLSearchParams(pos);
        var url = "https://personapi-yrti.onrender.com/entrega/insert?" + new URLSearchParams(pos);
        // var url = "https://personapi-yrti.onrender.com/entrega/getall" ;
        console.log(url);           
        // let api =  await fetch(url);
        // let data = await api.json();
        // console.log("data");
        // console.log(data);
        
        $.get( url, function(data) {
            console.log(data);
        })
    }
    
};
function getLocation(){
    let doit = localStorage.getItem("prop");
    if(doit =="iniciar"){
        document.getElementById("clicked").innerHTML=doit;
    }
    if(doit == "iniciar"){
        var watchID = navigator.geolocation.getCurrentPosition(onSuccess);
    }
    else{
        document.getElementById("latlon").innerText ="";
    }
}
function onError(error) {
    alert('code: '    + error.code    + '\n' +'message: ' + error.message + '\n');
}


document.addEventListener("deviceready", async () => {
    // Habilita el modo de fondo
    // Configura una tarea de sincronización en segundo plano
    setInterval(getLocation, 10000);
    var successCallback = function() {
        console.log('screen unlock success');
        
        // do some staff here
    };
    var errorCallback = function(e) {
        console.log('error: ' + e);
    };
    window.screenLocker.unlock(successCallback, errorCallback, 10);  // 10 seconds unlock timeout (third parameter is optional)
    window.screenLocker.lock(successFun, errorFun);

});
// Ejemplo de función para sincronizar datos con un servidor (puedes personalizarla)

var successCallback = function() {
    console.log('screen unlock success');
    window.plugins.toast.show("reconectando",2000,"bottom");
    window.plugins.toast.show("reconectando","2000","bottom");
    // do some staff here
};
var errorCallback = function(e) {
    console.log('error: ' + e);
};
(()=>{
    var doit = localStorage.getItem("prop");
    if(doit =="iniciar"){
        document.getElementById("clicked").innerHTML=doit;
    }
    else{
        document.getElementById("clicked").innerHTML=doit;
    }
    
})();

