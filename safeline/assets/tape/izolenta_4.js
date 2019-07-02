(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1600,
	height: 1162,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:dir + "balon_off.png", id:"balon_off"},
		{src:dir + "balon_on.png", id:"balon_on"},
		{src:dir + "fire_1.png", id:"fire_1"},
		{src:dir + "fire_2.png", id:"fire_2"},
		{src:dir + "fire_on_blue_1.png", id:"fire_on_blue_1"},
		{src:dir + "fire_on_blue_2.png", id:"fire_on_blue_2"},
		{src:dir + "izo.png", id:"izo"},
		{src:dir + "tumbler.png", id:"tumbler"},
		{src:dir + "tumbler_on.png", id:"tumbler_on"}
	]
};

// stage content:
(lib.izolenta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tumbler
	this.instance = new lib.tumbler();
	this.instance.setTransform(768.7,564.8,0.6,0.6);

	this.instance_1 = new lib.tumbler_on();
	this.instance_1.setTransform(768.7,564.8,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance}]},115).wait(121));

	// Layer 5
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(741.8,659.2,0.6,0.6,0,0,180,75.5,55.1);

	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.setTransform(890.6,659.2,0.6,0.6,0,0,0,75.5,55.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(250));

	// Layer 3 copy
	this.instance_4 = new lib.Symbol3();
	this.instance_4.setTransform(682.7,629.1,0.6,0.519,0,0,180,26,21);
	this.instance_4.alpha = 0.199;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({regX:25.9,regY:20.9,scaleX:0.4,scaleY:0.8,skewX:6.6,skewY:177.3,x:683.1,y:624.7,alpha:1},45).wait(191));

	// Layer 3
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(948.7,630.7,0.6,0.6,0,0,0,26,21);
	this.instance_5.alpha = 0.199;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(14).to({_off:false},0).to({rotation:-4.3,x:950.5,y:627.3,alpha:1},45,cjs.Ease.get(0.01)).wait(70).to({y:627.9},0).to({rotation:0,x:948.7,y:631.3,alpha:0.012},31).wait(90));

	// Layer 6
	this.instance_6 = new lib.Symbol4();
	this.instance_6.setTransform(682.8,608.4,0.882,0.652,0,0,0,11.8,42.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({scaleX:0.6,scaleY:0.6,alpha:1},60,cjs.Ease.get(-1)).wait(176));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D3D3D").s().p("AhnHbIAAu1IDQAAIAAO1g");
	this.shape.setTransform(682.5,588.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3D3D3D","#3D3D3D","#3D3D3D"],[0,0.635,1],0,-41.3,0,38.6).s().p("AAdHbIgpAAIg3AAIgkAAIAAhHIAAjHIAAlRIAAlWIDQAAIAAE7IAADiIAAAIIAAApIAAAlIAAAcIAAAXIAAAOIAAAsIAABLIAAB4IAAASIhMAAg");
	this.shape_1.setTransform(682.5,588.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#3D3D3D","#3D3D3D","#3D3D3D"],[0,0.635,1],0,-41.3,0,38.6).s().p("AAdHbIgpAAIg3AAIgkAAIAAhHIAAjHIAAlRIAAlWIDQAAIAAE7IAADiIAAAIIAAApIAAAlIAAAcIAAAXIAAAOIAAArIAABMIAAB3IAAATIhMAAg");
	this.shape_2.setTransform(682.5,588.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#3D3D3D","#3D3D3D","#3D3D3D"],[0,0.635,1],0,-41.3,0,38.6).s().p("AgMHbIg3AAIgkAAIAAhHIAAjHIAAlRIAAlWIDQAAIAAE7IAADiIAAAIIAAAoIAAAmIAAAcIAAAXIAAANIAAAsIAABLIAAB4IAAATIhMAAIgpAAg");
	this.shape_3.setTransform(682.5,588.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#3D3D3D","#3D3D3D","#3D3D3D"],[0,0.635,1],0,-41.3,0,38.6).s().p("AgMHbIg3AAIgkAAIAAhHIAAjIIAAlQIAAlWIDQAAIAAE7IAADhIAAAJIgBAoIAAAlIABAdIAAAWIAAAOIAAAsIAABLIgBB4IAAASIhLABIgpAAg");
	this.shape_4.setTransform(682.5,588.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#3D3D3D","#3D3E3E","#3D3E3E"],[0,0.635,1],0,-41.3,0,38.6).s().p("AhCHbIglgBIAAhHIAAjHIAAlQIAAlWIDQAAIAAE7IAADhIAAAIIgBApIAAAlIAAAcIAAAWIAAAPIABAsIAABLIgBB4IAAASIhLABIgpAAIg2AAg");
	this.shape_5.setTransform(682.5,588.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#3D3D3D","#3D3E3E","#3D3E3E"],[0,0.635,1],0,-41.3,0,38.6).s().p("AhCHbIgkgBIAAhHQAAhkgBhjIAAlQIAAlWIDQAAIAAE7IgBDhIAAAIIAAApIAAAlIAAAcIAAAWIAAAPIAAArIAABLIAAB3IAAAUIhLABIgpAAIg2AAg");
	this.shape_6.setTransform(682.5,588.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#3D3D3D","#3D3E3E","#3D3E3E"],[0,0.635,1],0,-41.2,0,38.7).s().p("AhCHbIgkgBIAAhHIAAjHIgBlQIAAlWIDQAAIAAE7IgBDhIAAAIIAAAoIAAAlIAAAdIAAAWIAAAPIAAArIAABLIAAB4IAAASQgmACglgBIgpABIg2AAg");
	this.shape_7.setTransform(682.5,588.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#3D3D3D","#3D3E3E","#3D3E3E"],[0,0.635,1],0,-41.2,0,38.7).s().p("AhCHbIgkgBIAAhIIAAjGIgBlQIAAlWIDQAAIAAE7IgBDhIAAAIIAAAoIgBAlIABAdIAAAWIAAAOIAAArIAABMIAAB3IgBATQglABglAAIgpABIg2AAg");
	this.shape_8.setTransform(682.5,588.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#3D3D3D","#3D3F3F","#3D3F3F"],[0,0.635,1],0,-41.2,0,38.7).s().p("AhCHaIgkgBIABhHIgBjGIgBlQIAAlWIDPAAIABE7IgBDgIAAAJIgBAoIAAAkIAAAdIABAWIAAAPIAAArIAABLIgBB3IAAATQglACglAAIgpAAIgbABIgbgBg");
	this.shape_9.setTransform(682.5,588.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#3D3D3D","#3D3F3F","#3D3F3F"],[0,0.635,1],0,-41.2,0,38.7).s().p("AgLHaIg3AAIgjgBIAAhHQAAhjgBhkIgBlPIAAlVIDPAAIABE5IgBDhIAAAJIgBAnQgBATABASIAAAdIAAAWIAAAOIABArIAABMIgBB3IAAATQglACglAAIgoAAg");
	this.shape_10.setTransform(682.5,588.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#3D3D3D","#3D3F3F","#3D3F3F"],[0,0.635,1],0,-41.2,0,38.7).s().p("AhCHaIgjgBIAAhHQAAhjAAhkIgClQIAAlUIDPAAIABE5IgCDhIAAAIIgBAoIAAAlIABAcIAAAXIAAAOIAAArIAABLIAAB4IgBASQglADgkAAIgoAAIg3AAg");
	this.shape_11.setTransform(682.5,588.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#3D3D3D","#3D4040","#3D4040"],[0,0.635,1],0,-41.2,0,38.7).s().p("AhCHaIgjgBIAAhIQABhigBhkIgClQIAAlUIDPAAIABE5IgCDhIAAAHIgBApIAAAkIAAAcIABAXIAAAOIAAArIAABMIgBB3IAAASQglAEgkAAIgoAAIg3AAg");
	this.shape_12.setTransform(682.5,588.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#3D3D3D","#3C4040","#3C4040"],[0,0.635,1],0,-41.2,0,38.7).s().p("AhCHaIgjgCIABhHIgBjGIgClPIAAlVIDPAAIABE5IgCDgIAAAIIgBAoIAAAlIAAAcIABAWIAAAPIAAArIAABLIgBB3IAAATQgkAEglAAIgoAAIgbAAIgcAAg");
	this.shape_13.setTransform(682.5,588.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#3D3D3D","#3C4040","#3C4040"],[0,0.635,1],0,-41.2,0,38.7).s().p("AhCHaIgigDIAAhGQABhjgChkIgClPIAAlUIDPAAIABAPIAAEqIgDDfIAAAJIAAAnIgBAlIABAcIAAAXIAAAOIABArIAABMIgBB2IgBATQgkAEgjAAIgpABIg3AAg");
	this.shape_14.setTransform(682.5,588.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#3D3D3D","#3C4141","#3C4141"],[0,0.635,1],0,-41.2,0,38.7).s().p("AhBHaIgjgDIABhHQAAhigChkIgClPIAAlUIDPAAIABAPIAAEpIgDDgIAAAIIgBAoIgBAlIACAcIAAAWIAAAOIAAArIAABMIgBB2IAAATQglAFgiAAIgpABIgbAAIgbAAg");
	this.shape_15.setTransform(682.5,588.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#3D3D3D","#3C4141","#3C4141"],[0,0.635,1],0,-41.2,0,38.7).s().p("AhBHZQgRAAgRgDIAAhHQABhigChkIgDlOIAAlUIDOAAIACAPIAAEpIgDDfIAAAJIgBAnQgCATABASIABAcIABAWIAAAOIAAArIAABMIgBB3IgBASQgkAGgiAAIgpABIgSAAIgkgBg");
	this.shape_16.setTransform(682.5,588.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#3D3D3D","#3C4242","#3C4242"],[0,0.635,1],0,-41.1,0,38.8).s().p("AhBHaIgigEIAAhHQABhigChjIgDlPIAAlUIDOAAIACAPIAAEpQgDB1AABqIAAAIIgCAoQgBASAAATIACAcIABAWIAAAOIAAArIAABLIgCB3IgBASQgjAHgiAAIgpABIgaAAIgcAAg");
	this.shape_17.setTransform(682.5,588.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#3D3D3D","#3C4242","#3C4242"],[0,0.635,1],0,-41.1,0,38.8).s().p("AhBHZQgRgBgRgDIABhGQABhigChkIgElOIAAlUIDOAAIACAPIAAEpIgEDeIAAAJIgCAnIgBAlIACAcIABAWIAAAOIAAArIAABLIgCB3IAAASQgjAIgiAAQgUgBgVACIg2gBg");
	this.shape_18.setTransform(682.5,588.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#3D3D3D","#3C4343","#3C4343"],[0,0.635,1],0,-41.1,0,38.8).s().p("AhBHZQgRgBgQgDIABhHQABhhgDhlIgElOIAAlTIDOAAIACAOIAAEpIgEDfIAAAIIgDAnIAAAlIABAcIACAWIAAAOIAAArIAABLIgCB3IgBASQgiAIgiAAIgpABIgaABIgcgBg");
	this.shape_19.setTransform(682.5,588.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#3D3D3D","#3C4343","#3C4343"],[0,0.635,1],0,-41.1,0,38.8).s().p("AhBHZQgRgCgPgDIAAhHQABhhgDhkIgElOIAAlSIDOAAIACANIAAEpQgDB2gBBoIgBAJIgCAmIgBAlIACAcIABAWIAAAOIABArIAABMIgDB2IAAATQgiAIgiAAIgpACIg2gBg");
	this.shape_20.setTransform(682.5,588.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#3D3D3D","#3C4444","#3C4444"],[0,0.635,1],0,-41.1,0,38.8).s().p("AhBHZQgQgCgQgDIABhHQAChhgEhkIgFlOIAAlSIDNAAIADAOIAAEoIgFDeIAAAIIgDAnQgBATAAASIACAbIABAWIAAAOIABAsIAABLIgDB2IAAASQgiAKghAAQgTAAgWABIgRAAIglAAg");
	this.shape_21.setTransform(682.5,588.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#3D3D3D","#3C4545","#3C4545"],[0,0.635,1],0,-41.1,0,38.8).s().p("AhBHZQgPgCgQgEIABhHQABhhgEhkIgFlNIAAlSIDNAAIADANIAAEoQgEB3gCBnIAAAIIgCAnQgCATABARIABAcIACAWIAAAPIAAArIAABKIgCB3IAAASQgiALghgBIgoACIgaAAIgdAAg");
	this.shape_22.setTransform(682.5,588.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#3D3D3D","#3B4545","#3B4545"],[0,0.635,1],0,-41.1,0,38.8).s().p("AhBHYQgPgBgPgEIABhHQABhhgEhkIgGlNIAAlSIDNAAIADAOIAAEnQgEB3gCBmIAAAIIgDAnQgCATABARIACAdIABAVIAAAPIABArQABAmgBAlIgDB2IAAASQgiALgfAAQgTAAgWACIg3gBg");
	this.shape_23.setTransform(682.5,588.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#3D3D3D","#3B4646","#3B4646"],[0,0.635,1],0,-41,0,38.9).s().p("AhBHYQgPgCgOgEIAAhHQABhggDhlQgEicgDiwIAAlSIDNAAIADAOIAAEnQgFB3gCBlIAAAJIgDAnQgBASABASIACAbIABAWIAAAPIAAArIAABKIgCB3IgBASQghAMgfAAQgTAAgWACIgRAAIgmgBg");
	this.shape_24.setTransform(682.5,588.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#3D3D3D","#3B4747","#3B4747"],[0,0.635,1],0,-41,0,38.9).s().p("AhAHYQgQgCgOgFIABhHQABhggDhkQgFicgDiwIAAlSIDNAAIADANIAAEnQgFB4gCBkIAAAJIgDAnQgCASABASIACAbQACALgBALIAAAOIABArIAABLIgDB2IAAASQghAOgfgBQgSAAgXADIg2gBg");
	this.shape_25.setTransform(682.5,588.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#3D3D3D","#3B4747","#3B4747"],[0,0.635,1],0,-41,0,38.9).s().p("AhAHYQgPgCgOgGIABhGQABhggEhlQgFiagDiyIAAlQIDNAAIADAMIAAEnQgFB4gDBkIAAAIIgDAnQgCASABASIACAbIACAWIAAAOIAAArQABAmgBAlQAAA1gCBBIgBASQggAOgfAAQgSAAgXACIgZAAIgdAAg");
	this.shape_26.setTransform(682.5,588.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#3D3D3D","#3B4848","#3B4848"],[0,0.635,1],0,-41,0,38.9).s().p("AhAHYQgPgDgNgGIABhGQABhggEhkQgGiagDiyIAAlQIDMAAIAEAMIAAEmQgGB5gCBjIAAAIIgDAnQgDATABARIADAbQABALAAALIABAOIAAArQABAngBAkQAAA1gDBBIgBASQgfAPgfAAQgSAAgWACIgRAAIgmAAg");
	this.shape_27.setTransform(682.5,588.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#3D3D3D","#3B4949","#3B4949"],[0,0.635,1],0,-41,0,38.9).s().p("AhAHXQgOgCgOgHIABhGQADhfgGhlIgJlLIAAlQIDMAAIAEAMIAAEmQgGB5gCBiIgBAIQgBATgCAUQgDASABASIADAbQACALAAALIAAAOIABArIAABKQgBA1gDBBIAAASQggARgdgBQgSAAgXADIgQAAIgngBg");
	this.shape_28.setTransform(682.5,588.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#3D3D3D","#3B4A4A","#3B4A4A"],[0,0.635,1],0,-40.9,0,39).s().p("Ag/HXQgOgDgOgGIABhHQADhfgGhkQgGiYgEizIAAlQIDMAAIAEAMIAAEmQgGB6gDBhIAAAIIgEAmQgDATABARIADAbQACALAAALIAAAOIABArQABAmgBAkQgBA0gDBCIAAASQgfASgdgBQgRAAgYADIgTAAIgjgBg");
	this.shape_29.setTransform(682.5,588.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#3D3D3D","#3A4A4A","#3A4A4A"],[0,0.635,1],0,-40.9,0,39).s().p("Ag/HXQgOgDgNgHIABhHQAChegFhlQgHiWgEi1IAAlPIDLAAIAFAMIAAElQgHB7gDBfIAAAIIgEAnQgDASABASQABANADAOQABAKABALIAAAOIAAArQABAngBAkQgBAzgDBCIgBASQgeATgcAAQgRgBgYADIgTABIgjgBg");
	this.shape_30.setTransform(682.5,588.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#3D3D3D","#3A4B4B","#3A4B4B"],[0,0.635,1],0,-40.9,0,39).s().p("Ag/HXQgNgEgOgHIAChHQADhegHhkQgGiVgFi2IAAlOIDLAAIAFALIAAElQgHB7gDBfIAAAIIgFAmQgDATABARIAEAbQACAKABALIAAAOIAAArQABAngBAkQgBAygEBDIgBASQgdAUgcAAQgRgBgYADIgSAAIgkAAg");
	this.shape_31.setTransform(682.5,588.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#3D3D3D","#3A4C4C","#3A4C4C"],[0,0.635,1],0,-40.9,0,39).s().p("Ag/HWQgNgDgNgIIAChHQADhegHhkQgHiUgFi2IAAlOIDKAAIAGALIAAEkQgIB8gCBdIgBAJIgFAmQgEASACARIAEAbQACALABAKIAAAPIABArQABAmgBAkIgGB1IgBASQgdAVgbAAQgQAAgZADIgLAAIgrgBg");
	this.shape_32.setTransform(682.5,588.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#3D3D3D","#3A4D4D","#3A4D4D"],[0,0.635,1],0,-40.9,0,39).s().p("Ag/HWQgNgEgMgIQAAghACgmQADhdgIhlQgGiTgGi3IAAlNIDKAAIAGAKIAAElQgIB8gDBcIAAAJIgGAlQgDATABARIAEAaQADALAAALIAAAOIABArQABAngBAjQgBAygFBDIAAASQgcAXgcgBQgPAAgZADIgUABIgjgBg");
	this.shape_33.setTransform(682.5,588.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#3D3D3D","#3A4E4E","#3A4E4E"],[0,0.635,1],0,-40.8,0,39.1).s().p("Ag+HWQgNgEgMgJQAAggACgmQADhegIhkQgHiSgGi4IAAlNIDKAAIAGALIAAEjQgJB9gDBcIAAAIQgCASgEATQgEATACARQABAOADAMQAEALAAALIAAAOIABArQAAAngBAjQgBAxgFBEIAAASQgdAYgagBQgQAAgYAEIgPAAIgngBg");
	this.shape_34.setTransform(682.5,588.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#3D3D3D","#3A4F4F","#3A4F4F"],[0,0.635,1],0,-40.8,0,39.1).s().p("Ag+HVQgNgEgLgJIAChHQADhdgIhkQgIiQgGi5IAAlNIDJAAIAHAKIAAEkQgJB9gDBaIgBAIIgFAmQgEATABAQQABAOADAMQADALABALIAAAOIABArQABAngBAjQgCAwgEBFIgBASQgbAZgbgBQgPAAgZAEIgPABIgngCg");
	this.shape_35.setTransform(682.5,588.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#3D3D3D","#395050","#395050"],[0,0.635,1],0,-40.8,0,39.1).s().p("Ag+HVQgMgEgLgKQAAggACgnQADhcgIhlQgJiPgGi5IAAlMIDJAAIAHAJIAAEjQgKB+gDBZIAAAJQgDARgDAUQgFATACAQIAEAaQAEALAAALIAAAOIABArQABAmgBAkQgCAwgEBFIgBARQgbAbgZgBQgPAAgZAEIgPAAIgogBg");
	this.shape_36.setTransform(682.5,588);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#3D3D3D","#395151","#395151"],[0,0.635,1],0,-40.8,0,39.1).s().p("Ag9HVQgNgFgKgLQAAgfACgnQAEhcgJhlQgKiNgGi7IAAlLIDJAAIAHAJIAAEiQgKB/gEBYIAAAIQgCASgFATQgEATACARQACANADANQADAKAAALIAAAOIACArQABAngBAiQgCAwgFBFIgBASQgbAcgYAAQgPgBgZAFIgPAAIgngBg");
	this.shape_37.setTransform(682.5,588);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#3D3D3D","#395252","#395252"],[0,0.635,1],0,-40.7,0,39.2).s().p("Ag9HVQgMgFgKgLQAAggACgmQAEhcgJhlQgKiMgHi8IAAlLIDIAAIAIAJIAAEiQgKB/gFBXIAAAIQgCASgEATQgGATACAQIAGAaQADALAAALIAAAOIACArQABAmgCAjQgBAvgFBGIgBARQgaAegYgBQgOAAgaAFIgOAAIgogBg");
	this.shape_38.setTransform(682.5,588);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#3D3D3D","#395353","#395353"],[0,0.635,1],0,-40.7,0,39.2).s().p("Ag9HUQgLgFgKgMQAAgfACgnQAEhbgJhlQgLiLgHi8IAAlLIDIAAIAIAJIAAEhQgLCAgEBWIgBAIQgCARgFAUQgEATABAPQACAOAEANQAEAKgBALIAAAOIACArQABAngBAiQgCAugFBHIgCARQgYAfgXAAQgOgBgaAFIgUABIgjgCg");
	this.shape_39.setTransform(682.5,588);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#3D3D3D","#395454","#395454"],[0,0.635,1],0,-40.7,0,39.2).s().p("Ag8HUQgMgFgJgNQAAgfACgnQAFhbgLhlQgLiJgHi9IAAlKIDIAAIAIAIIAAEhQgMCBgEBUIgBAIQgCARgFAUQgFASACAQQACAOAEAMQAEAKAAALIAAAOIABAsQABAmgBAiQgBAugHBHIgBARQgYAhgWgBQgNAAgbAFIgQAAIgmgBg");
	this.shape_40.setTransform(682.5,587.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#3D3D3D","#385555","#385555"],[0,0.635,1],0,-40.7,0,39.2).s().p("Ag8HTQgLgFgJgNQAAgfADgnQAEhbgLhlQgLiHgIi/IAAlJIDHAAIAJAIIAAEgQgMCCgFBSIAAAJQgDARgFATQgGATADAQQACANAEAMQAEAKAAALIAAAOIABArQACAngCAiQgBAtgHBIIgBARQgXAigWgBQgNAAgaAFIgRABIgmgCg");
	this.shape_41.setTransform(682.5,587.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#3D3D3D","#385656","#385656"],[0,0.635,1],0,-40.6,0,39.3).s().p("Ag7HTQgMgGgIgNQABgfACgnQAFhagMhmQgLiFgJjAIAAlJIDHAAIAJAIIAAEgQgNCCgFBRIAAAIQgDASgFATQgGASADAQQACAOAEAMQAEAKABALIAAAOIABArQACAngCAiIgJB0IgBARQgXAkgVgBQgNAAgaAFIgRABIglgCg");
	this.shape_42.setTransform(682.5,587.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#3D3D3D","#385757","#385757"],[0,0.635,1],0,-40.6,0,39.3).s().p("Ag7HTQgLgHgHgOQAAgeACgoQAFhZgMhmQgMiEgJjBIAAlIIDHAAIAJAHIAAEgQgOCDgEBQIgBAIQgDARgGATQgFATACAPQADAOAEALQAEALABAKIAAAPIABArQACAngCAhQgCAsgHBIIgBASQgWAlgVgBQgMAAgbAGIgQABIgmgCg");
	this.shape_43.setTransform(682.5,587.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#3D3D3D","#385959","#385959"],[0,0.635,1],0,-40.6,0,39.3).s().p("Ag7HSQgKgGgHgPQAAgeACgoQAFhZgMhlQgNiDgJjCIAAlHIDGAAIAKAGIAAEfQgOCEgFBPIgBAIQgDARgFATQgHASADAQQACANAEAMQAFAKABALIAAAOIACArQABAngCAhQgCArgHBKIgBARQgWAngTgBQgMgBgbAGIgSABIglgCg");
	this.shape_44.setTransform(682.5,587.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#3D3D3D","#375A5A","#375A5A"],[0,0.635,1],0,-40.5,0,39.4).s().p("Ag6HSQgKgHgHgPQAAgeADgoQAFhYgNhmQgNiBgKjDIAAlHIDGAAIAKAGIAAEfQgOCEgGBOIAAAHQgDARgHATQgGATACAPQADAOAEALQAFAKABALIAAAOIACAsQABAmgBAiQgDAqgHBJIgBASQgVAogTAAQgMgBgbAGIgRABIglgCg");
	this.shape_45.setTransform(682.5,587.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#3D3D3D","#375B5B","#375B5B"],[0,0.635,1],0,-40.5,0,39.4).s().p("Ag6HSQgJgIgHgQQAAgeADgnQAFhZgNhlQgOh/gKjFIAAlGIDGAAIAKAGIAAEeQgPCFgGBMIAAAIQgEAQgGAUQgHASADAPQADAOAEALQAFAKABALIAAAOIACArQABAngBAhQgDAqgHBKIgCARQgUAqgSAAQgLgBgcAHIgQABIgmgCg");
	this.shape_46.setTransform(682.5,587.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#3D3D3D","#375C5C","#375C5C"],[0,0.635,1],0,-40.5,0,39.4).s().p("Ag6HRQgJgHgGgRQABgdACgoQAGhYgOhmQgPh9gKjGIAAlFIDFAAIALAFIAAEdQgQCGgFBLIgBAIQgEAQgHATQgGATACAPQADANAGAMQAEAJABALIAAAOIACAsQABAngBAhQgDAogIBLIgCARQgTAsgQgBQgLAAgdAHIgNAAQgPAAgagCg");
	this.shape_47.setTransform(682.5,587.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#3D3D3D","#375E5E","#375E5E"],[0,0.635,1],0,-40.5,0,39.4).s().p("Ag5HRQgJgIgGgRQAAgdAEgpQAFhYgOhlQgPh8gLjHIAAlEIDFAAIALAFIAAEcQgQCHgGBJIgBAIQgDARgIASQgHATADAPQADAOAFALQAGAKAAAKIAAAOIACArQACAngCAhQgDAogIBLIgCARQgTAugPgBQgLAAgcAIIgNAAIgpgCg");
	this.shape_48.setTransform(682.5,587.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#3D3D3D","#365F5F","#365F5F"],[0,0.635,1],0,-40.4,0,39.5).s().p("Ag5HQQgIgIgFgSQAAgdADgoQAHhXgQhmQgPh5gMjJIAAlEIDEAAIAMAFIAAEbQgRCJgHBHIAAAIQgDAQgIATQgIASAEAPQADANAFALQAFAKABALIAAAOIACArQACAngCAhQgDAngJBMIgBARQgSAwgPgBQgJgBgeAIIgOABQgPAAgZgDg");
	this.shape_49.setTransform(682.5,587.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#3D3D3D","#366060","#366060"],[0,0.635,1],0,-40.4,0,39.5).s().p("Ag5HQQgHgIgFgTQABgdADgpQAHhWgRhmQgQh3gMjKIAAlDIDEAAIAMAEIAAEbQgRCJgIBFIgBAIQgCAQgJATQgHATADAOQADAOAGAKQAGALAAAKIAAAOIACArQACAngCAhQgDAmgJBNIgBAQQgRAygOAAQgKgBgdAIIgOAAQgPAAgagCg");
	this.shape_50.setTransform(682.5,587.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#3D3D3D","#366262","#366262"],[0,0.635,1],0,-40.3,0,39.6).s().p("Ag4HQQgIgJgDgTQgBgdAEgpQAHhWgRhmQgQh1gNjLIAAlDIDEAAIAMAEIAAEaQgSCKgIBEIAAAIQgEAQgIATQgIASADAPQAEANAFAKQAGALABAKIAAAOIACArQACAngCAhQgCAlgKBNIgCARQgRA0gLgBQgKgBgeAIIgPABQgPAAgYgCg");
	this.shape_51.setTransform(682.5,587.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#3D3D3D","#366363","#366363"],[0,0.635,1],0,-40.3,0,39.6).s().p("Ag4HPQgGgJgEgUQAAgdADgpQAHhVgRhmQgRh0gNjMIAAlCIDDAAIANADIAAEaQgTCLgHBCIgBAIQgEAQgIATQgJASADAOQAEAOAGAKQAHAKAAALIAAAOIACArQACAngCAgQgDAkgJBOIgCARQgQA2gLgBQgJgBgfAJIgNABQgPAAgagDg");
	this.shape_52.setTransform(682.5,587.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#3D3D3D","#356464","#356464"],[0,0.635,1],0,-40.3,0,39.6).s().p("Ag4HPQgGgKgDgVQABgcADgpQAIhVgThmQgRhygOjNIAAlBIDDAAIANACIAAEZQgTCMgIBBIgBAIQgEAPgIATQgKATAEAOQAEANAGAKQAGAKABALIAAANIACAsQACAngCAgQgDAjgKBPIgCARQgPA3gKAAQgIgBgfAIIgOABQgPAAgagCg");
	this.shape_53.setTransform(682.5,587.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#3D3D3D","#356666","#356666"],[0,0.635,1],0,-40.2,0,39.7).s().p("Ag4HOQgFgJgDgWQABgcAEgpQAHhVgShmQgThvgOjQIAAlAIDCAAIAOACIAAEZIgcDLIgBAIQgEAQgJASQgKATAEAOQAEANAHAKQAGAKABAKIAAAOIACAsQACAngCAfIgOBzIgCAQQgOA6gIgBQgJgBgfAJIgLABQgPAAgdgDg");
	this.shape_54.setTransform(682.5,587.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#3D3D3D","#356767","#356767"],[0,0.635,1],0,-40.2,0,39.7).s().p("Ag3HOQgFgKgCgXQAAgbAFgqQAHhTgThnQgThtgPjRIAAk/IDBAAIAPABIAAEYQgVCOgIA9IgBAIQgEAPgKATQgJASAEAOQADANAIAKQAGAKABAKIAAAOIADArQACAogDAfQgDAigLBQIgCAQQgNA8gIAAQgIgBggAJIgNAAQgPAAgagCg");
	this.shape_55.setTransform(682.5,587.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#3D3D3D","#356969","#356969"],[0,0.635,1],0,-40.2,0,39.7).s().p("Ag3HNQgFgKgBgXQABgcAEgqQAIhTgThmQgVhrgPjTIAAk+IDBAAIAPABIAAEXIgeDKIgBAIQgFAPgJASQgKATAEAOQAEAMAHAKQAIAKgBAKIABAPIADArQACAngDAfQgDAhgMBRIgBAQQgMA+gIgBQgGAAgiAJIgLABQgPAAgcgDg");
	this.shape_56.setTransform(682.5,587.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#3D3D3D","#346A6A","#346A6A"],[0,0.635,1],0,-40.1,0,39.8).s().p("Ag2HNQgFgLAAgYQABgbADgqQAJhSgUhnQgWhpgPjUIAAk+IDQABIAAEWIgfDJIgBAIQgEAPgLATQgKASAEANQAEAOAIAJQAIAKgBAKIABAOIADArQACAogDAfIgPBxIgCARQgMBAgFgBQgHgBghAKIgLABQgPAAgcgDg");
	this.shape_57.setTransform(682.5,587.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#3D3D3D","#346C6C","#346C6C"],[0,0.635,1],0,-40.1,0,39.8).s().p("Ag2HMQgHgXAIhSQAJhRgVhnQgWhngQjWIAAk8IDQAAIAAEVIggDJIgCAHQgEAPgKATQgLASAEANQAFANAHAKQAIAKAAAKIAAAOIAEArQACAogDAeIgPByQgMBSgGgBQgGgBgiALIgKAAQgOAAgegDg");
	this.shape_58.setTransform(682.5,587.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).wait(176));

	// Layer 1
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5791BC").s().p("AhoHbIAAu1IDRAAIAAO1g");
	this.shape_59.setTransform(949.5,588.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5791BC").s().p("ABIHbIhWAAIhBAAIgZAAIAAgVIAAg5IAAiQIAArXIDRAAIAAK9IAADGIAAAyIghAAg");
	this.shape_60.setTransform(949.5,588.5);
	this.shape_60._off = true;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#5791BC").s().p("ABIHbIhWAAIhBAAIgZAAIAAgWIAAg4IAAiQIAArXIDRAAIAAK9IAADGIAAAyIghAAg");
	this.shape_61.setTransform(949.5,588.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5791BC").s().p("ABIHbIhWAAIhBAAIgYAAIgBgWIAAg4IAAiQIAArXIDQAAIAAK9IAADGIAAAyIggAAg");
	this.shape_62.setTransform(949.5,588.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5791BC").s().p("AgNHbIhCAAIgYAAIAAgWIgBg4IAAiQIAArXIDQAAIAAK9IAADFIAAAzIggAAIhVAAg");
	this.shape_63.setTransform(949.5,588.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5791BC").s().p("AhPHbIgYAAIAAgWIAAg4IgBiQIAArXIDQAAIAAK9IABDFIgBAzIggAAIhVAAIhCAAg");
	this.shape_64.setTransform(949.5,588.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5791BC").s().p("AhPHbIgYAAIAAgWIAAg4IgBiQIAArXIDQAAIAAK8IABDGIgBAyIggABIhVAAIhCAAg");
	this.shape_65.setTransform(949.5,588.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5791BC").s().p("AhnHbIAAgWIAAg4IgBiQIAArXIDQAAIAAK8IABDGIAAAyIghABIhVAAIhCAAIgYAAg");
	this.shape_66.setTransform(949.5,588.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5791BC").s().p("AhnHbIAAgWIAAg4IgBiQIAArXIDQAAIAAK8IABDGIAAAyIghAAIhVABIhCAAIgYAAg");
	this.shape_67.setTransform(949.5,588.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5791BC").s().p("AhnHbIAAgWIAAg4IgBiQIAArXIDQAAIAAK8IABDGIAAAyIghAAIhVABIhBAAIgZAAg");
	this.shape_68.setTransform(949.5,588.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5791BC").s().p("AhOHbIgZgBIAAgVIAAg4IgBiQIAArXIDQAAIAAK9IABDFIAAAyIghAAIhVAAIgsABIgVAAg");
	this.shape_69.setTransform(949.5,588.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5791BC").s().p("AhnHaIAAgVIAAg4IgBiQIAArXIDQAAIAAK8IABDGIAAAyIghAAIhVAAIhBABIgZgBg");
	this.shape_70.setTransform(949.5,588.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5791BC").s().p("AhnHaIAAgVIAAg4IgBiRIAArWIDQAAIAAK8IABDGIAAAxIggABIhWAAIhBABIgZgBg");
	this.shape_71.setTransform(949.5,588.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5791BC").s().p("AhOHaIgZAAIAAgVIAAg5IgBiQIAArWIDQAAIAAK8IABDFIAAAyIggABIhWAAIghABIgggBg");
	this.shape_72.setTransform(949.5,588.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5791BC").s().p("AhOHaIgZAAIAAgVIAAg5IgBiQIAArVIDQAAIAAK7IAADFQABAagBAYIgfAAIhWABIhBAAg");
	this.shape_73.setTransform(949.6,588.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5791BC").s().p("AhnHaIAAgVIAAg5IgBiQIAArVIDQAAIAAK7IAADFQABAagBAYIgfAAIhWABIhBAAIgZAAg");
	this.shape_74.setTransform(949.6,588.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5791BC").s().p("AhnHaIAAgVIAAg5IgBiQIAArVIDQAAIAAK6IAADGQABAagBAYIgfAAIhWABIhBAAIgZAAg");
	this.shape_75.setTransform(949.6,588.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5791BC").s().p("AhnHaIAAgVIAAg5IgBiQIAArVIDPAAIABAGIAAK0IABDGQAAAZgBAYIggABIhVABIhBAAIgZAAg");
	this.shape_76.setTransform(949.6,588.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5791BC").s().p("AhmHZIgBgUIAAg5IgBiQIAArVIDPAAIABAGIAAK0IABDFQAAAZgBAZIggABIhVABIhBAAIgYgBg");
	this.shape_77.setTransform(949.6,588.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5791BC").s().p("AhmHZIgBgVIAAg4IgBiQIAArVIDPAAIABAGIAAK0IABDFQABAagCAYIggABIhVAAIhBABIgYgBg");
	this.shape_78.setTransform(949.6,588.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5791BC").s().p("AhOHaIgYgBIgBgVIAAg4IgBiQIAArVIDPAAIABAGIAAK0QgBBmACBfQABAagCAXIggACIhVAAIgxABIgQAAg");
	this.shape_79.setTransform(949.6,588.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#5791BC").s().p("AhmHZIgBgVIAAg4IgBiQIAArVIDPAAIABAGIAAK0QgBBmACBfQABAZgBAYIggABIhWABIhBABIgYgBg");
	this.shape_80.setTransform(949.6,588.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#5791BC").s().p("AhmHZIAAgVIgBg4IgBiRIAArUIDPAAIABAGIAAK0QgBBmACBfQABAZgBAYIggABIhWABIhBABIgYgBg");
	this.shape_81.setTransform(949.6,588.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5791BC").s().p("AhmHZIAAgVIgBg5IgBiQIAArUIDPAAIABAGIAAKzQgBBnACBeQABAagBAXIggACQgtAAgpABIhAABQgNAAgMgBg");
	this.shape_82.setTransform(949.6,588.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5791BC").s().p("AhlHZIgBgVIgBg5IgBiQIAArUIDPAAIABAGIAAKzQgBBnACBeQABAZgBAYQgQABgQAAIhVACIhBABIgYgBg");
	this.shape_83.setTransform(949.6,588.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#5791BC").s().p("AhOHaIgYgBIgBgVIAAg5IgCiQIAArUIDPAAIABAGIAAKzQAABoACBcQABAagCAYIggABQgsAAgpACIgxABIgQAAg");
	this.shape_84.setTransform(949.6,588.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#5791BC").s().p("AhmHYIgBgVIAAg3IgCiRIAArUIDPAAIABAGIAAKzQAABoACBdQABAZgBAXIghACIhVACIhBABIgYgCg");
	this.shape_85.setTransform(949.6,588.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#5791BC").s().p("AhOHaIgXgBIgBgWIgBg4IgCiQIAArUIDPAAIABAGIAAKzQgBBoADBcQABAagBAXQgPACgSAAIhVACIgxABIgQAAg");
	this.shape_86.setTransform(949.6,588.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#5791BC").s().p("AhlHYIgBgVQAAgcgBgcIgCiQIAArUIDPAAIABAGIAAKzQgBBoADBcQACAagCAXQgPABgRAAIhWACIhAACQgNAAgLgCg");
	this.shape_87.setTransform(949.6,588.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5791BC").s().p("AhlHYIgBgVIgBg4IgCiRIAArTIDPAAIABAGIAAKyQgBBpADBbQACAagCAXQgPACgRAAIhVACIhBACQgNAAgLgCg");
	this.shape_88.setTransform(949.6,588.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#5791BC").s().p("AhlHYIgBgVIgBg4IgCiRIAArTIDPAAIABAGIAAKyQgBBpADBbQACAagCAXQgPACgRAAIhVACQgiACgfAAIgYgCg");
	this.shape_89.setTransform(949.6,588.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#5791BC").s().p("AhNHZQgNAAgLgBIgBgVIgBg5IgCiQIAArTIDPAAIABAGIAAKyQgBBpADBaQACAbgCAWQgPACgRAAQgtABgoACQgbACgZAAIgNgBg");
	this.shape_90.setTransform(949.6,588.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#5791BC").s().p("AhNHZQgNAAgLgBQgBgKAAgMQAAgcgBgcIgCiQIAArTIDPAAIABAGIAAKyQgBBpADBaQACAagDAXQgOACgRAAQgtAAgoADQgbACgZAAIgNgBg");
	this.shape_91.setTransform(949.7,588.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#5791BC").s().p("AhlHYIgBgWIgBg4IgCiQIAArSIDOAAIACAFIAAKxQgBBrADBZQACAagDAWQgOADgRAAQgtABgoACQghACggAAIgYgCg");
	this.shape_92.setTransform(949.7,588.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5791BC").s().p("AhNHZQgNAAgKgCQgCgJAAgMIAAg4IgDiQIAArSIDOAAIACAFIAAKxQgBBrADBZQACAagCAWQgPACgRABQgtAAgoACQgcACgaAAIgLAAg");
	this.shape_93.setTransform(949.7,588.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5791BC").s().p("AhNHZIgXgCQgCgKAAgLQABgcgBgcIgDiRIAArRIDOAAIACAFIAAKxQgBBrAEBYQACAbgDAWQgPACgRAAQgtABgoACQgcACgaAAIgLAAg");
	this.shape_94.setTransform(949.7,588.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#5791BC").s().p("AhMHZQgNAAgLgCQgCgKABgLIgBg4IgDiRIAArRIDOAAIACAFIAAKxQgBBrAEBYQACAagDAWQgPADgRAAQgtAAgoADQgZACgYAAIgPAAg");
	this.shape_95.setTransform(949.7,588.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5791BC").s().p("AhMHZQgNAAgLgCQgBgKAAgLQAAgcgBgdIgDiQIAArRIDOAAIACAFIAAKwQgBBsAEBXQACAbgDAWQgOACgSABQgtAAgoADQgcACgaAAIgKAAg");
	this.shape_96.setTransform(949.7,588.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#5791BC").s().p("AhkHWQgBgJAAgLQAAgdgCgcIgDiQIAArRIDPAAIABAFIAAKwQgBBsAEBXQADAbgEAVQgOADgRAAQgtABgoACQghADggAAQgMAAgLgDg");
	this.shape_97.setTransform(949.7,588.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#5791BC").s().p("AhMHZQgNAAgLgDQgBgJAAgMIgBg4IgEiQIAArRIDPAAIABAFIAAKwQgBBsAEBXQADAagEAWQgOADgRAAQgtABgoACQgcADgbAAIgJAAg");
	this.shape_98.setTransform(949.7,588.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#5791BC").s().p("AhMHZQgNAAgKgDQgCgJAAgMQAAgcgBgcIgEiQIAArRIDPAAIABAFIAAKwQgBBtAFBVQACAbgDAWQgOACgSABQgtAAgoADQgcADgbAAIgJAAg");
	this.shape_99.setTransform(949.7,588.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#5791BC").s().p("AhMHZQgNgBgKgCQgCgKAAgLQAAgcgBgcIgEiRIAArQIDOAAIACAFIAAKvQgBBuAFBVQADAagEAWQgOADgSAAQgtABgnADQgeADgbAAIgIAAg");
	this.shape_100.setTransform(949.7,588.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#5791BC").s().p("AhMHYQgNAAgKgCQgCgKAAgLQABgcgCgdIgEiQIAArQIDOAAIACAFIAAKvQgBBuAFBUQADAbgEAVQgOADgSABQgtAAgnAEQgeADgaAAIgJgBg");
	this.shape_101.setTransform(949.7,588.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#5791BC").s().p("AhMHYQgNAAgKgDQgCgJAAgMQAAgcgBgcIgEiQIAArQIDOAAIACAFIAAKvQgCBuAFBTQAEAbgEAVQgOAEgSAAQguABgnADQgdAEgbAAIgIgBg");
	this.shape_102.setTransform(949.8,588.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#5791BC").s().p("AhMHYQgNAAgKgDQgCgJAAgMQABgbgCgdIgEiQIAArPIDNAAIADAEIAAKvQgCBuAGBUQADAagEAVQgOAEgSAAQgtABgnADQgbADgZAAIgNAAg");
	this.shape_103.setTransform(949.8,588.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#5791BC").s().p("AhMHYQgMAAgLgDQgCgJABgMQAAgcgCgcIgEiRIAArOIDNAAIADAEIAAKuQgCBvAGBTQADAbgEAVQgOADgSABQgtABgnADQgeADgbAAIgIAAg");
	this.shape_104.setTransform(949.8,588.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#5791BC").s().p("AhiHVQgCgKAAgLQAAgcgCgcIgEiRIAArOIDNAAIADAEIAAKuQgCBvAGBSQADAbgEAVQgOAEgSAAQgtABgnAEQgiADgeAAQgNAAgKgDg");
	this.shape_105.setTransform(949.8,588.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5791BC").s().p("AhLHYQgNAAgKgEQgCgJAAgLQAAgcgCgdIgEiQIAArOIDNAAIADAEIAAKtQgCBxAGBRQAEAbgFAVQgOADgRABQguAAgnAFQgeADgaAAIgIAAg");
	this.shape_106.setTransform(949.8,588.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#5791BC").s().p("AhLHYQgNgBgKgDQgCgJAAgMQAAgcgBgcIgFiQIAArOIDNAAIADAEIAAKtQgCBxAGBQQAEAcgFAUQgNAEgSAAQguABgmAEQgfAEgcAAIgGAAg");
	this.shape_107.setTransform(949.8,588.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#5791BC").s().p("AhLHYQgNgBgKgDQgCgJAAgMQAAgbgCgdIgFiQIAArOIDOAAIACAEIAAKtQgCBxAHBQQAEAbgFAVQgOAEgSAAQgtABgnAEQgeAEgbAAIgHAAg");
	this.shape_108.setTransform(949.8,588.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#5791BC").s().p("AhLHXQgNAAgKgDQgCgJAAgMQABgcgDgcIgFiRIAArNIDNAAIADAEIAAKtQgCBxAHBPQAEAcgFAUQgNAEgSAAQguABgnAFQgcAEgZAAIgLgBg");
	this.shape_109.setTransform(949.8,588.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#5791BC").s().p("AhLHXQgNAAgJgEQgDgJAAgLQABgcgCgcIgGiRIAArNIDNAAIADAEIAAKsQgCByAHBPQAFAbgGAUQgNAFgSAAQguABgmAFQgdAEgZAAIgLgBg");
	this.shape_110.setTransform(949.8,588.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#5791BC").s().p("AhKHXQgNAAgKgEQgCgJAAgMQAAgcgCgcIgGiQIAArNIDNAAIADAEIAAKrQgCBzAHBOQAFAcgGATQgNAFgSAAQguABgmAFQgfAFgcAAIgFgBg");
	this.shape_111.setTransform(949.8,588.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#5791BC").s().p("AhKHXQgOAAgJgEQgDgJAAgMQABgbgCgdIgGiRIAArLIDNAAIADADIAAKsQgDBzAIBNQAFAcgGATQgNAFgSAAQgvABgmAFQgeAEgbAAIgGAAg");
	this.shape_112.setTransform(949.9,588.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#5791BC").s().p("AhKHXQgNAAgKgEQgDgJABgMQAAgcgCgcIgGiRIAArLIDNAAIADADIAAKrQgDB0AIBMQAFAcgGATQgNAFgSABQgvABglAFQgfAEgcAAIgFAAg");
	this.shape_113.setTransform(949.9,588.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#5791BC").s().p("AhKHXQgNgBgJgEQgDgJAAgLQAAgcgCgcIgGiRIAArLIDNAAIADADIAAKqQgDB1AJBLQAEAcgGAUQgNAFgSAAQguABgmAFQgdAFgaAAIgJAAg");
	this.shape_114.setTransform(949.9,588.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#5791BC").s().p("AhKHXQgNAAgKgFQgDgJABgLQAAgcgCgcQgDgxgEhgIAArLIDNAAIADADIAAKrQgCB0AIBLQAFAcgGATQgNAFgSABQgvABglAFQgdAFgaAAIgJAAg");
	this.shape_115.setTransform(949.9,588.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#5791BC").s().p("AhKHXQgNgBgJgEQgDgJAAgMQAAgbgCgdIgHiRIAArKIDNAAIADADIAAKqQgCB2AIBJQAFAdgGASQgNAGgSAAQgvABglAGQgdAFgZAAIgKAAg");
	this.shape_116.setTransform(949.9,588.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#5791BC").s().p("AhJHXQgOgBgJgEQgDgJAAgMQABgcgDgcIgHiRIAArKIDNAAIADADIAAKpQgDB3AKBJQAFAcgHASQgMAGgTABQgvABglAGQggAFgbAAIgEAAg");
	this.shape_117.setTransform(949.9,588.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#5791BC").s().p("AhJHWQgOAAgIgFQgEgJAAgMQABgbgDgcQgDgugEhjIAArKIDMAAIAEADIAAKpQgDB3AKBIQAFAcgHATQgMAFgTABQgvABglAGQgdAGgaAAIgIgBg");
	this.shape_118.setTransform(949.9,588.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#5791BC").s().p("AhJHWQgOgBgJgEQgDgJAAgMQABgcgDgcIgHiRIAArJIDMAAIAEADIAAKpQgDB3AJBHQAGAdgHASQgMAGgTAAQgvACglAGQgfAGgcAAIgEgBg");
	this.shape_119.setTransform(950,588.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#5791BC").s().p("AhJHWQgOAAgIgFQgEgJAAgMQABgcgDgcIgHiRIAArIIDMAAIAEACIAAKoQgDB4AKBHQAFAcgHASQgMAGgTABQgvACgkAGQgfAFgZAAIgIAAg");
	this.shape_120.setTransform(950,588);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#5791BC").s().p("AhJHWQgNgBgJgFQgDgIAAgMQAAgcgDgcIgHiRIAArIIDMAAIAEACIAAKoQgDB4AKBGQAGAdgIASQgMAGgTAAQgvACgkAGQgeAGgaAAIgIAAg");
	this.shape_121.setTransform(950,588);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#5791BC").s().p("AhIHWQgOgBgIgFQgEgJAAgMQABgbgDgdQgEgqgEhnIAArHIDMAAIAEACIAAKnQgDB5AKBFQAGAdgIASQgLAGgTABQgvABglAHQgfAGgZAAIgHAAg");
	this.shape_122.setTransform(950,588);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#5791BC").s().p("AhJHWQgNgBgJgFQgDgJAAgMQAAgbgDgcIgIiSIAArHIDMAAIAEACIAAKnQgDB6ALBEQAGAdgIARQgMAHgTAAQgvACgkAHQgfAGgZAAIgIAAg");
	this.shape_123.setTransform(950,588);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#5791BC").s().p("AhIHWQgOgBgIgGQgEgIAAgMQABgcgEgcIgIiRIAArHIDMAAIAEACIAAKnQgDB6ALBDQAGAdgIARQgLAHgUABQgvABgkAHQggAHgbAAIgEAAg");
	this.shape_124.setTransform(950,588);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#5791BC").s().p("AhJHVQgNAAgIgGQgEgIAAgNQABgbgEgcQgDgpgFhoIAArHIDLAAIAFACIAAKmQgEB7AMBDQAHAdgJAQQgMAHgTABQgvABgkAIQgfAHgaAAIgHgBg");
	this.shape_125.setTransform(950.1,588);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#5791BC").s().p("AhIHVQgOAAgIgGQgEgIAAgNQABgbgDgcQgEgogFhqIAArFIDLAAIAFABIAAKmQgEB8AMBBQAHAdgJARQgLAHgTABQgwABgkAIQgeAGgaAAIgHAAg");
	this.shape_126.setTransform(950.1,587.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#5791BC").s().p("AhIHVQgNgBgIgGQgEgIAAgMQAAgcgDgcQgEgmgFhrIAArFIDLAAIAFABIAAKlQgEB9AMBAQAHAegJAQQgLAHgTABQgwACgkAIQgfAGgZAAIgHAAg");
	this.shape_127.setTransform(950.1,587.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#5791BC").s().p("AhHHVQgOgBgIgGQgEgIAAgNQABgbgEgcQgEgmgFhrIAArFIDLAAIAFABIAAKlQgEB9ANA/QAHAegKAQQgLAIgTAAQgwACgjAIQggAHgZAAIgGAAg");
	this.shape_128.setTransform(950.1,587.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#5791BC").s().p("AhIHVQgNgBgIgGQgEgIAAgNQABgbgEgcQgEglgGhtIAArEIDLAAIAFACIAAKkQgEB+ANA+QAIAegKAQQgLAHgTABQgwACgkAIQgfAHgZAAIgHAAg");
	this.shape_129.setTransform(950.1,587.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#5791BC").s().p("AhHHUQgOAAgIgHQgEgIAAgMQABgcgEgcQgEgjgGhuIAArEIDLAAIAFABIAAKkQgEB/ANA9QAIAegKAPQgLAIgTABQgwACgjAJQgeAHgYAAIgJgBg");
	this.shape_130.setTransform(950.1,587.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#5791BC").s().p("AhHHUQgOAAgHgHQgFgIABgNQAAgbgEgcQgEgjgGhuIAArEIDLAAIAFABIAAKjQgECAAOA8QAHAegKAPQgKAJgUAAQgwACgjAJQggAIgZAAIgGgBg");
	this.shape_131.setTransform(950.1,587.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#5791BC").s().p("AhHHUQgOgBgHgGQgFgIAAgNQABgbgEgcQgEgigGhwIAArCIDKAAIAGAAIAAKjQgFCAAOA8QAJAegMAPQgJAIgUABQgxACgiAJQgeAHgZAAIgIAAg");
	this.shape_132.setTransform(950.2,587.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#5791BC").s().p("AhHHUQgOgBgHgHQgFgIABgMQABgbgFgdQgEgggGhxIAArCIDKAAIAGAAIAAKiQgFCBAPA7QAIAegLAPQgKAJgUAAQgwACgjAJQggAIgZAAIgGAAg");
	this.shape_133.setTransform(950.2,587.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#5791BC").s().p("AhGHUQgOgBgHgHQgFgIAAgNQABgbgFgcQgEgggGhyIAArBIDKAAIAGAAIAAKiQgFCBAPA6QAIAegLAPQgKAJgUABQgwACgjAJQgfAIgaAAIgFAAg");
	this.shape_134.setTransform(950.2,587.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#5791BC").s().p("AhGHUQgOgBgHgHQgGgIABgNQABgbgFgcQgEgfgHhzIAArBIDKAAIAGABIAAKhQgECCAPA5QAIAegLAOQgKAKgUAAQgwACgjAKQgeAIgZAAIgHAAg");
	this.shape_135.setTransform(950.2,587.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#5791BC").s().p("AhGHTQgOAAgHgIQgFgIAAgMQABgcgFgcQgEgdgHh0IAArBIDQAAIAAKhQgECDAPA4QAJAegMAOQgJAKgVABQgwABgiAKQgfAJgZAAIgHgBg");
	this.shape_136.setTransform(950.2,587.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#5791BC").s().p("AhGHTQgOgBgGgIQgGgHABgNQABgbgFgcQgFgdgHh1IAArAIDQAAIAAKgQgFCEAQA2QAJAfgMAOQgJAKgVABQgwACgiAKQgfAJgZAAIgHgBg");
	this.shape_137.setTransform(950.2,587.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#5791BC").s().p("AhGHTQgagCAAgbQABgbgEgcQgFgcgHh2IAAq/IDQAAIAAKfQgFCFAQA1QAQA1gxACQgxACghALQgfAIgZAAIgHAAg");
	this.shape_138.setTransform(950.3,587.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59}]}).to({state:[{t:this.shape_59}]},14).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).wait(151));
	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(15).to({_off:false},0).wait(5).to({_off:true},1).wait(229));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhCAAacMAAAg03MCEAAAAMAAAA03g");
	mask.setTransform(828.2,381.3);

	// izo
	this.instance_7 = new lib.izo();
	this.instance_7.setTransform(504.6,276.2,0.6,0.6);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,581,1600,1162);


// symbols:
(lib.balon_off = function() {
	this.initialize(img.balon_off);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,110);


(lib.balon_on = function() {
	this.initialize(img.balon_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,110);


(lib.fire_1 = function() {
	this.initialize(img.fire_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,6);


(lib.fire_2 = function() {
	this.initialize(img.fire_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,22);


(lib.fire_on_blue_1 = function() {
	this.initialize(img.fire_on_blue_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,25);


(lib.fire_on_blue_2 = function() {
	this.initialize(img.fire_on_blue_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,42);


(lib.izo = function() {
	this.initialize(img.izo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,971,567);


(lib.tumbler = function() {
	this.initialize(img.tumbler);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,80);


(lib.tumbler_on = function() {
	this.initialize(img.tumbler_on);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,80);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fire_on_blue_2();
	this.instance.setTransform(-26,-21);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26,-21,52,42);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fire_on_blue_2();
	this.instance.setTransform(-18.2,-10.4,0.778,0.541);

	this.instance_1 = new lib.fire_on_blue_1();
	this.instance_1.setTransform(-21.5,-12.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-12.5,43.8,25);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fire_1();
	this.instance.setTransform(-21.5,-3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-3,43,6);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fire_2();
	this.instance.setTransform(-32.5,-11);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.5,-11,65,22);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.balon_on();
	this.instance.setTransform(-75.5,-55);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.5,-55,151,110);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("AhcGhQgBgDgDgCIAGgIIgIgJIgBgFIABgKIAHAEQAEACAFAHQAGAAAFACIAKADQAEABAFgCQAGgDAKgJIAKgJQAIgGACgDQADgGANgJQASgKAFgEIAOgPQAKgLAHgGQAPgMAUgFIgBAHIAAAAQgRAHgNALIgRARIgQAQQgRAMgPARIgTARQgIAFgHACQgHABgPABIgMgCQAFAGAGAEIAAADQgBABAAABQAAAAgBAAQAAABgBAAQgBAAAAAAQgIAAgHgFQgBADgEAHIgEgEgAhjFSIABgLIAAgFQAZAHAQACIAFgXQAFgUAHgKQAGgKAJgGIgGgbQgDgMAAgQQAAgFAEgPIADgSIAAgBQgnAEgUAMIAAgDIgBgJQARgJAWgDQAAgCATABIABABIgDgJQgEgMAAgFQAAgEACgFQgKgVgchUIAAABQgJAPgEACIgMgBIAAgBIAAgGIAKgBQAFgDAEgMIAEgHQABgHACgEIACgDQgCgFAAgFIgBgVQgBgMgFgLQgDgGAAgIIgeAAIgCABQgBgEgCgCIADgEIAgAAQABgEACgDQACgEAFgDIgehUIgBgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgCIgCgHQAAgKAFgKQAFgLAAgKQAAgIgJgQQgJgQAAgCQAAgCALgKQAOgOAIgJQAigmABgeIgCgNIADgZQAHALAAAcQgBAIgCAKIAOgOQAKgJAIgDIgDAEIgFAJIgHAKIgJAIIgLAEQgIAUgUAWQgJALgNAMIgHAHQAFAAAGADIAVAKQAIAAAMgHQAMgGALAAQATgBAGALIAEAHIAogBQAWgJAagSIAXgRIAAACQgBADgBAFQgyAkgSAHIgwAAIgEANQgEALAAADQAAAIABADQAGAIARABQAZAVAPAjQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIADAHIALgIQAMgJAPgDQgLALgEACQgNAGgIAFQACAIAAAJQgDAKAFAQQACAIAEAIIAMgQIADAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgLAVIABACIgBACIgEABIgTAhQgKATgMAfQADAEAAAIQAAAHgEAVIgCARQAIgEAHABIABABIgLAGIgRANQgMAHgBAGIgPAPIgJAKIgBAFIABABIgCAAIAAACIAEAPQAEAOAAAFQAAAIgDAJIgBADQgEABAAAHIACADIAAAIIAAASQABALAEAIIAAAOQAWgOApgFIAAAAIgEgFIgOgOQgKgRgPgEQgEgFgIgEIAAAAIASADQAOAGAKAMIAPAQIAEAFQAEgGAJgFIANgIQAHgFAAgDIABgWQACgNAIgEQgCAFAAAHIAAAIIAAAEIAAALQAAAGgCAFQgFAJgOAKIgLAHIACAEIgBAAQASAKAJAGIAHAFQgCAFAAAIIAAABIgJgIIgcgWIgDgCIgKAEIgbAJQgjAMgIAPQgFAIgIAXQgDAJgEAGIAHAAQADABABADIAAACIgUADIgFABQgVAAgQgDgAgkgRIgQAJQgGAEgDADIAAABIgBAAIAAAAIgBACIABADIgCAFIgBAEQAAADAQAtIAUA3QAHgLAPgNQALgMALgGIAAgCIAEgYQADgRAAgHQAAgFgDgDIgHgFIAAAAQgLAAgHgUIgJgbQgKALgLAHgAAEg3QgGAIgGACIAAABIAGATIAKATIAIANIAAABIAEACQABgYAZgnIANgTQgIgJgBgaIABgaIABgMQAAgDgFgCIgFgCQAAgEgCgCIAAgBIgGgKQgLgVgDgCQgFgGgPgDIgHgCIgFAQQgEAPgGAIIgaAAIgIgFQgEgCgQABQgGgEAAgIIgKAAIABABIALAVQARAfAAAWIgBAHIAPgHQAMgFAKgHIgCAEQgDAFgVAPIgLAFQgIAFAAAIIAGAbQAGAdAAAFIAAACIAOgKQAIgGAJgIQAIgCASgUIASgHQgCADgJAJgAhekGQAJAQAAAKQAAALgFALQgGALAAAGIABAHIAPAAQAHAGgBAEIABABQARAAAEADIAEADIAXAAIAFgaQABgHADgDIAAgBQgCgGAAgOQAAgMABgCQABgHAKgLIABgCIADAAIABAAIAAgBQgEgJgTABQgLgBgNAHQgNAGgCABQgPAAgPgHIgEgCIADAHgAgVC8IAAgCIABgBIACADIgDAAg");
	this.shape.setTransform(11.7,42.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AhcGhQgBgDgDgCIAGgIIgIgJIgBgFIABgKIAHAEQAEACAFAHQAGAAAFACIAKADQAEABAFgCQAGgDAKgJIAKgJQAIgGACgDQADgGANgJQASgKAFgEIAOgPQAKgLAHgGQAPgMAUgFIgBAHIAAAAQgRAHgNALIgRARIgQAQQgRAMgPARIgTARQgIAFgHACQgHABgPABIgMgCQAFAGAGAEIAAADQgBABAAABQAAAAgBAAQAAABgBAAQgBAAAAAAQgIAAgHgFQgBADgEAHIgEgEgAhjFSIABgLIAAgFQAZAHAQACIAFgXQAFgUAHgKQAGgKAJgGIgGgbQgDgMAAgQQAAgFAEgPIADgSIAAgBQgnAEgUAMIAAgDIgBgJQARgJAWgDQAAgCATABIABABIgDgJQgEgMAAgFQAAgEACgFQgKgVgchUIAAABQgJAPgEACIgMgBIAAgBIAAgGIAKgBQAFgDAEgMIAEgHQABgHACgEIACgDQgCgFAAgFIgBgVQgBgMgFgLQgDgGAAgIIgeAAIgCABQgBgEgCgCIADgEIAgAAQABgEACgDQACgEAFgDIgehUIgBgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIAAgCIgCgHQAAgKAFgKQAFgLAAgKQAAgIgJgQQgJgQAAgCQAAgCALgKQAOgOAIgJQAigmABgeIgCgNIADgZQAHALAAAcQgBAIgCAKIAOgOQAKgJAIgDIgDAEIgFAJIgHAKIgJAIIgLAEQgIAUgUAWQgJALgNAMIgHAHQAFAAAGADIAVAKQAIAAAMgHQAMgGALAAQATgBAGALIAEAHIAogBQAWgJAagSIAXgRIAAACQgBADgBAFQgyAkgSAHIgwAAIgEANQgEALAAADQAAAIABADQAGAIARABQAZAVAPAjQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIADAHIALgIQAMgJAPgDQgLALgEACQgNAGgIAFQACAIAAAJQgDAKAFAQQACAIAEAIIAMgQIADAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIgLAVIABACIgBACIgEABIgTAhQgKATgMAfQADAEAAAIQAAAHgEAVIgCARQAIgEAHABIABABIgLAGIgRANQgMAHgBAGIgPAPIgJAKIgBAFIABABIgCAAIAAACIAEAPQAEAOAAAFQAAAIgDAJIgBADQgEABAAAHIACADIAAAIIAAASQABALAEAIIAAAOQAWgOApgFIAAAAIgEgFIgOgOQgKgRgPgEQgEgFgIgEIAAAAIASADQAOAGAKAMIAPAQIAEAFQAEgGAJgFIANgIQAHgFAAgDIABgWQACgNAIgEQgCAFAAAHIAAAIIAAAEIAAALQAAAGgCAFQgFAJgOAKIgLAHIACAEIgBAAQASAKAJAGIAHAFQgCAFAAAIIAAABIgJgIIgcgWIgDgCIgKAEIgbAJQgjAMgIAPQgFAIgIAXQgDAJgEAGIAHAAQADABABADIAAACIgUADIgFABQgVAAgQgDgAgkgRIgQAJQgGAEgDADIAAABIgBAAIAAAAIgBACIABADIgCAFIgBAEQAAADAQAtIAUA3QAHgLAPgNQALgMALgGIAAgCIAEgYQADgRAAgHQAAgFgDgDIgHgFIAAAAQgLAAgHgUIgJgbQgKALgLAHgAAEg3QgGAIgGACIAAABIAGATIAKATIAIANIAAABIAEACQABgYAZgnIANgTQgIgJgBgaIABgaIABgMQAAgDgFgCIgFgCQAAgEgCgCIAAgBIgGgKQgLgVgDgCQgFgGgPgDIgHgCIgFAQQgEAPgGAIIgaAAIgIgFQgEgCgQABQgGgEAAgIIgKAAIABABIALAVQARAfAAAWIgBAHIAPgHQAMgFAKgHIgCAEQgDAFgVAPIgLAFQgIAFAAAIIAGAbQAGAdAAAFIAAACIAOgKQAIgGAJgIQAIgCASgUIASgHQgCADgJAJgAhekGQAJAQAAAKQAAALgFALQgGALAAAGIABAHIAPAAQAHAGgBAEIABABQARAAAEADIAEADIAXAAIAFgaQABgHADgDIAAgBQgCgGAAgOQAAgMABgCQABgHAKgLIABgCIADAAIABAAIAAgBQgEgJgTABQgLgBgNAHQgNAGgCABQgPAAgPgHIgEgCIADAHgAgVC8IAAgCIABgBIACADIgDAAg");
	this.shape_1.setTransform(11.7,42.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.4,85);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(24.3,28.6,1.165,1.14);
	this.instance.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.398},2).to({alpha:0.199},2).wait(1));

	// Layer 2 copy
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(26.9,22,1.165,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:1.15},2).to({scaleY:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-0.6,60.6,45.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(75.5,55);
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},2).to({alpha:0.391},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,110);


(lib.fire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(21.5,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.11,x:23.8},2).to({scaleX:1,x:21.5},2).wait(1));

	// Layer 2
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(33.4,11);
	this.instance_1.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},2).to({alpha:0.801},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.9,22);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At5IKIAAwTIbzAAIAAQTg");
	mask.setTransform(75.4,16.8);

	// Layer 2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(75.5,55,1,1,0,0,0,75.5,55);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},115).wait(371));

	// Layer 1
	this.instance_1 = new lib.balon_off();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},499).wait(1));

	// Layer 4
	this.instance_2 = new lib.fire();
	this.instance_2.setTransform(156.4,7,1,1,0,0,0,32.9,11);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({_off:true},115).wait(371));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,110);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;