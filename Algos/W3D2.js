/* 
  Given a search criteria object whose values will only be
  primitives (ints, strings, booleans) and a list of objects.
  return any object that matches all the key value pairs in the search
  criteria object.
  Bonus: write a 2nd solution using build in methods to practice functional
  programming.
*/

const users = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];
  
  const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
  };
  const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
  ];
  
  const searchCriteria2 = {
    lastName: "Smith",
  };
  const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
  ];
  
  
  function findObjects(criteria, collection) {
    let meetsCriteria = []
  
    for( let i = 0; i < collection.length; i++){
      if(collection[i].firstName === criteria.firstName && collection[i].age === criteria.age){
        meetsCriteria.push(collection[i])
      }
      if(collection[i].lastName === criteria.lastName){
        meetsCriteria.push(collection[i])
      }
    } return meetsCriteria
  
  }
  
  // console.log(findObjects(searchCriteria1, users))
  // console.log(findObjects(searchCriteria2, users))
  
  
    // Given a criteria object and items
    // Finds the objects that match the given search criteria.
    //return any object that matches all the key value pairs in the search criteria object.
  
  
  
  /* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found
  */
  
  
  
  
  const students = [
    {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false,
    },
    {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false,
    },
    {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false,
    },
  ];
  
  const id1 = 3;
  const updateData1 = { redBeltStatus: true, isLateToday: true };
  const output1 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
  };
  
  const id2 = 1;
  const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
  };
  const output2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
  };
  
  
  function findObjectsFunctional(criteria, id, collection) {
      for(const obj of collection){
        if(obj.id===id){
          for(const key in criteria){
            if(obj.hasOwnProperty(key)){
              obj[key]=criteria[key];
            }
          }
          return obj
        }
      }
      return null
  }
  console.log(findObjectsFunctional(updateData1,id1,students))
  console.log(findObjectsFunctional(updateData2,id2,students))
  
  