/**
 * Write a function called collectStrings which accepts an object and
 * returns an array of all the values in the object that have a typeof string
 * @param {*} object
 */
function collectStrings(object) {
  var temp = [];

  function helper(object) {
    for (var item in object) {
      if (typeof object[item] === "object" && object[item] !== null) {
        helper(object[item]);
      } else if (typeof object[item] === "string") {
        temp.push(object[item]);
      }
    }
  }

  helper(object);

  return temp;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
