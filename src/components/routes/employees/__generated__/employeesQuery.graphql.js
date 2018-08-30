/**
 * @flow
 * @relayHash 9143d1208be47afd8552de3c3aa5a69e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type employeesQueryVariables = {||};
export type employeesQueryResponse = {|
  +employees: ?$ReadOnlyArray<?{|
    +id: ?string,
    +name: ?string,
    +position: ?string,
    +reportsTo: ?{|
      +name: ?string
    |},
  |}>
|};
export type employeesQuery = {|
  variables: employeesQueryVariables,
  response: employeesQueryResponse,
|};
*/


/*
query employeesQuery {
  employees {
    id
    name
    position
    reportsTo {
      name
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "position",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "employeesQuery",
  "id": null,
  "text": "query employeesQuery {\n  employees {\n    id\n    name\n    position\n    reportsTo {\n      name\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "employeesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "employees",
        "storageKey": null,
        "args": null,
        "concreteType": "Employee",
        "plural": true,
        "selections": [
          v0,
          v1,
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "reportsTo",
            "storageKey": null,
            "args": null,
            "concreteType": "Employee",
            "plural": false,
            "selections": [
              v1
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "employeesQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "employees",
        "storageKey": null,
        "args": null,
        "concreteType": "Employee",
        "plural": true,
        "selections": [
          v0,
          v1,
          v2,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "reportsTo",
            "storageKey": null,
            "args": null,
            "concreteType": "Employee",
            "plural": false,
            "selections": [
              v1,
              v0
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2263cf81fc0a9a40583b8d9d492fd35e';
module.exports = node;
