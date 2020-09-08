class Organization {
    constructor(data) {
        this._name = data.name;
        this._contry = data.contry;
    }

    set name(aString) { this._name = aString; }

    get name() { return this._name; }

    set country(aString) { this._country = aString; }

    get contry() { return this._contry; }
}

const organization = new Organization({ name: "Acme Gooseberries", country: "GB" });

function getOrganization() {
    return organization;
}



module.exports = { getOrganization }