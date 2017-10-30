import * as angular from "angular";

import { CanvasComponent } from "./components/canvas/canvas.component";
import { Bubble } from "./components/bubble/bubble.component";

angular.module("bubble.canvas", [])
    .component("canvasComponent",  new CanvasComponent())
    .component("bubble",  new Bubble());
;