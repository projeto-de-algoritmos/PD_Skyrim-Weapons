import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:skyrim_weapons/utilities/style_constants.dart';

class SkyrimBakcpack extends StatelessWidget {
  const SkyrimBakcpack({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xffD4C2FC),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              "Hey, you! You're finally awake.",
              style: title,
            ),
            const SizedBox(height: 100.0),
            const Text(
              'Abra o baú e receba os espólios de sua batalha!',
              style: paragraph
            ),
            LottieBuilder.asset(
              'images/treasure-chest.json',
              width: 320.0,
              frameRate: FrameRate.max,
            ),
            const SizedBox(height: 50.0),
            ElevatedButton(
              onPressed: () => {},
              style: ElevatedButton.styleFrom(
                padding: const EdgeInsets.symmetric(
                  vertical: 15.0,
                  horizontal: 40.0
                ),
              ),
              child: const Text(
                'Abrir baú',
                style: button,
              ),
            )
          ],
        ),
      ),
    );
  }
}