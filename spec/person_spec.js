let person = require('../src/person')

let personTest = new person('Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives']) 

describe("personTest", ()=>{
    it("should return the with Ryan", ()=>{

        expect(personTest.name).toBe("Ryan")
    })
    it("should return the with 30", ()=>{

        expect(personTest.age).toBe(30)
    })   
    it("should return the with 'Ryan',30,'male',['being a hardarse','agile', 'ssd hard drives']", ()=>{

        expect(personTest.hello()).toBe("Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile and ssd hard drives.")
    }) 

})