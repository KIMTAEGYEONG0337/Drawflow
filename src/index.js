import Drawflow from "drawflow";
import "./styles.css";
import "drawflow/dist/drawflow.min.css";

const id = document.getElementById("drawflow");
const editor = new Drawflow(id);
editor.draggable_inputs = false;
editor.start();

var html = `<div></div>`;
var data = {};

editor.addNode("github", 0, 1, 150, 300, "github", data, html);
editor.addNode("github", 1, 1, 300, 200, "github", data, html);
