let {Person} = require('../src/person')

let personTest = new Person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives']) 

describe("personTest", ()=>{
    it("should return Ryan", ()=>{

        expect(personTest.name).toBe("Ryan")
    })
    it("should return 30", ()=>{

        expect(personTest.age).toBe(30)
    })   
    it("should return Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.", ()=>{

        expect(personTest.hello()).toBe("Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.")
    }) 

})