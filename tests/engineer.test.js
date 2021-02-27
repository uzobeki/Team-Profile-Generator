const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    it("should accept constructor argument (github)", () => {
        const git = "uzobeki";
        const newEm = new Engineer("Uzo", 404, "test@abc.com", git);

        expect(newEm.github).toEqual(git);
    });

    it("should overwrite role as 'Engineer' ", () => {
        const role = 'Engineer';
        const newEm = new Engineer("Uzo", 404, "test@abc.com", "uzobeki")

        expect(newEm.getRole()).toEqual(role);
    })

    it("getGithub() should produce the github username of a new employee", () => {
        const git = "uzobeki";
        const newEm = new Engineer("Uzo", 404, "test@abc.com", git);

        expect(newEm.getGithub()).toEqual(git);
    })

});