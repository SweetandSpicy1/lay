class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();

        this.attendanceCountBNL = 0;
        this.attendanceCountAS = 0;
        this.attendanceCountDS = 0;

        this.markerCounts = {};
        this.markers = [];

        this.loggedData = []; 

        
        this.btn = document.getElementById('btn');
        this.btn1 = document.getElementById('btn1');
        this.btn2 = document.getElementById('btn2');
        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCountBNL');
        this.logCount1Element = document.getElementById('logCountAS');
        this.logCount2Element = document.getElementById('logCountDS');
        this.idContainer = document.getElementById('logContainer');

      
        this.btn.addEventListener('click', () => this.dataBNL());
        this.btn1.addEventListener('click', () => this.dataAS());
        this.btn2.addEventListener('click', () => this.dataDS());
        this.btnclear.addEventListener('click', () => this.clearLogs());

    }

}class LeafletMap {

    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
        this.initTileLayer();

        this.attendanceCountBNL = 0;
        this.attendanceCountAS = 0;
        this.attendanceCountDS = 0;

        this.markerCounts = {};
        this.markers = [];

        this.loggedData = []; 

        
        this.btn = document.getElementById('btn');
        this.btn1 = document.getElementById('btn1');
        this.btn2 = document.getElementById('btn2');
        this.btnclear = document.getElementById('btnclear');
        this.logCountElement = document.getElementById('logCountBNL');
        this.logCount1Element = document.getElementById('logCountAS');
        this.logCount2Element = document.getElementById('logCountDS');
        this.idContainer = document.getElementById('logContainer');

      
        this.btn.addEventListener('click', () => this.dataBNL());
        this.btn1.addEventListener('click', () => this.dataAS());
        this.btn2.addEventListener('click', () => this.dataDS());
        this.btnclear.addEventListener('click', () => this.clearLogs());

    }


    initTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker(lat, lng, message) {
        const marker = L.marker([lat, lng]).addTo(this.map);
        marker.bindPopup(message);
    }

    updateMarkerPopup(marker, message) {
        const count = this.markerCounts[message];
        marker.bindPopup(`${message}<br>Attendance logs: ${count}`).openPopup();
    }

    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.message);
                });
            })
            .catch(error => console.error('Error loading markers:', error));
        }
        
    clearLogs(){
        this.attendanceCountBNL = 0;
        this.attendanceCountAS = 0;
        this.attendanceCountDS = 0;

        this.loggedData = [];
        this.markerCounts = {}; 
        this.markers.forEach(marker => {
            const message = marker.getPopup().getContent().split('<br>')[0]; 
            this.markerCounts[message] = 0;
            this.updateMarkerPopup(marker, message); 
        });

        this.updateLogDisplay();
    }

    displayLogCount() {      
        this.logCountElement.innerHTML = `: ${this.attendanceCountBNL}`;
        this.logCount1Element.innerHTML = `: ${this.attendanceCountAS}`;
        this.logCount2Element.innerHTML = ` : ${this.attendanceCountDS}`;
   }

   dataBNL() {
    this.addMarker(, '');
    this.attendanceCount++; 
    this.updateLogDisplay();
}

   dataAS() {
    this.addMarker(, '');
    this.attendanceCount++; 
    this.updateLogDisplay();
   }
    
   dataDS() {
    this.addMarker(, '');
    this.attendanceCount++; 
    this.updateLogDisplay();
   }

   updateLogDisplay() {
    this.idContainer.innerHTML = ''; 
    this.loggedData.forEach(data => {
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        this.idContainer.appendChild(logItem);
    });
    this.displayLogCount();
}

}
const myMap = new LeafletMap('map', [, ], 18);



myMap.addMarker(,, '');
myMap.addMarker(,, '');
myMap.addMarker(,, '');



myMap.loadMarkersFromJson('applet.json');

document.addEventListener('DOMContentLoaded', () => {
    myMap.displayLogCount();
    myMap.loadMarkersFromJson('applet.json');
});