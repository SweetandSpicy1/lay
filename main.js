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

}