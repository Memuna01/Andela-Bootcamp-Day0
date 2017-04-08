var app = require('../app/exercises.js');


describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(app.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(app.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(app.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(app.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(app.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(app.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(app.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(app.fizzBuzz(101)).toBe(101);
  });

});

(function(){
  'use strict';

  describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        expect(app.aritGeo([])).toEqual(0);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(app.aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        expect(app.aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        expect(app.aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        expect(app.aritGeo([2, 6, 18, 54, 162])).toEqual('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        expect(app.aritGeo([0.5, 3.5, 24.5, 171.5])).toEqual('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        expect(app.aritGeo([-128, 64, -32, 16, -8])).toEqual('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        expect(app.aritGeo([1, 2, 3, 5, 8])).toEqual(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        expect(app.aritGeo([1, 3, 6, 10, 15])).toEqual(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        expect(app.aritGeo([1, 8, 27, 64, 125])).toEqual(-1);
      });
      
    });
  });
})();

describe("Get Prime tests ", function() {

  it("should return invalid input for -2", function() {
    expect(app.getPrimes(-2)).toBe('invalid input');
  });

  it("should return invalid input for hello", function() {
    expect(app.getPrimes("hello")).toBe('invalid input');
  });

  it("should return invalid input for 0", function() {
    expect(app.getPrimes(0)).toBe('invalid input');
  });

  it("should return [2, 3, 5] for 7", function() {
    expect(app.getPrimes(7)).toEqual([2, 3, 5]);
  });

  it("should return [2, 3, 5, 7, 9, 11] for 13", function() {
    expect(app.getPrimes(13)).toEqual([2, 3, 5, 7, 11]);
  });

  it("should return [2,3,5,7,11,13,17,19,23,29] for 30", function() {
    expect(app.getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });

  it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59] for 60", function() {
    expect(app.getPrimes(60)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]);
  });

});
