"use strict";


function addFunc() {

    //Base price of items calculation
    var desktop = document.getElementById("desktop").value;
    var basePrice1 = 185 * desktop;

    var desktopPlus = document.getElementById("desktopPlus").value;
    var basePrice2 = 85 * desktopPlus;

    var laptop = document.getElementById("laptop").value;
    var basePrice3 = 250 * laptop;

    var laptopPlus = document.getElementById("laptopPlus").value;
    var basePrice4 = 125 * laptopPlus;

    var msSurface = document.getElementById("msSurface").value;
    var basePrice5 = 199 * msSurface;

    var appleIpad = document.getElementById("appleIpad").value;
    var basePrice6 = 85 * appleIpad;


    //Extra items desktop calculation 

    var wirelessCardDesktop = document.getElementById("wirelessCardDesktop").value;
    var extItemsDesktop1 = 30 * wirelessCardDesktop;

    var extraMemoryDesktop = document.getElementById("extraMemoryDesktop").value;
    var extItemsDesktop2 = 50 * extraMemoryDesktop;

    var speakersDesktop = document.getElementById("speakersDesktop").value;
    var extItemsDesktop3 = 30 * speakersDesktop;

    var surgeProtectDesktop = document.getElementById("surgeProtectDesktop").value;
    var extItemsDesktop4 = 5 * surgeProtectDesktop;

    var flashDriveDesktop = document.getElementById("flashDriveDesktop").value;
    var extItemsDesktop5 = 30 * flashDriveDesktop;

    var addSSDDesktop = document.getElementById("addSSDDesktop").value;
    var extItemsDesktop6 = 30 * addSSDDesktop;

    //Extra items laptop calculation 

    var extraMemoryLaptop = document.getElementById("extraMemoryLaptop").value;
    var extItemsLaptop1 = 50 * extraMemoryLaptop;

    var speakersLaptop = document.getElementById("speakersLaptop").value;
    var extItemsLaptop2 = 30 * speakersLaptop;

    var surgeProtectLaptop = document.getElementById("surgeProtectLaptop").value;
    var extItemsLaptop3 = 5 * surgeProtectLaptop;

    var flashDriveLaptop = document.getElementById("flashDriveLaptop").value;
    var extItemsLaptop4 = 30 * flashDriveLaptop;

    var addSSDLaptop = document.getElementById("addSSDLaptop").value;
    var extItemsLaptop5 = 30 * addSSDLaptop;


    document.getElementById("amountDue").value = basePrice1 + basePrice2 + basePrice3 + basePrice4 + basePrice5 + basePrice6
        + extItemsDesktop1 + extItemsDesktop2 + extItemsDesktop3 + extItemsDesktop4 + extItemsDesktop5 + extItemsDesktop6
        + extItemsLaptop1 + extItemsLaptop2 + extItemsLaptop3 + extItemsLaptop4 + extItemsLaptop5;
}


