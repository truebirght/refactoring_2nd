let defaultOwner = { firstName: "Martin", lastName: "Fowler" };

function getDefaultOwner() {
    return Object.assign({}, defaultOwner);
}

module.exports = {getDefaultOwner}
