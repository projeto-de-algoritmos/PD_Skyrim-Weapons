import 'package:flutter/material.dart';
import 'package:skyrim_weapons/pages/skyrim_backpack.dart';

void main() {
  runApp(const App());
}

class App extends StatelessWidget {
  const App ({super.key});

  @override
  Widget build (BuildContext context) {
    return MaterialApp(
      theme: ThemeData(useMaterial3: true),
      routes: {
        '/': (context) => const SkyrimBakcpack(),
      },
    );
  }
}