import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:skyrim_weapons/utilities/style_constants.dart';
import 'package:skyrim_weapons/models/weapon_model.dart';
import 'package:flutter/services.dart' as services;

class OpenedChest extends StatefulWidget {
  const OpenedChest({super.key});
  
  @override
  State<StatefulWidget> createState() => _OpenedChestState();
}

class _OpenedChestState extends State<OpenedChest> {
  Future<List<Weapon>> readJsonData() async{
    final jsonData = await services.rootBundle.loadString(
      'data/skyrimWeapons.json'
    );
    final list = json.decode(jsonData) as List<dynamic>;

    return list.map((e) => Weapon.fromJson(e)).toList();
  }

  @override
  Widget build (BuildContext context){
    return (
      Scaffold(
        body: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Container(
                color: Colors.yellow,
                width: 400.0,
                height: 600.0,
                child: FutureBuilder(
                  future: readJsonData(),
                  builder: (context, data) {
                    if(data.hasError){
                      return Text('${data.error}');
                    } else if (data.hasData){
                      var weapons = data.data as List<Weapon>;
                      return ListView.builder(
                        itemBuilder: (context, index){
                          return Card(
                            elevation: 5,
                            margin: const EdgeInsets.symmetric(
                              vertical: 15.0,
                              horizontal: 25.0
                            ),
                            child: Container(
                              padding: const EdgeInsets.all(10.0),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                                children: [
                                  Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      const Text(
                                        'Nome:',
                                        style: lootHeader,  
                                      ),
                                      const SizedBox(height: 5.0),
                                      Text(
                                        weapons[index].name.toString(),
                                        style: lootItem,
                                      ),
                                    ],
                                  ),
                                  const SizedBox(width: 20.0),
                                  Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      const Text(
                                        'Peso:',
                                        style: lootHeader,  
                                      ),
                                      const SizedBox(height: 5.0),
                                      Text(
                                        weapons[index].weight.toString(),
                                        style: lootItem,
                                      ),
                                    ],
                                  ),
                                  const SizedBox(width: 20.0),
                                  Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      const Text(
                                        'Preço:',
                                        style: lootHeader,
                                      ),
                                      const SizedBox(height: 5.0),
                                      Text(
                                        weapons[index].gold.toString(),
                                        style: lootItem,  
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ),
                          );
                        }
                      );
                    } else {
                      return const Center(
                        child: CircularProgressIndicator()
                      );
                    }
                  }
                ),
              ),
              Container(
                color: Colors.green,
                width: 400.0,
                height: 600.0,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(
                        vertical: 15.0,
                        horizontal: 25.0
                      ),
                      color: const Color(0xfff5f5f5),
                      width: 360.0,
                      height: 60.0,
                      child: const Text(
                        "You're finally awake",
                        style: lootItem,
                      ),
                    )
                  ]
                ),
              )
            ],
          )
        ),
      )
    );
  }
}