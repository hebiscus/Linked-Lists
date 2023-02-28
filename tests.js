import { LinkedList } from "index.js";
import { Node } from "index.js";

//creating a new List
const firstList = new LinkedList();
console.log(firstList);

//testing prepend and append methods, final order in a list: ziup, awa, kaczka, null
firstList.append("awa");
firstList.prepend("ziup");
firstList.append("kaczka");
console.log(firstList);

//testing returning first node in a list
console.log(firstList.firstNode());

//testing returning last node in a list
console.log(firstList.tail());

//testing returning a node at given index
console.log(firstList.at(0));
console.log(firstList.at(1));

//testing deleting last node in the list, list after it: ziup, awa, null
firstList.pop();

//testing if a given value exist in a list, returning either true or false
console.log(firstList.contains("ziup"));
console.log(firstList.contains("well, I'm not there!"));

//testing if a node with a given value exists in a list and returning it's index if it does; otherwise null occures
console.log(firstList.find("awa"));
console.log(firstList.find("I'm not there either :("));

//testing representing whole list as a string
console.log(firstList.toString());