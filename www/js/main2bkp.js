    // alert('Latitude: ' + position.coords.latitude + '\n' +
    //     'Longitude: ' + position.coords.longitude + '\n' +
    //     'Altitude: ' + position.coords.altitude + '\n' +
    //     'Accuracy: ' + position.coords.accuracy + '\n' +
    //     'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
    //     'Heading: ' + position.coords.heading + '\n' +
    //     'Speed: ' + position.coords.speed + '\n' +
    //     'Timestamp: ' + position.timestamp + '\n');

    document.addEventListener('deviceready', onDeviceReady, false);

    function onDeviceReady() {
        // Habilita el modo en segundo plano
        cordova.plugins.backgroundMode.enable();
    
        // Configura tareas en segundo plano
        cordova.plugins.backgroundMode.on('activate', function () {
            // Ejecuta tareas en segundo plano
            // Esto se ejecutará incluso cuando la pantalla esté bloqueada.
        });
    
        // Configura la lógica de la interfaz de usuario y las interacciones de la aplicación
        // Ejemplo: Manejo de eventos de botones, navegación entre páginas, etc.
        document.getElementById('miBoton').addEventListener('click', function () {
            // Realiza una acción cuando se hace clic en el botón
        });
    }
    
    
    const st = document.querySelectorAll(".st");
    st.forEach((el) => {
        el.addEventListener("click", (btn) => {
    
            
            console.log("it works");
            let prop = event.target.getAttribute('prop');
            window.plugins.toast.show(prop, 'short', 'top');
            let option = document.getElementById("option");
            option.value = prop;
            
        })
    });
    
    async function onSuccess(position) {
        let doit = document.getElementById("option").value;
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
            //var url = "https://precious-subdued-hen.glitch.me/entrega/insert?" + new URLSearchParams(pos);
            var url = "https://personapi-e7s3.onrender.com/entrega/insert?" + new URLSearchParams(pos);
            // var url = "https://personapi-e7s3.onrender.com/entrega/getall" ;
            console.log(url);           
            $.get( url, function(data) {
                console.log(data);
            }) 
    
    
        }
    
        document.getElementById("latlon").innerText = `Latitud: ${position.coords.latitude} Longitud:${position.coords.longitude}`;
    
    };
    function getLocation(){
    
        let doit = document.getElementById("option").value;
        if(doit == "iniciar"){
            var watchID = navigator.geolocation.getCurrentPosition(onSuccess);
        }
        else{
            document.getElementById("latlon").innerText ="";
        }
    }
    setInterval(getLocation, 10000);
    
    // function showBottom(phrase) {
    //     window.plugins.toast.showWithOptions(
    //       {
    //         message: "hey there",
    //         duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
    //         position: "bottom",
    //         addPixelsY: -40  // added a negative value to move it up a bit (default 0)
    //       }
    
    //     );
    // }