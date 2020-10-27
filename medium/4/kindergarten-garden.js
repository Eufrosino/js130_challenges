const PLANTS = {
  "R": "radishes",
  "G": "grass",
  "C": "clover",
  "V": "violets",
}

const DEFAULT_STUDENTS = [
  "alice",
  "bob",
  "charlie",
  "david",
  "eve",
  "fred",
  "ginny",
  "harriet",
  "ileana",
  "joseph",
  "kincaid",
  "larry",
]

class Garden {
  constructor(topBotStr, students = DEFAULT_STUDENTS) {
    let [top, bottom] = topBotStr.split('\n');
    this.students = students.sort();
    this.topRow = top;
    this.bottomRow = bottom;
    this.students.forEach((student, index) => {
      this[student.toLowerCase()] = this.findPlants(index)
    })
  }

  findPlants(index) {
    let translatedPlants = [];
    let abbreviatedPlants = this.topRow.split('').splice((index * 2), 2) + ',' + this.bottomRow.split('').splice((index * 2), 2);
    abbreviatedPlants.split(',').forEach(letter => {
      translatedPlants.push(PLANTS[letter]);
    })
    return translatedPlants;
  }
}

module.exports = Garden;
