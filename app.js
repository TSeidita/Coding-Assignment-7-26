// Your display must include the following features:

// List each user, last name first, with each name capped
// When a user is hovered over, the containing element must change color
// Include a padding of 10px by 5px for each user
// The display must be vertically and horizontally centered on the screen, and must remain so during screen resizing
// JSON Data:
const JSONData = `[{ "fname": "esme", "lname": "sanchez", "id": 1892038, "isTherapist": true },

{ "fname": "rick", "lname": "jeps", "id": 1894024, "isTherapist": false },

{ "fname": "angie", "lname": "lange", "id": 1982403, "isTherapist": false },

{ "fname": "renat", "lname": "gros", "id": 1894039, "isTherapist": true },

{ "fname": "bettino", "lname": "yang", "id": 3789204, "isTherapist": true }]`;

const parsedData = JSON.parse(JSONData);

function buildList() {
    for (let i = 0; i < parsedData.length; i++) {
        let fname = capitalize(parsedData[i].fname);
        let lname = capitalize(parsedData[i].lname);
        let completeList = document.getElementById("listItems");
        let newLi = document.createElement('li');
        newLi.innerText = `${lname}, ${fname}`;
        completeList.appendChild(newLi);
    }
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
buildList();