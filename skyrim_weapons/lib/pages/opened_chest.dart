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
      const Scaffold(
        body: Text('Hello Chest!'),
      )
    );
  }
}