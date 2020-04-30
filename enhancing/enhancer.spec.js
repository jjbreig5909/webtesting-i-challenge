const enhancer = require('./enhancer.js');
const testItem = {durability: 12,
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
        const failItem = {durability: 12,
            name: "Mighty Sword of Testing",
          enhancement: 15};
          const newFailItem = enhancer.fail(failItem);
          expect(newFailItem.durability).toBe(failItem.durability-10);
          console.log("New Fail Item:", newFailItem)
    })
    it('should decrease enhancement by 1 if enhancement is greater than 16', ()=>{
        const failItem = {durability: 12,
            name: "Mighty Sword of Testing",
          enhancement: 17};
          const newFailItem = enhancer.fail(failItem);
          expect(newFailItem.durability).toBe(failItem.durability-10);
          expect(newFailItem.enhancement).toBe(failItem.enhancement-1);
          console.log("New Fail Item:", newFailItem)
    })
    it('should not decrease durability below 0', ()=>{
        const failItem = {durability: 9,
        name: "blah",
        enhancement: 17};
        const newFailItem=enhancer.fail(failItem);
        expect(newFailItem.durability).toBe(0);
    })
    it('should not decrease durability below 0 when enhancement is less than 15',()=>{
        const failItem = {durability: 4,
            name: "blah",
            enhancement: 14};
            const newFailItem=enhancer.fail(failItem);
            expect(newFailItem.durability).toBe(0);
    })
})