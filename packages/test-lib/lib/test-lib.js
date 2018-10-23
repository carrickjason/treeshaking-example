import React from 'react';
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose';
import format from 'date-fns/format';

var TestA = function TestA() {
  return React.createElement("span", null, "TestA");
};

var TestB = function TestB() {
  return React.createElement("h1", null, "TestB + ", TestA);
};

TestB.displayName = 'BTest';

var TestC =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TestC, _React$Component);

  function TestC() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TestC.prototype;

  _proto.render = function render() {
    return React.createElement("h1", null, "TestC");
  };

  TestC.validate = 'validate';
  return TestC;
}(React.Component);

var TestD =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TestD, _React$Component);

  function TestD() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = TestD.prototype;

  _proto.render = function render() {
    var date = format(new Date(), 'mm/dd/yy');
    return React.createElement("h1", null, "TestD + ", date);
  };

  return TestD;
}(React.Component);

export { TestA, TestB, TestC, TestD };
//# sourceMappingURL=test-lib.js.map
