const obj1 = {
  subject: "maths",
  school: "hps",
  func1: function (idk) {
    console.log(this.subject, idk);
  },
};

const obj2 = {
  subject: "science",
  school: "kps",
};

// call
obj1.func1.call(obj2, "well i know"); // science

// apply
obj1.func1.apply(obj2, ["well i know"]); // other args send inside the array

// bind
obj1.func1.apply(obj2, ["well i know"]); // other args send inside the array

const callMe = obj1.func1.bind(obj2, "well i know"); //similar to call, gives a callback through we can execute it later

callMe();
