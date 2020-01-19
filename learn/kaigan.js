const Person = function Person(living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = () => {
    return this.gender;
  };
};

const jsonHC = new Person(true, 26, "male");
console.log(jsonHC);
console.log(jsonHC.getGender());
