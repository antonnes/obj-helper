# obj-helper
Various helper functions for working with object and arrays

## Installation
`npm install obj-helper`

## Usage
`var oh = require('obj-helper');`

## Get the length of an object

```
var obj = {
  name: 'Luke',
  age: 19,
  teacher: 'Master Yoda'
}

var objSize = oh.size(obj); // returns 3
```

## Return the values of an Object as a string
```
var obj = {
  name: 'Luke',
  age: 19,
  druid: 'R2D2'
}

var lukeToStr = oh.objtoStr(obj); // returns luke19R2D2
```

## Check if two objects are equal
```
var obj = {
  name: 'Luke',
  age: 19,
  druid: 'R2D2'
}

var obj2 = {
  name: 'Luke',
  age: 19,
  druid: 'R2D2'
}

var objsEqual = oh.compare(obj,obj2); // returns true
```

## Check if an object is in array of objects

```
var rebels = [
  {
    name: 'Han",
    job: 'Smuggler',
    age: 29
  },
  {
    name: 'Leia",
    job: 'Princess',
    age: 19
  },
  {
    name: 'Chewbacca",
    job: 'Pilot',
    age: 200
  }
];

oh.indexOfObj(rebels, {
    name: 'Chewbacca",
    job: 'Pilot',
    age: 200
  }); // returns 2
