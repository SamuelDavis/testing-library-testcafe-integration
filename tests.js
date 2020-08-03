import {screen} from "@testing-library/testcafe";

fixture("Example Fixture");

test("Example Test", async (testController) => {
    await testController.navigateTo("https://google.com");
    const el = screen.findAllByText("I'm Feeling Lucky");
    await testController.expect(el.exists).ok();
});
