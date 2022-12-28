(function () {
    "use strict";

    var viewer = new Cesium.Viewer("cesium");

    viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: "https://plateau.geospatial.jp/main/data/3d-tiles/bldg/13100_tokyo/13108_koto-ku/texture/tileset.json"
    }));

    // Camera Position
    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(139.81, 35.66, 40000),
        orientation: {
            heading: 0, // horizontal
            pitch: -1.4, // vertical
            roll: 0
        }
    });

    // Add Point
    var czml =
        [
            {
                "id": "document",
                "name": "AquaBridge_Kiba",
                "version": "1.0"
            },
            {
                "id": "1",
                "name": "BentenBridge",
                "description": "名前: 弁天橋 <br> 河川名: 大横川",
                "label": {
                    "fillColor": {
                        "rgba": [0, 0, 0, 255]
                    },
                    "font": "12pt Lucida Console",
                    "horizontalOrigin": "CENTER",
                    "outlineColor": {
                        "rgba": [255, 255, 255, 255]
                    },
                    "outlineWidth": 1.2,
                    "pixelOffset": {
                        "cartesian2": [0, 25]
                    },
                    "style": "FILL_AND_OUTLINE",
                    "text": "弁天橋"
                },
                "position": {
                    "cartographicDegrees": [
                        139.808140,
                        35.668558,
                        60
                    ]
                },
                "point": {
                    "color": {
                        "rgba": [
                            255,
                            0,
                            0,
                            255
                        ]
                    },
                    "pixelSize": 10
                }
            },
            {
                "id": "2",
                "name": "SawamiBridge",
                "description": "沢海橋 <br> 河川名: 大横川",
                "position": {
                    "cartographicDegrees": [
                        139.808762,
                        35.669534,
                        60
                    ]
                },
                "point": {
                    "color": {
                        "rgba": [
                            255,
                            0,
                            0,
                            255
                        ]
                    },
                    "pixelSize": 10
                }
            },
            {
                "id": "3",
                "name": "HirakiBridge",
                "description": "平木橋 <br> 河川名: 大横川",
                "position": {
                    "cartographicDegrees": [
                        139.805292,
                        35.668809,
                        60
                    ]
                },
                "point": {
                    "color": {
                        "rgba": [
                            255,
                            0,
                            0,
                            255
                        ]
                    },
                    "pixelSize": 10
                }
            },
            {
                "id": "4",
                "name": "ShiohamaBridge",
                "description": "汐浜橋 <br> 河川名: 汐浜運河",
                "position": {
                    "cartographicDegrees": [
                        139.805522,
                        35.664824,
                        60
                    ]
                },
                "point": {
                    "color": {
                        "rgba": [
                            255,
                            0,
                            0,
                            255
                        ]
                    },
                    "pixelSize": 10
                }
            },
            {
                "id": "5",
                "name": "HibariBridge",
                "description": "雲雀橋 <br> 河川名: 汐浜運河",
                "position": {
                    "cartographicDegrees": [
                        139.803131,
                        35.664849,
                        60
                    ]
                },
                "point": {
                    "color": {
                        "rgba": [
                            255,
                            0,
                            0,
                            255
                        ]
                    },
                    "pixelSize": 10
                }
            },
            {
                "id": "6",
                "name": "HunakiBridge",
                "description": "舟木橋跡 <br> 河川名: なし",
                "position": {
                    "cartographicDegrees": [
                        139.804457,
                        35.669284,
                        60
                    ]
                },
                "point": {
                    "color": {
                        "rgba": [
                            255,
                            0,
                            0,
                            255
                        ]
                    },
                    "pixelSize": 10
                }
            }
        ];
    viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));

}());