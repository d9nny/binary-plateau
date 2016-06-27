Introduction
============

A binary plateau within a positive integer N is any maximal sequence of consecutive ones in the binary representation of N.

For example, number 14 has binary representation 1110 and contains a binary plateau of length 3. The number 758 has binary representation 1011110110 and contains two binary plateaus: one of length 4 and one of length 2.

Write a function that, given a positive integer n, returns the length of its longest binary plateau. The function should return 0 if n doesn't contain a binary plateau.

For example, given n = 125 the function should return 5, because n has binary representation 1111101 and so its longest binary gap is of length 5.

Running
-------

In your browser open the developer tools and navigate to the console tab. Copy and paste the code in binaryPlateau.js into the console.

Running Tests
-------------

Open specRunner.html in your browser and it should automatically run the tests.

