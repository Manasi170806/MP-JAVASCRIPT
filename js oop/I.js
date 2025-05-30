// 9. Method Chaining
// Scenario: You are developing a game inventory system where a player can collect items and upgrade 
// weapons.
// Create a Player class with methods collectItem(item), upgradeWeapon(level), and showInventory().
// Implement method chaining so that player.collectItem("sword").upgradeWeapon(2).showInventory(); works.

class Player 
{
    constructor() 
    {
        this.inventory = []; 
        this.weaponLevel = 1;
    }
  
    collectItem(item) 
    {
        this.inventory.push(item); 
        return this; 
    }
  
    upgradeWeapon(level) 
    {
        this.weaponLevel = level;
        return this; 
    }

    showInventory() 
    {
        document.writeln(this.inventory.join(', '));
        document.writeln(this.weaponLevel);
        return this; 
    }
}
  
let player = new Player();
  
player.collectItem("sword").upgradeWeapon(2).collectItem("shield").collectItem("health potion").upgradeWeapon(3).showInventory();

  