(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1600,
	height: 1162,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:dir + "black_izocopy.png", id:"black_izocopy"},
		{src:dir + "black_izo_destroy.png", id:"black_izo_destroy"},
		{src:dir + "black_izo_destroy2.png", id:"black_izo_destroy2"},
		{src:dir + "blue_izo.png", id:"blue_izo"},
		{src:dir + "inei.png", id:"inei"},
		{src:dir + "inei_izo.png", id:"inei_izo"},
		{src:dir + "izo.png", id:"izo"},
		{src:dir + "izopngcopy.png", id:"izopngcopy"},
		{src:dir + "otmetki.png", id:"otmetki"},
		{src:dir + "term_0.png", id:"term_0"},
		{src:dir + "term_50.png", id:"term_50"}
	]
};

// stage content:
(lib.izolenta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.otmetki();
	this.instance.setTransform(779.9,451.2,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(181));

	// Layer 12 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EA25Au/IAAzRIMEAAIAATRg");
	var mask_graphics_1 = new cjs.Graphics().p("EA25Au/IAAzLIMEAAIAATLg");
	var mask_graphics_2 = new cjs.Graphics().p("EA25Au+IAAzEIMEAAIAATEg");
	var mask_graphics_3 = new cjs.Graphics().p("EA25Au+IAAy+IMEAAIAAS+g");
	var mask_graphics_4 = new cjs.Graphics().p("EA25Au+IAAy4IMEAAIAAS4g");
	var mask_graphics_5 = new cjs.Graphics().p("EA25Au+IAAyyIMEAAIAASyg");
	var mask_graphics_6 = new cjs.Graphics().p("EA25Au+IAAysIMEAAIAASsg");
	var mask_graphics_7 = new cjs.Graphics().p("EA25Au+IAAymIMEAAIAASmg");
	var mask_graphics_8 = new cjs.Graphics().p("EA25Au9IAAyfIMEAAIAASfg");
	var mask_graphics_9 = new cjs.Graphics().p("EA25Au9IAAyZIMEAAIAASZg");
	var mask_graphics_10 = new cjs.Graphics().p("EA25Au9IAAyTIMEAAIAASTg");
	var mask_graphics_11 = new cjs.Graphics().p("EA25Au9IAAyNIMEAAIAASNg");
	var mask_graphics_12 = new cjs.Graphics().p("EA25Au9IAAyHIMEAAIAASHg");
	var mask_graphics_13 = new cjs.Graphics().p("EA25Au9IAAyBIMEAAIAASBg");
	var mask_graphics_14 = new cjs.Graphics().p("EA25Au8IAAx6IMEAAIAAR6g");
	var mask_graphics_15 = new cjs.Graphics().p("EA25Au8IAAx1IMEAAIAAR1g");
	var mask_graphics_16 = new cjs.Graphics().p("EA25Au8IAAxvIMEAAIAARvg");
	var mask_graphics_17 = new cjs.Graphics().p("EA25Au8IAAxpIMEAAIAARpg");
	var mask_graphics_18 = new cjs.Graphics().p("EA25Au8IAAxjIMEAAIAARjg");
	var mask_graphics_19 = new cjs.Graphics().p("EA25Au8IAAxdIMEAAIAARdg");
	var mask_graphics_20 = new cjs.Graphics().p("EA25Au8IAAxXIMEAAIAARXg");
	var mask_graphics_21 = new cjs.Graphics().p("EA25Au7IAAxQIMEAAIAARQg");
	var mask_graphics_22 = new cjs.Graphics().p("EA25Au7IAAxKIMEAAIAARKg");
	var mask_graphics_23 = new cjs.Graphics().p("EA25Au7IAAxEIMEAAIAAREg");
	var mask_graphics_24 = new cjs.Graphics().p("EA25Au7IAAw+IMEAAIAAQ+g");
	var mask_graphics_25 = new cjs.Graphics().p("EA25Au7IAAw4IMEAAIAAQ4g");
	var mask_graphics_26 = new cjs.Graphics().p("EA25Au7IAAwyIMEAAIAAQyg");
	var mask_graphics_27 = new cjs.Graphics().p("EA25Au6IAAwrIMEAAIAAQrg");
	var mask_graphics_28 = new cjs.Graphics().p("EA25Au6IAAwlIMEAAIAAQlg");
	var mask_graphics_29 = new cjs.Graphics().p("EA25Au6IAAwfIMEAAIAAQfg");
	var mask_graphics_30 = new cjs.Graphics().p("EA25Au6IAAwZIMEAAIAAQZg");
	var mask_graphics_31 = new cjs.Graphics().p("EA25Au6IAAwTIMEAAIAAQTg");
	var mask_graphics_32 = new cjs.Graphics().p("EA25Au6IAAwNIMEAAIAAQNg");
	var mask_graphics_33 = new cjs.Graphics().p("EA25Au5IAAwGIMEAAIAAQGg");
	var mask_graphics_34 = new cjs.Graphics().p("EA25Au5IAAwAIMEAAIAAQAg");
	var mask_graphics_35 = new cjs.Graphics().p("EA25Au5IAAv6IMEAAIAAP6g");
	var mask_graphics_36 = new cjs.Graphics().p("EA25Au5IAAv0IMEAAIAAP0g");
	var mask_graphics_37 = new cjs.Graphics().p("EA25Au5IAAvuIMEAAIAAPug");
	var mask_graphics_38 = new cjs.Graphics().p("EA25Au5IAAvoIMEAAIAAPog");
	var mask_graphics_39 = new cjs.Graphics().p("EA25Au4IAAvhIMEAAIAAPhg");
	var mask_graphics_40 = new cjs.Graphics().p("EA25Au4IAAvbIMEAAIAAPbg");
	var mask_graphics_41 = new cjs.Graphics().p("EA25Au4IAAvVIMEAAIAAPVg");
	var mask_graphics_42 = new cjs.Graphics().p("EA25Au4IAAvPIMEAAIAAPPg");
	var mask_graphics_43 = new cjs.Graphics().p("EA25Au4IAAvJIMEAAIAAPJg");
	var mask_graphics_44 = new cjs.Graphics().p("EA25Au4IAAvDIMEAAIAAPDg");
	var mask_graphics_45 = new cjs.Graphics().p("EA25Au4IAAu9IMEAAIAAO9g");
	var mask_graphics_46 = new cjs.Graphics().p("EA25Au3IAAu2IMEAAIAAO2g");
	var mask_graphics_47 = new cjs.Graphics().p("EA25Au3IAAuwIMEAAIAAOwg");
	var mask_graphics_48 = new cjs.Graphics().p("EA25Au3IAAuqIMEAAIAAOqg");
	var mask_graphics_49 = new cjs.Graphics().p("EA25Au3IAAukIMEAAIAAOkg");
	var mask_graphics_50 = new cjs.Graphics().p("EA25Au3IAAueIMEAAIAAOeg");
	var mask_graphics_51 = new cjs.Graphics().p("EA25Au3IAAuYIMEAAIAAOYg");
	var mask_graphics_52 = new cjs.Graphics().p("EA25Au2IAAuRIMEAAIAAORg");
	var mask_graphics_53 = new cjs.Graphics().p("EA25Au2IAAuLIMEAAIAAOLg");
	var mask_graphics_54 = new cjs.Graphics().p("EA25Au2IAAuFIMEAAIAAOFg");
	var mask_graphics_55 = new cjs.Graphics().p("EA25Au2IAAt/IMEAAIAAN/g");
	var mask_graphics_56 = new cjs.Graphics().p("EA25Au2IAAt5IMEAAIAAN5g");
	var mask_graphics_57 = new cjs.Graphics().p("EA25Au2IAAtzIMEAAIAANzg");
	var mask_graphics_58 = new cjs.Graphics().p("EA25Au1IAAtsIMEAAIAANsg");
	var mask_graphics_59 = new cjs.Graphics().p("EA25Au1IAAtmIMEAAIAANmg");
	var mask_graphics_60 = new cjs.Graphics().p("EA25Au1IAAtgIMEAAIAANgg");
	var mask_graphics_61 = new cjs.Graphics().p("EA25Au1IAAtaIMEAAIAANag");
	var mask_graphics_62 = new cjs.Graphics().p("EA25Au1IAAtUIMEAAIAANUg");
	var mask_graphics_63 = new cjs.Graphics().p("EA25Au1IAAtOIMEAAIAANOg");
	var mask_graphics_64 = new cjs.Graphics().p("EA25Au0IAAtHIMEAAIAANHg");
	var mask_graphics_65 = new cjs.Graphics().p("EA25Au0IAAtBIMEAAIAANBg");
	var mask_graphics_66 = new cjs.Graphics().p("EA25Au0IAAs7IMEAAIAAM7g");
	var mask_graphics_67 = new cjs.Graphics().p("EA25Au0IAAs1IMEAAIAAM1g");
	var mask_graphics_68 = new cjs.Graphics().p("EA25Au0IAAsvIMEAAIAAMvg");
	var mask_graphics_69 = new cjs.Graphics().p("EA25Au0IAAspIMEAAIAAMpg");
	var mask_graphics_70 = new cjs.Graphics().p("EA25AuzIAAsiIMEAAIAAMig");
	var mask_graphics_71 = new cjs.Graphics().p("EA25AuzIAAscIMEAAIAAMcg");
	var mask_graphics_72 = new cjs.Graphics().p("EA25AuzIAAsXIMEAAIAAMXg");
	var mask_graphics_73 = new cjs.Graphics().p("EA25AuzIAAsRIMEAAIAAMRg");
	var mask_graphics_74 = new cjs.Graphics().p("EA25AuzIAAsLIMEAAIAAMLg");
	var mask_graphics_75 = new cjs.Graphics().p("EA25AuzIAAsFIMEAAIAAMFg");
	var mask_graphics_76 = new cjs.Graphics().p("EA25AuzIAAr/IMEAAIAAL/g");
	var mask_graphics_77 = new cjs.Graphics().p("EA25AuyIAAr4IMEAAIAAL4g");
	var mask_graphics_78 = new cjs.Graphics().p("EA25AuyIAAryIMEAAIAALyg");
	var mask_graphics_79 = new cjs.Graphics().p("EA25AuyIAArsIMEAAIAALsg");
	var mask_graphics_80 = new cjs.Graphics().p("EA25AuyIAArmIMEAAIAALmg");
	var mask_graphics_81 = new cjs.Graphics().p("EA25AuyIAArgIMEAAIAALgg");
	var mask_graphics_82 = new cjs.Graphics().p("EA25AuyIAAraIMEAAIAALag");
	var mask_graphics_83 = new cjs.Graphics().p("EA25AuxIAArTIMEAAIAALTg");
	var mask_graphics_84 = new cjs.Graphics().p("EA25AuxIAArNIMEAAIAALNg");
	var mask_graphics_85 = new cjs.Graphics().p("EA25AuxIAArHIMEAAIAALHg");
	var mask_graphics_86 = new cjs.Graphics().p("EA25AuxIAArBIMEAAIAALBg");
	var mask_graphics_87 = new cjs.Graphics().p("EA25AuxIAAq7IMEAAIAAK7g");
	var mask_graphics_88 = new cjs.Graphics().p("EA25AuxIAAq1IMEAAIAAK1g");
	var mask_graphics_89 = new cjs.Graphics().p("EA25AuwIAAquIMEAAIAAKug");
	var mask_graphics_90 = new cjs.Graphics().p("EA25AuwIAAqoIMEAAIAAKog");
	var mask_graphics_91 = new cjs.Graphics().p("EA25AuwIAAqiIMEAAIAAKig");
	var mask_graphics_92 = new cjs.Graphics().p("EA25AuwIAAqcIMEAAIAAKcg");
	var mask_graphics_93 = new cjs.Graphics().p("EA25AuwIAAqWIMEAAIAAKWg");
	var mask_graphics_94 = new cjs.Graphics().p("EA25AuwIAAqQIMEAAIAAKQg");
	var mask_graphics_95 = new cjs.Graphics().p("EA25AuvIAAqJIMEAAIAAKJg");
	var mask_graphics_96 = new cjs.Graphics().p("EA25AuvIAAqDIMEAAIAAKDg");
	var mask_graphics_97 = new cjs.Graphics().p("EA25AuvIAAp9IMEAAIAAJ9g");
	var mask_graphics_98 = new cjs.Graphics().p("EA25AuvIAAp3IMEAAIAAJ3g");
	var mask_graphics_99 = new cjs.Graphics().p("EA25AuvIAApxIMEAAIAAJxg");
	var mask_graphics_100 = new cjs.Graphics().p("EA25AuvIAAprIMEAAIAAJrg");
	var mask_graphics_101 = new cjs.Graphics().p("EA25AuvIAAplIMEAAIAAJlg");
	var mask_graphics_102 = new cjs.Graphics().p("EA25AuuIAApeIMEAAIAAJeg");
	var mask_graphics_103 = new cjs.Graphics().p("EA25AuuIAApYIMEAAIAAJYg");
	var mask_graphics_104 = new cjs.Graphics().p("EA25AuuIAApSIMEAAIAAJSg");
	var mask_graphics_105 = new cjs.Graphics().p("EA25AuuIAApMIMEAAIAAJMg");
	var mask_graphics_106 = new cjs.Graphics().p("EA25AuuIAApGIMEAAIAAJGg");
	var mask_graphics_107 = new cjs.Graphics().p("EA25AuuIAApAIMEAAIAAJAg");
	var mask_graphics_108 = new cjs.Graphics().p("EA25AutIAAo5IMEAAIAAI5g");
	var mask_graphics_109 = new cjs.Graphics().p("EA25AutIAAozIMEAAIAAIzg");
	var mask_graphics_110 = new cjs.Graphics().p("EA25AutIAAotIMEAAIAAItg");
	var mask_graphics_111 = new cjs.Graphics().p("EA25AutIAAonIMEAAIAAIng");
	var mask_graphics_112 = new cjs.Graphics().p("EA25AutIAAohIMEAAIAAIhg");
	var mask_graphics_113 = new cjs.Graphics().p("EA25AutIAAobIMEAAIAAIbg");
	var mask_graphics_114 = new cjs.Graphics().p("EA25AusIAAoUIMEAAIAAIUg");
	var mask_graphics_115 = new cjs.Graphics().p("EA25AusIAAoOIMEAAIAAIOg");
	var mask_graphics_116 = new cjs.Graphics().p("EA25AusIAAoIIMEAAIAAIIg");
	var mask_graphics_117 = new cjs.Graphics().p("EA25AusIAAoCIMEAAIAAICg");
	var mask_graphics_118 = new cjs.Graphics().p("EA25AusIAAn8IMEAAIAAH8g");
	var mask_graphics_119 = new cjs.Graphics().p("EA25AusIAAn2IMEAAIAAH2g");
	var mask_graphics_120 = new cjs.Graphics().p("EA25AurIAAnvIMEAAIAAHvg");
	var mask_graphics_121 = new cjs.Graphics().p("EA25AurIAAnpIMEAAIAAHpg");
	var mask_graphics_122 = new cjs.Graphics().p("EA25AurIAAnjIMEAAIAAHjg");
	var mask_graphics_123 = new cjs.Graphics().p("EA25AurIAAndIMEAAIAAHdg");
	var mask_graphics_124 = new cjs.Graphics().p("EA25AurIAAnXIMEAAIAAHXg");
	var mask_graphics_125 = new cjs.Graphics().p("EA25AurIAAnRIMEAAIAAHRg");
	var mask_graphics_126 = new cjs.Graphics().p("EA25AuqIAAnKIMEAAIAAHKg");
	var mask_graphics_127 = new cjs.Graphics().p("EA25AuqIAAnEIMEAAIAAHEg");
	var mask_graphics_128 = new cjs.Graphics().p("EA25AuqIAAm+IMEAAIAAG+g");
	var mask_graphics_129 = new cjs.Graphics().p("EA25AuqIAAm5IMEAAIAAG5g");
	var mask_graphics_130 = new cjs.Graphics().p("EA25AuqIAAmzIMEAAIAAGzg");
	var mask_graphics_131 = new cjs.Graphics().p("EA25AuqIAAmtIMEAAIAAGtg");
	var mask_graphics_132 = new cjs.Graphics().p("EA25AuqIAAmnIMEAAIAAGng");
	var mask_graphics_133 = new cjs.Graphics().p("EA25AupIAAmgIMEAAIAAGgg");
	var mask_graphics_134 = new cjs.Graphics().p("EA25AupIAAmaIMEAAIAAGag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:428.5,y:300.7}).wait(1).to({graphics:mask_graphics_1,x:428.5,y:300.7}).wait(1).to({graphics:mask_graphics_2,x:428.5,y:300.7}).wait(1).to({graphics:mask_graphics_3,x:428.5,y:300.7}).wait(1).to({graphics:mask_graphics_4,x:428.5,y:300.7}).wait(1).to({graphics:mask_graphics_5,x:428.5,y:300.6}).wait(1).to({graphics:mask_graphics_6,x:428.5,y:300.6}).wait(1).to({graphics:mask_graphics_7,x:428.5,y:300.6}).wait(1).to({graphics:mask_graphics_8,x:428.5,y:300.6}).wait(1).to({graphics:mask_graphics_9,x:428.5,y:300.6}).wait(1).to({graphics:mask_graphics_10,x:428.5,y:300.6}).wait(1).to({graphics:mask_graphics_11,x:428.5,y:300.5}).wait(1).to({graphics:mask_graphics_12,x:428.5,y:300.5}).wait(1).to({graphics:mask_graphics_13,x:428.5,y:300.5}).wait(1).to({graphics:mask_graphics_14,x:428.5,y:300.5}).wait(1).to({graphics:mask_graphics_15,x:428.5,y:300.5}).wait(1).to({graphics:mask_graphics_16,x:428.5,y:300.5}).wait(1).to({graphics:mask_graphics_17,x:428.5,y:300.5}).wait(1).to({graphics:mask_graphics_18,x:428.5,y:300.4}).wait(1).to({graphics:mask_graphics_19,x:428.5,y:300.4}).wait(1).to({graphics:mask_graphics_20,x:428.5,y:300.4}).wait(1).to({graphics:mask_graphics_21,x:428.5,y:300.4}).wait(1).to({graphics:mask_graphics_22,x:428.5,y:300.4}).wait(1).to({graphics:mask_graphics_23,x:428.5,y:300.4}).wait(1).to({graphics:mask_graphics_24,x:428.5,y:300.3}).wait(1).to({graphics:mask_graphics_25,x:428.5,y:300.3}).wait(1).to({graphics:mask_graphics_26,x:428.5,y:300.3}).wait(1).to({graphics:mask_graphics_27,x:428.5,y:300.3}).wait(1).to({graphics:mask_graphics_28,x:428.5,y:300.3}).wait(1).to({graphics:mask_graphics_29,x:428.5,y:300.3}).wait(1).to({graphics:mask_graphics_30,x:428.5,y:300.2}).wait(1).to({graphics:mask_graphics_31,x:428.5,y:300.2}).wait(1).to({graphics:mask_graphics_32,x:428.5,y:300.2}).wait(1).to({graphics:mask_graphics_33,x:428.5,y:300.2}).wait(1).to({graphics:mask_graphics_34,x:428.5,y:300.2}).wait(1).to({graphics:mask_graphics_35,x:428.5,y:300.2}).wait(1).to({graphics:mask_graphics_36,x:428.5,y:300.1}).wait(1).to({graphics:mask_graphics_37,x:428.5,y:300.1}).wait(1).to({graphics:mask_graphics_38,x:428.5,y:300.1}).wait(1).to({graphics:mask_graphics_39,x:428.5,y:300.1}).wait(1).to({graphics:mask_graphics_40,x:428.5,y:300.1}).wait(1).to({graphics:mask_graphics_41,x:428.5,y:300.1}).wait(1).to({graphics:mask_graphics_42,x:428.5,y:300}).wait(1).to({graphics:mask_graphics_43,x:428.5,y:300}).wait(1).to({graphics:mask_graphics_44,x:428.5,y:300}).wait(1).to({graphics:mask_graphics_45,x:428.5,y:300}).wait(1).to({graphics:mask_graphics_46,x:428.5,y:300}).wait(1).to({graphics:mask_graphics_47,x:428.5,y:300}).wait(1).to({graphics:mask_graphics_48,x:428.5,y:300}).wait(1).to({graphics:mask_graphics_49,x:428.5,y:299.9}).wait(1).to({graphics:mask_graphics_50,x:428.5,y:299.9}).wait(1).to({graphics:mask_graphics_51,x:428.5,y:299.9}).wait(1).to({graphics:mask_graphics_52,x:428.5,y:299.9}).wait(1).to({graphics:mask_graphics_53,x:428.5,y:299.9}).wait(1).to({graphics:mask_graphics_54,x:428.5,y:299.9}).wait(1).to({graphics:mask_graphics_55,x:428.5,y:299.8}).wait(1).to({graphics:mask_graphics_56,x:428.5,y:299.8}).wait(1).to({graphics:mask_graphics_57,x:428.5,y:299.8}).wait(1).to({graphics:mask_graphics_58,x:428.5,y:299.8}).wait(1).to({graphics:mask_graphics_59,x:428.5,y:299.8}).wait(1).to({graphics:mask_graphics_60,x:428.5,y:299.8}).wait(1).to({graphics:mask_graphics_61,x:428.5,y:299.7}).wait(1).to({graphics:mask_graphics_62,x:428.5,y:299.7}).wait(1).to({graphics:mask_graphics_63,x:428.5,y:299.7}).wait(1).to({graphics:mask_graphics_64,x:428.5,y:299.7}).wait(1).to({graphics:mask_graphics_65,x:428.5,y:299.7}).wait(1).to({graphics:mask_graphics_66,x:428.5,y:299.7}).wait(1).to({graphics:mask_graphics_67,x:428.5,y:299.6}).wait(1).to({graphics:mask_graphics_68,x:428.5,y:299.6}).wait(1).to({graphics:mask_graphics_69,x:428.5,y:299.6}).wait(1).to({graphics:mask_graphics_70,x:428.5,y:299.6}).wait(1).to({graphics:mask_graphics_71,x:428.5,y:299.6}).wait(1).to({graphics:mask_graphics_72,x:428.5,y:299.6}).wait(1).to({graphics:mask_graphics_73,x:428.5,y:299.6}).wait(1).to({graphics:mask_graphics_74,x:428.5,y:299.5}).wait(1).to({graphics:mask_graphics_75,x:428.5,y:299.5}).wait(1).to({graphics:mask_graphics_76,x:428.5,y:299.5}).wait(1).to({graphics:mask_graphics_77,x:428.5,y:299.5}).wait(1).to({graphics:mask_graphics_78,x:428.5,y:299.5}).wait(1).to({graphics:mask_graphics_79,x:428.5,y:299.5}).wait(1).to({graphics:mask_graphics_80,x:428.5,y:299.4}).wait(1).to({graphics:mask_graphics_81,x:428.5,y:299.4}).wait(1).to({graphics:mask_graphics_82,x:428.5,y:299.4}).wait(1).to({graphics:mask_graphics_83,x:428.5,y:299.4}).wait(1).to({graphics:mask_graphics_84,x:428.5,y:299.4}).wait(1).to({graphics:mask_graphics_85,x:428.5,y:299.4}).wait(1).to({graphics:mask_graphics_86,x:428.5,y:299.3}).wait(1).to({graphics:mask_graphics_87,x:428.5,y:299.3}).wait(1).to({graphics:mask_graphics_88,x:428.5,y:299.3}).wait(1).to({graphics:mask_graphics_89,x:428.5,y:299.3}).wait(1).to({graphics:mask_graphics_90,x:428.5,y:299.3}).wait(1).to({graphics:mask_graphics_91,x:428.5,y:299.3}).wait(1).to({graphics:mask_graphics_92,x:428.5,y:299.2}).wait(1).to({graphics:mask_graphics_93,x:428.5,y:299.2}).wait(1).to({graphics:mask_graphics_94,x:428.5,y:299.2}).wait(1).to({graphics:mask_graphics_95,x:428.5,y:299.2}).wait(1).to({graphics:mask_graphics_96,x:428.5,y:299.2}).wait(1).to({graphics:mask_graphics_97,x:428.5,y:299.2}).wait(1).to({graphics:mask_graphics_98,x:428.5,y:299.1}).wait(1).to({graphics:mask_graphics_99,x:428.5,y:299.1}).wait(1).to({graphics:mask_graphics_100,x:428.5,y:299.1}).wait(1).to({graphics:mask_graphics_101,x:428.5,y:299.1}).wait(1).to({graphics:mask_graphics_102,x:428.5,y:299.1}).wait(1).to({graphics:mask_graphics_103,x:428.5,y:299.1}).wait(1).to({graphics:mask_graphics_104,x:428.5,y:299.1}).wait(1).to({graphics:mask_graphics_105,x:428.5,y:299}).wait(1).to({graphics:mask_graphics_106,x:428.5,y:299}).wait(1).to({graphics:mask_graphics_107,x:428.5,y:299}).wait(1).to({graphics:mask_graphics_108,x:428.5,y:299}).wait(1).to({graphics:mask_graphics_109,x:428.5,y:299}).wait(1).to({graphics:mask_graphics_110,x:428.5,y:299}).wait(1).to({graphics:mask_graphics_111,x:428.5,y:298.9}).wait(1).to({graphics:mask_graphics_112,x:428.5,y:298.9}).wait(1).to({graphics:mask_graphics_113,x:428.5,y:298.9}).wait(1).to({graphics:mask_graphics_114,x:428.5,y:298.9}).wait(1).to({graphics:mask_graphics_115,x:428.5,y:298.9}).wait(1).to({graphics:mask_graphics_116,x:428.5,y:298.9}).wait(1).to({graphics:mask_graphics_117,x:428.5,y:298.8}).wait(1).to({graphics:mask_graphics_118,x:428.5,y:298.8}).wait(1).to({graphics:mask_graphics_119,x:428.5,y:298.8}).wait(1).to({graphics:mask_graphics_120,x:428.5,y:298.8}).wait(1).to({graphics:mask_graphics_121,x:428.5,y:298.8}).wait(1).to({graphics:mask_graphics_122,x:428.5,y:298.8}).wait(1).to({graphics:mask_graphics_123,x:428.5,y:298.7}).wait(1).to({graphics:mask_graphics_124,x:428.5,y:298.7}).wait(1).to({graphics:mask_graphics_125,x:428.5,y:298.7}).wait(1).to({graphics:mask_graphics_126,x:428.5,y:298.7}).wait(1).to({graphics:mask_graphics_127,x:428.5,y:298.7}).wait(1).to({graphics:mask_graphics_128,x:428.5,y:298.7}).wait(1).to({graphics:mask_graphics_129,x:428.5,y:298.7}).wait(1).to({graphics:mask_graphics_130,x:428.5,y:298.6}).wait(1).to({graphics:mask_graphics_131,x:428.5,y:298.6}).wait(1).to({graphics:mask_graphics_132,x:428.5,y:298.6}).wait(1).to({graphics:mask_graphics_133,x:428.5,y:298.6}).wait(1).to({graphics:mask_graphics_134,x:428.5,y:298.6}).wait(47));

	// Layer 11
	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(820.4,548.1,0.6,0.6);

	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.setTransform(820.4,633.3,0.6,0.6);

	this.instance_1.mask = this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},134).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,y:633.3},134).wait(47));

	// Layer 14
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(677.9,572.2,0.6,0.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).to({rotation:-2.7,y:573.6},10).wait(97));

	// Layer 15 copy
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(684.8,574.3,0.6,0.726,0,0,0,42.1,20.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).to({regY:20.3,rotation:-5.4,x:687.8,y:585},10).to({regY:20.2,rotation:-11.4,x:691.1,y:596.7,alpha:0.012},10).wait(87));

	// Layer 5 copy
	this.instance_5 = new lib.Symbol6();
	this.instance_5.setTransform(681.4,574.5,0.509,0.742,0,0,0,48.9,9.9);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0.5},73).to({_off:true},1).wait(107));

	// Layer 5
	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(953.8,583,0.6,0.6,0,0,0,49,10);
	this.instance_6.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:0.602},58).wait(123));

	// Layer 7
	this.instance_7 = new lib.blue_izo();
	this.instance_7.setTransform(910.7,550.6,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(181));

	// Layer 13
	this.instance_8 = new lib.Symbol3();
	this.instance_8.setTransform(705.4,605.3,0.484,0.6,0,0,0,99.3,60.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},74).wait(107));

	// Layer 6 copy
	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(949.7,527.7,0.6,0.6,0,0,0,17.5,91.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:0.699},57).wait(124));

	// Layer 6
	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(682.4,518.5,0.6,0.6,0,0,0,17.5,91.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:0.602},57).wait(124));

	// Layer 1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D3D3D").s().p("AhnHbIAAu1IDQAAIAAO1g");
	this.shape.setTransform(682.5,526);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(181));

	// Layer 9
	this.instance_11 = new lib.term_50();
	this.instance_11.setTransform(779.9,451.2,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(181));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5791BC").s().p("AhoHbIAAu1IDRAAIAAO1g");
	this.shape_1.setTransform(949.5,533.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(181));

	// yellow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E0C832").ss(2,1,1).p("AYHivQljgToLgfQoMgfstgUQsugVg4I/");
	this.shape_2.setTransform(756.6,600.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEUQBfo0MjAOQMgAOIMAhQH8AfFjAT");
	this.shape_3.setTransform(756.6,601.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E0C832").ss(2,1,1).p("A4GESQCFoqMYAIQMUAHILAjQHuAgFjAT");
	this.shape_4.setTransform(756.6,601.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEQQCqogMMABQMKACIKAlQHgAgFjAT");
	this.shape_5.setTransform(756.6,601.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEOQDNoWMCgEQMAgFIJAnQHSAgFjAT");
	this.shape_6.setTransform(756.6,601.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQDwoML3gLQL1gKIJAoQHFAhFjAT");
	this.shape_7.setTransform(756.6,601.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQEQoELugPQLrgQIIAqQG5AhFjAT");
	this.shape_8.setTransform(756.6,601.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQEvn7LkgVQLjgVIIAsQGsAhFjAT");
	this.shape_9.setTransform(756.6,601.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQFNnzLcgbQLYgaIIAuQGhAiFjAT");
	this.shape_10.setTransform(756.6,601.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQFpnsLUgfQLQgfIGAvQGXAjFjAT");
	this.shape_11.setTransform(756.6,601.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQGEnkLLgkQLJgkIGAxQGMAjFjAT");
	this.shape_12.setTransform(756.6,601.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQGeneLDgnQLCgoIFAyQGCAjFjAT");
	this.shape_13.setTransform(756.6,601.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQG2nXK8gsQK6gsIFA0QF5AjFjAT");
	this.shape_14.setTransform(756.6,601.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQHNnRK1gvQKzgwIFA0QFwAkFjAT");
	this.shape_15.setTransform(756.6,601.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQHinKKvg0QKtgzIEA2QFoAjFjAT");
	this.shape_16.setTransform(756.6,601.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQH2nFKpg3QKng3IEA3QFgAkFjAT");
	this.shape_17.setTransform(756.6,601.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQIJnAKjg6QKhg6IEA4QFZAkFjAT");
	this.shape_18.setTransform(756.6,601.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E0C832").ss(2,1,1).p("A4GEMQIam7Keg9QKdg9IDA5QFSAkFjAT");
	this.shape_19.setTransform(756.6,601.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQIrm3KZhAQKXhAIDA6QFMAlFjAT");
	this.shape_20.setTransform(756.6,601.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQI4mzKWhCQKShDIDA7QFHAlFjAT");
	this.shape_21.setTransform(756.6,601.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQJGmwKRhEQKPhEICA7QFCAlFjAT");
	this.shape_22.setTransform(756.6,601.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQJRmsKOhHQKMhGICA8QE9AlFjAT");
	this.shape_23.setTransform(756.6,601.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQJcmqKLhIQKIhIIDA9QE4AlFjAT");
	this.shape_24.setTransform(756.6,601.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQJlmnKIhKQKGhKIBA+QE2AlFjAT");
	this.shape_25.setTransform(756.6,601.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQJsmlKGhLQKDhLICA+QEzAlFjAT");
	this.shape_26.setTransform(756.6,601.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQJzmjKDhMQKChMICA+QEwAlFjAT");
	this.shape_27.setTransform(756.6,601.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQJ3miKDhMQKAhNICA+QEuAlFjAT");
	this.shape_28.setTransform(756.6,601.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQJ7mhKBhNQJ/hNICA+QEtAlFjAT");
	this.shape_29.setTransform(756.6,601.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#E0C832").ss(2,1,1).p("A4GENQJ9mgKBhOQJ/hOIBA/QEsAlFjAT");
	this.shape_30.setTransform(756.6,601.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#E0C832").ss(2,1,1).p("AYHi4QljgTksglQoBg/p/BOQqABOp+Gg");
	this.shape_31.setTransform(756.6,601.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_2}]},75).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).wait(75));

	// blue
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#75ACDF").ss(2,1,1).p("AYeizQo2AGo/g1Qo8g1p7gCQp6gCiVI1");
	this.shape_32.setTransform(761.9,602.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEaQCoorJ4gHQJ5gII0A6QI4A5I2gG");
	this.shape_33.setTransform(761.9,602.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEbQC6ohJ3gRQJ2gQIuA+QIwA9I2gG");
	this.shape_34.setTransform(761.9,602.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEcQDMoYJ1gZQJ0gZImBCQIqBBI2gG");
	this.shape_35.setTransform(761.9,602.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEeQDdoOJzgiQJyghIgBFQIjBFI2gG");
	this.shape_36.setTransform(761.9,601.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEgQDuoGJxgqQJwgpIaBJQIcBJI2gG");
	this.shape_37.setTransform(761.9,601.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEiQD+n+JvgxQJugxIUBMQIWBNI2gG");
	this.shape_38.setTransform(761.9,601.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEjQENn1Jtg5QJtg5IOBQQIQBQI2gG");
	this.shape_39.setTransform(761.9,601.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dElQEbnuJsg/QJshAIIBTQIKBTI2gG");
	this.shape_40.setTransform(761.9,601.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEnQEpnnJqhGQJqhHIDBXQIFBWI2gG");
	this.shape_41.setTransform(761.9,601.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEoQE2nfJphNQJphNH9BZQIABZI2gG");
	this.shape_42.setTransform(761.9,600.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEqQFDnZJnhTQJnhTH5BcQH7BcI2gG");
	this.shape_43.setTransform(761.9,600.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEsQFOnTJmhZQJnhYHzBeQH3BfI2gG");
	this.shape_44.setTransform(761.9,600.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEtQFZnNJlheQJkheHxBhQHyBhI2gG");
	this.shape_45.setTransform(761.9,600.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEvQFknIJkhjQJhhjHuBjQHuBkI2gH");
	this.shape_46.setTransform(761.9,600.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEwQFunCJihoQJhhoHqBlQHqBmI2gG");
	this.shape_47.setTransform(761.9,600.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dExQF3m9JhhsQJghtHmBoQHnBnI2gG");
	this.shape_48.setTransform(761.9,600);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEyQF/m5JhhwQJfhxHjBqQHjBpI2gG");
	this.shape_49.setTransform(761.9,599.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dEzQGHm0Jgh1QJeh0HgBrQHgBrI2gG");
	this.shape_50.setTransform(761.9,599.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dE0QGOmxJfh4QJdh3HdBtQHeBsI2gG");
	this.shape_51.setTransform(761.9,599.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dE1QGUmtJfh7QJdh7HaBuQHbBuI2gG");
	this.shape_52.setTransform(761.9,599.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dE2QGamrJeh9QJch+HYBvQHZBwI2gG");
	this.shape_53.setTransform(761.9,599.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dE3QGfmoJdiAQJbiAHYBwQHWBxI2gG");
	this.shape_54.setTransform(761.9,599.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dE3QGkmlJciDQJbiCHVByQHVBxI2gG");
	this.shape_55.setTransform(761.9,599.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dE4QGnmkJdiEQJaiEHTByQHUBzI2gG");
	this.shape_56.setTransform(761.9,599.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dE4QGqmiJciFQJaiGHSBzQHTBzI2gG");
	this.shape_57.setTransform(761.9,599.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dE4QGtmgJciHQJZiHHSB0QHRBzI2gG");
	this.shape_58.setTransform(761.9,599.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dE5QGumgJciIQJaiHHQB0QHRB0I2gG");
	this.shape_59.setTransform(761.9,599.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#75ACDF").ss(2,1,1).p("A4dE5QGvmgJciIQJZiHHRB0QHQB0I2gG");
	this.shape_60.setTransform(761.9,599.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#75ACDF").ss(2,1,1).p("AYeiUQo2AGnQh0QnRh1pZCIQpbCJmwGf");
	this.shape_61.setTransform(761.9,599.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32}]}).to({state:[{t:this.shape_32}]},75).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).wait(75));

	// red
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#D08069").ss(2,1,1).p("AXaidQkbgCl+AsQl+Att3igQt5ihisKO");
	this.shape_62.setTransform(761.1,599.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#D08069").ss(2,1,1).p("A3ZEEQDSp5NxCMQNtCMF8giQF0glETAD");
	this.shape_63.setTransform(761.1,599.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#D08069").ss(2,1,1).p("A3ZEBQD1plNrB4QNhB6F8gYQFrgeELAE");
	this.shape_64.setTransform(761.1,599.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD+QEYpSNkBmQNXBoF7gPQFhgXEEAF");
	this.shape_65.setTransform(761.1,600.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD8QE5o/NeBTQNMBXF7gGQFZgPD8AF");
	this.shape_66.setTransform(761.1,600.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD5QFZotNYBDQNCBFF6ADQFQgJD2AH");
	this.shape_67.setTransform(761.1,600.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD4QF4ocNSAyQM4A1F5AMQFJgDDvAH");
	this.shape_68.setTransform(761.1,600.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD2QGWoLNMAiQMvAmF4ATQFCAEDoAI");
	this.shape_69.setTransform(761.1,600.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD1QGyn8NGATQMmAYF4AbQE6AJDjAJ");
	this.shape_70.setTransform(761.1,600.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD1QHMntNDAEQMdAKF3AiQEzAPDdAJ");
	this.shape_71.setTransform(761.1,601);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD1QHmnfM9gJQMVgEF3ApQEsAUDYAK");
	this.shape_72.setTransform(761.1,601);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD2QH+nRM5gWQMOgRF1AwQEnAZDSAL");
	this.shape_73.setTransform(761.1,600.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD5QIVnFM0giQMHgdF2A2QEgAeDNAL");
	this.shape_74.setTransform(761.1,600.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD8QIrm5MvguQMBgoF1A8QEaAiDJAM");
	this.shape_75.setTransform(761.1,600.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#D08069").ss(2,1,1).p("A3ZD/QI/mtMrg6QL7gyF0BCQEWAmDEAM");
	this.shape_76.setTransform(761.1,600);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#D08069").ss(2,1,1).p("A3ZEBQJSmiMohEQL0g8F0BHQERAqDAAN");
	this.shape_77.setTransform(761.1,599.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#D08069").ss(2,1,1).p("A3ZEEQJkmZMkhNQLvhFFzBLQENAuC8AN");
	this.shape_78.setTransform(761.1,599.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#D08069").ss(2,1,1).p("A3ZEGQJ0mPMihWQLphOF0BQQEHAxC5AO");
	this.shape_79.setTransform(761.1,599.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#D08069").ss(2,1,1).p("A3ZEJQKDmHMehfQLmhVFyBUQEEA0C2AO");
	this.shape_80.setTransform(761.1,599);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#D08069").ss(2,1,1).p("A3ZELQKRmAMbhlQLhhdFzBYQEBA3CyAO");
	this.shape_81.setTransform(761.1,598.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#D08069").ss(2,1,1).p("A3ZENQKel5MYhsQLdhjFyBbQD+A6CwAO");
	this.shape_82.setTransform(761.1,598.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#D08069").ss(2,1,1).p("A3ZEOQKolyMXhyQLbhpFxBeQD7A8CtAP");
	this.shape_83.setTransform(761.1,598.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#D08069").ss(2,1,1).p("A3ZEQQKyltMWh4QLWhuFxBhQD4A+CsAP");
	this.shape_84.setTransform(761.1,598.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#D08069").ss(2,1,1).p("A3ZERQK7loMTh8QLUhyFxBjQD2A/CqAQ");
	this.shape_85.setTransform(761.1,598.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#D08069").ss(2,1,1).p("A3ZESQLCljMSiBQLSh2FxBlQD0BBCoAQ");
	this.shape_86.setTransform(761.1,598);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#D08069").ss(2,1,1).p("A3ZETQLIlgMRiEQLQh5FxBnQDyBCCnAQ");
	this.shape_87.setTransform(761.1,597.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#D08069").ss(2,1,1).p("A3ZEUQLMleMOiGQLRh7FxBoQDxBDCmAQ");
	this.shape_88.setTransform(761.1,597.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#D08069").ss(2,1,1).p("A3ZEVQLQlcMOiIQLPh+FwBpQDxBEClAQ");
	this.shape_89.setTransform(761.1,597.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#D08069").ss(2,1,1).p("A3ZEVQLSlbMNiJQLPh/FwBqQDwBEClAQ");
	this.shape_90.setTransform(761.1,597.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#D08069").ss(2,1,1).p("AXaiQQilgQjwhEQlwhqrPB/QsNCJrSFb");
	this.shape_91.setTransform(761.1,597.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62}]}).to({state:[{t:this.shape_62}]},75).to({state:[{t:this.shape_63}]},2).to({state:[{t:this.shape_64}]},2).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).wait(75));

	// biruza
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#7ED4C1").ss(2,1,1).p("AXZiPQqXhykfgXQkegYl0AQQl3AQnJAdQnJAdhgH9");
	this.shape_92.setTransform(761.3,599.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEjQBzniHHgmQG/gkF1gRQFngQEiAUQEhAUKZBv");
	this.shape_93.setTransform(761.3,600.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEeQCEnHHFgvQG4gqFygTQFcgQEjARQEkAQKbBs");
	this.shape_94.setTransform(761.3,600.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEaQCWmuHCg3QGwgwFvgUQFRgSElAOQEmANKeBq");
	this.shape_95.setTransform(761.3,601.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEWQClmWHBg/QGqg2FsgVQFEgSEpALQEoAKKgBn");
	this.shape_96.setTransform(761.3,601.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YESQC1l+G/hGQGig8FqgXQE7gREqAHQEqAHKiBk");
	this.shape_97.setTransform(761.3,601.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEPQDEloG9hOQGbhBFogYQEwgSEtAFQEtAEKjBi");
	this.shape_98.setTransform(761.3,602.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEMQDSlSG8hVQGVhHFlgZQEngSEuACQEvACKlBf");
	this.shape_99.setTransform(761.3,602.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEKQDhk+G5hbQGPhMFjgaQEcgSExgBQExgBKnBd");
	this.shape_100.setTransform(761.3,602.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEHQDtkqG4hhQGJhRFigbQETgTEzgDQEygDKpBa");
	this.shape_101.setTransform(761.3,603);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEFQD6kXG3hoQGDhWFfgbQELgTE1gGQE0gGKqBZ");
	this.shape_102.setTransform(761.3,603.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEDQEFkFG3huQF9hZFdgdQEDgTE2gIQE2gIKsBW");
	this.shape_103.setTransform(761.3,603.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEBQERj3G0hxQF4hdFdgeQD6gTE5gKQE3gKKtBU");
	this.shape_104.setTransform(761.3,603.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YEAQEcjnGzh2QFzhiFagfQD1gTE4gMQE6gMKuBT");
	this.shape_105.setTransform(761.3,603.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD+QEmjYGxh7QFwhlFYgfQDtgUE7gOQE7gOKvBR");
	this.shape_106.setTransform(761.3,603.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD9QEujKGxiAQFshoFXggQDngUE7gQQE8gQKxBQ");
	this.shape_107.setTransform(761.3,604);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD7QE3i9GwiEQFnhrFWghQDhgUE9gRQE9gSKyBO");
	this.shape_108.setTransform(761.3,604.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD6QFAixGuiIQFjhuFVgiQDcgUE+gTQE+gTKzBN");
	this.shape_109.setTransform(761.3,604.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD5QFGimGuiLQFhhxFUgiQDWgVE/gUQE/gUK0BL");
	this.shape_110.setTransform(761.3,604.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD4QFOicGsiPQFdhzFTgjQDSgUFBgWQE/gVK1BK");
	this.shape_111.setTransform(761.3,604.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD3QFUiTGsiSQFah1FSgjQDOgVFAgWQFBgXK2BJ");
	this.shape_112.setTransform(761.3,604.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD3QFZiLGsiVQFXh3FSgkQDJgUFCgYQFCgYK2BJ");
	this.shape_113.setTransform(761.3,604.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD2QFeiDGriXQFWh6FQgkQDGgUFDgZQFCgZK3BI");
	this.shape_114.setTransform(761.3,604.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD2QFih+GqiZQFUh6FQglQDEgUFCgaQFEgZK3BH");
	this.shape_115.setTransform(761.3,604.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD1QFlh4GribQFSh7FPglQDBgVFEgaQFDgaK4BG");
	this.shape_116.setTransform(761.3,604.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD1QFoh0GqicQFRh9FOglQDAgVFEgaQFEgbK4BG");
	this.shape_117.setTransform(761.3,604.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD1QFqhxGridQFPh+FPglQC9gVFFgbQFEgbK4BG");
	this.shape_118.setTransform(761.3,604.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD0QFshuGqieQFPh+FOglQC9gVFEgcQFFgbK4BF");
	this.shape_119.setTransform(761.3,604.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#7ED4C1").ss(2,1,1).p("A3YD0QFthtGpieQFPh/FOglQC8gVFFgbQFFgcK4BF");
	this.shape_120.setTransform(761.3,604.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#7ED4C1").ss(2,1,1).p("AXZjCQq4hFlFAcQlFAbi8AVQlOAmlOB/QmqCeltBs");
	this.shape_121.setTransform(761.3,604.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92}]}).to({state:[{t:this.shape_92}]},75).to({state:[{t:this.shape_93}]},2).to({state:[{t:this.shape_94}]},2).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).wait(75));

	// green
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#7CCD8F").ss(2,1,1).p("AWaiIQqdgxkUAPQkUAPn7hcQn8hclNCBQlMCBAlFw");
	this.shape_122.setTransform(767.5,600);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2XEaQgXliFQiDQFPiDH0BXQHzBWESgOQESgOKdAw");
	this.shape_123.setTransform(767.6,600.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2XEXQgKlWFTiFQFTiEHsBRQHqBSERgNQEQgOKdAw");
	this.shape_124.setTransform(767.7,600.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YETQAElKFViGQFWiGHkBNQHjBMEPgMQEQgOKbAw");
	this.shape_125.setTransform(767.7,601.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YEPQARk9FYiIQFYiIHdBIQHbBIEOgMQEOgNKbAv");
	this.shape_126.setTransform(767.7,601.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YEMQAdkyFbiJQFbiJHVBDQHVBEEMgMQEMgMKbAu");
	this.shape_127.setTransform(767.7,601.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YEJQApknFdiLQFdiKHQA/QHNA/ELgMQELgLKaAu");
	this.shape_128.setTransform(767.7,602.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YEGQA0kcFgiMQFgiNHIA7QHHA8EKgMQEJgLKaAu");
	this.shape_129.setTransform(767.7,602.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YEDQA+kSFjiOQFiiNHCA3QHBA3EIgLQEJgKKZAt");
	this.shape_130.setTransform(767.7,602.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YEBQBJkJFkiPQFliPG8A0QG6AzEIgKQEHgLKZAu");
	this.shape_131.setTransform(767.7,603);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YD+QBTj/FmiQQFmiRG3AwQG1AwEGgKQEHgKKYAt");
	this.shape_132.setTransform(767.7,603.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YD8QBcj5FoiPQFpiRGxAsQGvAsEGgJQEFgJKYAs");
	this.shape_133.setTransform(767.7,603.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YD6QBljwFqiRQFqiSGtApQGqApEEgJQEEgJKYAs");
	this.shape_134.setTransform(767.7,603.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YD4QBtjoFsiSQFsiUGoAmQGlAnEEgJQEDgJKXAs");
	this.shape_135.setTransform(767.7,603.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YD3QB0jiFuiSQFuiVGjAjQGhAkEDgJQECgIKXAs");
	this.shape_136.setTransform(767.7,604);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YD1QB8jaFviUQFwiVGeAgQGdAhECgIQECgJKWAs");
	this.shape_137.setTransform(767.7,604.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDzQCDjUFwiUQFxiXGbAeQGZAeEBgHQEBgIKWAr");
	this.shape_138.setTransform(767.7,604.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDyQCJjOFyiVQFyiYGXAcQGVAcEBgHQEAgIKWAr");
	this.shape_139.setTransform(767.7,604.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDxQCPjJFziWQF0iYGTAaQGSAaEAgHQD/gIKWAr");
	this.shape_140.setTransform(767.7,604.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDwQCUjEF0iXQF1iZGRAYQGOAYD/gHQD/gHKWAr");
	this.shape_141.setTransform(767.7,604.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDvQCYjAF2iXQF2iZGOAWQGMAWD+gHQD+gHKWAr");
	this.shape_142.setTransform(767.7,604.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDuQCdi7F2iYQF3iaGLAUQGKAVD+gGQD+gIKVAr");
	this.shape_143.setTransform(767.7,604.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDtQChi4F3iYQF3ibGJAUQGIATD9gHQD+gGKVAq");
	this.shape_144.setTransform(767.7,605);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDtQCki1F4iZQF4ibGHASQGGASD9gGQD9gHKVAr");
	this.shape_145.setTransform(767.7,605);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDsQCniyF4iZQF5ibGFAQQGEASD9gHQD9gGKVAq");
	this.shape_146.setTransform(767.7,605.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDsQCpixF5iZQF5ibGFAQQGCAQD9gGQD8gHKVAr");
	this.shape_147.setTransform(767.7,605.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDrQCrivF5iZQF5icGEAQQGBAPD9gGQD8gGKVAq");
	this.shape_148.setTransform(767.7,605.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDrQCsitF6iaQF5icGDAPQGBAPD8gGQD8gGKVAq");
	this.shape_149.setTransform(767.7,605.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#7CCD8F").ss(2,1,1).p("A2YDrQCtitF5iaQF6icGDAPQGAAPD9gGQD7gHKVAr");
	this.shape_150.setTransform(767.7,605.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#7CCD8F").ss(2,1,1).p("AWYi8QqVgrj7AHQj9AGmAgPQmCgPl6CcQl6CaitCt");
	this.shape_151.setTransform(767.7,605.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_122}]}).to({state:[{t:this.shape_122}]},75).to({state:[{t:this.shape_123}]},2).to({state:[{t:this.shape_124}]},2).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).wait(75));

	// Layer 15
	this.instance_12 = new lib.Symbol5();
	this.instance_12.setTransform(681.8,577.2,0.53,0.636,3.5,0,0,42.1,20.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(75).to({_off:false},0).wait(4).to({regX:42.2,scaleY:0.53},0).to({scaleY:0.5,rotation:-9.7,x:681.6,y:582.9},8).to({regY:20.2,scaleX:0.47,scaleY:0.38,x:680.9,y:590.9,alpha:0.012},10).wait(84));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhCAAacMAAAg03MCEAAAAMAAAA03g");
	mask_1.setTransform(828.2,390.8);

	// izo
	this.instance_13 = new lib.izo();
	this.instance_13.setTransform(504.6,237.7,0.6,0.6);

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,581,1600,1162);


// symbols:
(lib.black_izocopy = function() {
	this.initialize(img.black_izocopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,20);


(lib.black_izo_destroy = function() {
	this.initialize(img.black_izo_destroy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,32);


(lib.black_izo_destroy2 = function() {
	this.initialize(img.black_izo_destroy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,28);


(lib.blue_izo = function() {
	this.initialize(img.blue_izo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,239,64);


(lib.inei = function() {
	this.initialize(img.inei);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,20);


(lib.inei_izo = function() {
	this.initialize(img.inei_izo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,183);


(lib.izo = function() {
	this.initialize(img.izo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,971,567);


(lib.izopngcopy = function() {
	this.initialize(img.izopngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,971,567);


(lib.otmetki = function() {
	this.initialize(img.otmetki);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,323);


(lib.term_0 = function() {
	this.initialize(img.term_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,323);


(lib.term_50 = function() {
	this.initialize(img.term_50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,135,323);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.term_0();
	this.instance.setTransform(-67.5,-161.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.5,-161.5,135,323);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.term_0();
	this.instance.setTransform(-67.5,-161.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.5,-161.5,135,323);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.black_izo_destroy();
	this.instance.setTransform(-38.6,-27.3,1,1,15.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.1,-27.3,94.3,54.7);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.inei_izo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35,183);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.inei();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,20);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.black_izo_destroy2();
	this.instance.setTransform(4.5,0,1,1,9.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84.4,40.6);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.black_izocopy();

	this.instance_1 = new lib.black_izocopy();

	this.instance_2 = new lib.black_izocopy();

	this.instance_3 = new lib.black_izocopy();

	this.instance_4 = new lib.black_izocopy();

	this.instance_5 = new lib.black_izocopy();

	this.instance_6 = new lib.black_izocopy();
	this.instance_6.setTransform(3,0);

	this.addChild(this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,20);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;