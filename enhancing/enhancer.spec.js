const enhancer = require('./enhancer.js');
const testItem = {durability: 2,
                  name: "Mighty Sword of Testing",
                enhancement: 10}

describe('repair tests', () => {
    describe("functionality tests", () => {
        it('should return the item with durability of 100', () => {
            const repairedItem={durability: 100,
                name: "Mighty Sword of Testing",
              enhacement: 10};
              const newItem = enhancer.repair(testItem);
            expect(newItem.durability).toBe(repairedItem.durability);
        });


        // it('should throw an exception if the parms are not numbers', () => {
        //     expect(() => { add('red', 2) }).toThrow(); // a string
        //     expect(() => { add(NaN, 2) }).toThrow(); // NaN
        //     expect(() => { add([1, 2, 'red']) }).toThrow(); // a string in an array
        //     expect(() => { add([1, 2, NaN]) }).toThrow(); // NaN in an array
        //     expect(() => { add({ prop: 'prop' }, 2) }).toThrow(); // an object
        //     // ... should there be others?
        // });
        // it('should return 0 when called with no args', () => {
        //     const expectedResult = 0;
        //     const actualResult = add();
        //     expect(actualResult).toBe(expectedResult);
        // })

        // it('should handle more than two arguments', () => {
        //     expect(add(1, 2, 3)).toBe(6);
        //     expect(add(1, 2, 3, 5)).toBe(11);
        // })

    })
})

describe('success tests', ()=>{
    it('should increase enhancement by 1', ()=>{
        const newItem = enhancer.succeed(testItem);
        expect(newItem.enhancement).toBe(testItem.enhancement + 1)
    });
    it('should not exceed enhancement of 20', ()=>{
        const maxEnhanceItem = {durability: 100,
            name: "Mighty Sword of Testing",
          enhancement: 20};
        const newItem = enhancer.succeed(maxEnhanceItem);
        expect(newItem).toBe(maxEnhanceItem);
    })
    it('should not affect the item durability', ()=>{
        const newItem = enhancer.succeed(testItem);
        const maxEnhanceItem = {durability: 100,
            name: "Mighty Sword of Testing",
          enhancement: 20};
        const newMaxEnhanceItem = enhancer.succeed(maxEnhanceItem)
        expect(newItem.durability).toBe(testItem.durability)
        expect(newMaxEnhanceItem.durability).toBe(maxEnhanceItem.durability)

    })
});

describe('failure tests', ()=>{
    it('should decrease durability by 5 if enhancement less than 15', ()=>{
        const newItem = enhancer.fail(testItem);
        expect(newItem.durability).toBe(testItem.durability-5);
        console.log("New Item:", newItem)
    })
    it('should decrease durability by 10 if enhancement greater than or equal to 15', ()=>{
        const failItem = {durability: 2,
            name: "Mighty Sword of Testing",
          enhancement: 15};
          const newFailItem = enhancer.fail(failItem);
          expect(newFailItem.durability).toBe(failItem.durability-10);
          console.log("New Fail Item:", newFailItem)
    })
    it('should decrease enhancement by 1 if enhancement is greater than 16', ()=>{
        const failItem = {durability: 2,
            name: "Mighty Sword of Testing",
          enhancement: 17};
          const newFailItem = enhancer.fail(failItem);
          expect(newFailItem.durability).toBe(failItem.durability-10);
          expect(newFailItem.enhancement).toBe(failItem.enhancement-1);
          console.log("New Fail Item:", newFailItem)
    })
})