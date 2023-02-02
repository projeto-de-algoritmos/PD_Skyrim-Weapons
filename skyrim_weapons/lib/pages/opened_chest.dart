import 'package:flutter/material.dart';
import 'package:skyrim_weapons/utilities/style_constants.dart';

class OpenedChest extends StatefulWidget {
  const OpenedChest({super.key});
  
  @override
  State<StatefulWidget> createState() => _OpenedChestState();
}

class _OpenedChestState extends State<OpenedChest> {
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
                        'Hey you',
                        style: lootItem,
                      ),
                    )
                  ]
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