describe('binaryPlateau', function() {
    it('should find the largest binary plateau when given an integer', function() {
      var result = binaryPlateau(758);
      expect(result).toEqual(4);
    });
    it('should find the largest binary plateau when given an integer', function() {
      var result = binaryPlateau(125);
      expect(result).toEqual(5);
    });
});