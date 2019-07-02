(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1600,
	height: 1162,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:dir + "book_black.png", id:"book_black"},
		{src:dir + "book_blue.png", id:"book_blue"},
		{src:dir + "izo_black_lipnet.png", id:"izo_black_lipnet"},
		{src:dir + "izo_black_normal.png", id:"izo_black_normal"},
		{src:dir + "izo_na_gire_blue.png", id:"izo_na_gire_blue"},
		{src:dir + "polka_new.png", id:"polka"},
		{src:dir + "ten_izo.png", id:"ten_izo"}
	]
};

// stage content:
(lib.izolenta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373737").s().p("AhnB3IAAjtIDPAAIAADtg");
	this.shape.setTransform(664.4,407.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373737").s().p("AisDHIAAmNIFZAAIAAGNg");
	this.shape_1.setTransform(664.4,407.1,0.6,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373737").s().p("AisD9QAGj9gGj8IFZAAQgED9AED8g");
	this.shape_2.setTransform(664.4,410.3,0.6,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373737").s().p("AisEwQAMkwgMkvIFZAAQgJExAJEug");
	this.shape_3.setTransform(664.4,413.4,0.6,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373737").s().p("AisFhQASlhgSlgIFZAAQgOFjAOFeg");
	this.shape_4.setTransform(664.4,416.3,0.6,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373737").s().p("AisGQQAYmQgYmPIFZAAQgSGTASGMg");
	this.shape_5.setTransform(664.4,419.1,0.6,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373737").s().p("AisG8QAcm8gcm7IFZAAQgWG/AWG4g");
	this.shape_6.setTransform(664.4,421.8,0.6,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373737").s().p("AisHmQAhnmghnlIFZAAQgbHqAbHhg");
	this.shape_7.setTransform(664.4,424.3,0.6,0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373737").s().p("AisIOQAnoOgnoNIFZAAQgfITAfIIg");
	this.shape_8.setTransform(664.4,426.7,0.6,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373737").s().p("AisIzQArozgroyIFZAAQgiI4AiItg");
	this.shape_9.setTransform(664.4,429,0.6,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373737").s().p("AisJWQAvpWgvpWIFZAAQglJdAlJPg");
	this.shape_10.setTransform(664.4,431.1,0.6,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373737").s().p("AisJ3QAzp3gzp2IFZAAQgpJ+ApJvg");
	this.shape_11.setTransform(664.4,433,0.6,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373737").s().p("AisKWQA3qWg3qVIFZAAQgsKeAsKNg");
	this.shape_12.setTransform(664.4,434.9,0.6,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373737").s().p("AisKzQA6qzg6qyIFZAAQguK7AuKqg");
	this.shape_13.setTransform(664.4,436.6,0.6,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373737").s().p("AisLNQA9rNg9rMIFZAAQgwLVAwLEg");
	this.shape_14.setTransform(664.4,438.2,0.6,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373737").s().p("AisLlQBArlhArkIFZAAQgyLuAyLbg");
	this.shape_15.setTransform(664.4,439.6,0.6,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373737").s().p("AisL6QBDr6hDr5IFZAAQg1MDA1Lwg");
	this.shape_16.setTransform(664.4,440.9,0.6,0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373737").s().p("AisMOQBFsOhFsNIFZAAQg3MYA3MDg");
	this.shape_17.setTransform(664.4,442.1,0.6,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373737").s().p("AisMfQBHsfhHseIFZAAQg4MpA4MUg");
	this.shape_18.setTransform(664.4,443.1,0.6,0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373737").s().p("AisMtQBIsthIssIFZAAQg6M3A6Mig");
	this.shape_19.setTransform(664.4,444,0.6,0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373737").s().p("AisM6QBKs6hKs5IFZAAQg7NEA7Mvg");
	this.shape_20.setTransform(664.4,444.7,0.6,0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373737").s().p("AisNEQBLtEhLtDIFZAAQg8NPA8M4g");
	this.shape_21.setTransform(664.4,445.3,0.6,0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373737").s().p("AisNMQBMtMhMtLIFZAAQg8NXA8NAg");
	this.shape_22.setTransform(664.4,445.8,0.6,0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373737").s().p("AisNSQBNtShNtRIFZAAQg9NdA9NGg");
	this.shape_23.setTransform(664.4,446.2,0.6,0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373737").s().p("AisNVQBOtVhOtUIFZAAQg9NgA9NJg");
	this.shape_24.setTransform(664.4,446.4,0.6,0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373737").s().p("AisNWQBOtWhOtVIFZAAQg9NhA9NKg");
	this.shape_25.setTransform(664.4,446.4,0.6,0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373737").s().p("AisNQQBOtQhOtPIFZAAQg9NbA9NEg");
	this.shape_26.setTransform(664.4,446.1,0.6,0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373737").s().p("AisNKQBOtKhOtKIFZAAQg9NVA9M/g");
	this.shape_27.setTransform(664.4,445.7,0.6,0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373737").s().p("AisNEQBOtEhOtEIFZAAQg9NQA9M4g");
	this.shape_28.setTransform(664.4,445.4,0.6,0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373737").s().p("AisM/QBOs/hOs+IFZAAQg9NKA9Mzg");
	this.shape_29.setTransform(664.4,445,0.6,0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373737").s().p("AisM5QBOs5hOs4IFZAAQg9NDA9Mug");
	this.shape_30.setTransform(664.4,444.7,0.6,0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373737").s().p("AisMzQBOszhOsyIFZAAQg9M9A9Mog");
	this.shape_31.setTransform(664.4,444.3,0.6,0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373737").s().p("AisMtQBOsthOssIFZAAQg9M3A9Mig");
	this.shape_32.setTransform(664.4,444,0.6,0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373737").s().p("AisMnQBOsnhOsmIFZAAQg9MxA9Mcg");
	this.shape_33.setTransform(664.4,443.6,0.6,0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373737").s().p("AisMhQBOshhOsgIFZAAQg9MrA9MWg");
	this.shape_34.setTransform(664.4,443.2,0.6,0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373737").s().p("AhnHdQAvndgvncIDPAAQglHiAlHXg");
	this.shape_35.setTransform(664.4,442.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373737").s().p("AiuMVQBOsWhOsTIFaAAQg8MNA/Mcg");
	this.shape_36.setTransform(664.5,442.5,0.6,0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373737").s().p("AisMVQBOsVhOsUIFZAAQg9MfA9MKg");
	this.shape_37.setTransform(664.4,442.5,0.6,0.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373737").s().p("AisMTQBLsThLsSIFZAAQg8MdA8MIg");
	this.shape_38.setTransform(664.4,442.4,0.6,0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373737").s().p("AisMQQBJsQhJsPIFZAAQg6MZA6MGg");
	this.shape_39.setTransform(664.4,442.2,0.6,0.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373737").s().p("AisMOQBHsOhHsNIFZAAQg5MYA5MDg");
	this.shape_40.setTransform(664.4,442.1,0.6,0.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373737").s().p("AisMLQBFsLhFsKIFZAAQg3MUA3MBg");
	this.shape_41.setTransform(664.4,441.9,0.6,0.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373737").s().p("AisMIQBDsIhDsHIFZAAQg1MRA1L+g");
	this.shape_42.setTransform(664.4,441.7,0.6,0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373737").s().p("AisMFQBBsFhBsFIFZAAQgzMPAzL7g");
	this.shape_43.setTransform(664.4,441.6,0.6,0.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373737").s().p("AisMDQA+sDg+sCIFZAAQgxMMAxL5g");
	this.shape_44.setTransform(664.4,441.4,0.6,0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373737").s().p("AisMAQA8sAg8sAIFZAAQgwMKAwL2g");
	this.shape_45.setTransform(664.4,441.3,0.6,0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373737").s().p("AisL+QA6r+g6r9IFZAAQguMHAuL0g");
	this.shape_46.setTransform(664.4,441.1,0.6,0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373737").s().p("AhnHKQAinKginJIDPAAQgbHOAbHFg");
	this.shape_47.setTransform(664.4,441);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373737").s().p("AisL4QA2r4g2r4IFZAAQgrMBArLvg");
	this.shape_48.setTransform(664.4,440.8,0.6,0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373737").s().p("AisL2QA0r2g0r1IFZAAQgpL+ApLtg");
	this.shape_49.setTransform(664.4,440.7,0.6,0.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373737").s().p("AisLzQAxrzgxryIFZAAQgnL7AnLqg");
	this.shape_50.setTransform(664.4,440.5,0.6,0.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373737").s().p("AhnHDQAcnDgcnCIDPAAQgXHHAXG+g");
	this.shape_51.setTransform(664.4,440.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},10).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},58).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).wait(43));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_45 = new cjs.Graphics().p("EAw9AcNID8AAIAAKGIgNgPQgTgTgCgBQgCgCgGgCQgIAAgDgEIgEgHQgDgEgEgBQgIgDgDgDIgFgEQgCgBgrgEIgGABIgMACQgQAAgJAFIgQAIQgEACgEADIgGAFIgJAEQgGACgDACIgHAMQgCACgHACQgHACgBADIgCAGIAAAFIgBABIgJAKgEAxPAmIIAAAAIAAAAg");
	var mask_graphics_46 = new cjs.Graphics().p("EAw9AbyID8AAIAAKoIgNgQQgTgUgCgBQgCgDgGgBQgIgBgDgEIgEgHQgDgEgEgCQgIgDgDgCIgFgEQgCgCgrgEIgGABIgMACQgQAAgJAFIgQAJQgEACgEADIgGAGIgJAEQgGACgDACIgHAMQgCADgHACQgHACgBADIgCAHIAAAEIgBACIgJAKgEAxPAmOIAAAAIAAAAg");
	var mask_graphics_47 = new cjs.Graphics().p("EAw9AbXID8AAIAALKIgNgRQgTgVgCgBQgCgDgGgBQgIgBgDgEIgEgIQgDgEgEgCQgIgDgDgDIgFgEQgCgCgrgEIgGABIgMACQgQAAgJAGIgQAJQgEACgEADIgGAGIgJAEQgGACgDADIgHANQgCACgHADQgHACgBADIgCAHIAAAFIgBABIgJALgEAxPAmUIAAAAIAAAAg");
	var mask_graphics_48 = new cjs.Graphics().p("EAw9Aa9ID8AAIAALqIgNgRQgTgWgCgCQgCgCgGgCQgIgBgDgEIgEgIQgDgEgEgCQgIgEgDgCIgFgFQgCgCgrgEIgGABIgMACQgQAAgJAGIgQAKQgEABgEAFIgGAFIgJAFQgGACgDADIgHANQgCADgHACQgHADgBACIgCAIIAAAFIgBACIgJALgEAxPAmaIAAAAIAAAAg");
	var mask_graphics_49 = new cjs.Graphics().p("EAw9AaiID8AAIAAMMIgNgSQgTgYgCgBQgCgDgGgBQgIgBgDgFIgEgIQgDgFgEgBQgIgEgDgDIgFgFQgCgCgrgEIgGABIgMACQgQAAgJAGIgQAKQgEACgEAFIgGAGIgJAEQgGADgDACIgHAOQgCADgHADQgHACgBADIgCAIIAAAFIgBACIgJALgEAxPAmgIAAAAIAAAAg");
	var mask_graphics_50 = new cjs.Graphics().p("EAw9AaIID8AAIAAMsIgNgTQgTgYgCgBQgCgDgGgCQgIgBgDgEIgEgJQgDgFgEgCQgIgEgDgDIgFgEQgCgDgrgEIgGAAIgMADQgQAAgJAHIgQAKQgEACgEAEIgGAHIgJAEQgGADgDADIgHAOQgCADgHADQgHADgBADIgCAIIAAAGIgBABIgJAMgEAxPAmmIAAgBIAAABg");
	var mask_graphics_51 = new cjs.Graphics().p("EAw9AZvID8AAIAANLIgNgTQgTgZgCgCQgCgDgGgBQgIgBgDgFIgEgJQgDgFgEgCQgIgEgDgDIgFgFQgCgDgrgEQgDgBgDABIgMADQgQAAgJAHIgQALQgEACgEAEIgGAHIgJAFQgGACgDAEIgHAPQgCADgHACQgHADgBADIgCAJIAAAGIgBABIgJANgEAxPAmrIAAAAIAAABg");
	var mask_graphics_52 = new cjs.Graphics().p("EAw9AZVID8AAIAANsIgNgUQgTgbgCgBQgCgDgGgCQgIgBgDgFIgEgJQgDgGgEgCQgIgEgDgDIgFgFQgCgDgrgFQgDAAgDABQgFACgHABQgQAAgJAHIgQALQgEACgEAFIgGAHIgJAFQgGADgDADIgHAQQgCADgHADQgHADgBADIgCAJIAAAGIgBABIgJANgEAxPAmxIAAAAIAAAAg");
	var mask_graphics_53 = new cjs.Graphics().p("EAw9AY8ID8AAIAAOLIgNgVQgTgbgCgCQgCgDgGgCQgIgBgDgFIgEgJQgDgGgEgCQgIgEgDgEIgFgFQgCgDgrgFQgDAAgDABQgFACgHABQgQAAgJAHIgQAMQgEACgEAFIgGAHIgJAFQgGADgDAEIgHAQQgCADgHADQgHADgBADIgCAJIAAAHIgBABIgJAOgEAxPAm3IAAgBIAAABg");
	var mask_graphics_54 = new cjs.Graphics().p("EAw9AYkID8AAIAAOpIgNgWQgTgcgCgBQgCgEgGgBQgIgCgDgFIgEgJQgDgHgEgCQgIgEgDgEIgFgFQgCgDgrgFQgDgBgDACQgFACgHABQgQAAgJAHIgQAMQgEADgEAFIgGAHQgBACgIADQgGADgDAEIgHAQQgCAEgHADQgHADgBAEIgCAJIAAAHIgBABIgJAOgEAxPAm8IAAAAIAAAAg");
	var mask_graphics_55 = new cjs.Graphics().p("EAw9AYLID8AAIAAPIIgNgWQgTgdgCgCQgCgDgGgCQgIgCgDgFIgEgKQgDgGgEgCQgIgFgDgDIgFgGQgCgDgrgFQgDgBgDACQgFACgHABQgQAAgJAHIgQANQgEACgEAGIgGAHQgBACgIAEQgGADgDADIgHARQgCAEgHADQgHADgBAEIgCAKIAAAGIgBACIgJAPgEAxPAnCIAAgBIAAABg");
	var mask_graphics_56 = new cjs.Graphics().p("EAw9AXzID8AAIAAPmIgNgXQgTgegCgCQgCgDgGgCQgIgBgDgGIgEgKQgDgHgEgCQgIgFgDgDIgFgGQgCgDgrgGQgDAAgDABQgFADgHAAQgQAAgJAIIgQANQgEADgEAFIgGAIQgBACgIAEQgGADgDAEIgHARQgCAEgHADQgHADgBAEIgCAKIAAAHIgBACIgJAPgEAxPAnHIAAAAIAAAAg");
	var mask_graphics_57 = new cjs.Graphics().p("EAw9AXcID8AAIAAQDIgNgYQgTgfgCgBQgCgEgGgCQgIgBgDgGIgEgLQgDgGgEgDQgIgEgDgEIgFgGQgCgDgrgGQgDgBgDACQgFACgHABQgQAAgJAIIgQAOQgEACgEAGIgGAIQgBACgIAEQgGADgDAEIgHASQgCAEgHADQgHADgBAEIgCALIAAAHIgBACIgJAPgEAxPAnMIAAAAIAAABg");
	var mask_graphics_58 = new cjs.Graphics().p("EAw9AXEID8AAIAAQgIgNgYQgTgggCgBQgCgEgGgCQgIgBgDgGIgEgLQgDgHgEgCQgIgFgDgEIgFgHQgCgDgrgFQgDgBgDACQgFACgHABQgQAAgJAIIgQAOQgEACgEAGIgGAJQgBACgIAEQgGADgDAEIgHATQgCADgHAEQgHADgBAEIgCALIAAAHIgBACIgJAQgEAxPAnSIAAgBIAAABg");
	var mask_graphics_59 = new cjs.Graphics().p("EAw9AWtID8AAIAAQ9IgNgZQgTgggCgCQgCgEgGgCQgIgCgDgGIgEgLQgDgHgEgCQgIgFgDgEIgFgHQgCgDgrgGQgDAAgDABQgFADgHABQgQAAgJAIIgQAOQgEADgEAGIgGAIQgBACgIAEQgGAEgDAEIgHATQgCAEgHAEQgHADgBAEIgCALIAAAIIgBACIgJAQgEAxPAnXIAAAAIAAAAg");
	var mask_graphics_60 = new cjs.Graphics().p("EAw9AWWID8AAIAARaIgNgaQgTghgCgCQgCgEgGgCQgIgCgDgGIgEgLQgDgHgEgDQgIgFgDgEIgFgHQgCgDgrgGQgDgBgDACQgFACgHABQgQAAgJAJIgQAPQgEACgEAGIgGAJQgBACgIAEQgGAEgDAEIgHAUQgCAEgHADQgHAEgBAEIgCAMIAAAHIgBACIgJARgEAxPAncIAAAAIAAAAg");
	var mask_graphics_61 = new cjs.Graphics().p("EAw9AWAID8AAIAAR1IgNgaQgTgigCgCQgCgEgGgCQgIgCgDgGIgEgMQgDgHgEgDQgIgFgDgEIgFgHQgCgEgrgGQgDAAgDABQgFADgHABQgQAAgJAJIgQAPQgEACgEAHIgGAJQgBACgIAEQgGAEgDAEIgHAUQgCAEgHAEQgHAEgBAEIgCAMIAAAIIgBACIgJARgEAxPAnhIAAAAIAAAAg");
	var mask_graphics_62 = new cjs.Graphics().p("EAw9AVqID8AAIAASRIgNgbQgTgjgCgCQgCgEgGgCQgIgCgDgHIgEgMQgDgHgEgDQgIgFgDgFIgFgHQgCgDgrgGQgDgBgDACQgFACgHABQgQAAgJAKIgQAPQgEADgEAGIgGAJQgBADgIAEQgGAEgDAEIgHAVQgCAEgHAEQgHAEgBAEIgCAMIAAAIIgBACIgJASgEAxPAnmIAAAAIAAAAg");
	var mask_graphics_63 = new cjs.Graphics().p("EAw9AVUID8AAIAASsIgNgbQgTgkgCgCQgCgEgGgDQgIgBgDgHIgEgMQgDgIgEgDQgIgFgDgFIgFgHQgCgDgrgHQgDgBgDACQgFADgHABQgQAAgJAJIgQAQQgEADgEAGIgGAKQgBACgIAFQgGADgDAFIgHAVQgCAEgHAEQgHAEgBAFIgCAMIAAAIIgBACIgJASgEAxPAnrIAAAAIAAAAg");
	var mask_graphics_64 = new cjs.Graphics().p("EAw9AU/ID8AAIAATGIgNgcQgTgkgCgCQgCgFgGgCQgIgCgDgHIgEgMQgDgIgEgDQgIgFgDgFIgFgHQgCgEgrgHQgDAAgDACQgFACgHABQgQAAgJAKIgQAQQgEADgEAHIgGAJQgBADgIAEQgGAEgDAFIgHAVQgCAFgHAEQgHAEgBAEIgCANIAAAIIgBADIgJASgEAxPAnwIAAgBIAAABg");
	var mask_graphics_65 = new cjs.Graphics().p("EAw9AUqID8AAIAATgIgNgcQgTgmgCgBQgCgFgGgCQgIgCgDgHIgEgNQgDgIgEgDQgIgGgDgEIgFgIQgCgDgrgHQgDgBgDACQgFADgHABQgQAAgJAKIgQAQQgEADgEAHIgGAKQgBACgIAFQgGAEgDAEIgHAWQgCAFgHAEQgHAEgBAFIgCANIAAAIIgBADIgJASgEAxPAn0IAAAAIAAABg");
	var mask_graphics_66 = new cjs.Graphics().p("EAw9AUVID8AAIAAT7IgNgdQgTgngCgCQgCgEgGgDQgIgCgDgHIgEgNQgDgIgEgDQgIgGgDgFIgFgHQgCgEgrgHQgDgBgDACQgFADgHABQgQAAgJAKIgQARQgEADgEAHIgGAKQgBADgIAEQgGAEgDAFIgHAXQgCAEgHAFQgHAEgBAEIgCANIAAAJIgBADIgJATgEAxPAn5IAAAAIAAAAg");
	var mask_graphics_67 = new cjs.Graphics().p("EAw9AUAID8AAIAAUVIgNgeQgTgngCgCQgCgFgGgCQgIgCgDgHIgEgOQgDgIgEgDQgIgGgDgFIgFgIQgCgDgrgIQgDAAgDACQgFADgHABQgQAAgJAKIgQARQgEADgEAHIgGAKQgBADgIAFQgGAEgDAFIgHAXQgCAFgHAEQgHAEgBAFIgCANIAAAJIgBADIgJATgEAxPAn+IAAgBIAAABg");
	var mask_graphics_68 = new cjs.Graphics().p("EAw9ATsID8AAIAAUuIgNgfQgTgogCgBQgCgFgGgDQgIgCgDgHIgEgOQgDgIgEgDQgIgGgDgFIgFgIQgCgEgrgHQgDgBgDACQgFADgHABQgQAAgJALIgQARQgEADgEAHIgGALQgBACgIAFQgGAEgDAFIgHAYQgCAFgHAEQgHAEgBAFIgCAOIAAAJIgBACIgJAUgEAxPAoCIAAAAIAAABg");
	var mask_graphics_69 = new cjs.Graphics().p("EAw9ATYID8AAIAAVHIgNgfQgTgpgCgCQgCgFgGgCQgIgCgDgIIgEgOQgDgIgEgDQgIgHgDgFIgFgIQgCgEgrgHQgDgBgDACQgFADgHABQgQAAgJALIgQASQgEADgEAHIgGALQgBACgIAFQgGAFgDAFIgHAYQgCAFgHAEQgHAFgBAFIgCANIAAAKIgBACIgJAUgEAxPAoHIAAgBIAAABg");
	var mask_graphics_70 = new cjs.Graphics().p("EAw9ATFID8AAIAAVeIgNgfQgTgpgCgCQgCgFgGgDQgIgCgDgIIgEgOQgDgJgEgDQgIgGgDgFIgFgJQgCgDgrgIQgDgBgDACQgFADgHACQgQAAgJALIgQARQgEAEgEAHIgGALQgBADgIAFQgGAEgDAFIgHAZQgCAFgHAEQgHAFgBAFIgCAOIAAAJIgBADIgJAUgEAxPAoLIAAAAIAAAAg");
	var mask_graphics_71 = new cjs.Graphics().p("EAw9ASxID8AAIAAV3IgNggQgTgqgCgCQgCgFgGgDQgIgCgDgHIgEgPQgDgJgEgDQgIgHgDgFIgFgIQgCgEgrgIQgDgBgDACQgFAEgHABQgQAAgJALQgOARgCABQgEADgEAIIgGALQgBADgIAFQgGAFgDAFIgHAYQgCAGgHAEQgHAFgBAFIgCAOIAAAKIgBADIgJAUgEAxPAoPIAAAAIAAABg");
	var mask_graphics_72 = new cjs.Graphics().p("EAw9ASfID8AAIAAWOIgNghQgTgrgCgCQgCgFgGgCQgIgCgDgIIgEgPQgDgJgEgDQgIgHgDgFIgFgJQgCgEgrgIQgDAAgDACQgFADgHABQgQAAgJALQgOASgCABQgEADgEAIIgGALQgBADgIAFQgGAFgDAFIgHAZQgCAGgHAEQgHAFgBAFIgCAPIAAAKIgBACIgJAVgEAxPAoUIAAgBIAAABg");
	var mask_graphics_73 = new cjs.Graphics().p("EAw9ASMID8AAIAAWlIgNghQgTgrgCgCQgCgGgGgCQgIgCgDgIIgEgPQgDgKgEgDQgIgHgDgFIgFgJQgCgEgrgIQgDAAgDACQgFADgHABQgQAAgJAMQgOARgCABQgEAEgEAIIgGALQgBADgIAFQgGAFgDAFIgHAaQgCAFgHAFQgHAFgBAFIgCAPIAAAKIgBADIgJAVgEAxPAoYIAAgBIAAABg");
	var mask_graphics_74 = new cjs.Graphics().p("EAw9AR6ID8AAIAAW8IgNgiQgTgsgCgCQgCgFgGgDQgIgCgDgIIgEgPQgDgKgEgDQgIgHgDgGIgFgIQgCgFgrgIQgDAAgDACQgFADgHABQgQAAgJAMQgOASgCABQgEAEgEAIIgGALQgBADgIAFQgGAFgDAGIgHAaQgCAFgHAFQgHAFgBAFIgCAPIAAAKIgBADIgJAWgEAxPAocIAAAAIAAAAg");
	var mask_graphics_75 = new cjs.Graphics().p("EAw9ARoID8AAIAAXSIgNgiQgTgtgCgCQgCgFgGgDQgIgCgDgIIgEgQQgDgJgEgEQgIgHgDgFIgFgJQgCgEgrgJQgDAAgDACQgFADgHACQgQAAgJALQgOASgCACQgEADgEAIIgGAMQgBADgIAGQgGAEgDAGIgHAaQgCAGgHAFQgHAEgBAGIgCAPIAAALIgBACIgJAXgEAxPAogIAAAAIAAAAg");
	var mask_graphics_76 = new cjs.Graphics().p("EAw9ARWID8AAIAAXpIgNgjQgTgtgCgDQgCgFgGgDQgIgCgDgJIgEgPQgDgKgEgDQgIgHgDgGIgFgJQgCgEgrgJQgDAAgDACQgFADgHACQgQAAgJAMQgOASgCABQgEAEgEAIIgGAMQgBADgIAFQgGAFgDAGIgHAbQgCAFgHAFQgHAFgBAGIgCAPIAAALIgBADIgJAWgEAxPAokIAAAAIAAAAg");
	var mask_graphics_77 = new cjs.Graphics().p("EAw9ARFID8AAIAAX+IgNgjQgTgugCgCQgCgGgGgDQgIgCgDgJIgEgPQgDgKgEgEQgIgHgDgGIgFgJQgCgEgrgJQgDgBgDADQgFADgHACQgQAAgJAMQgOASgCACQgEADgEAJIgGAMQgBADgIAFQgGAFgDAGIgHAbQgCAGgHAFQgHAFgBAGIgCAPIAAALIgBADIgJAXgEAxPAooIAAgBIAAABg");
	var mask_graphics_78 = new cjs.Graphics().p("EAw9AQ0ID8AAIAAYTIgNgjQgTgvgCgCQgCgGgGgDQgIgCgDgJIgEgQQgDgKgEgEQgIgHgDgGIgFgJQgCgEgrgJQgDgBgDACQgFAEgHACQgQAAgJAMQgOATgCABQgEAEgEAIIgGANQgBADgIAFQgGAFgDAGIgHAcQgCAFgHAFQgHAFgBAGIgCAQIAAALIgBADIgJAXgEAxPAosIAAgBIAAABg");
	var mask_graphics_79 = new cjs.Graphics().p("EAw9AQjID8AAIAAYoIgNgkQgTgvgCgCQgCgGgGgDQgIgCgDgJIgEgQQgDgLgEgDQgIgIgDgFIgFgKQgCgEgrgJQgDgBgDACQgFAEgHABQgQAAgJANQgOATgCABQgEAEgEAJIgGAMQgBADgIAGQgGAFgDAGIgHAcQgCAGgHAFQgHAFgBAGIgCAQIAAALIgBADIgJAXgEAxPAovIAAAAIAAABg");
	var mask_graphics_80 = new cjs.Graphics().p("EAw9AQTID8AAIAAY8IgNgkQgTgwgCgDQgCgFgGgDQgIgDgDgJIgEgQQgDgKgEgEQgIgHgDgGIgFgKQgCgEgrgJQgDgBgDACQgFAEgHABQgQAAgJANQgOATgCACQgEADgEAJIgGANQgBADgIAGQgGAFgDAGIgHAcQgCAGgHAFQgHAFgBAGIgCARIAAALIgBADIgJAYgEAxPAozIAAAAIAAAAg");
	var mask_graphics_81 = new cjs.Graphics().p("EAw9AQDID8AAIAAZQIgNglQgTgwgCgDQgCgGgGgDQgIgCgDgJIgEgQQgDgLgEgEQgIgHgDgGIgFgKQgCgEgrgKQgDAAgDACQgFAEgHABQgQAAgJANQgOAUgCABQgEAEgEAJIgGANQgBADgIAGQgGAFgDAGIgHAcQgCAGgHAGQgHAFgBAGIgCAQIAAAMIgBADIgJAYgEAxPAo3IAAgBIAAABg");
	var mask_graphics_82 = new cjs.Graphics().p("EAw9APzID8AAIAAZkIgNglQgTgygCgCQgCgGgGgDQgIgCgDgJIgEgRQgDgLgEgEQgIgHgDgGIgFgKQgCgFgrgJQgDgBgDADQgFAEgHABQgQAAgJANQgOAUgCABQgEAEgEAJIgGANQgBADgIAGQgGAGgDAGIgHAcQgCAHgHAFQgHAFgBAGIgCARIAAALIgBADIgJAZgEAxPAo6IAAAAIAAABg");
	var mask_graphics_83 = new cjs.Graphics().p("EAw9APkID8AAIAAZ3IgNgmQgTgygCgCQgCgGgGgDQgIgDgDgJIgEgRQgDgLgEgDQgIgIgDgGIgFgKQgCgFgrgJQgDgBgDACQgFAEgHACQgQAAgJANQgOAUgCABQgEAEgEAKIgGANQgBADgIAGQgGAFgDAGIgHAeQgCAGgHAFQgHAFgBAHIgCARIAAALIgBADIgJAZgEAxPAo+IAAgBIAAABg");
	var mask_graphics_84 = new cjs.Graphics().p("EAw9APVID8AAIAAaKIgNgnQgTgygCgCQgCgHgGgDQgIgCgDgJIgEgSQgDgKgEgEQgIgIgDgGIgFgKQgCgFgrgJQgDgBgDACQgFAEgHACQgQAAgJANQgOAUgCACQgEADgEAKIgGANQgBADgIAGQgGAGgDAGIgHAeQgCAGgHAFQgHAGgBAGIgCARIAAAMIgBADIgJAZgEAxPApBIAAAAIAAAAg");
	var mask_graphics_85 = new cjs.Graphics().p("EAw9APGID8AAIAAacIgNgmQgTgzgCgDQgCgGgGgDQgIgDgDgJIgEgRQgDgLgEgEQgIgIgDgGIgFgLQgCgEgrgKQgDgBgDADQgFAEgHABQgQAAgJAOQgOAUgCACQgEAEgEAJIgGANQgBAEgIAGQgGAFgDAHIgHAeQgCAGgHAFQgHAGgBAGIgCARIAAAMIgBADIgJAZgEAxPApEIAAAAIAAABg");
	var mask_graphics_86 = new cjs.Graphics().p("EAw9AO4ID8AAIAAauIgNgnQgTg0gCgCQgCgHgGgDQgIgCgDgKIgEgRQgDgLgEgEQgIgIgDgHIgFgKQgCgFgrgJQgDgBgDACQgFAEgHACQgQAAgJAOQgOAUgCACQgEAEgEAJIgGAOQgBADgIAGQgGAGgDAGIgHAeQgCAHgHAFQgHAGgBAGIgCASIAAAMIgBADIgJAZgEAxPApIIAAgBIAAABg");
	var mask_graphics_87 = new cjs.Graphics().p("EAw9AOqID8AAIAAa/IgNgnQgTg0gCgDQgCgGgGgDQgIgDgDgJIgEgSQgDgLgEgEQgIgIgDgHIgFgKQgCgFgrgKQgDAAgDACQgFAEgHACQgQAAgJANQgOAVgCACQgEAEgEAJIgGAOQgBADgIAHQgGAFgDAHIgHAeQgCAHgHAFQgHAGgBAGIgCASIAAAMIgBADIgJAagEAxPApLIAAgBIAAABg");
	var mask_graphics_88 = new cjs.Graphics().p("EAw9AOcID8AAIAAbRIgNgoQgTg1gCgCQgCgHgGgDQgIgCgDgKIgEgSQgDgLgEgEQgIgIgDgHIgFgKQgCgFgrgKQgDgBgDADQgFAEgHABQgQAAgJAOQgOAVgCACQgEAEgEAKIgGANQgBAEgIAGQgGAGgDAGIgHAfQgCAGgHAGQgHAGgBAGIgCASIAAAMIgBADIgJAagEAxPApOIAAgBIAAABg");
	var mask_graphics_89 = new cjs.Graphics().p("EAw9AOOID8AAIAAbiIgNgoQgTg1gCgDQgCgGgGgEQgIgCgDgKIgEgSQgDgLgEgEQgIgJgDgGIgFgLQgCgFgrgKQgDAAgDACQgFAEgHACQgQAAgJAOQgOAVgCACQgEAEgEAKIgGANQgBAEgIAGQgGAGgDAHIgHAfQgCAGgHAGQgHAGgBAGIgCASIAAAMIgBAEIgJAagEAxPApRIAAgBIAAABg");
	var mask_graphics_90 = new cjs.Graphics().p("EAw9AOBID8AAIAAbyIgNgoQgTg2gCgCQgCgHgGgDQgIgDgDgKIgEgSQgDgLgEgFQgIgIgDgGIgFgLQgCgFgrgKQgDgBgDADQgFAEgHABQgQAAgJAOQgOAWgCACQgEAEgEAKIgGAOQgBADgIAHQgGAFgDAHIgHAfQgCAHgHAGQgHAFgBAHIgCASIAAANIgBADIgJAagEAxPApUIAAgBIAAABg");
	var mask_graphics_91 = new cjs.Graphics().p("EAw9AN0ID8AAIAAcCIgNgpQgTg2gCgCQgCgHgGgDQgIgDgDgKIgEgSQgDgMgEgEQgIgIgDgHIgFgLQgCgFgrgKQgDAAgDACQgFAEgHACQgQAAgJAOQgOAWgCABQgEAFgEAKIgGAOQgBADgIAHQgGAFgDAHIgHAgQgCAGgHAGQgHAGgBAHIgCASIAAANIgBADIgJAbgEAxPApXIAAgBIAAABg");
	var mask_graphics_92 = new cjs.Graphics().p("EAw9ANoID8AAIAAcRIgNgpQgTg2gCgDQgCgHgGgDQgIgDgDgKIgEgSQgDgMgEgEQgIgIgDgHIgFgLQgCgFgrgKQgDgBgDACQgFAFgHABQgQAAgJAPQgOAVgCACQgEAEgEAKIgGAPQgBADgIAHQgGAGgDAGIgHAgQgCAHgHAGQgHAGgBAHIgCASIAAANIgBADIgJAbgEAxPApZIAAAAIAAABg");
	var mask_graphics_93 = new cjs.Graphics().p("EAw9ANcID8AAIAAcgIgNgpQgTg3gCgDQgCgHgGgDQgIgCgDgLIgEgSQgDgMgEgEQgIgJgDgHIgFgLQgCgFgrgKQgDgBgDADQgFAEgHACQgQAAgJAOQgOAWgCACQgEAEgEAKIgGAPQgBADgIAHQgGAGgDAHIgHAgQgCAHgHAFQgHAGgBAHIgCATIAAANIgBADIgJAbgEAxPApcIAAAAIAAABg");
	var mask_graphics_94 = new cjs.Graphics().p("EAw9ANQID8AAIAAcvIgNgqQgTg3gCgDQgCgGgGgEQgIgCgDgLIgEgSQgDgMgEgFQgIgIgDgHIgFgLQgCgFgrgLQgDAAgDACQgFAEgHACQgQAAgJAPQgOAWgCACQgEAEgEAKIgGAPQgBADgIAHQgGAGgDAHIgHAgQgCAHgHAGQgHAGgBAHIgCATIAAAMIgBAEIgJAbgEAxPApfIAAgBIAAABg");
	var mask_graphics_95 = new cjs.Graphics().p("EAw9ANEID8AAIAAc+IgNgqQgTg4gCgDQgCgGgGgEQgIgCgDgLIgEgTQgDgMgEgEQgIgJgDgHIgFgLQgCgFgrgKQgDgBgDACQgFAFgHABQgQAAgJAPQgOAWgCACQgEAEgEALIgGAOQgBAEgIAHQgGAGgDAHIgHAgQgCAHgHAGQgHAGgBAHIgCATIAAANIgBAEIgJAbgEAxPAphIAAAAIAAABg");
	var mask_graphics_96 = new cjs.Graphics().p("EAw9AM5ID8AAIAAdMIgNgrQgTg4gCgDQgCgHgGgDQgIgDgDgKIgEgTQgDgMgEgFQgIgIgDgHIgFgLQgCgGgrgKQgDgBgDADQgFAEgHACQgQAAgJAOQgOAXgCACQgEAEgEALIgGAOQgBAEgIAHQgGAGgDAHIgHAhQgCAHgHAGQgHAGgBAHIgCATIAAANIgBADIgJAcgEAxPApkIAAAAIAAAAg");
	var mask_graphics_97 = new cjs.Graphics().p("EAw9AMuID8AAIAAdaIgNgrQgTg5gCgDQgCgHgGgDQgIgDgDgKIgEgTQgDgNgEgEQgIgJgDgHIgFgLQgCgFgrgLQgDgBgDADQgFAEgHACQgQAAgJAPQgOAXgCABQgEAFgEAKIgGAPQgBAEgIAHQgGAGgDAHIgHAhQgCAHgHAGQgHAGgBAHIgCATIAAANIgBAEIgJAcgEAxPApmIAAAAIAAABg");
	var mask_graphics_98 = new cjs.Graphics().p("EAw9AMkID8AAIAAdmIgNgrQgTg5gCgDQgCgHgGgDQgIgDgDgKIgEgUQgDgMgEgFQgIgIgDgHIgFgMQgCgFgrgLQgDgBgDADQgFAEgHACQgQAAgJAPQgOAXgCACQgEAEgEALIgGAPQgBADgIAHQgGAGgDAIIgHAhQgCAHgHAGQgHAGgBAHIgCAUIAAANIgBADIgJAdgEAxPAppIAAgBIAAABg");
	var mask_graphics_99 = new cjs.Graphics().p("EAw9AMZID8AAIAAd0IgNgsQgTg5gCgDQgCgHgGgEQgIgCgDgLIgEgTQgDgNgEgEQgIgJgDgHIgFgMQgCgFgrgLQgDAAgDACQgFAFgHABQgQAAgJAPQgOAYgCABQgEAFgEAKIgGAPQgBAEgIAHQgGAGgDAHIgHAiQgCAHgHAGQgHAGgBAIIgCATIAAANIgBAEIgJAcgEAxPAprIAAAAIAAABg");
	var mask_graphics_100 = new cjs.Graphics().p("EAw9AMPID8AAIAAeAIgNgrQgTg6gCgDQgCgHgGgEQgIgCgDgLIgEgUQgDgMgEgFQgIgJgDgHIgFgLQgCgGgrgKQgDgBgDACQgFAFgHACQgQAAgJAPQgOAXgCACQgEAEgEALIgGAPQgBAEgIAHQgGAGgDAHIgHAiQgCAHgHAGQgHAHgBAHIgCATIAAAOIgBADIgJAdgEAxPAptIAAAAIAAABg");
	var mask_graphics_101 = new cjs.Graphics().p("EAw9AMGID8AAIAAeMIgNgsQgTg7gCgCQgCgIgGgDQgIgDgDgLIgEgTQgDgNgEgEQgIgJgDgIIgFgLQgCgGgrgKQgDgBgDACQgFAFgHACQgQAAgJAPQgOAXgCACQgEAFgEAKIgGAQQgBADgIAHQgGAHgDAHIgHAiQgCAHgHAGQgHAHgBAHIgCAUIAAANIgBAEIgJAcgEAxPApvIAAAAIAAABg");
	var mask_graphics_102 = new cjs.Graphics().p("EAw9AL9ID8AAIAAeXIgNgsQgTg7gCgDQgCgHgGgEQgIgCgDgLIgEgUQgDgNgEgEQgIgJgDgHIgFgMQgCgGgrgKQgDgBgDACQgFAFgHACQgQAAgJAPQgOAYgCABQgEAFgEALIgGAPQgBAEgIAHQgGAGgDAHIgHAjQgCAHgHAGQgHAHgBAHIgCAUIAAANIgBAEIgJAdgEAxPApyIAAgBIAAABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_graphics_45,x:338.6,y:245.8}).wait(1).to({graphics:mask_graphics_46,x:338.6,y:246.5}).wait(1).to({graphics:mask_graphics_47,x:338.6,y:247.2}).wait(1).to({graphics:mask_graphics_48,x:338.6,y:247.9}).wait(1).to({graphics:mask_graphics_49,x:338.6,y:248.6}).wait(1).to({graphics:mask_graphics_50,x:338.6,y:249.3}).wait(1).to({graphics:mask_graphics_51,x:338.6,y:249.9}).wait(1).to({graphics:mask_graphics_52,x:338.6,y:250.6}).wait(1).to({graphics:mask_graphics_53,x:338.6,y:251.2}).wait(1).to({graphics:mask_graphics_54,x:338.6,y:251.9}).wait(1).to({graphics:mask_graphics_55,x:338.6,y:252.5}).wait(1).to({graphics:mask_graphics_56,x:338.6,y:253.1}).wait(1).to({graphics:mask_graphics_57,x:338.6,y:253.8}).wait(1).to({graphics:mask_graphics_58,x:338.6,y:254.4}).wait(1).to({graphics:mask_graphics_59,x:338.6,y:255}).wait(1).to({graphics:mask_graphics_60,x:338.6,y:255.5}).wait(1).to({graphics:mask_graphics_61,x:338.6,y:256.1}).wait(1).to({graphics:mask_graphics_62,x:338.6,y:256.7}).wait(1).to({graphics:mask_graphics_63,x:338.6,y:257.3}).wait(1).to({graphics:mask_graphics_64,x:338.6,y:257.8}).wait(1).to({graphics:mask_graphics_65,x:338.6,y:258.4}).wait(1).to({graphics:mask_graphics_66,x:338.6,y:258.9}).wait(1).to({graphics:mask_graphics_67,x:338.6,y:259.4}).wait(1).to({graphics:mask_graphics_68,x:338.6,y:260}).wait(1).to({graphics:mask_graphics_69,x:338.6,y:260.5}).wait(1).to({graphics:mask_graphics_70,x:338.6,y:261}).wait(1).to({graphics:mask_graphics_71,x:338.6,y:261.5}).wait(1).to({graphics:mask_graphics_72,x:338.6,y:262}).wait(1).to({graphics:mask_graphics_73,x:338.6,y:262.5}).wait(1).to({graphics:mask_graphics_74,x:338.6,y:262.9}).wait(1).to({graphics:mask_graphics_75,x:338.6,y:263.4}).wait(1).to({graphics:mask_graphics_76,x:338.6,y:263.9}).wait(1).to({graphics:mask_graphics_77,x:338.6,y:264.3}).wait(1).to({graphics:mask_graphics_78,x:338.6,y:264.7}).wait(1).to({graphics:mask_graphics_79,x:338.6,y:265.2}).wait(1).to({graphics:mask_graphics_80,x:338.6,y:265.6}).wait(1).to({graphics:mask_graphics_81,x:338.6,y:266}).wait(1).to({graphics:mask_graphics_82,x:338.6,y:266.4}).wait(1).to({graphics:mask_graphics_83,x:338.6,y:266.8}).wait(1).to({graphics:mask_graphics_84,x:338.6,y:267.2}).wait(1).to({graphics:mask_graphics_85,x:338.6,y:267.6}).wait(1).to({graphics:mask_graphics_86,x:338.6,y:268}).wait(1).to({graphics:mask_graphics_87,x:338.6,y:268.3}).wait(1).to({graphics:mask_graphics_88,x:338.6,y:268.7}).wait(1).to({graphics:mask_graphics_89,x:338.6,y:269}).wait(1).to({graphics:mask_graphics_90,x:338.6,y:269.4}).wait(1).to({graphics:mask_graphics_91,x:338.6,y:269.7}).wait(1).to({graphics:mask_graphics_92,x:338.6,y:270}).wait(1).to({graphics:mask_graphics_93,x:338.6,y:270.4}).wait(1).to({graphics:mask_graphics_94,x:338.6,y:270.7}).wait(1).to({graphics:mask_graphics_95,x:338.6,y:271}).wait(1).to({graphics:mask_graphics_96,x:338.6,y:271.3}).wait(1).to({graphics:mask_graphics_97,x:338.6,y:271.5}).wait(1).to({graphics:mask_graphics_98,x:338.6,y:271.8}).wait(1).to({graphics:mask_graphics_99,x:338.6,y:272.1}).wait(1).to({graphics:mask_graphics_100,x:338.6,y:272.3}).wait(1).to({graphics:mask_graphics_101,x:338.6,y:272.6}).wait(1).to({graphics:mask_graphics_102,x:338.6,y:272.8}).wait(58));

	// Layer 4
	this.instance = new lib.izo_black_normal();
	this.instance.setTransform(651.6,487.7,0.6,0.6);

	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(664.5,508.2,0.608,0.6,0,0,0,21.5,35);
	this.instance_1._off = true;

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},45).to({state:[{t:this.instance_1}]},58).to({state:[{t:this.instance_1}]},14).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(103).to({_off:false},0).to({scaleX:0.6,y:504.2},14).wait(43));

	// Layer 5
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(664.6,508.4,0.6,0.6,0,0,0,21.5,35);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(45).to({_off:false},0).wait(57).to({alpha:0.012},2).wait(56));

	// Layer 4 copy
	this.instance_3 = new lib.Symbol1copy("synched",0);
	this.instance_3.setTransform(642.2,486.7,0.6,0.6,0,0,0,123,149);

	this.instance_4 = new lib.Symbol1copy2("synched",0);
	this.instance_4.setTransform(642.2,557.5,0.6,0.6,0,0,0,123,149);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({startPosition:0},0).to({y:565.2},24,cjs.Ease.get(1)).to({_off:true,y:557.5},11).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({_off:false},11).to({regY:149.1,scaleY:0.5,y:562.6},57,cjs.Ease.get(0.5)).to({scaleY:0.51,y:567.1},1,cjs.Ease.get(-0.5)).to({scaleY:0.57,y:858.2,alpha:0.59},27,cjs.Ease.get(-1)).to({_off:true},1).wait(29));

	// Layer 7 copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("EAooAlWMAAAgmPILEAAMAAAAmPg");
	var mask_1_graphics_10 = new cjs.Graphics().p("EAooAlWMAAAgmPILEAAMAAAAmPg");
	var mask_1_graphics_11 = new cjs.Graphics().p("EAooAmJMAAAgmOILEAAMAAAAmOg");
	var mask_1_graphics_12 = new cjs.Graphics().p("EAooAm7MAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_13 = new cjs.Graphics().p("EAooAnqMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_14 = new cjs.Graphics().p("EAooAoXMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EAooApBMAAAgmQILEAAMAAAAmQg");
	var mask_1_graphics_16 = new cjs.Graphics().p("EAooApqMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_17 = new cjs.Graphics().p("EAooAqQMAAAgmQILEAAMAAAAmQg");
	var mask_1_graphics_18 = new cjs.Graphics().p("EAooAq0MAAAgmQILEAAMAAAAmQg");
	var mask_1_graphics_19 = new cjs.Graphics().p("EAooArWMAAAgmQILEAAMAAAAmQg");
	var mask_1_graphics_20 = new cjs.Graphics().p("EAooAr2MAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_21 = new cjs.Graphics().p("EAooAsUMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_22 = new cjs.Graphics().p("EAooAsvMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_23 = new cjs.Graphics().p("EAooAtIMAAAgmQILEAAMAAAAmQg");
	var mask_1_graphics_24 = new cjs.Graphics().p("EAooAtfMAAAgmQILEAAMAAAAmQg");
	var mask_1_graphics_25 = new cjs.Graphics().p("EAooAt0MAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_26 = new cjs.Graphics().p("EAooAuHMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_27 = new cjs.Graphics().p("EAooAuXMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_28 = new cjs.Graphics().p("EAooAulMAAAgmQILEAAMAAAAmQg");
	var mask_1_graphics_29 = new cjs.Graphics().p("EAooAuxMAAAgmQILEAAMAAAAmQg");
	var mask_1_graphics_30 = new cjs.Graphics().p("EAooAu7MAAAgmQILEAAMAAAAmQg");
	var mask_1_graphics_31 = new cjs.Graphics().p("EAooAvDMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_32 = new cjs.Graphics().p("EAooAvIMAAAgmQILEAAMAAAAmQg");
	var mask_1_graphics_33 = new cjs.Graphics().p("EAooAvMMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_34 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_41 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EAooAvNMAAAgmRILEAAMAAAAmRg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:330.9,y:239}).wait(10).to({graphics:mask_1_graphics_10,x:330.9,y:239}).wait(1).to({graphics:mask_1_graphics_11,x:330.9,y:244.2}).wait(1).to({graphics:mask_1_graphics_12,x:330.9,y:249.1}).wait(1).to({graphics:mask_1_graphics_13,x:330.9,y:253.8}).wait(1).to({graphics:mask_1_graphics_14,x:330.9,y:258.3}).wait(1).to({graphics:mask_1_graphics_15,x:330.9,y:262.6}).wait(1).to({graphics:mask_1_graphics_16,x:330.9,y:266.6}).wait(1).to({graphics:mask_1_graphics_17,x:330.9,y:270.5}).wait(1).to({graphics:mask_1_graphics_18,x:330.9,y:274.1}).wait(1).to({graphics:mask_1_graphics_19,x:330.9,y:277.5}).wait(1).to({graphics:mask_1_graphics_20,x:330.9,y:280.7}).wait(1).to({graphics:mask_1_graphics_21,x:330.9,y:283.6}).wait(1).to({graphics:mask_1_graphics_22,x:330.9,y:286.3}).wait(1).to({graphics:mask_1_graphics_23,x:330.9,y:288.9}).wait(1).to({graphics:mask_1_graphics_24,x:330.9,y:291.2}).wait(1).to({graphics:mask_1_graphics_25,x:330.9,y:293.2}).wait(1).to({graphics:mask_1_graphics_26,x:330.9,y:295.1}).wait(1).to({graphics:mask_1_graphics_27,x:330.9,y:296.7}).wait(1).to({graphics:mask_1_graphics_28,x:330.9,y:298.2}).wait(1).to({graphics:mask_1_graphics_29,x:330.9,y:299.4}).wait(1).to({graphics:mask_1_graphics_30,x:330.9,y:300.4}).wait(1).to({graphics:mask_1_graphics_31,x:330.9,y:301.1}).wait(1).to({graphics:mask_1_graphics_32,x:330.9,y:301.7}).wait(1).to({graphics:mask_1_graphics_33,x:330.9,y:302}).wait(1).to({graphics:mask_1_graphics_34,x:330.9,y:302.1}).wait(1).to({graphics:mask_1_graphics_35,x:330.9,y:302.1}).wait(1).to({graphics:mask_1_graphics_36,x:330.9,y:302.1}).wait(1).to({graphics:mask_1_graphics_37,x:330.9,y:302.1}).wait(1).to({graphics:mask_1_graphics_38,x:330.9,y:302.1}).wait(1).to({graphics:mask_1_graphics_39,x:330.9,y:302.1}).wait(1).to({graphics:mask_1_graphics_40,x:330.9,y:302.1}).wait(1).to({graphics:mask_1_graphics_41,x:330.9,y:302.1}).wait(1).to({graphics:mask_1_graphics_42,x:330.9,y:302.1}).wait(1).to({graphics:mask_1_graphics_43,x:330.9,y:302.1}).wait(1).to({graphics:mask_1_graphics_44,x:330.9,y:302.1}).wait(1).to({graphics:mask_1_graphics_45,x:330.9,y:302.1}).wait(115));

	// Layer 6 copy
	this.instance_5 = new lib.Symbol3("synched",0);
	this.instance_5.setTransform(649.3,501.3,0.6,0.6,0,0,0,50,176.9);

	this.instance_5.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(160));

	// Layer 10
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5790BB").s().p("AhnB3IAAjtIDPAAIAADtg");
	this.shape_52.setTransform(931.3,407.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2C2C2C").s().p("AhnB4IAAjvIDPAAIAADvg");
	this.shape_53.setTransform(664.3,407.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#5790BB").s().p("AitDHIAAmNIFaAAIAAGNg");
	this.shape_54.setTransform(931.3,407.1,0.6,0.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5790BB").s().p("AitD9QAHj9gHj8IFaAAQgED9AED8g");
	this.shape_55.setTransform(931.3,410.3,0.6,0.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5790BB").s().p("AitEwQANkwgNkvIFaAAQgKExAKEug");
	this.shape_56.setTransform(931.3,413.4,0.6,0.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5790BB").s().p("AitFhQATlhgTlgIFaAAQgOFjAOFeg");
	this.shape_57.setTransform(931.3,416.3,0.6,0.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5790BB").s().p("AitGQQAYmQgYmPIFaAAQgSGTASGMg");
	this.shape_58.setTransform(931.3,419.1,0.6,0.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5790BB").s().p("AitG8QAem8gem7IFaAAQgXG/AXG4g");
	this.shape_59.setTransform(931.3,421.8,0.6,0.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5790BB").s().p("AitHmQAjnmgjnlIFaAAQgbHqAbHhg");
	this.shape_60.setTransform(931.3,424.3,0.6,0.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#5790BB").s().p("AitIOQAnoOgnoNIFaAAQgeITAeIIg");
	this.shape_61.setTransform(931.3,426.7,0.6,0.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5891BB").s().p("AitIzQAsozgsoyIFaAAQgiI4AiItg");
	this.shape_62.setTransform(931.3,429,0.6,0.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5891BB").s().p("AitJWQAwpWgwpWIFaAAQgmJdAmJPg");
	this.shape_63.setTransform(931.3,431.1,0.6,0.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5891BB").s().p("AitJ3QA0p3g0p2IFaAAQgpJ+ApJvg");
	this.shape_64.setTransform(931.3,433,0.6,0.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5891BB").s().p("AitKWQA4qWg4qVIFaAAQgrKeArKNg");
	this.shape_65.setTransform(931.3,434.9,0.6,0.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5891BB").s().p("AitKzQA7qzg7qyIFaAAQguK7AuKqg");
	this.shape_66.setTransform(931.3,436.6,0.6,0.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5891BB").s().p("AitLNQA+rNg+rMIFaAAQgxLVAxLEg");
	this.shape_67.setTransform(931.3,438.2,0.6,0.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5891BB").s().p("AitLlQBBrlhBrkIFaAAQgzLuAzLbg");
	this.shape_68.setTransform(931.3,439.6,0.6,0.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5891BB").s().p("AitL6QBDr6hDr5IFaAAQg1MDA1Lwg");
	this.shape_69.setTransform(931.3,440.9,0.6,0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5891BB").s().p("AitMOQBGsOhGsNIFaAAQg3MYA3MDg");
	this.shape_70.setTransform(931.3,442.1,0.6,0.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#5891BB").s().p("AitMfQBIsfhIseIFaAAQg4MpA4MUg");
	this.shape_71.setTransform(931.3,443.1,0.6,0.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5891BB").s().p("AitMtQBKsthKssIFaAAQg5M3A5Mig");
	this.shape_72.setTransform(931.3,444,0.6,0.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5891BB").s().p("AitM6QBLs6hLs5IFaAAQg7NEA7Mvg");
	this.shape_73.setTransform(931.3,444.7,0.6,0.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5891BB").s().p("AitNEQBNtEhNtDIFaAAQg8NPA8M4g");
	this.shape_74.setTransform(931.3,445.3,0.6,0.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5891BB").s().p("AitNMQBNtMhNtLIFaAAQg8NXA8NAg");
	this.shape_75.setTransform(931.3,445.8,0.6,0.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5891BB").s().p("AitNSQBOtShOtRIFaAAQg9NdA9NGg");
	this.shape_76.setTransform(931.3,446.2,0.6,0.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#5891BB").s().p("AitNVQBOtVhOtUIFaAAQg9NgA9NJg");
	this.shape_77.setTransform(931.3,446.4,0.6,0.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5891BB").s().p("AitNWQBOtWhOtVIFaAAQg9NhA9NKg");
	this.shape_78.setTransform(931.3,446.4,0.6,0.6);
	this.shape_78._off = true;

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#5891BB").s().p("AhnIAQAvoAgvn/IDPAAQglIGAlH5g");
	this.shape_79.setTransform(931.3,446.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52}]}).to({state:[{t:this.shape_54}]},10).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(34).to({_off:false},0).wait(9).to({_off:true},1).wait(116));

	// Layer 11
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.setTransform(909,487.3,0.6,0.6,0,0,0,123,149);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({y:486.7},0).to({y:565.2},24,cjs.Ease.get(1)).to({y:559},11).wait(115));

	// Layer 12 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("EA9eAlWMAAAgmPILFAAMAAAAmPg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EA9eAlWMAAAgmPILFAAMAAAAmPg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EA9eAmJMAAAgmOILFAAMAAAAmOg");
	var mask_2_graphics_12 = new cjs.Graphics().p("EA9eAm7MAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EA9eAnqMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EA9eAoXMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EA9eApBMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EA9eApqMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EA9eAqQMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EA9eAq0MAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_19 = new cjs.Graphics().p("EA9eArWMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EA9eAr2MAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EA9eAsUMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EA9eAsvMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EA9eAtIMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_24 = new cjs.Graphics().p("EA9eAtfMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EA9eAt0MAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EA9eAuHMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EA9eAuXMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EA9eAulMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EA9eAuxMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EA9eAu7MAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EA9eAvDMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EA9eAvIMAAAgmQILFAAMAAAAmQg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EA9eAvMMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_35 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_36 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_37 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_38 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_40 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_43 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EA9eAvNMAAAgmRILFAAMAAAAmRg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:464.3,y:239}).wait(10).to({graphics:mask_2_graphics_10,x:464.3,y:239}).wait(1).to({graphics:mask_2_graphics_11,x:464.3,y:244.2}).wait(1).to({graphics:mask_2_graphics_12,x:464.3,y:249.1}).wait(1).to({graphics:mask_2_graphics_13,x:464.3,y:253.8}).wait(1).to({graphics:mask_2_graphics_14,x:464.3,y:258.3}).wait(1).to({graphics:mask_2_graphics_15,x:464.3,y:262.6}).wait(1).to({graphics:mask_2_graphics_16,x:464.3,y:266.6}).wait(1).to({graphics:mask_2_graphics_17,x:464.3,y:270.5}).wait(1).to({graphics:mask_2_graphics_18,x:464.3,y:274.1}).wait(1).to({graphics:mask_2_graphics_19,x:464.3,y:277.5}).wait(1).to({graphics:mask_2_graphics_20,x:464.3,y:280.7}).wait(1).to({graphics:mask_2_graphics_21,x:464.3,y:283.6}).wait(1).to({graphics:mask_2_graphics_22,x:464.3,y:286.3}).wait(1).to({graphics:mask_2_graphics_23,x:464.3,y:288.9}).wait(1).to({graphics:mask_2_graphics_24,x:464.3,y:291.2}).wait(1).to({graphics:mask_2_graphics_25,x:464.3,y:293.2}).wait(1).to({graphics:mask_2_graphics_26,x:464.3,y:295.1}).wait(1).to({graphics:mask_2_graphics_27,x:464.3,y:296.7}).wait(1).to({graphics:mask_2_graphics_28,x:464.3,y:298.2}).wait(1).to({graphics:mask_2_graphics_29,x:464.3,y:299.4}).wait(1).to({graphics:mask_2_graphics_30,x:464.3,y:300.4}).wait(1).to({graphics:mask_2_graphics_31,x:464.3,y:301.1}).wait(1).to({graphics:mask_2_graphics_32,x:464.3,y:301.7}).wait(1).to({graphics:mask_2_graphics_33,x:464.3,y:302}).wait(1).to({graphics:mask_2_graphics_34,x:464.3,y:302.1}).wait(1).to({graphics:mask_2_graphics_35,x:464.3,y:302.1}).wait(1).to({graphics:mask_2_graphics_36,x:464.3,y:302.1}).wait(1).to({graphics:mask_2_graphics_37,x:464.3,y:302.1}).wait(1).to({graphics:mask_2_graphics_38,x:464.3,y:302.1}).wait(1).to({graphics:mask_2_graphics_39,x:464.3,y:302.1}).wait(1).to({graphics:mask_2_graphics_40,x:464.3,y:302.1}).wait(1).to({graphics:mask_2_graphics_41,x:464.3,y:302.1}).wait(1).to({graphics:mask_2_graphics_42,x:464.3,y:302.1}).wait(1).to({graphics:mask_2_graphics_43,x:464.3,y:302.1}).wait(1).to({graphics:mask_2_graphics_44,x:464.3,y:302.1}).wait(1).to({graphics:mask_2_graphics_45,x:464.3,y:302.1}).wait(115));

	// Layer 13
	this.instance_7 = new lib.Symbol3("synched",0);
	this.instance_7.setTransform(916.2,501.3,0.6,0.6,0,0,0,50,176.9);

	this.instance_7.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(160));

	// Layer 14
	this.instance_8 = new lib.polka();
	this.instance_8.setTransform(584.1,269.4,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(800,581,1600,1162);


// symbols:
(lib.book_black = function() {
	this.initialize(img.book_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,196);


(lib.book_blue = function() {
	this.initialize(img.book_blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,285,222);


(lib.izo_black_lipnet = function() {
	this.initialize(img.izo_black_lipnet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,70);


(lib.izo_black_normal = function() {
	this.initialize(img.izo_black_normal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,70);


(lib.izo_na_gire_blue = function() {
	this.initialize(img.izo_na_gire_blue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,21);


(lib.polka = function() {
	this.initialize(img.polka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,720,304);


(lib.ten_izo = function() {
	this.initialize(img.ten_izo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,354);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.izo_black_lipnet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,70);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.izo_black_normal();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,70);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ten_izo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,354);


(lib.Symbol1copy2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.book_black();
	this.instance.setTransform(27.6,15.1);

	this.instance_1 = new lib.izo_na_gire_blue();
	this.instance_1.setTransform(142.6,35.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(27.6,15.1,285,196);


(lib.Symbol1copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.izo_black_lipnet();
	this.instance.setTransform(138.6,32.5);

	this.instance_1 = new lib.book_black();
	this.instance_1.setTransform(27.6,15.1);

	this.instance_2 = new lib.izo_na_gire_blue();
	this.instance_2.setTransform(142.6,35.6);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(27.6,15.1,285,196);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.book_blue();
	this.instance.setTransform(17,26.1);

	this.instance_1 = new lib.izo_na_gire_blue();
	this.instance_1.setTransform(142.6,35.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(17,26.1,285,222);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;