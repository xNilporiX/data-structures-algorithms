/**
 * Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.
 * Recursion would be a great way to solve this!
 *
 * The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original.
 * Keep the original object unchanged.
 * @param {*} object
 */
function stringifyNumbers(object) {
  let temp = {};
  for (var item in object) {
    if (Array.isArray(object[item])) {
      temp[item] = object[item].map((el) =>
        typeof el === "object" && el !== null ? stringifyNumbers(el) : el
      );
    } else if (typeof object[item] === "object" && object[item] !== null) {
      temp[item] = stringifyNumbers(object[item]);
    } else {
      if (typeof object[item] === "number") {
        temp[item] = String(object[item]);
      } else {
        temp[item] = object[item];
      }
    }
  }

  return temp;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
