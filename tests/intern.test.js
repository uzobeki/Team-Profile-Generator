const Intern = require('../lib/Intern')


describe('Intern', () => {
    it("should accept a constructor argument (school)", () => {
        const intSchool = "Georgia Tech";
        const newEm = new Intern("Uzo", 678, "test@abc.com", intSchool);

        expect(newEm.school).toEqual(intSchool);
    });

    it("getRole() should overwrite role as Intern", () => {
        const role = "Intern";
        const newEm = new Intern("Uzo", 678, "test@abc.com", "Georgia Tech");

        expect(newEm.getRole()).toEqual(role);
    })

    it("getSchool() should produce the school name of the intern", () => {
        const intSchool = "Georgia Tech";
        const newEm = new Intern("Uzo", 678, "test@abc.com", intSchool);

        expect(newEm.getSchool()).toEqual(intSchool);
    })
});