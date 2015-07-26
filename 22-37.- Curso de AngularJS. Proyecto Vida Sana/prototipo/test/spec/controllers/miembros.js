'use strict';

describe('Controller: MiembrosCtrl', function () {

  // load the controller's module
  beforeEach(module('prototipoApp'));

  var MiembrosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MiembrosCtrl = $controller('MiembrosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MiembrosCtrl.awesomeThings.length).toBe(3);
  });
});
