describe('Semi-tone Part 1', ()=>{
	const Buddy = require('../src/app');
    it('should have 12 notes', ()=>{
        let buddy = new Buddy();
	expect(buddy.notes.length).toEqual(12)
	expect(buddy.notes[0]).toEqual("A")
	expect(buddy.notes[1]).toEqual("A#")
	expect(buddy.notes[2]).toEqual("B")
	expect(buddy.notes[3]).toEqual("C")
	expect(buddy.notes[4]).toEqual("C#")
	expect(buddy.notes[5]).toEqual("D")
	expect(buddy.notes[6]).toEqual("D#")
	expect(buddy.notes[7]).toEqual("E")
	expect(buddy.notes[8]).toEqual("F")
	expect(buddy.notes[9]).toEqual("F#")
	expect(buddy.notes[10]).toEqual("G")
	expect(buddy.notes[11]).toEqual("G#")
	});

    it('should return 2 notes', ()=> {  
        let buddy = new Buddy();		
        expect(buddy.selectNotes().length).toEqual(2)
    });

    it('should return true if distance is equal to argument', function() {
		let buddy = new Buddy();		
		let answer = buddy.solution
	expect(typeof answer).toMatch('object')
	expect(typeof buddy.checkAnswer()).toEqual("number")	
    });
})

