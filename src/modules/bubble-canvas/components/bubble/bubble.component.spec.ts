import "../../index";
import {} from "jasmine";
import * as angular from "angular";
import "angular-mocks";
import {ComponentTest} from "../../../util/ComponentTest";
import { BubbleController } from "./bubble.component";
import "phantomjs-polyfill";

describe("Component StarComponent", () => {
    var directiveTest: ComponentTest<BubbleController>;
    beforeEach(angular.mock.module("bubble.canvas"));
    beforeEach(() => {
        directiveTest = new ComponentTest<BubbleController>(
            `<bubble on-bubble-click="vm.onClick()">
                <span>Mens Fashion</span>
            </bubble>`,
            "star"
        );
    });
    describe("the passed callback should be available", () => {
        it("it should set the default starred value to false", () => {
            var attributes: any = { onBubbleClick: jasmine.createSpy("onClick") };
            var vm: BubbleController = directiveTest.createComponent(attributes);
            expect(vm.onBubbleClick).toBeDefined();
        });
    });
});