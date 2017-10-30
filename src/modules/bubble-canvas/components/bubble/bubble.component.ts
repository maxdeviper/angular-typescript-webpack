
export class Bubble implements ng.IComponentOptions {
    public bindings: any = {
        onBubbleClick: "&"
    };
    public transclude: boolean = true;
    public controller: any = BubbleController;
    public controllerAs: "vm";
    public template: string =
        `<div class="bubble-body">
            <ng-transclude></ng-transclude>'
        </div>`;
}
export interface jQueryElement extends ng.IRootElementService {
    movingBubble(option: any);
}
export class BubbleController implements ng.IComponentController {
    public static $inject = ["$element"];
    public onBubbleClick: (event: any) => {};
    constructor(private $element: jQueryElement) {}
    public $onInit(): void{
        this.$element.movingBubble( { minDuration : 4000} );
    }
    public onClick($event: any): void{
        this.onBubbleClick({event: $event});
    }
}