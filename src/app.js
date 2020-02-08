class JamBuddy {

    constructor() {
        this.notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
        this.solution={}
    }

    selectNotes() {
        let selectedArr = [];

        selectedArr.push(...this.notes);

        let mixedArray = selectedArr.sort(() => Math.random() - 0.5)

        this.solution =[...mixedArray.splice(0, 2)];
        return this.solution.sort();
    }

    checkAnswer() {

        let firstIterm = this.notes.indexOf(this.solution[0])

        let secIterm = this.notes.indexOf(this.solution[1])

        let notesDistance = 0

        firstIterm < secIterm ? notesDistance = secIterm - firstIterm : notesDistance = firstIterm - secIterm;

        notesDistance <= -1 ? notesDistance *= -1 : notesDistance

        return notesDistance
    }

}
module.exports = JamBuddy
