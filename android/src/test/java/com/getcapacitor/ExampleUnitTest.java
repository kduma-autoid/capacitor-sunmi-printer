package com.getcapacitor;

import static org.junit.Assert.*;

import androidx.core.util.Pair;
import dev.duma.capacitor.sunmiprinter.internals.AsciiBitmapConverter;
import org.junit.Test;

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * @see <a href="http://d.android.com/tools/testing">Testing documentation</a>
 */
public class ExampleUnitTest {

    @Test
    public void addition_isCorrect() throws Exception {
        assertEquals(4, 2 + 2);
    }

    @Test
    public void AsciiBitmapConverter() throws Exception {
        String str =
            "1       1" +
            "\n" +
            " 1     1 " +
            "\n" +
            "  1   1  " +
            "\n" +
            "   1 1   " +
            "\n" +
            "000010000" +
            "\n" +
            "000010000" +
            "\n" +
            "   1 1   " +
            "\n" +
            "  1   1  " +
            "\n" +
            " 1     1 " +
            "\n" +
            "100000001";

        boolean[][] arr = AsciiBitmapConverter.toArray(str);

        assertArrayEquals(
            new boolean[][] {
                { true, false, false, false, false, false, false, false, true },
                { false, true, false, false, false, false, false, true, false },
                { false, false, true, false, false, false, true, false, false },
                { false, false, false, true, false, true, false, false, false },
                { false, false, false, false, true, false, false, false, false },
                { false, false, false, false, true, false, false, false, false },
                { false, false, false, true, false, true, false, false, false },
                { false, false, true, false, false, false, true, false, false },
                { false, true, false, false, false, false, false, true, false },
                { true, false, false, false, false, false, false, false, true }
            },
            arr
        );

        Pair<Integer, Integer> size = AsciiBitmapConverter.getSize(arr);
        assertEquals((int) 9, (int) size.first);
        assertEquals((int) 10, (int) size.second);
    }
}
