(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1592,
	height: 1162,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:dir + "girya.png", id:"girya"},
		{src:dir + "izo_na_gire_black.png", id:"izo_na_gire_black"},
		{src:dir + "izo_na_gire_blue.png", id:"izo_na_gire_blue"},
		{src:dir + "polka.png", id:"polka"},
		{src:dir + "polka_emptypngcopy.png", id:"polka_emptypngcopy"},
		{src:dir + "ten_giri.png", id:"ten_giri"},
		{src:dir + "ten_izo.png", id:"ten_izo"}
	]
};

// stage content:
(lib.izolenta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4F82A7").s().p("AhnB3IAAjtIDPAAIAADtg");
	this.shape.setTransform(928.9,426.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2C2C2C").s().p("AhnB4IAAjvIDPAAIAADvg");
	this.shape_1.setTransform(661.9,427.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F83A8").s().p("AhnCVQAEiVgEiTIDPAAQgDCTADCVg");
	this.shape_2.setTransform(928.9,429.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F84A9").s().p("AhnCxQAHixgHiwIDPAAQgGCxAGCwg");
	this.shape_3.setTransform(928.9,432.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F86AA").s().p("AhnDMQAKjMgKjLIDPAAQgIDMAIDLg");
	this.shape_4.setTransform(928.9,435.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F87AB").s().p("AhnDnQANjngNjmIDPAAQgKDoAKDlg");
	this.shape_5.setTransform(928.9,438.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F88AC").s().p("AhnEBQARkBgRkAIDPAAQgNECAND/g");
	this.shape_6.setTransform(928.9,440.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4F89AD").s().p("AhnEaQAUkagUkZIDPAAQgQEcAQEXg");
	this.shape_7.setTransform(928.9,443.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4F8AAE").s().p("AhnEyQAXkygXkxIDPAAQgSE0ASEvg");
	this.shape_8.setTransform(928.9,445.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4F8BAF").s().p("AhnFJQAZlJgZlIIDPAAQgUFMAUFFg");
	this.shape_9.setTransform(928.9,447.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4F8CB0").s().p("AhnFfQAblfgbleIDPAAQgWFiAWFbg");
	this.shape_10.setTransform(928.9,450.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4F8DB1").s().p("AhnF0QAel0gelzIDPAAQgYF4AYFvg");
	this.shape_11.setTransform(928.9,452.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4F8DB2").s().p("AhnGJQAhmJghmIIDPAAQgaGNAaGEg");
	this.shape_12.setTransform(928.9,454.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4F8EB3").s().p("AhnGdQAjmdgjmcIDPAAQgbGhAbGYg");
	this.shape_13.setTransform(928.9,456.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4F8FB3").s().p("AhnGwQAlmwglmuIDPAAQgeGzAeGrg");
	this.shape_14.setTransform(928.9,458.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4F90B4").s().p("AhnHCQAnnCgnnAIDPAAQggHFAgG9g");
	this.shape_15.setTransform(928.9,460);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4F90B5").s().p("AhnHSQAqnSgqnRIDPAAQghHXAhHMg");
	this.shape_16.setTransform(928.9,461.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4F91B5").s().p("AhnHjQAsnjgsnhIDPAAQgjHoAjHcg");
	this.shape_17.setTransform(928.9,463.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4F92B6").s().p("AhnHyQAtnygtnxIDPAAQgkH4AkHrg");
	this.shape_18.setTransform(928.9,464.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4F92B7").s().p("AhnIAQAvoAgvn/IDPAAQglIGAlH5g");
	this.shape_19.setTransform(928.9,466.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4F93B7").s().p("AhnIOQAxoOgxoNIDPAAQgmIUAmIHg");
	this.shape_20.setTransform(928.9,467.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4F93B8").s().p("AhnIaQAyoagyoZIDPAAQgnIgAnITg");
	this.shape_21.setTransform(928.9,468.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4F94B8").s().p("AhnImQAzomgzolIDPAAQgpItApIeg");
	this.shape_22.setTransform(928.9,470);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4F94B9").s().p("AhnIxQA0oxg0owIDPAAQgqI4AqIpg");
	this.shape_23.setTransform(928.9,471.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4F95B9").s().p("AhnI7QA2o7g2o6IDPAAQgqJCAqIzg");
	this.shape_24.setTransform(928.9,472.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4F95B9").s().p("AhnJFQA3pFg3pDIDPAAQgsJLAsI9g");
	this.shape_25.setTransform(928.9,473.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4F96BA").s().p("AhnJNQA4pNg4pMIDPAAQgtJUAtJFg");
	this.shape_26.setTransform(928.9,473.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4F96BA").s().p("AhnJUQA5pUg5pTIDPAAQgtJbAtJMg");
	this.shape_27.setTransform(928.9,474.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4F96BA").s().p("AhnJbQA6pbg6pZIDPAAQguJiAuJSg");
	this.shape_28.setTransform(928.9,475.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4F96BA").s().p("AhnJgQA7pgg7pfIDPAAQgvJoAvJXg");
	this.shape_29.setTransform(928.9,475.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4F97BB").s().p("AhnJlQA7plg7pkIDPAAQgvJtAvJcg");
	this.shape_30.setTransform(928.9,476.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4F97BB").s().p("AhnJpQA7ppg7poIDPAAQgvJxAvJgg");
	this.shape_31.setTransform(928.9,476.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4F97BB").s().p("AhnJsQA8psg8prIDPAAQgwJ0AwJjg");
	this.shape_32.setTransform(928.9,477);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4F97BB").s().p("AhnJuQA8pug8ptIDPAAQgwJ2AwJlg");
	this.shape_33.setTransform(928.9,477.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4F97BB").s().p("AhnJvQA8pvg8puIDPAAQgwJ4AwJlg");
	this.shape_34.setTransform(928.9,477.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4F97BB").s().p("AhnJwQA8pwg8pvIDPAAQgwJ4AwJng");
	this.shape_35.setTransform(928.9,477.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape}]},10).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(136));

	// Layer 3
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(906.6,507.1,0.6,0.6,0,0,0,123,149);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({startPosition:0},0).to({y:607.9},34,cjs.Ease.get(1)).wait(136));

	// Layer 6 copy 2
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(927.4,633.5,0.6,0.6,0,0,0,113,23.5);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({alpha:1},13).wait(136));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EA9SAm5MAAAgmRILFAAMAAAAmRg");
	var mask_graphics_10 = new cjs.Graphics().p("EA9SAm5MAAAgmRILFAAMAAAAmRg");
	var mask_graphics_11 = new cjs.Graphics().p("EA9SAnoMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_12 = new cjs.Graphics().p("EA9SAoVMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_13 = new cjs.Graphics().p("EA9SApCMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_14 = new cjs.Graphics().p("EA9SApsMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_15 = new cjs.Graphics().p("EA9SAqWMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_16 = new cjs.Graphics().p("EA9SAq+MAAAgmRILFAAMAAAAmRg");
	var mask_graphics_17 = new cjs.Graphics().p("EA9SArkMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_18 = new cjs.Graphics().p("EA9SAsJMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_19 = new cjs.Graphics().p("EA9SAstMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_20 = new cjs.Graphics().p("EA9SAtPMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_21 = new cjs.Graphics().p("EA9SAtwMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_22 = new cjs.Graphics().p("EA9SAuQMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_23 = new cjs.Graphics().p("EA9SAuuMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_24 = new cjs.Graphics().p("EA9SAvLMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_25 = new cjs.Graphics().p("EA9SAvmMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_26 = new cjs.Graphics().p("EA9SAwAMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_27 = new cjs.Graphics().p("EA9SAwYMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_28 = new cjs.Graphics().p("EA9SAwwMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_29 = new cjs.Graphics().p("EA9SAxFMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_30 = new cjs.Graphics().p("EA9SAxaMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_31 = new cjs.Graphics().p("EA9SAxsMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_32 = new cjs.Graphics().p("EA9SAx+MAAAgmRILFAAMAAAAmRg");
	var mask_graphics_33 = new cjs.Graphics().p("EA9SAyOMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_34 = new cjs.Graphics().p("EA9SAydMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_35 = new cjs.Graphics().p("EA9SAyqMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_36 = new cjs.Graphics().p("EA9SAy2MAAAgmRILFAAMAAAAmRg");
	var mask_graphics_37 = new cjs.Graphics().p("EA9SAzBMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_38 = new cjs.Graphics().p("EA9SAzKMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_39 = new cjs.Graphics().p("EA9SAzRMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_40 = new cjs.Graphics().p("EA9SAzYMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_41 = new cjs.Graphics().p("EA9SAzdMAAAgmRILFAAMAAAAmRg");
	var mask_graphics_42 = new cjs.Graphics().p("EA9SAzgMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_43 = new cjs.Graphics().p("EA9SAziMAAAgmQILFAAMAAAAmQg");
	var mask_graphics_44 = new cjs.Graphics().p("EA9SAzjMAAAgmRILFAAMAAAAmRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:463.1,y:248.9}).wait(10).to({graphics:mask_graphics_10,x:463.1,y:248.9}).wait(1).to({graphics:mask_graphics_11,x:463.1,y:253.6}).wait(1).to({graphics:mask_graphics_12,x:463.1,y:258.2}).wait(1).to({graphics:mask_graphics_13,x:463.1,y:262.6}).wait(1).to({graphics:mask_graphics_14,x:463.1,y:266.9}).wait(1).to({graphics:mask_graphics_15,x:463.1,y:271}).wait(1).to({graphics:mask_graphics_16,x:463.1,y:275}).wait(1).to({graphics:mask_graphics_17,x:463.1,y:278.9}).wait(1).to({graphics:mask_graphics_18,x:463.1,y:282.6}).wait(1).to({graphics:mask_graphics_19,x:463.1,y:286.1}).wait(1).to({graphics:mask_graphics_20,x:463.1,y:289.6}).wait(1).to({graphics:mask_graphics_21,x:463.1,y:292.9}).wait(1).to({graphics:mask_graphics_22,x:463.1,y:296}).wait(1).to({graphics:mask_graphics_23,x:463.1,y:299}).wait(1).to({graphics:mask_graphics_24,x:463.1,y:301.9}).wait(1).to({graphics:mask_graphics_25,x:463.1,y:304.6}).wait(1).to({graphics:mask_graphics_26,x:463.1,y:307.2}).wait(1).to({graphics:mask_graphics_27,x:463.1,y:309.7}).wait(1).to({graphics:mask_graphics_28,x:463.1,y:312}).wait(1).to({graphics:mask_graphics_29,x:463.1,y:314.2}).wait(1).to({graphics:mask_graphics_30,x:463.1,y:316.2}).wait(1).to({graphics:mask_graphics_31,x:463.1,y:318.1}).wait(1).to({graphics:mask_graphics_32,x:463.1,y:319.8}).wait(1).to({graphics:mask_graphics_33,x:463.1,y:321.5}).wait(1).to({graphics:mask_graphics_34,x:463.1,y:322.9}).wait(1).to({graphics:mask_graphics_35,x:463.1,y:324.3}).wait(1).to({graphics:mask_graphics_36,x:463.1,y:325.5}).wait(1).to({graphics:mask_graphics_37,x:463.1,y:326.5}).wait(1).to({graphics:mask_graphics_38,x:463.1,y:327.4}).wait(1).to({graphics:mask_graphics_39,x:463.1,y:328.2}).wait(1).to({graphics:mask_graphics_40,x:463.1,y:328.8}).wait(1).to({graphics:mask_graphics_41,x:463.1,y:329.3}).wait(1).to({graphics:mask_graphics_42,x:463.1,y:329.7}).wait(1).to({graphics:mask_graphics_43,x:463.1,y:329.9}).wait(1).to({graphics:mask_graphics_44,x:463.1,y:329.9}).wait(136));

	// Layer 5
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.setTransform(913.8,521.1,0.6,0.6,0,0,0,50,176.9);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(180));

	// Layer 5 copy
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2C2C2C").s().p("AhnB4IAAjvIDPAAIAADvg");
	this.shape_36.setTransform(661.9,427.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AhnCXQAIiXgIiWIDPAAQgGCWAGCXg");
	this.shape_37.setTransform(661.9,430.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3A3A3A").s().p("AhnC0QAPi0gPizIDPAAQgMC0AMCzg");
	this.shape_38.setTransform(661.9,433.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#414141").s().p("AhnDPQAVjPgVjNIDPAAQgRDOARDOg");
	this.shape_39.setTransform(661.9,435.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#474747").s().p("AhnDnQAcjngcjmIDPAAQgWDoAWDlg");
	this.shape_40.setTransform(661.9,438.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4C4C4C").s().p("AhnD9QAhj9ghj8IDPAAQgbD+AbD7g");
	this.shape_41.setTransform(661.9,440.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#515151").s().p("AhnESQAnkSgnkQIDPAAQgeETAeEPg");
	this.shape_42.setTransform(661.9,442.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#565656").s().p("AhnEkQArkkgrkiIDPAAQgjElAjEhg");
	this.shape_43.setTransform(661.9,444.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#595959").s().p("AhnEzQAvkzgvkyIDPAAQgmE2AmEvg");
	this.shape_44.setTransform(661.9,446);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5D5D5D").s().p("AhnFBQAylBgylAIDPAAQgpFEApE9g");
	this.shape_45.setTransform(661.9,447.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#606060").s().p("AhnFNQA2lNg2lMIDPAAQgqFQAqFJg");
	this.shape_46.setTransform(661.9,448.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#626262").s().p("AhnFXQA4lXg4lWIDPAAQgsFbAsFSg");
	this.shape_47.setTransform(661.9,449.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#646464").s().p("AhnFeQA5leg5ldIDPAAQguFiAuFZg");
	this.shape_48.setTransform(661.9,450.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#656565").s().p("AhnFjQA7ljg7liIDPAAQgvFnAvFeg");
	this.shape_49.setTransform(661.9,450.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AhnFnQA8lng8llIDPAAQgwFqAwFig");
	this.shape_50.setTransform(661.9,451.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AhnFoQA8log8lmIDPAAQgwFrAwFjg");
	this.shape_51.setTransform(661.9,451.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AhnFyQA8l7g8loIDPAAQgVCigCCfQgVASgZAFQAlgGAIAJQgBC6AZDOg");
	this.shape_52.setTransform(661.9,452.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AhnGeQA8mwg8mKIDPAAQgVCwgKCyIgBABIgEAAIgCACQgDgEgFAAQgJAAAAAIIAAABIgDgBQgJgCAAAJIABACIgBAAQgGgFgEALIgGAQIgDANQgDAGAEACQgEABgFAIIgEAIIABADQgKAKgPAIIAcgNIACAAQACgBADgDIAIgEIACgIIADgBQAEAAAAgDIgDgGIACAAIADgKIACgGIAFgMIABgBQADADAFAAQAGAAAEgFIABgBQAJABAAALQAHC/AZDzg");
	this.shape_53.setTransform(661.9,456.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AgYDMQgEgDgNgBIgCgEQgDgDgMAAIgBgCQgCgCgFgDIgHgCQABjIgfi/IDPAAQgVCkgKCkIgBABIgEABQgOAEgEACIgDACIgBACIgDACIgKAAQgFAAgBAHQgGgBAAAHIABADIABADIgCAEQgCACAAADIABAIIAAACIAAAFQgHAEgEAIQgCACgFADQgDABgBADQAAABAAABQAAABAAAAQAAABgBAAQAAABAAAAIgBAAIgBAAQgGgCgDACQgCABgBADQgDAAgEgEg");
	this.shape_54.setTransform(661.9,436.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#606060").s().p("AgYDHQgEgDgNgBIgCgFQgDgCgMgBIgBAAQgCgDgFgDIgHgCQABjDgfi6IDPAAQgVCggKCfIgBACIgEAAQgOAEgEACIgDACIgBADIgDACIgKAAQgFAAgBAFQgGAAAAAGIABAEIABADIgCADQgCADAAADIABAIIAAACIAAAEQgHAEgEAJQgCABgFACQgDACgBADQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgBAAIgBAAQgGgCgDACQgCACgBADQgDgBgEgDg");
	this.shape_55.setTransform(661.9,435.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5B5B5B").s().p("AgYDBQgEgCgNgCIgCgDQgDgEgMAAIgBgBQgCgDgFgCIgHgDQABi8gfi1IDPAAQgVCbgKCcIgBABIgEAAQgOAEgEACIgDACIgBACQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgKAAQgFABgBAGQgGgBAAAGIABAEIABACIgCAEQgCADAAADIABAIIAAABIAAAFQgHADgEAIQgCACgFACQgDACgBADQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAIgBAAIgBAAQgGgCgDABQgCACgBAEQgDgBgEgEg");
	this.shape_56.setTransform(661.9,435.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#555555").s().p("AgYC8QgEgDgNgBIgCgEQgDgDgMAAIgBgBQgCgDgFgCIgHgCQABi4gfiwIDPAAQgVCXgKCXIgBABIgEABQgOADgEACIgDACIgBACQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgKAAQgFAAgBAGQgGgBAAAHIABACIABAEIgCADQgCACAAAEIABAHIAAACIAAADQgHAFgEAHQgCACgFACQgDABgBADIgBAFIgBAAIgBAAQgGgCgDACQgCABgBADQgDgBgEgDg");
	this.shape_57.setTransform(661.9,434.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36}]}).to({state:[{t:this.shape_36}]},10).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_57}]},1).wait(148));

	// Layer 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_28 = new cjs.Graphics().p("Ay7YqMAAAgxTMAl3AAAMAAAAxTg");
	var mask_1_graphics_31 = new cjs.Graphics().p("Ay7YqMAAAgxTMAl3AAAMAAAAxTg");
	var mask_1_graphics_32 = new cjs.Graphics().p("Ay7YqMAAAgxTMAl3AAAMAAAAxTg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_1_graphics_28,x:664.6,y:531.5}).wait(3).to({graphics:mask_1_graphics_31,x:664.6,y:531.5}).wait(1).to({graphics:mask_1_graphics_32,x:664.6,y:531.5}).wait(148));

	// Layer 8
	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.setTransform(639.7,506.9,0.6,0.6,0,0,0,123,149);

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({startPosition:0},0).to({y:554.9},15,cjs.Ease.get(1)).to({y:557.1},1,cjs.Ease.get(1)).to({y:565.8},1).to({y:569.7},1).to({rotation:2.5,x:639.2,y:605.7},3,cjs.Ease.get(-0.5)).to({regY:149.1,rotation:0,x:638.5,y:606.9},4).wait(145));

	// Layer 6
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(663.4,633.5,0.6,0.6,0,0,0,113,23.5);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.instance_4.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(-1)).wait(149));

	// Layer 9
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AhnDgQAcjIACi+IABgBIAEAAIAGADQAFAFAGgBQACAEANAHQALAGAHABIARgKQABgCAFAAQAGgCABgHQALgCAEgJIAEgOIAFgJQADgDAAgDQAAgEAEgFQADgGACAAIAGgBIAFgEIAFADQAFADADABIAAAAIAAACQAHDDAZDzg");
	this.shape_58.setTransform(661.9,479.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("AhnDeQAdjIAEi+IABAAIAFgBIAFAEQAGAEAGAAQABAEANAHQAMAGAGABIAPgKIAIgBQAGgCACgHQAKgCAEgKIAFgOIAFgIQADgEAAgCQABgDADgHQADgFACAAIAHAAIAEgGIAFAEQAEAEADAAIACAAIAAABQAEDEAXDzg");
	this.shape_59.setTransform(662.4,487.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#666666").s().p("AhnDcQAgjIAIi+IAAAAIAEgBIAGAFQAGADAGgBQABAFAMAHQAMAHAGAAIAQgJIAIgBQAGgDACgGQAKgCAFgJQACgLACgEIAGgIQADgDAAgCQAAgEADgGQAEgFACAAIAGAAIAFgGIAFAFQAEADADAAIABAAIAAABQACDEATDzg");
	this.shape_60.setTransform(663.2,500.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AhnDYQAkjHALi+IABAAIAEgBIAFAFQAGAEAHgBQAAAFAMAIQAMAGAGAAIAQgJIAJgBQAFgBACgIQALgBAEgJIAFgOIAGgIQACgEAAgCIAEgJQAEgGACAAIAHAAIAEgFIAFAEQAEADAEABIABAAIAAACQgCDDAOD0g");
	this.shape_61.setTransform(664.3,516.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#666666").s().p("AhnDKQAli6AMixIAAgBIAFAAIAFADQAGAEAHAAQABAFAMAHQAMAHAGAAIAQgIQACgBAHAAQAGgBACgHQAKgCAFgHIAFgOIAGgIIADgFIAEgIQADgGACAAIAHAAIAFgEIAEAEQAFAEADAAIAAAAIAAABQgDC2AMDgg");
	this.shape_62.setTransform(663.2,518.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#666666").s().p("AhnC8QAmisAMinIABAAIAFAAIAGAEQAFADAHAAQABAFANAHQAMAGAEABIATgHIAJgBQAFgCACgGQALAAAEgIIAGgNIAFgGIAEgGQAAgDAEgEQAEgGACAAIAGABIAFgEIAFAEQAEADADAAIABAAIAAACQgFCoAJDMg");
	this.shape_63.setTransform(662.4,520.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#666666").s().p("AhnCtQAnidANicIABAAIAFAAIAFAEQAGADAHAAQABAFANAGQANAHAEAAIATgGIAJgBQAGgBABgFQAMgBAFgHIAFgMIAGgGIADgEQABgDADgFQAEgEACAAIAGABIAFgEIAFAEIAIADIAAAAIAAACQgHCbAHC3g");
	this.shape_64.setTransform(661.4,521.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("Ag0iCIABAAQAEgBABABIAGAEQAGADAHAAQABAEAOAHQAMAGAFABIATgGIAJAAQAGgBACgFQALgBAFgGQADgIACgCQACgDAFgDIADgEQAAgDAEgEQADgEACAAIAHABIAFgDIAFAEQAEACADABIABAAIAAABQgJCOAFCjIjQACQAoiQAOiQg");
	this.shape_65.setTransform(660.8,523.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#666666").s().p("Ag0h4IABAAIAFAAIAGAEQAGADAHAAQABAEAOAGQAMAGAFAAIATgFIAJAAQAGgBACgFQALAAAFgGQADgHACgDQABgCAGgDIADgDQAAgDAEgEQADgEACABIAHABIAFgDQABAAAEADIAHADIABAAIAAABQgJCCAFCWIjQACQAoiEAOiFg");
	this.shape_66.setTransform(660.8,524.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("Ag0htIABAAIAFAAIAGAEQAGACAHAAQABADAOAGQAMAFAFABIATgFIAJAAQAGAAACgFQALgBAFgFQADgGACgDQABgBAGgDIADgEQAAgCAEgDQADgEACAAIAHABIAFgDIAFADIAHAEIABAAIAAABQgJB2AFCJIjQACQAoh5AOh5g");
	this.shape_67.setTransform(660.8,525.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#666666").s().p("Ag0hiIABAAQAEgBABABIAGADQAGACAHAAQABADAOAFQAMAFAFABIATgFIAJAAQAGAAACgEQALgBAFgEQADgHACgCIAHgEIADgDQAAgCAEgDQADgDACAAIAHABIAFgDIAFADIAHADIABAAIAAABQgJBrAFB7IjQACQAohtAOhtg");
	this.shape_68.setTransform(660.8,527.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#666666").s().p("Ag0hYIABAAIAFAAIAGADQAGACAHABQABACAOAFQAMAEAFAAIATgDIAJAAQAGgCACgDQALAAAFgEQADgGACgBQABgCAGgCIADgDQAAgBAEgDQADgEACABIAHAAIAFgCIAFADIAHACIABAAIAAABQgJBgAFBuIjQABQAohhAOhig");
	this.shape_69.setTransform(660.8,528.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#666666").s().p("Ag0hNIABAAIAFAAIAGACQAGACAHAAQABADAOADQAMAEAFABIATgEIAJAAQAGAAACgDQALAAAFgFQADgEACgBQABgCAGgCIADgCQAAgCAEgDQADgCACAAIAHAAIAFgBIAFACIAHACIABAAIAAABQgJBUAFBhIjQABQAohWAOhVg");
	this.shape_70.setTransform(660.8,529.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#666666").s().p("Ag0hCIABAAIAFAAIAGACQAGABAHAAQABADAOADIARAEIATgDIAJAAQAGgBACgDQALAAAFgDQADgEACgBQABgCAGgBIADgCQAAgCAEgCIAFgCIAHAAIAFgBIAFACIAHACIABAAIAAAAQgJBJAFBTIjQABQAohKAOhJg");
	this.shape_71.setTransform(660.8,531);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#666666").s().p("Ag0g3IABAAIAFAAIAGABQAGABAHABQABACAOACQAMADAFAAIATgCIAJAAQAGgBACgCQALAAAFgDQADgEACgBIAHgCIADgBQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAIAFgDIAHABIAFgCIAFACIAHACIABAAIAAABQgJA9AFBFIjQACQAog/AOg9g");
	this.shape_72.setTransform(660.8,532.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#666666").s().p("Ag0gtIABAAIAFAAIAGACIANABQABABAOADIARACIATgCIAJAAQAGAAACgCQALAAAFgDQADgDACAAIAHgCIADgCQAAAAAAAAQABgBAAAAQABAAAAgBQABAAABAAIAFgCIAHABIAFgCIAFACIAHABIABAAIAAABQgJAyAFA4IjQABQAogzAOgyg");
	this.shape_73.setTransform(660.8,533.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#666666").s().p("Ag0giIABAAIAFAAIAGABIANABQABABAOACIARABIATgBIAJAAQAGAAACgCQALAAAFgCIAFgCIAHgCIADgBIAEgCIAFgBIAHAAIAFgBIAFABIAHABIABAAIAAABQgJAmAFArIjQABQAognAOgmg");
	this.shape_74.setTransform(660.8,534.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#666666").s().p("Ag9gJIABAAIADgFIADgHIAGgKIAAAAIAFAAIAAAAIAGABIALABIACAAIAOADIAIABIAJAAIAKgBIAIAAIAEAAIAFAAIAEgBIAEgBQALAAAFgBIABgBIAEgCIACgBIAEAAIAEgBIADgCIAGgBIAGAAIAAAAIAFgBIAEABIABABIAEAAIAEAAIgBAJIAAABQgDAJAAALQgFAUABAYIjLABQAegZAOgXg");
	this.shape_75.setTransform(660.9,535.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#666666").s().p("Ag7gIIABgBIACgEIAFgFIAFgJIABAAIAEAAIABAAIAFABIALAAIACAAIANACIAIABIAJABIAKgBIAIgBIAEAAIAEAAIAFAAIADgBQALAAAFgBIAAAAIAFgCIADgBIADAAIADgCIAEgBIAGgBIAFAAIABAAIAFgBIADABIABAAIAEAAIADABIABAAIAAAAIAAAIIAAAAQgDAKAAAJQgHASgCAVIjFABQAegXAPgUg");
	this.shape_76.setTransform(661,535.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("Ag6gIIABAAIADgEIAFgFIAFgHIABAAIAEAAIABAAIAFAAIALABIABAAIAOACIAHABIAKABIAJgBIAIgBIAEAAIAEAAIAFAAIACgBQALAAAFgBIAAgBIAFgBIACgBIADAAIAEgBIAEgBIAFgBIAFAAIABAAIAFgBIADABIABAAIAEAAIADABIABAAIABAGIAAABQgDAJABAJQgJAPgGASIjAABQAfgUAPgTg");
	this.shape_77.setTransform(661,536.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#666666").s().p("Ag5gHIABgBIADgDIAFgDIAHgHIAAAAIAEAAIABAAIAFABIAKAAIACAAIANACIAGABIAKAAIAKAAIAHAAIAEAAIAFAAIAEgBIADgBIAOgBIABAAIAFgCIABAAIAEgBIADAAIAEgBIAAAAIAFgBIAGAAIABAAIAEgBIADABIABAAIAEAAIAEABIABAAIACAFIAAABQgGAIACAJQgLAMgHAPIi9ABQAhgSAPgQg");
	this.shape_78.setTransform(660.7,537.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#666666").s().p("Ag4gHIABAAIAEgCIAFgEIAHgEIABAAIADAAIABAAIAFAAIAKAAIACAAIANACIAFABIALAAIAJgBIAHAAIADAAIAFAAIAEAAIADgBIAOgBIABAAIAEgBIACgBIAEAAIADgBIAEgBIAEAAIAGAAIABAAIAEgBIADABIABAAIAEAAIADAAIABAAIABAAIADAFIAAAAQgGAIACAIQgNAKgKAMIi4ABQAjgQAOgOg");
	this.shape_79.setTransform(660.7,537.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#666666").s().p("Ag3gGIABAAIAEgCIAFgCIAIgEIABAAIADAAIABAAIAFAAIAKABIACAAIAMABIAFAAIALAAIAIAAIAIAAIACAAIAGAAIADAAIADgBIAOgBIAAAAIAFgBIACAAIADAAIADgBIAEgBIAEAAIAGAAIABAAIAFgBIACABIAAAAIAEAAIAEAAIABAAIABAAIADAEIABAAQgGAHACAHQgPAIgNAJIizABQAkgOAOgLg");
	this.shape_80.setTransform(660.8,538.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#666666").s().p("AhpAOQAmgKAOgJIABAAIAEgCIAFgBIAJgDIAAAAIADAAIABAAIAFAAIAKABIABAAIANABIAEAAIALAAIAIAAIAHAAIADAAIAFAAIADgBIADAAIAOgBIAAAAIAFgBIACAAIADAAIADAAIAEgBIAAAAIADAAIAGgBIACAAIAEAAIACAAIABAAIADAAIAFABIAAAAIABAAIAFACQgIAHAEAGQgRAGgQAGg");
	this.shape_81.setTransform(660.8,538.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#666666").s().p("AhpALQAmgJAPgHIABAAIAEgBIAGAAIAJgBIABAAIACAAIABAAIAFAAIAJAAIACAAIAMABIAEAAIALAAIAIAAIAHAAIACAAIAFAAIAEAAIADAAIAMgBIABAAIAFgBIACAAIACAAIADAAIAEAAIAEgBIAGAAIABAAIAEAAIACAAIABAAIADAAIAEAAIACAAIAAAAIABAAIAFABQgIAHAEAFIglAHg");
	this.shape_82.setTransform(660.8,539.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#666666").s().p("AgzgEIABAAIAFAAIAFAAIAOAAIAOAAIARABIATAAIAJAAIAIgBIAQAAIAGgBIAGAAIADAAIAEAAIAGAAIAHAAIAEAAIAFAAIAIAAIAAAAQgJAFAFAGIjPAAQAogGAOgEg");
	this.shape_83.setTransform(660.8,540);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#666666").s().p("ABZALIgDAAIgEAAIgEAAIgCAAIgDgBIgEAAIgLAAIgFgBIgGAAIgMAAIgNAAIgIABIgJAAIgDAAIgCAAIhogKIgBAAQAogEAQgGIABAAIAGAAIAFAAIAOAAIAQAAIASABIALAAIAHAAIAJABIAHABIAPABIAFAAIAGABIAEAAIADAAIAFAAIAHABIAEABIAFAAIAHABQgIAFAEAIIAAAAIgCAAIgEAAIgEAAIgDAAg");
	this.shape_84.setTransform(660.8,540.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#666666").s().p("ABcARIgDAAIgEAAIgDgBIgEAAIgDgBIgDAAIgEgBIgLAAIgGgBIgFAAIgOAAIgMABIgJAAIgJABIgCAAIgDAAIgBAAIhkgTIgBAAQApgGASgGIAAAAIAGAAIAHAAIAOABIAPAAIATAAIANAAIAGACIAHACIAHABIAPADIAFABIAFABIADABIAEABIAEABQAGAAABABIAEABIAEAAIAHABQgIAHAFAIIgBAAIgBAAIgFABIgEAAg");
	this.shape_85.setTransform(660.8,541);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#666666").s().p("ABdAWIgEAAIgEAAIgEAAIgEgBIgCAAIgEgBIgEgCIgLAAIgGgBIgFAAIgPgBIgMABIgKABIgIABIgDAAIgDAAIhigdIgBAAQApgGAVgFIABAAIAFAAIAGAAIAQABIAPAAIAUAAIAMAAIAGACIAIADQAFABABACQAKABADADIAFABQABACAEABIACABIAEABIAFABIAFABIAEABIAFACIAGADQgHAHAEAJIgBAAIgBAAIgFAAIgDAAg");
	this.shape_86.setTransform(660.8,541.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#666666").s().p("ABZAbIgEAAIgEgBIgEgBIgCAAIgEgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgMgBIgGgBIgGAAIgOgBIgOABIgKACIgHAAIgEABIgEAAQgsgWgygTIgBAAQAqgEAWgGIAAAAIAHAAIAGAAIAQAAIAPABIAXAAIAMAAIAGAEQABABAFACIAGADQAIADAEAEIAFACQAAACAEABIADABQAAAAAAAAQAAABAAAAQABAAAAAAQABABABAAIAEABQAEAAABACIADACIAFACIAFADIABAAQgGAJADAIIgBAAIAAAAIgGABIgDAAIgEAAg");
	this.shape_87.setTransform(660.8,542.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#666666").s().p("ABZAgIgEAAIgFgBIgDAAIgDgBIgEgBIgEgDIgMgBIgGgBIgHAAIgOgBIgOABIgKACIgIABIgEABIgEAAQgpgbgygYIgBAAQAqgEAYgFIABAAIAGAAIAHAAIARAAIAPABIAYAAIAMAAIAGADQABADAFADQAEABABACQAIAEADAEIAEADQABADADABIADACIACACIAEABQAFABAAACIAEACIADADIAGAEQgGAJAEAJIgBAAIgBAAIgFABIgEABIgEgBg");
	this.shape_88.setTransform(660.7,542.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#666666").s().p("ABZAlIgEABIgFgBIgDgCIgDgBIgEgBIgFgCIgMgCIgGgBIgHAAIgPgBIgOABIgLADIgIAAIgEABIgEAAIgBAAQgmgggxgeIgBAAQArgDAagEIABAAIAGAAIAHAAIARAAIARAAIAYAAIANAAIAFAFQABADAEADQAEACABACQAHAFADAFIADAEQAAABABAAQAAABAAAAQABABAAAAQABAAABABIACACQAAABAAAAQABAAAAABQAAAAABAAQAAAAABAAIAEACQAEACAAADQAAAAAAAAQABABAAAAQAAAAABABQABAAAAAAIADADIAGAGQgGAJAEAKIgBAAIAAAAIgGAAIgEABIgEgBg");
	this.shape_89.setTransform(660.7,543.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#666666").s().p("ABZArIgFAAIgEgBIgEgBIgDgBIgFgCQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgFgCgJABQgCgCgEAAIgHAAIgPgBIgPABQgIABgBACIgKABIgEAAIgFAAQglgkgvgkQAqgDAcgEIABAAIAHAAIAHAAIARAAIARAAIAaABIANAAIAEAFQACAEADADQADACABADQAGAHADAFIAEAFQAAACADADIACACIACABIAEAEQADADAAACIAEADIADAEIAEAHQgEAJADAKIgBAAIAAAAIgBAAIgFABIgEABIgEgBg");
	this.shape_90.setTransform(660.8,543.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#666666").s().p("ABZAwIgFABIgFgCIgDgBIgDgCIgFgBIgEgDQgGgCgIgBQgCgBgEAAIgHAAIgQgCIgQACIgJADIgKABIgFABIgEAAIAAAAQgjgpgugqQArgDAegDIAAAAIAHAAIAIAAIARAAIATAAIAaABIANAAIAEAGQABAEADAEQADADABADQAFAGADAHIADAFQAAADADADIABADQAAAAABAAQAAAAAAAAQAAAAABAAQAAABABAAIADAFQADADAAADIADADIADAEIAEAIIAAAAQgEAKADAKIAAAAIAAAAIgBAAIgGABIgEABIgEgBg");
	this.shape_91.setTransform(660.8,544.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#666666").s().p("ABZA2IgFAAIgFgBIgDgDIgDgBIgGgCIgEgDQgFgDgJAAQgCgCgEAAIgIAAIgQgCIgQACQgHADgCACIgLAAIgFACIgFAAQgfgvgugvIBLgFIABAAIAHAAIAIAAIARAAIAUAAIAbAAIAOAAIADAHQABAEADAFQACADABADQAFAIACAIIACAGQABADACADIABADQAAAAADADIACAFIAEAGQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIACAFIAEAHIAAABQgDAKADALIgBAAIABABIgBAAIgHABIgDABIgFgBg");
	this.shape_92.setTransform(660.7,544.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#666666").s().p("ABZA7IgFAAIgFgCIgEgCIgDgBIgFgCIgFgFQgFgCgJAAQgCgCgFAAIgHAAIgRgCQgGAAgKADQgIACgCABIgLABIgFACIgFAAIAAAAQgdg0gtg0IBOgFIABAAIAHAAIAIAAIARAAIAVAAIAcAAIAOAAIADAIIADAKIADAHQAEAJACAIIACAHIACAHIABADQAAABACACIACAGQADADAAAFIACADIACAGIAEAJIAAABQgCAKACALIAAAAIAAAAIgBAAIgGABIgEACIgFgBg");
	this.shape_93.setTransform(660.7,545.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#666666").s().p("ABZBAIgFAAIgFgCIgEgCIgDgBIgGgDIgFgEQgEgDgKAAQgCgCgFgBIgIAAIgRgCIgPADQgKACgCACQgGAAgGACIgFABIgEAAQgbg5gtg6IBRgDIABAAIAIAAIAIAAIASAAIAVAAIAdAAIAPAAIACAJIACAKIACAJQAEAJABAJIACAIIACAHIABADIACAFIACAFIACAJIACAFIACAFIADAKIAAAAQgCALADAMIgBAAIAAAAIgBAAIgGABIgEACIgFgBg");
	this.shape_94.setTransform(660.7,545.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#666666").s().p("ABZBFIgGABIgFgCQgDgCgBgBIgDgCIgFgCIgFgFQgFgDgKAAQgCgCgFgBIgIAAIgSgCIgPADQgLADgCACIgMABIgFACIgEAAIgBAAQgYg/gsg/IBUgDIAAAAIAIAAIAJAAIATAAIAWAAIAeABIAOAAIACAJIACALIABAKIAEAUIABAIIACAJIABACQAAADABADIACAGQACAFAAAEIABAFIACAHIADAKIAAABQgCAMADALIAAABIgBAAIgHABIgEACIgFgCg");
	this.shape_95.setTransform(660.7,546.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#666666").s().p("ABZBKIgGABQgCAAgDgCQgBAAgBgBQAAAAgBgBQAAAAgBAAQAAgBAAAAIgDgCIgGgDIgFgFQgFgDgKAAQgCgDgGAAIgIAAIgSgDIgPAEQgMADgCABQgGAAgGACIgFACIgFAAIAAAAQgWhEgrhFIBWgCIABAAIAIAAIAJAAIATAAIAXABIAfAAIAOAAIACAKIABANIABAKIADAVIABAJIABAJIABADIABAHIABAGIACALIABAFIABAHIADAMIAAAAQgBAMACAMIAAABIgBAAIgHABIgEACIgFgCg");
	this.shape_96.setTransform(660.7,546.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#666666").s().p("ABZBQIgGAAQgDAAgDgCQgBAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIgEgCIgGgDIgFgFQgFgEgKAAQgDgCgFgBIgIAAIgSgDQgIAAgJAEQgNADgBACQgGAAgGABIgGADIgEAAIgBAAQgThKgqhKIBYgBIACAAIAHAAIAIAAIAVAAIAYAAIAfABIAQAAIAAAKIAAAOIABALIACAXIAAAKIABAKIABADIABAHIABAHIACALIAAAGIABAIIACAMIAAABQAAAMACAMIAAABIgBAAIgHACIgFACIgEgCg");
	this.shape_97.setTransform(660.8,547.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#666666").s().p("ABZBWIgHAAQgCAAgDgCQgEgCAAgCIgEgCIgGgDQgCgCgDgEQgFgDgLgBQgCgCgGgBIgIAAIgTgDQgHAAgKAEQgNADgBACQgHAAgGACIgFACIgFAAIgBAAQgQhOgphPIBagBIABAAIAJAAIAHAAIAXAAIAYAAIAgABIAQAAIAAALIAAAPIAAALIABAZIAAALIAAALIAAADIABAIIABAIIABALIAAAHIABAHIACAOIAAAAIACAaIAAAAIAAAAIgIACIgFACIgEgBg");
	this.shape_98.setTransform(660.8,547.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#666666").s().p("ABYBbIgHAAQgCAAgDgCQgEgDAAgBIgDgCIgHgEQgCgBgDgFQgFgEgLAAQgCgDgGgBIgJAAIgTgDQgFAAgMAEQgOAEgBACQgHAAgGACIgGADIgFAAIgBAAQgOhVgohUIDQABQgFBgAJBTIAAAAIgBAAIgHACIgFADIgFgCg");
	this.shape_99.setTransform(660.8,548.5);

	this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_58}]},28).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).wait(111));

	// Layer 7 copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EAoqAm5MAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EAoqAm5MAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EAoqAnYMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EAoqAn1MAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EAoqAoPMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EAoqAooMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EAoqAo+MAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EAoqApSMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EAoqAplMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EAoqAp1MAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EAoqAqCMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EAoqAqOMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EAoqAqYMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EAoqAqfMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EAoqAqlMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EAoqAqoMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EAoqAqpMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EAoqAqpMAAAggVILFAAMAAAAgVg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EAoqAqpIAA6YILFAAIAAaYg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EAoqAqpIAA0cILFAAIAAUcg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:331.1,y:248.9}).wait(10).to({graphics:mask_2_graphics_10,x:331.1,y:248.9}).wait(1).to({graphics:mask_2_graphics_11,x:331.1,y:252}).wait(1).to({graphics:mask_2_graphics_12,x:331.1,y:254.9}).wait(1).to({graphics:mask_2_graphics_13,x:331.1,y:257.6}).wait(1).to({graphics:mask_2_graphics_14,x:331.1,y:260}).wait(1).to({graphics:mask_2_graphics_15,x:331.1,y:262.3}).wait(1).to({graphics:mask_2_graphics_16,x:331.1,y:264.3}).wait(1).to({graphics:mask_2_graphics_17,x:331.1,y:266.1}).wait(1).to({graphics:mask_2_graphics_18,x:331.1,y:267.7}).wait(1).to({graphics:mask_2_graphics_19,x:331.1,y:269.1}).wait(1).to({graphics:mask_2_graphics_20,x:331.1,y:270.3}).wait(1).to({graphics:mask_2_graphics_21,x:331.1,y:271.2}).wait(1).to({graphics:mask_2_graphics_22,x:331.1,y:272}).wait(1).to({graphics:mask_2_graphics_23,x:331.1,y:272.5}).wait(1).to({graphics:mask_2_graphics_24,x:331.1,y:272.8}).wait(1).to({graphics:mask_2_graphics_25,x:331.1,y:272.9}).wait(1).to({graphics:mask_2_graphics_26,x:331.1,y:272.9}).wait(1).to({graphics:mask_2_graphics_27,x:331.1,y:273}).wait(1).to({graphics:mask_2_graphics_28,x:331.1,y:273}).wait(152));

	// Layer 6 copy
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.setTransform(649.8,521.1,0.6,0.6,0,0,0,50,176.9);

	this.instance_5.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({y:409.5},0).wait(152));

	// Layer 12
	this.instance_6 = new lib.polka();
	this.instance_6.setTransform(581.7,289.2,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180));

	// Layer 13
	this.instance_7 = new lib.polka_emptypngcopy();
	this.instance_7.setTransform(523.6,587,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(796,581,1600,1162);


// symbols:
(lib.girya = function() {
	this.initialize(img.girya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,298);


(lib.izo_na_gire_black = function() {
	this.initialize(img.izo_na_gire_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,21);


(lib.izo_na_gire_blue = function() {
	this.initialize(img.izo_na_gire_blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,21);


(lib.polka = function() {
	this.initialize(img.polka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,304);


(lib.polka_emptypngcopy = function() {
	this.initialize(img.polka_emptypngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,902,243);


(lib.ten_giri = function() {
	this.initialize(img.ten_giri);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,42);


(lib.ten_izo = function() {
	this.initialize(img.ten_izo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,354);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ten_giri();

	this.instance_1 = new lib.ten_giri();
	this.instance_1.setTransform(0,5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,226,47);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ten_izo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,354);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.izo_na_gire_black();
	this.instance.setTransform(142.5,36);

	this.instance_1 = new lib.girya();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,246,298);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.izo_na_gire_blue();
	this.instance.setTransform(142.6,35.6);

	this.instance_1 = new lib.girya();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,246,298);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;