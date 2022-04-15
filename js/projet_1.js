
//In this project we are going to apply the previous concepts , futhermore we are going to use data from a Geojasen file
//Initialize the map:Set the initial view by setting the coordinates and the zoom level.
var map =L.map('map').setView([30.66792528584619, -9.004971434725709],6);
//Add the base Tile layer : We will use the OpenStreetMap tiles:
//We will use another base map from CARTODB
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
    
    attribution: '&copy; By Ouadyâ Tahiri',
    subdomains: "abc",
    maxZoom: 19
}).addTo(map);
var layers =L.layerGroup().addTo(map);
//Now after bulding the baseTile , we want to add some markers , each one refers to a specific dam 
//We are going to use a Geojson file that contains some information about some moroccan
//Import Geojson string format into leaflet :
//1-) creat a variable called dams :
let dams = {
    "type": "FeatureCollection",
    "name": "7_4_2022",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "Nom": "Sghir", "Latitude": 35.685417, "Longitude": -5.387083 }, "geometry": { "type": "Point", "coordinates": [ -5.387083, 35.685417 ] } },
    { "type": "Feature", "properties": { "Nom": "Ibn Batouta", "Latitude": 35.64125, "Longitude": -5.73125 }, "geometry": { "type": "Point", "coordinates": [ -5.73125, 35.64125 ] } },
    { "type": "Feature", "properties": { "Nom": "Ajras", "Latitude": 35.569583, "Longitude": -5.492083 }, "geometry": { "type": "Point", "coordinates": [ -5.492083, 35.569583 ] } },
    { "type": "Feature", "properties": { "Nom": "Nakhla", "Latitude": 35.447083, "Longitude": -5.407917 }, "geometry": { "type": "Point", "coordinates": [ -5.407917, 35.447083 ] } },
    { "type": "Feature", "properties": { "Nom": "Al Thelat", "Latitude": 35.245417, "Longitude": -5.295417 }, "geometry": { "type": "Point", "coordinates": [ -5.295417, 35.245417 ] } },
    { "type": "Feature", "properties": { "Nom": "Garde du Loukkos", "Latitude": 35.15375, "Longitude": -6.10375 }, "geometry": { "type": "Point", "coordinates": [ -6.10375, 35.15375 ] } },
    { "type": "Feature", "properties": { "Nom": "Mohamed Ben Abdelkrim el Khattabi", "Latitude": 35.097917, "Longitude": -3.804583 }, "geometry": { "type": "Point", "coordinates": [ -3.804583, 35.097917 ] } },
    { "type": "Feature", "properties": { "Nom": "Oued el Makhazine", "Latitude": 34.942083, "Longitude": -5.837917 }, "geometry": { "type": "Point", "coordinates": [ -5.837917, 34.942083 ] } },
    { "type": "Feature", "properties": { "Nom": "Mechra Homadi", "Latitude": 34.735417, "Longitude": -2.80625 }, "geometry": { "type": "Point", "coordinates": [ -2.80625, 34.735417 ] } },
    { "type": "Feature", "properties": { "Nom": "Mohammed 5", "Latitude": 34.662083, "Longitude": -2.94125 }, "geometry": { "type": "Point", "coordinates": [ -2.94125, 34.662083 ] } },
    { "type": "Feature", "properties": { "Nom": "Asfalou", "Latitude": 34.612083, "Longitude": -4.574583 }, "geometry": { "type": "Point", "coordinates": [ -4.574583, 34.612083 ] } },
    { "type": "Feature", "properties": { "Nom": "Al Wahda", "Latitude": 34.595417, "Longitude": -5.195417 }, "geometry": { "type": "Point", "coordinates": [ -5.195417, 34.595417 ] } },
    { "type": "Feature", "properties": { "Nom": "Idriss 1", "Latitude": 34.16125, "Longitude": -4.74875 }, "geometry": { "type": "Point", "coordinates": [ -4.74875, 34.16125 ] } },
    { "type": "Feature", "properties": { "Nom": "El Kansera", "Latitude": 34.045417, "Longitude": -5.905417 }, "geometry": { "type": "Point", "coordinates": [ -5.905417, 34.045417 ] } },
    { "type": "Feature", "properties": { "Nom": "Sidi Mohamed Ben Abdellah", "Latitude": 33.93625, "Longitude": -6.749583 }, "geometry": { "type": "Point", "coordinates": [ -6.749583, 33.93625 ] } },
    { "type": "Feature", "properties": { "Nom": "Allal al Fassi", "Latitude": 33.93125, "Longitude": -4.677083 }, "geometry": { "type": "Point", "coordinates": [ -4.677083, 33.93125 ] } },
    { "type": "Feature", "properties": { "Nom": "Mellah", "Latitude": 33.50375, "Longitude": -7.33125 }, "geometry": { "type": "Point", "coordinates": [ -7.33125, 33.50375 ] } },
    { "type": "Feature", "properties": { "Nom": "Hammou Ourzag", "Latitude": 32.73125, "Longitude": -2.567083 }, "geometry": { "type": "Point", "coordinates": [ -2.567083, 32.73125 ] } },
    { "type": "Feature", "properties": { "Nom": "Imfout", "Latitude": 32.72625, "Longitude": -7.925417 }, "geometry": { "type": "Point", "coordinates": [ -7.925417, 32.72625 ] } },
    { "type": "Feature", "properties": { "Nom": "Al Massira", "Latitude": 32.474583, "Longitude": -7.637083 }, "geometry": { "type": "Point", "coordinates": [ -7.637083, 32.474583 ] } },
    { "type": "Feature", "properties": { "Nom": "Safi", "Latitude": 32.324583, "Longitude": -9.187083 }, "geometry": { "type": "Point", "coordinates": [ -9.187083, 32.324583 ] } },
    { "type": "Feature", "properties": { "Nom": "Bin el Ouidane", "Latitude": 32.10625, "Longitude": -6.462083 }, "geometry": { "type": "Point", "coordinates": [ -6.462083, 32.10625 ] } },
    { "type": "Feature", "properties": { "Nom": "Hassan Addakhil", "Latitude": 31.995417, "Longitude": -4.462083 }, "geometry": { "type": "Point", "coordinates": [ -4.462083, 31.995417 ] } },
    { "type": "Feature", "properties": { "Nom": "Hassan 1", "Latitude": 31.845417, "Longitude": -7.077917 }, "geometry": { "type": "Point", "coordinates": [ -7.077917, 31.845417 ] } },
    { "type": "Feature", "properties": { "Nom": "Sidi Driss", "Latitude": 31.81625, "Longitude": -6.82125 }, "geometry": { "type": "Point", "coordinates": [ -6.82125, 31.81625 ] } },
    { "type": "Feature", "properties": { "Nom": "Timi Noutione", "Latitude": 31.664583, "Longitude": -7.257083 }, "geometry": { "type": "Point", "coordinates": [ -7.257083, 31.664583 ] } },
    { "type": "Feature", "properties": { "Nom": "Moulay Youssef", "Latitude": 31.644583, "Longitude": -7.262083 }, "geometry": { "type": "Point", "coordinates": [ -7.262083, 31.644583 ] } },
    { "type": "Feature", "properties": { "Nom": "Lalla Takerkoust", "Latitude": 31.354583, "Longitude": -8.137083 }, "geometry": { "type": "Point", "coordinates": [ -8.137083, 31.354583 ] } },
    { "type": "Feature", "properties": { "Nom": "Mansour Eddahbi", "Latitude": 30.91625, "Longitude": -6.762083 }, "geometry": { "type": "Point", "coordinates": [ -6.762083, 30.91625 ] } },
    { "type": "Feature", "properties": { "Nom": "Aoulouz", "Latitude": 30.695417, "Longitude": -8.137917 }, "geometry": { "type": "Point", "coordinates": [ -8.137917, 30.695417 ] } },
    { "type": "Feature", "properties": { "Nom": "Abdelmoumen", "Latitude": 30.67875, "Longitude": -9.20375 }, "geometry": { "type": "Point", "coordinates": [ -9.20375, 30.67875 ] } },
    { "type": "Feature", "properties": { "Nom": "Taghdout", "Latitude": 30.624583, "Longitude": -7.29875 }, "geometry": { "type": "Point", "coordinates": [ -7.29875, 30.624583 ] } },
    { "type": "Feature", "properties": { "Nom": "Youssf Ben Tachfine", "Latitude": 29.845417, "Longitude": -9.492917 }, "geometry": { "type": "Point", "coordinates": [ -9.492917, 29.845417 ] } }
    ]
    }
    
//2-)Use the L.geoJSON function to transform the dams variable into geojson :
//We are going to add the new layer to the grouplayer instead of the map , so we can control them 
// L.geoJSON(dams).addTo(layers);
//We use clearLayers to remove all layers contained in the layerGroup by double clicking on the body
$(function (){
    $('body').dblclick(
        ()=>{
            layers.clearLayers()
        }
    );
});

//Add a GeoJson file 
//Before that we have to define Ajax :Is an asynchronous javascript XML , that means if we interact with the web page 
//or make a server request , the page will not be reloaded , but only the concerned part from the page 
//A great example is what we are going to do now by loading a geojson file without upload the whole page using fetch API


fetch("data/barrages_maroc.geojson")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })