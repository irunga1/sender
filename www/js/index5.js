document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Configuración del plugin
    var bgGeo = window.BackgroundGeolocation;

    var config = {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 30,
        debug: true,
        stopOnTerminate: false,
        startOnBoot: true,
        foregroundService: true,
        notificationTitle: 'Background location tracking',
        notificationText: 'ENABLED'
    };

    // Inicialización del plugin con la configuración
    bgGeo.configure(config, function (location) {
        // Callback que se ejecuta cada vez que la ubicación se actualiza

        if (location.foreground) {
            // Se está ejecutando en primer planod
            document.getElementById('clicked').innerHTML ='Primer plano - Latitud: ' + location.latitude + ', Longitud: ' + location.longitude;
            console.log('Primer plano - Latitud: ' + location.latitude + ', Longitud: ' + location.longitude);
        } else {
            // Se está ejecutando en segundo plano
            document.getElementById('clicked').innerHTML ='Segundo plano - Latitud: ' + location.latitude + ', Longitud: ' + location.longitude;
            console.log('Segundo plano - Latitud: ' + location.latitude + ', Longitud: ' + location.longitude);
        }

        // Puedes hacer algo con la ubicación aquí, según si está en primer o segundo plano
    });

    // Inicia el seguimiento
    bgGeo.start();
}

