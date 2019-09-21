//* Hero object
const hero = {
    name: '',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: '',
        damage: 2,
    }

}

//* Game logic functions

//* Rest - passed
function rest(Object) {
    if (Object.health === 10) {
        alert ('Health is already 10.');
    } else {
        Object.health = 10;
    }
    return Object;
};
document.getElementById('inn').addEventListener('click', function() {rest(hero)});

//* Pick up item - passed
function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon)
    console.log(weapon)

};
document.getElementById('dagger').addEventListener('click', function() {
    let weapon = {type: 'dagger', damage: 2}
    {pickUpItem(hero, weapon)}
    console.log(weapon)
})
//* Equip Weapon
//* Description sounds like the weapon should replace the inventory contents, but test passes when inventory replaces weapon
function equipWeapon(hero) {
    if (hero.inventory.length !== 0) {
        hero.weapon = hero.inventory[0]
    } 
};
document.getElementById('bag').addEventListener('click', function() {
    equipWeapon(hero)
})


//* Display Stats 
//* Why does this not display as a multi-line string?
function displayStats () {
document.write(`${hero.name}
Health: ${hero.health}
Weapon: ${hero.weapon.type}
Weapon Damage ${hero.weapon.damage}
`)

}
displayStats()
