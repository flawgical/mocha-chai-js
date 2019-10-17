describe('addClass', function() {
    it('should add class to element', function() {
      var element = { className: '' };
  
      addClass(element, 'test-class');
  
      assert.equal(element.className, 'test-class');
    });
  
    it('should not add a class which already exists', function() {
        var element = { className: 'exists' };
      
        addClass(element, 'exists');
      
        var numClasses = element.className.split(' ').length;
        assert.equal(numClasses, 1);
      });

      it('should append new class after existing one', function() {
        var element = { className: 'exists' };
      
        addClass(element, 'new-class');
      
        var classes = element.className.split(' ');
        assert.equal(classes[1], 'new-class');
      });      
  });

  //-------------------

//   describe("pow", function() {

//     it("raises to n-th power", function() {
//       assert.equal(pow(2, 3), 8);
//     });
  
//   });

// describe("pow", function() {

//     it("2 raised to power 3 is 8", function() {
//       assert.equal(pow(2, 3), 8);
//     });
  
//     it("3 raised to power 3 is 27", function() {
//       assert.equal(pow(3, 3), 27);
//     });
  
//   });

describe("pow", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }
  
    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  
  });