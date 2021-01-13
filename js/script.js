let hostingHotelData = {
    roomCategory : {
        standardRoomPrice : 100,
        juniorSuitRoomPrice : 120,
        suitRoomPrice : 150,
    },
    spaPrice : 20,
    roomSize : {
        individualRoom : 0.25,
        doubleRoom : 1,
        tripleRoom : 0.25,
    },
    nightStay :1,
    nightParking : 10,
};

var roomCategorySelectedFunction = () => {
    let roomCategorySelected = document.getElementById('roomTypeSelect').value;
    switch (roomCategorySelected) {
        case 'valueStandard':
            roomCategorySelect = hostingHotelData.roomCategory.standardRoomPrice;
            break;
        case 'valueJuniorSuite':
            roomCategorySelect = hostingHotelData.roomCategory.juniorSuitRoomPrice;
            break;
        case 'valueSuite':
            roomCategorySelect = hostingHotelData.roomCategory.suitRoomPrice;
            break;
    }
}

var spaPriceSelectedFunction = () => document.getElementById('spaCheckbox').checked == true ? spaPriceSelect = hostingHotelData.spaPrice : spaPriceSelect = 0;

var nightStaySelectedFunction = () => numberNightsRoom = document.getElementById('roomNightsInput').value;

var roomSizeSelectedFunction = () => {
    let roomSizeSelected = document.getElementById('roomSizeSelect').value;
    switch (roomSizeSelected) {
        case 'valueIndividual':
            totalPrice = priceLodging - (priceLodging * hostingHotelData.roomSize.individualRoom);
            break;
        case 'valueDouble':
            totalPrice = priceLodging;
            break;
        case 'valueTriple':
            totalPrice = priceLodging + (priceLodging * hostingHotelData.roomSize.individualRoom);
            break;
    }
}

var nightParkingSelectedFunction = () => totalPrice = totalPrice + (document.getElementById('parkingNightsInput').value * hostingHotelData.nightParking);

var totalPriceLodgingFunction = () => {
    roomCategorySelectedFunction();
    spaPriceSelectedFunction();
    nightStaySelectedFunction();
    priceLodging = (roomCategorySelect + spaPriceSelect) * numberNightsRoom;
}

var totalPriceFunction = () => {
    totalPriceLodgingFunction();
    roomSizeSelectedFunction();
    nightParkingSelectedFunction();
    totalPrice <= 0 ? totalPrice = 0 : totalPrice;
    document.getElementById('calculateInput').value = `${totalPrice} €`;
}

document.getElementById('calculateButton').addEventListener('click', totalPriceFunction);