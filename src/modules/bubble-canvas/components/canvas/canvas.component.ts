import * as $ from "jquery";
import "../../styles/bubble-canvas.scss";

export class CanvasComponent implements ng.IComponentOptions {
    public bindings: any = {
        bubbles: "="
    };
    public controller: any = CanvasController;
    public controllerAs: "vm";
    public template: string =
        `<div id="bubble-canvas">
           <div class="bubble bg-yellow" style=""><span>Women Fashion</span></div>
           <div class="bubble bg-green" style=""><span>Children's Fashion</span></div>
           <div class="bubble bg-orange" style=""><span>All Fashion</span></div>
           <div class="bubble bg-red" style=""><span>Men Fashion</span></div>
        </div>`;
}
export class CanvasController implements ng.IComponentController{
    constructor() {}

    public $onInit(): void{
        (<any>$(".bubble")).movingBubble({minDuration: 4000}).click(function(){
            (<any>$(this)).movingBubble("toggle");
        });
    }
    public onClick($event): void {
        (<any>$(this)).movingBubble("toggle");
    }
}