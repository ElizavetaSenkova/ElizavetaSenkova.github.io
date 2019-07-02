(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1592,
	height: 1162,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:dir + "arrow.png", id:"arrow"},
		{src:dir + "Bitmap1.png", id:"Bitmap1"},
		{src:dir + "Bitmap2.png", id:"Bitmap2"},
		{src:dir + "Bitmap3.png", id:"Bitmap3"},
		{src:dir + "Bitmap4.png", id:"Bitmap4"},
		{src:dir + "Bitmap5.png", id:"Bitmap5"},
		{src:dir + "Bitmap6.png", id:"Bitmap6"},
		{src:dir + "Bitmap7.png", id:"Bitmap7"},
		{src:dir + "Bitmap8.png", id:"Bitmap8"},
		{src:dir + "Bitmap9.png", id:"Bitmap9"},
		{src:dir + "izo.png", id:"izo"},
		{src:dir + "o.png", id:"o"},
		{src:dir + "transform.png", id:"transform"},
		{src:dir + "tumbler.png", id:"tumbler"},
		{src:dir + "tumbler_on.png", id:"tumbler_on"},
		{src:dir + "vmetr.png", id:"vmetr"},
		{src:dir + "vmetr_up.png", id:"vmetr_up"}
	]
};

// stage content:
(lib.izolenta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tumbler
	this.instance = new lib.tumbler();
	this.instance.setTransform(755.1,545.4,0.6,0.6);

	this.instance_1 = new lib.tumbler_on();
	this.instance_1.setTransform(755.1,545.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},22).to({state:[{t:this.instance}]},187).wait(71));

	// vmetr
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(802.8,510.9,0.6,0.6,0,0,0,95.5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(280));

	// Layer 3
	this.instance_3 = new lib.Symbol4();
	this.instance_3.setTransform(909,558.9,0.6,0.6,0,0,0,6.5,6.5);

	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(641.4,558.1,0.6,0.6,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},24).to({state:[]},187).wait(69));

	// Layer 5
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.setTransform(669.7,545.1,0.6,0.6,0,0,0,18,72.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(29).to({_off:false},0).wait(251));

	// Layer 6
	this.instance_6 = new lib.Bitmap6();
	this.instance_6.setTransform(928.1,556.5,0.586,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(280));

	// izo
	this.instance_7 = new lib.izo();
	this.instance_7.setTransform(493.4,256.8,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(280));

	// Layer 8
	this.instance_8 = new lib.Symbol4();
	this.instance_8.setTransform(967.9,558.9,0.6,0.6,0,0,180,6.5,6.5);

	this.instance_9 = new lib.Symbol4("synched",0);
	this.instance_9.setTransform(700.6,558.1,0.6,0.6,0,0,180,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8}]},24).to({state:[]},187).wait(69));

	// Layer 9
	this.instance_10 = new lib.transform();
	this.instance_10.setTransform(320.1,540,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(280));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(796,581,1600,1162);


// symbols:
(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,6);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,145);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,47);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,12);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,7);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,8);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,68);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,31);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,27);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,68,27);


(lib.izo = function() {
	this.initialize(img.izo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,971,567);


(lib.o = function() {
	this.initialize(img.o);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,13);


(lib.transform = function() {
	this.initialize(img.transform);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1600,217);


(lib.tumbler = function() {
	this.initialize(img.tumbler);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,80);


(lib.tumbler_on = function() {
	this.initialize(img.tumbler_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,80);


(lib.vmetr = function() {
	this.initialize(img.vmetr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,90);


(lib.vmetr_up = function() {
	this.initialize(img.vmetr_up);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,78);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-18,-72.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,-72.5,36,145);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(188,211,226,0.902)","rgba(188,211,226,0.647)","rgba(188,211,226,0)"],[0,0.208,0.918],0,0,0,0,0,25.8).s().p("AizC0QhMhKABhqQgBhpBMhKQBKhMBpABQBqgBBKBMQBMBKgBBpQABBqhMBKQhKBMhqgBQhpABhKhMg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.6,-25.6,51.2,51.2);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,6);


(lib.s = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,47);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(25.6,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.84,scaleY:0.84},3).to({scaleX:1,scaleY:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,51.2);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.o();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6));

	// Layer 4
	this.instance_1 = new lib.Bitmap7();
	this.instance_1.setTransform(-2.2,-8.4);

	this.instance_2 = new lib.Bitmap8();
	this.instance_2.setTransform(-2,-5.4);

	this.instance_3 = new lib.Bitmap9();
	this.instance_3.setTransform(-2.3,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

	// Layer 2
	this.instance_4 = new lib.Symbol5("synched",0);
	this.instance_4.setTransform(6.5,6.5,1,1,0,0,0,25.6,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-19.1,84.9,51.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(16.6,85.7,0.756,0.586,0,0,0,0,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,x:16.4,y:72.5,alpha:1},13).wait(236));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAQIAAgSQgBgpARAKQASALAAAlQAAAVgQAAQgPAAgDgUg");
	this.shape.setTransform(18.6,94.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMAgIgBgJIAAgCIgCgHIAAgSIAAgHIgDgEIAAgIQAAgNANgDQAJgEAHAHIAGAQQACAEAAAKIgBAGIABANQgBANgGAFQAAAFgBACQgDAEgIAAQgKAAgCgKg");
	this.shape_1.setTransform(18.5,94.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAWIgBgcQAAg/AdAWQAGAFAIAZQAGAVABAHQAAAFgMATQgKASgCAAQgTAAgGgfg");
	this.shape_2.setTransform(18.6,94.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgegDQAAgEAGgNIABgEIACgQIgCgEQAAgOAUgLQAUgMgBAdQACALAHARQAFAPABAJQgBAMgBAFQgCAFgMARQgCAEABARQgBAOgPAAQgKAAgShNg");
	this.shape_3.setTransform(18.5,95.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBGQgJgKgBgGQgDgSAAgIIABgMIgGgWQAAgEAFgNIAAgGQgBgFAEgKIgBgDQgBgKAMgJQAIgPAFAAQAagBABAVQABALgFARIAAAFIABABQAFAPABAKIgBAJIABAIQgNBDgPAAQgEAAgLgMg");
	this.shape_4.setTransform(18.5,95.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTBBIgDgGIgDgUIgFgWIABgRIgBgCIACgJQACgUAAgMIADgGQABgEAEgEQAJgPAJgKQARgTABAbQAJAFABAMQAAAGgBAIQACAIABAMQACASgCAQIAAAGIAAACQAAAdgEAOQgHAdgTAAQgKAAgJgag");
	this.shape_5.setTransform(18.5,95.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWBNIgDgVIAAAAQgFgSgFgmQAAgRAIgXIAAgGIADgGIADgHQAEgeASgHQAJgDAHAFQAIAFAAALQAAADgDACIgBABIADADQAHAIABASQAFAYAAAOQgFAigGAXIgBAHQgDAJgDAGQgKAYgMAAQgMAAgHgVg");
	this.shape_6.setTransform(18.7,95.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfA/IgIg0QABgGAEgNIAAgBIABgFIgBgHQAAgIAKgiQAJghACgCQAVgfAOAbQAJATAAAVIAAAGQAJAOgBARIgGBHQgLBFgcAAQgOAAgLg0g");
	this.shape_7.setTransform(18.6,95.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaBwIgIghQgKgqAAgNIAAgMQAAgFACgCIAJgkQAIglAFgOIAAgFQAThNAYAwQAXArAAAoQAAAQgFAMIgCADIgCAbIADAVQgFAVgGAQQgHAbgKAMQgKAOgIAAQgMAAgIgYg");
	this.shape_8.setTransform(18.6,93.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguAvQAAg5ANgqQAGgrAGgVQAKgmAXAGQAMAMAKAgQAIAdAAAUQAFASAAAQQAAAQgGAKIAAACIABAFQAFAKAAAIQgBAfgPAqQgTAvgQAAQgqAAAAhng");
	this.shape_9.setTransform(18.5,92.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoB/IgEgrIAAgQIABgFIgCgDIADgTIACgyQAAgJgBgGQADgWACgIQAEgKAGgmQAFgcALgSQAgg2AQBWIAEATQgCAFAAAHIAGA7IgDBAIgCA4IgHATIgIATIgCAIQgLAegXAAQgVAAgJgrg");
	this.shape_10.setTransform(18.1,91.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKC7QgDgFgNgPQgKgLAAgJIABgEIgFgQIgEgsIAAgPIABgGIgCgDIADgSIACgzQAAgIgBgHQADgVACgIQAEgLAGgmIAEgQIgBgDIgBgFQAAg7AYAAQAKAAAIAJQAIAJAAALIAAAAQAHANAFAbIAEATQgCAFAAAIIAGA6IgDBAIgCA5IgDAHIAAABQgLBHgXAOgAgECpIAAABIADgCIgDABg");
	this.shape_11.setTransform(18.1,91.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYCzIgBgHIgBgCQgKgLAAgJIABgEIgFgQIgEgsIAAgPIABgFIgCgEIADgSIACgzQAAgIgBgGQACgTADgJIgCgGIAAgOQAAgWADgNIAHgtQAGgrAWgBQAYgBAAAeQACAFAAAFIAAAAQAHANAFAbIAEATQgCAFAAAIIAGA6IgDBAIgCA5IgDAHIAAABIgEAWQAAASgGASQgKAfgVAAQgQAAgFgPgAgECsIAAABIADgCIgDABg");
	this.shape_12.setTransform(18.1,91.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWDAIgIgWIABgFQgHgJAAgHIABgFIgFgQIgEgrIAAgQIABgFIgCgDIADgTIACgyQAAgJgBgGQACgTADgIIgCgHIAAgOQAAgWADgMIAHguIADgNIgBgCQAAgyAbAFQAdAGAAA1IAAAGQAFAMADATIAEATQgCAEAAAIIAGA7IgDBAIgCA4IgBACIAAACQAAAMgGAVQgBAOgFAQQgFAPgIAIQgMAcgEAAQgLAAgKgVgAgBDBIAAABIABgBIgBAAIAAAAgAgECqIAAACIADgCIgDAAg");
	this.shape_13.setTransform(18.1,91.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAADbIgBAAQgLAAgKgVIgIgVIABgFQgHgJAAgIIABgEIgFgQIgEgsIAAgPIABgGIgCgDIADgSIACgzQAAgIgBgHQACgSADgJIgCgGIAAgOQAAgWADgNIAHgtIADgNIgBgCIABgQIgBgEQAAgUAJgLQAIgKAJACQAYAFAEAnQACAMAAAQIAAAGQAFANADASIAEATQgCAFAAAIIAGA6IgDBAIgCA5IgBABIAAADQAAAMgGAVQgBAOgFAPIAAABQgBAMgDAMQgIAagQAAIAAAAgAgBDHIAAABIABAAIAAgBIgBAAIAAAAgAgECxIAAABIADgCIgDABg");
	this.shape_14.setTransform(18.1,90.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAADoIgBAAQgLAAgKgVIgIgVIABgGQgHgIAAgIIABgEIgFgQIgEgsIAAgPIABgGIgCgDIADgSIACg1QAAgIgBgFQACgSADgJIgCgGIAAgOQAAgWADgNIAHgtIADgNIgBgCIABgQIgBgEIABgMIgBgEIAAgKQAAgRADgEIACgBQADgWAYAGQAIADAAAGIAAADIAJABIAFAtIgBAIIABADQACAMAAAQIAAAGQAFAMADATIAEATQgCAFAAAIIAGA6IgDBAIgCA5IgBABIAAADQAAAMgGAVQgBAOgFAPIAAABQgBAMgDAMQgIAagQAAIAAAAgAgBDUIAAABIABgBIAAAAIgBAAIAAAAgAgEC+IAAABIADgCIgDABg");
	this.shape_15.setTransform(18.1,89.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgaDRIABgEIACgCIgHgRIABgFQgHgJAAgHIABgEIgFgRIgEgrIAAgQIABgFIgCgDIADgTIACg0QAAgHgBgGQACgTADgIIgCgHIAAgOQAAgWADgMIAHguIADgNIgBgCIABgPIgBgFIABgLIgBgEIAAgLQAAgQADgEIACgCQABgGACgEQACgUAUAFQAYAGAAANQAAALgEAEIAEAiIgBAIIABADQACALAAARIAAAGQAFAMADATIAEATQgCAFAAAHIAGA7IgDBAIgCA4IgBACIAAACQAAAMgGAVIAAAGQgKBbgaAAQgIAAgQgkgAgBDRIAAABIABgBIAAAAIgBAAIAAAAgAgEC6IAAACIADgCIgDAAg");
	this.shape_16.setTransform(18.1,89.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgbDKQgGgaAAgOIAEgzQAAgegFgJQgFgJAAgdIAEgoIgEg7IgBgNIAHgoIACgNIAAgCIAAgQIAAgEIABgMIgBgDIAAgLQAAgOACgFIAAAAIAAgIQAAgLAEgJQAJgRAVAHQAEACAFALIACAEQAHAFAAAHQAAALgEADIAEAjIgBAIIAAACQACALABAQQgGAbAAAbQALAaAHAOIAEAhIgDBCIgDA4IAAACIAAACQAAAMgGAVIAAAGIgFAiQgNAigLAAQgRAAgKglgAgHDiIAAAAIABAAIAAAAIgBAAIAAAAgAgKDLIABACIACgCIgDAAg");
	this.shape_17.setTransform(18.7,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},29).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(239));

	// Layer 2
	this.instance_1 = new lib.s("synched",0);
	this.instance_1.setTransform(18.9,94.7,0.407,0.407,0,0,0,8.3,23.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:8.4,scaleX:1.28,scaleY:1,x:18.1,alpha:0.801},24,cjs.Ease.get(-1)).to({scaleX:1.21,scaleY:1.83,x:17.7,y:88.3,alpha:1},18).wait(243));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,72.4,20.6,44.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.vmetr_up();
	this.instance.setTransform(8.5,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(260));

	// Layer 3
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(96.8,79.8,1,1,-2,0,0,36,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({startPosition:0},0).to({regX:33.1,scaleX:1,scaleY:1,rotation:50.9,guide:{path:[82.1,79.7,84.8,75.2,90.2,73.6]}},40).to({regX:33,scaleX:1,scaleY:1,rotation:86.7,guide:{path:[90.1,73.6,92.7,72.9,95.8,72.8,96.5,72.8,97.1,72.8]}},27).to({scaleX:1,scaleY:1,rotation:122.6,guide:{path:[97.1,72.8,101,73.1,103.8,74.5]}},27).to({scaleX:1,scaleY:1,rotation:138.4,guide:{path:[103.8,74.4,105.2,75.1,106.5,76]}},12).wait(84).to({startPosition:0},0).to({scaleX:1,scaleY:1,rotation:-2,guide:{path:[106.5,76,102.5,72.9,95.8,72.7,86,73,82.1,79.7]}},15).wait(31));

	// Layer 1
	this.instance_2 = new lib.vmetr();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(260));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;