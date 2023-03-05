function extendTransportSystem(EarthRoute, MoonRoute) {
    let k = [];
    MoonRoute.prototype.transfer = function (parcel) {
        parcel.destination = 'Moon';
        k.push({ ...parcel, destination: 'Mothership', origin: 'Moon' });
        MoonRoute.warehouse.push(parcel);
    };
    EarthRoute.prototype.transfer = function (parcel) {
        parcel.destination = 'Earth';
        k.push({ ...parcel, destination: 'Mothership', origin: 'Earth' });
        EarthRoute.vault.push(parcel);
    };

    return k;
}

module.exports = extendTransportSystem;
