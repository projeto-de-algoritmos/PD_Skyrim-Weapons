class Weapon {
  String? name;
  double? damage;
  double? weight;
  int? gold;
  String? upgrade;
  String? perk;
  String? type;
  String? category;
  dynamic speed;

  Weapon(
    {
    this.name,
    this.damage,
    this.weight,
    this.gold,
    this.upgrade,
    this.perk,
    this.type,
    this.category,
    this.speed
    }
  );

  Weapon.fromJson(Map<String, dynamic> json){
    name = json['Name'];
    damage = json['Damage'];
    weight = json['Weight'];
    gold = json['Gold'];
    upgrade = json['Upgrade'];
    perk = json['Perk'];
    type = json['Type'];
    category = json['Category'];
    speed = json['Speed'];
  }
}