const World = new ThreeGlobe()
    // This function tells the globe to fetch the right NASA tile for every spot
    .globeTileEngineUrl((x, y, l) => 
        `https://gibs.earthdata.nasa.gov/wmts/epsg4326/best/BlueMarble_ShadedRelief_Bathymetry/default/500m/${l}/${y}/${x}.jpg`
    )
    .showAtmosphere(true)
    .atmosphereColor('#3a228a');
