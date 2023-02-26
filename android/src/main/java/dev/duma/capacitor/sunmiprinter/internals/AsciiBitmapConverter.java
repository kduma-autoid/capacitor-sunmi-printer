package dev.duma.capacitor.sunmiprinter.internals;

import android.graphics.Bitmap;

import androidx.core.util.Pair;

public class AsciiBitmapConverter {
    public static Bitmap decode(String encodedBitmap) {
        boolean[][] arr = AsciiBitmapConverter.toArray(encodedBitmap);
        Pair<Integer, Integer> size = AsciiBitmapConverter.getSize(arr);

        int width = size.first;
        int height = size.second;

        int[] pixels = new int[width * height];
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {
                if (arr[i][j]) {
                    pixels[i * width + j] = 0x00000000;
                } else {
                    pixels[i * width + j] = 0xffffffff;
                }
            }
        }
        return Bitmap.createBitmap(pixels, 0, width, width, height, Bitmap.Config.RGB_565);
    }

    public static boolean[][] toArray(String str) {
        String[] lines = str.split("\n");
        boolean[][] arr = new boolean[lines.length][];

        int i = 0;
        for (String line : lines) {
            arr[i] = new boolean[line.length()];
            for (int j = 0; j < line.length(); j++) {
                arr[i][j] = line.charAt(j) == '1';
            }
            i++;
        }

        return arr;
    }

    public static Pair<Integer, Integer> getSize(boolean[][] arr) {
        int y = arr.length;
        int x = 0;

        for (boolean[] line : arr) {
            if (x == 0) {
                x = line.length;
            } else if (x != line.length) {
                throw new RuntimeException("Invalid bitmap");
            }
        }

        return new Pair<>(x, y);
    }
}
