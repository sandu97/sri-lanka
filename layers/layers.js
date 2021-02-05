ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_District_1 = new ol.format.GeoJSON();
var features_District_1 = format_District_1.readFeatures(json_District_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_1.addFeatures(features_District_1);
var lyr_District_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_1, 
                style: style_District_1,
                interactive: true,
                title: '<img src="styles/legend/District_1.png" /> District'
            });
var format_tourist_destinations_forest_2 = new ol.format.GeoJSON();
var features_tourist_destinations_forest_2 = format_tourist_destinations_forest_2.readFeatures(json_tourist_destinations_forest_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourist_destinations_forest_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourist_destinations_forest_2.addFeatures(features_tourist_destinations_forest_2);
var lyr_tourist_destinations_forest_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tourist_destinations_forest_2, 
                style: style_tourist_destinations_forest_2,
                interactive: true,
                title: '<img src="styles/legend/tourist_destinations_forest_2.png" /> tourist_destinations_forest'
            });
var format_Road_3 = new ol.format.GeoJSON();
var features_Road_3 = format_Road_3.readFeatures(json_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_3.addFeatures(features_Road_3);
var lyr_Road_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Road_3, 
                style: style_Road_3,
                interactive: true,
                title: '<img src="styles/legend/Road_3.png" /> Road'
            });
var format_Major_Towns_4 = new ol.format.GeoJSON();
var features_Major_Towns_4 = format_Major_Towns_4.readFeatures(json_Major_Towns_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Major_Towns_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Major_Towns_4.addFeatures(features_Major_Towns_4);
var lyr_Major_Towns_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Major_Towns_4, 
                style: style_Major_Towns_4,
                interactive: true,
                title: '<img src="styles/legend/Major_Towns_4.png" /> Major_Towns'
            });
var format_All_tourist_destinations_5 = new ol.format.GeoJSON();
var features_All_tourist_destinations_5 = format_All_tourist_destinations_5.readFeatures(json_All_tourist_destinations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_tourist_destinations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_tourist_destinations_5.addFeatures(features_All_tourist_destinations_5);cluster_All_tourist_destinations_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_All_tourist_destinations_5
});
var lyr_All_tourist_destinations_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_All_tourist_destinations_5, 
                style: style_All_tourist_destinations_5,
                interactive: true,
                title: '<img src="styles/legend/All_tourist_destinations_5.png" /> All_tourist_destinations'
            });
var format_Destinations_6 = new ol.format.GeoJSON();
var features_Destinations_6 = format_Destinations_6.readFeatures(json_Destinations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Destinations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Destinations_6.addFeatures(features_Destinations_6);
var lyr_Destinations_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Destinations_6, 
                style: style_Destinations_6,
                interactive: true,
                title: '<img src="styles/legend/Destinations_6.png" /> Destinations'
            });

lyr_OSMStandard_0.setVisible(true);lyr_District_1.setVisible(true);lyr_tourist_destinations_forest_2.setVisible(true);lyr_Road_3.setVisible(true);lyr_Major_Towns_4.setVisible(true);lyr_All_tourist_destinations_5.setVisible(true);lyr_Destinations_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_District_1,lyr_tourist_destinations_forest_2,lyr_Road_3,lyr_Major_Towns_4,lyr_All_tourist_destinations_5,lyr_Destinations_6];
lyr_District_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'Area': 'Area', 'District': 'District', 'Sinhalese': 'Sinhalese', 'SL_Tamils': 'SL_Tamils', 'Ind_Tamils': 'Ind_Tamils', 'Moor': 'Moor', 'Burgher': 'Burgher', 'Malay': 'Malay', 'Other': 'Other', 'Male': 'Male', 'Female': 'Female', 'Pop1963': 'Pop1963', 'Pop1971': 'Pop1971', 'Pop1981_': 'Pop1981_', 'Pop2001_': 'Pop2001_', 'Pop2012': 'Pop2012', 'Sin_2012': 'Sin_2012', 'In_Tam2012': 'In_Tam2012', 'Sl_Tam2012': 'Sl_Tam2012', 'Mus_2012': 'Mus_2012', 'Other_2012': 'Other_2012', });
lyr_tourist_destinations_forest_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Descriptio': 'Descriptio', });
lyr_Road_3.set('fieldAliases', {'ROAD_ID': 'ROAD_ID', 'CODE': 'CODE', 'CLASS': 'CLASS', });
lyr_Major_Towns_4.set('fieldAliases', {'ID': 'ID', 'NAME': 'NAME', });
lyr_All_tourist_destinations_5.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Discriptio': 'Discriptio', });
lyr_Destinations_6.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', 'Descriptio': 'Descriptio', });
lyr_District_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'Area': 'TextEdit', 'District': 'TextEdit', 'Sinhalese': 'TextEdit', 'SL_Tamils': 'TextEdit', 'Ind_Tamils': 'TextEdit', 'Moor': 'TextEdit', 'Burgher': 'TextEdit', 'Malay': 'TextEdit', 'Other': 'TextEdit', 'Male': 'TextEdit', 'Female': 'TextEdit', 'Pop1963': 'TextEdit', 'Pop1971': 'TextEdit', 'Pop1981_': 'Range', 'Pop2001_': 'Range', 'Pop2012': 'Range', 'Sin_2012': 'Range', 'In_Tam2012': 'Range', 'Sl_Tam2012': 'Range', 'Mus_2012': 'Range', 'Other_2012': 'Range', });
lyr_tourist_destinations_forest_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Descriptio': 'TextEdit', });
lyr_Road_3.set('fieldImages', {'ROAD_ID': 'TextEdit', 'CODE': 'Range', 'CLASS': 'TextEdit', });
lyr_Major_Towns_4.set('fieldImages', {'ID': 'Range', 'NAME': 'TextEdit', });
lyr_All_tourist_destinations_5.set('fieldImages', {'photo': 'TextEdit', 'filename': 'TextEdit', 'directory': 'TextEdit', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', 'Discriptio': 'TextEdit', });
lyr_Destinations_6.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', 'Descriptio': 'TextEdit', });
lyr_District_1.set('fieldLabels', {'PROVINCE_N': 'header label', 'Area': 'no label', 'District': 'inline label', 'Sinhalese': 'no label', 'SL_Tamils': 'no label', 'Ind_Tamils': 'no label', 'Moor': 'no label', 'Burgher': 'no label', 'Malay': 'no label', 'Other': 'no label', 'Male': 'no label', 'Female': 'no label', 'Pop1963': 'no label', 'Pop1971': 'no label', 'Pop1981_': 'no label', 'Pop2001_': 'no label', 'Pop2012': 'no label', 'Sin_2012': 'no label', 'In_Tam2012': 'no label', 'Sl_Tam2012': 'no label', 'Mus_2012': 'no label', 'Other_2012': 'no label', });
lyr_tourist_destinations_forest_2.set('fieldLabels', {'id': 'no label', 'Name': 'header label', 'Descriptio': 'no label', });
lyr_Road_3.set('fieldLabels', {'ROAD_ID': 'no label', 'CODE': 'no label', 'CLASS': 'no label', });
lyr_Major_Towns_4.set('fieldLabels', {'ID': 'no label', 'NAME': 'header label', });
lyr_All_tourist_destinations_5.set('fieldLabels', {'photo': 'header label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', 'Discriptio': 'inline label', });
lyr_Destinations_6.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', 'Descriptio': 'no label', });
lyr_Destinations_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});