const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];



  function lookUpProfile(name, prop) {
    // Only change code below this line
    let arr = contacts
    for (let i = 0; i < arr.length; i++){
        if(arr[i].firstName == name) {
            if (prop == "lastName"){
                return arr[i].lastName
            }else if(prop == "likes"){
                return arr[i].likes
        
              }
        }
        return "No such contact"
        
    // Only change code above this line
  }}
  console.log(lookUpProfile("Sherlock","likes"))
  