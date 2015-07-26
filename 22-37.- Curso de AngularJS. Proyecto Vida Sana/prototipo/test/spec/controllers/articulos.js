'use strict';

describe('Controller: ArticulosCtrl', function () {

  // load the controller's module
  beforeEach(module('prototipoApp'));

  var ArticulosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticulosCtrl = $controller('ArticulosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ArticulosCtrl.awesomeThings.length).toBe(3);
  });
});
