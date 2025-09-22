gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachIndex3 = 0;

gdjs.GameCode.forEachIndex4 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachObjects3 = [];

gdjs.GameCode.forEachObjects4 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTemporary3 = null;

gdjs.GameCode.forEachTemporary4 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.forEachTotalCount3 = 0;

gdjs.GameCode.forEachTotalCount4 = 0;

gdjs.GameCode.GDCubeObjects1= [];
gdjs.GameCode.GDCubeObjects2= [];
gdjs.GameCode.GDCubeObjects3= [];
gdjs.GameCode.GDCubeObjects4= [];
gdjs.GameCode.GDCubeObjects5= [];
gdjs.GameCode.GDRunMoneyTextObjects1= [];
gdjs.GameCode.GDRunMoneyTextObjects2= [];
gdjs.GameCode.GDRunMoneyTextObjects3= [];
gdjs.GameCode.GDRunMoneyTextObjects4= [];
gdjs.GameCode.GDRunMoneyTextObjects5= [];
gdjs.GameCode.GDStoreButtonObjects1= [];
gdjs.GameCode.GDStoreButtonObjects2= [];
gdjs.GameCode.GDStoreButtonObjects3= [];
gdjs.GameCode.GDStoreButtonObjects4= [];
gdjs.GameCode.GDStoreButtonObjects5= [];
gdjs.GameCode.GDHomeObjects1= [];
gdjs.GameCode.GDHomeObjects2= [];
gdjs.GameCode.GDHomeObjects3= [];
gdjs.GameCode.GDHomeObjects4= [];
gdjs.GameCode.GDHomeObjects5= [];
gdjs.GameCode.GDWeapon_9595hitObjects1= [];
gdjs.GameCode.GDWeapon_9595hitObjects2= [];
gdjs.GameCode.GDWeapon_9595hitObjects3= [];
gdjs.GameCode.GDWeapon_9595hitObjects4= [];
gdjs.GameCode.GDWeapon_9595hitObjects5= [];
gdjs.GameCode.GDLight_9595CastObjects1= [];
gdjs.GameCode.GDLight_9595CastObjects2= [];
gdjs.GameCode.GDLight_9595CastObjects3= [];
gdjs.GameCode.GDLight_9595CastObjects4= [];
gdjs.GameCode.GDLight_9595CastObjects5= [];
gdjs.GameCode.GDMetalCubeObjects1= [];
gdjs.GameCode.GDMetalCubeObjects2= [];
gdjs.GameCode.GDMetalCubeObjects3= [];
gdjs.GameCode.GDMetalCubeObjects4= [];
gdjs.GameCode.GDMetalCubeObjects5= [];
gdjs.GameCode.GDMetalTextObjects1= [];
gdjs.GameCode.GDMetalTextObjects2= [];
gdjs.GameCode.GDMetalTextObjects3= [];
gdjs.GameCode.GDMetalTextObjects4= [];
gdjs.GameCode.GDMetalTextObjects5= [];
gdjs.GameCode.GDAmethystCubeObjects1= [];
gdjs.GameCode.GDAmethystCubeObjects2= [];
gdjs.GameCode.GDAmethystCubeObjects3= [];
gdjs.GameCode.GDAmethystCubeObjects4= [];
gdjs.GameCode.GDAmethystCubeObjects5= [];
gdjs.GameCode.GDlifebarObjects1= [];
gdjs.GameCode.GDlifebarObjects2= [];
gdjs.GameCode.GDlifebarObjects3= [];
gdjs.GameCode.GDlifebarObjects4= [];
gdjs.GameCode.GDlifebarObjects5= [];
gdjs.GameCode.GDAmethystTextObjects1= [];
gdjs.GameCode.GDAmethystTextObjects2= [];
gdjs.GameCode.GDAmethystTextObjects3= [];
gdjs.GameCode.GDAmethystTextObjects4= [];
gdjs.GameCode.GDAmethystTextObjects5= [];
gdjs.GameCode.GDMouseObjects1= [];
gdjs.GameCode.GDMouseObjects2= [];
gdjs.GameCode.GDMouseObjects3= [];
gdjs.GameCode.GDMouseObjects4= [];
gdjs.GameCode.GDMouseObjects5= [];
gdjs.GameCode.GDmetal_9595IngotObjects1= [];
gdjs.GameCode.GDmetal_9595IngotObjects2= [];
gdjs.GameCode.GDmetal_9595IngotObjects3= [];
gdjs.GameCode.GDmetal_9595IngotObjects4= [];
gdjs.GameCode.GDmetal_9595IngotObjects5= [];
gdjs.GameCode.GDamethyst_9595shardObjects1= [];
gdjs.GameCode.GDamethyst_9595shardObjects2= [];
gdjs.GameCode.GDamethyst_9595shardObjects3= [];
gdjs.GameCode.GDamethyst_9595shardObjects4= [];
gdjs.GameCode.GDamethyst_9595shardObjects5= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCubeObjects1ObjectsGDgdjs_9546GameCode_9546GDStoreButtonObjects1ObjectsGDgdjs_9546GameCode_9546GDHomeObjects1ObjectsGDgdjs_9546GameCode_9546GDMetalCubeObjects1Objects = Hashtable.newFrom({"Cube": gdjs.GameCode.GDCubeObjects1, "StoreButton": gdjs.GameCode.GDStoreButtonObjects1, "Home": gdjs.GameCode.GDHomeObjects1, "MetalCube": gdjs.GameCode.GDMetalCubeObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCubeObjects1ObjectsGDgdjs_9546GameCode_9546GDStoreButtonObjects1ObjectsGDgdjs_9546GameCode_9546GDHomeObjects1ObjectsGDgdjs_9546GameCode_9546GDMetalCubeObjects1Objects = Hashtable.newFrom({"Cube": gdjs.GameCode.GDCubeObjects1, "StoreButton": gdjs.GameCode.GDStoreButtonObjects1, "Home": gdjs.GameCode.GDHomeObjects1, "MetalCube": gdjs.GameCode.GDMetalCubeObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMetalCubeObjects3Objects = Hashtable.newFrom({"MetalCube": gdjs.GameCode.GDMetalCubeObjects3});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


const repeatCount3 = runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Metal_Max").getAsNumber();
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.GameCode.GDMetalCubeObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() >= 50);
}
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMetalCubeObjects3Objects, gdjs.randomInRange(5, 1854), gdjs.randomInRange(5, 1015), "");
}}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDAmethystCubeObjects2Objects = Hashtable.newFrom({"AmethystCube": gdjs.GameCode.GDAmethystCubeObjects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


const repeatCount2 = runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Amethyst_Max").getAsNumber();
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.GameCode.GDAmethystCubeObjects2.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDAmethystCubeObjects2Objects, gdjs.randomInRange(5, 1854), gdjs.randomInRange(5, 1015), "");
}}
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Metal_Unlock").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalText"), gdjs.GameCode.GDMetalTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("metal_Ingot"), gdjs.GameCode.GDmetal_9595IngotObjects2);
{for(var i = 0, len = gdjs.GameCode.GDMetalTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMetalTextObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.GameCode.GDmetal_9595IngotObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDmetal_9595IngotObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(gdjs.randomInRange(1, 100));
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getChild("metaltomoney").getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Percentage_Other").setNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Metal").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(7).getChild("MetalPercentage").getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Amethyst_Unlock").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmethystText"), gdjs.GameCode.GDAmethystTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("amethyst_shard"), gdjs.GameCode.GDamethyst_9595shardObjects1);
gdjs.copyArray(runtimeScene.getObjects("lifebar"), gdjs.GameCode.GDlifebarObjects1);
{for(var i = 0, len = gdjs.GameCode.GDlifebarObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDlifebarObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.GameCode.GDAmethystTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAmethystTextObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs.GameCode.GDamethyst_9595shardObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDamethyst_9595shardObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getChild("home_money").getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Player", "Money", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(7).getChild("home_metal").getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Metal").add(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Player", "Metal", runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Metal").getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Store", false);
}}

}


};gdjs.GameCode.mapOfEmptyGDCubeObjects = Hashtable.newFrom({"Cube": []});
gdjs.GameCode.mapOfEmptyGDMetalCubeObjects = Hashtable.newFrom({"MetalCube": []});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStoreButtonObjects1Objects = Hashtable.newFrom({"StoreButton": gdjs.GameCode.GDStoreButtonObjects1});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLight_95959595CastObjects4Objects = Hashtable.newFrom({"Light_Cast": gdjs.GameCode.GDLight_9595CastObjects4});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AmethystCube"), gdjs.GameCode.GDAmethystCubeObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDAmethystCubeObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDAmethystCubeObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDAmethystCubeObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDAmethystCubeObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAmethystCubeObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDAmethystCubeObjects4[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAmethystCubeObjects4[k] = gdjs.GameCode.GDAmethystCubeObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDAmethystCubeObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDAmethystCubeObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDAmethystCubeObjects4[i].returnVariable(gdjs.GameCode.GDAmethystCubeObjects4[i].getVariables().getFromIndex(1)).sub(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getScene().getVariables().getFromIndex(10).getChild("Life").sub(5);
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AmethystCube"), gdjs.GameCode.GDAmethystCubeObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDAmethystCubeObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDLight_9595CastObjects4.length = 0;

gdjs.GameCode.GDAmethystCubeObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDAmethystCubeObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDAmethystCubeObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAmethystCubeObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDAmethystCubeObjects4[i].getVariableNumber(gdjs.GameCode.GDAmethystCubeObjects4[i].getVariables().getFromIndex(1)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAmethystCubeObjects4[k] = gdjs.GameCode.GDAmethystCubeObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDAmethystCubeObjects4.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).add((runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Amethyst").getChild("Base").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Amethyst").getChild("Multiplier").getAsNumber()) * ((runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Amethyst").getChild("Percentage").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Amethyst").getChild("Percentage_Other").getAsNumber()) / 100));
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLight_95959595CastObjects4Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Ui");
}{for(var i = 0, len = gdjs.GameCode.GDLight_9595CastObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDLight_9595CastObjects4[i].setCenterPositionInScene((( gdjs.GameCode.GDAmethystCubeObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDAmethystCubeObjects4[0].getCenterXInScene()),(( gdjs.GameCode.GDAmethystCubeObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDAmethystCubeObjects4[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.GameCode.GDAmethystCubeObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDAmethystCubeObjects4[i].deleteFromScene(runtimeScene);
}
}}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("lifebar"), gdjs.GameCode.GDlifebarObjects3);
{for(var i = 0, len = gdjs.GameCode.GDlifebarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDlifebarObjects3[i].SetValue(runtimeScene.getScene().getVariables().getFromIndex(10).getChild("Life").getAsNumber(), null);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(10).getChild("Life").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Store", false);
}}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLight_95959595CastObjects3Objects = Hashtable.newFrom({"Light_Cast": gdjs.GameCode.GDLight_9595CastObjects3});
gdjs.GameCode.eventsList10 = function(runtimeScene) {

};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MetalCube"), gdjs.GameCode.GDMetalCubeObjects3);

for (gdjs.GameCode.forEachIndex4 = 0;gdjs.GameCode.forEachIndex4 < gdjs.GameCode.GDMetalCubeObjects3.length;++gdjs.GameCode.forEachIndex4) {
gdjs.GameCode.GDMetalCubeObjects4.length = 0;


gdjs.GameCode.forEachTemporary4 = gdjs.GameCode.GDMetalCubeObjects3[gdjs.GameCode.forEachIndex4];
gdjs.GameCode.GDMetalCubeObjects4.push(gdjs.GameCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMetalCubeObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDMetalCubeObjects4[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMetalCubeObjects4[k] = gdjs.GameCode.GDMetalCubeObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDMetalCubeObjects4.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDMetalCubeObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDMetalCubeObjects4[i].returnVariable(gdjs.GameCode.GDMetalCubeObjects4[i].getVariables().getFromIndex(1)).sub(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalCube"), gdjs.GameCode.GDMetalCubeObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDMetalCubeObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDLight_9595CastObjects3.length = 0;

gdjs.GameCode.GDMetalCubeObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDMetalCubeObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDMetalCubeObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMetalCubeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDMetalCubeObjects3[i].getVariableNumber(gdjs.GameCode.GDMetalCubeObjects3[i].getVariables().getFromIndex(1)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMetalCubeObjects3[k] = gdjs.GameCode.GDMetalCubeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDMetalCubeObjects3.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).add((runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Metal").getChild("Base").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Metal").getChild("Multiplier").getAsNumber()) * ((runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Metal").getChild("Percentage").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Metal").getChild("Percentage_Other").getAsNumber()) / 100));
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLight_95959595CastObjects3Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Ui");
}{for(var i = 0, len = gdjs.GameCode.GDLight_9595CastObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDLight_9595CastObjects3[i].setCenterPositionInScene((( gdjs.GameCode.GDMetalCubeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDMetalCubeObjects3[0].getCenterXInScene()),(( gdjs.GameCode.GDMetalCubeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDMetalCubeObjects3[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.GameCode.GDMetalCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDMetalCubeObjects3[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCubeObjects3Objects = Hashtable.newFrom({"Cube": gdjs.GameCode.GDCubeObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWeapon_95959595hitObjects3Objects = Hashtable.newFrom({"Weapon_hit": gdjs.GameCode.GDWeapon_9595hitObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMetalCubeObjects3Objects = Hashtable.newFrom({"MetalCube": gdjs.GameCode.GDMetalCubeObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWeapon_95959595hitObjects3Objects = Hashtable.newFrom({"Weapon_hit": gdjs.GameCode.GDWeapon_9595hitObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDAmethystCubeObjects2Objects = Hashtable.newFrom({"AmethystCube": gdjs.GameCode.GDAmethystCubeObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWeapon_95959595hitObjects2Objects = Hashtable.newFrom({"Weapon_hit": gdjs.GameCode.GDWeapon_9595hitObjects2});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCubeObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCubeObjects3 */
gdjs.GameCode.GDWeapon_9595hitObjects3.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].returnVariable(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(1)).sub(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWeapon_95959595hitObjects3Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Ui");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MetalCube"), gdjs.GameCode.GDMetalCubeObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMetalCubeObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMetalCubeObjects3 */
gdjs.GameCode.GDWeapon_9595hitObjects3.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDMetalCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDMetalCubeObjects3[i].returnVariable(gdjs.GameCode.GDMetalCubeObjects3[i].getVariables().getFromIndex(1)).sub(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWeapon_95959595hitObjects3Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Ui");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AmethystCube"), gdjs.GameCode.GDAmethystCubeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDAmethystCubeObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDAmethystCubeObjects2 */
gdjs.GameCode.GDWeapon_9595hitObjects2.length = 0;

{for(var i = 0, len = gdjs.GameCode.GDAmethystCubeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDAmethystCubeObjects2[i].returnVariable(gdjs.GameCode.GDAmethystCubeObjects2[i].getVariables().getFromIndex(1)).sub(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}{runtimeScene.getScene().getVariables().getFromIndex(10).getChild("Life").sub(5);
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWeapon_95959595hitObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Ui");
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

};gdjs.GameCode.eventsList14 = function(runtimeScene) {

};gdjs.GameCode.eventsList15 = function(runtimeScene) {

};gdjs.GameCode.eventsList16 = function(runtimeScene) {

};gdjs.GameCode.mapOfEmptyGDCubeObjects = Hashtable.newFrom({"Cube": []});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCubeObjects2Objects = Hashtable.newFrom({"Cube": gdjs.GameCode.GDCubeObjects2});
gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > 100);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() <= 200);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCubeObjects2, gdjs.GameCode.GDCubeObjects3);

{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].returnVariable(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > 200);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() <= 300);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCubeObjects2, gdjs.GameCode.GDCubeObjects3);

{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].returnVariable(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(0)).setNumber(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() > 300);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() <= 400);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDCubeObjects2, gdjs.GameCode.GDCubeObjects3);

{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].returnVariable(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(0)).setNumber(3);
}
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(true);
}}

}


};gdjs.GameCode.mapOfEmptyGDCubeObjects = Hashtable.newFrom({"Cube": []});
gdjs.GameCode.eventsList18 = function(runtimeScene) {

};gdjs.GameCode.eventsList19 = function(runtimeScene) {

};gdjs.GameCode.eventsList20 = function(runtimeScene) {

};gdjs.GameCode.eventsList21 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLight_95959595CastObjects3Objects = Hashtable.newFrom({"Light_Cast": gdjs.GameCode.GDLight_9595CastObjects3});
gdjs.GameCode.eventsList22 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLight_95959595CastObjects2Objects = Hashtable.newFrom({"Light_Cast": gdjs.GameCode.GDLight_9595CastObjects2});
gdjs.GameCode.eventsList23 = function(runtimeScene) {

};gdjs.GameCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "AutoAttack", runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Auto_Damage_Time").getAsNumber(), null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Auto_Damage").getAsBoolean();
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Auto_Damage").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16131628);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AutoAttack");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDCubeObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCubeObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDCubeObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDCubeObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCubeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCubeObjects3[i].getVariableNumber(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCubeObjects3[k] = gdjs.GameCode.GDCubeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCubeObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].setColor("126;211;33");
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDCubeObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCubeObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDCubeObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDCubeObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCubeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCubeObjects3[i].getVariableNumber(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCubeObjects3[k] = gdjs.GameCode.GDCubeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCubeObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].setColor("80;227;194");
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDCubeObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCubeObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDCubeObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDCubeObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCubeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCubeObjects3[i].getVariableNumber(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCubeObjects3[k] = gdjs.GameCode.GDCubeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCubeObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].setColor("133;24;228");
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDCubeObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCubeObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDCubeObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDCubeObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].returnVariable(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(1)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(9).getChild(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(0).getAsNumber()).getAsNumber());
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameCode.mapOfEmptyGDCubeObjects) < runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Max_Cubes").getAsNumber();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(8).getAsBoolean();
}
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDCubeObjects2.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(false);
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Min_Chance").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Max_Chance").getAsNumber()));
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCubeObjects2Objects, gdjs.randomInRange(5, 1854), gdjs.randomInRange(5, 1015), "");
}
{ //Subevents
gdjs.GameCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameCode.mapOfEmptyGDCubeObjects) >= runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Max_Cubes").getAsNumber();
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDCubeObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCubeObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDCubeObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDCubeObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].returnVariable(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(2)).setNumber(((runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Value_Base").getAsNumber() + gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(0).getAsNumber()) * runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Value_Multiplier").getAsNumber()) * (runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Value_Percentage").getAsNumber() / 100));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDCubeObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCubeObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDCubeObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDCubeObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCubeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCubeObjects3[i].getVariableNumber(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(3)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCubeObjects3[k] = gdjs.GameCode.GDCubeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCubeObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].returnVariable(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(3)).setNumber(gdjs.randomFloatInRange(0.1, 100));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDCubeObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCubeObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDCubeObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDCubeObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCubeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCubeObjects3[i].getVariableNumber(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(3)) <= runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Golden_Chance").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCubeObjects3[k] = gdjs.GameCode.GDCubeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCubeObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].returnVariable(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(2)).setNumber((((runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Value_Base").getAsNumber() + gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(0).getAsNumber()) * runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Value_Multiplier").getAsNumber()) * (runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Value_Percentage").getAsNumber() / 100)) * 10);
}
}{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "distance", 2);
}
}{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "innerStrength", 2);
}
}{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].getBehavior("Effect").setEffectDoubleParameter("Effect", "outerStrength", 2);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDCubeObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDCubeObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDCubeObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDCubeObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCubeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCubeObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCubeObjects3[k] = gdjs.GameCode.GDCubeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCubeObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].returnVariable(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(1)).sub(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDCubeObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDLight_9595CastObjects3.length = 0;

gdjs.GameCode.GDCubeObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDCubeObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDCubeObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCubeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCubeObjects3[i].getVariableNumber(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(1)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCubeObjects3[k] = gdjs.GameCode.GDCubeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCubeObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCubeObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCubeObjects3[i].getVariableNumber(gdjs.GameCode.GDCubeObjects3[i].getVariables().getFromIndex(3)) > runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Golden_Chance").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCubeObjects3[k] = gdjs.GameCode.GDCubeObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCubeObjects3.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(((runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Base").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(5).getChild(((gdjs.GameCode.GDCubeObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCubeObjects3[0].getVariables()).getFromIndex(0).getAsNumber()).getAsNumber()) * runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Multiplier").getAsNumber()) * ((runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Percentage").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Percentage_Other").getAsNumber()) / 100));
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLight_95959595CastObjects3Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Ui");
}{for(var i = 0, len = gdjs.GameCode.GDLight_9595CastObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDLight_9595CastObjects3[i].setCenterPositionInScene((( gdjs.GameCode.GDCubeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCubeObjects3[0].getCenterXInScene()),(( gdjs.GameCode.GDCubeObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDCubeObjects3[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.GameCode.GDCubeObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects3[i].deleteFromScene(runtimeScene);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects1);

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDCubeObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDLight_9595CastObjects2.length = 0;

gdjs.GameCode.GDCubeObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDCubeObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDCubeObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCubeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCubeObjects2[i].getVariableNumber(gdjs.GameCode.GDCubeObjects2[i].getVariables().getFromIndex(1)) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCubeObjects2[k] = gdjs.GameCode.GDCubeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCubeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCubeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDCubeObjects2[i].getVariableNumber(gdjs.GameCode.GDCubeObjects2[i].getVariables().getFromIndex(3)) <= runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Golden_Chance").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCubeObjects2[k] = gdjs.GameCode.GDCubeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCubeObjects2.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add((((runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Base").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(5).getChild(((gdjs.GameCode.GDCubeObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDCubeObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getAsNumber()) * runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Multiplier").getAsNumber()) * ((runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Percentage").getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Percentage_Other").getAsNumber()) / 100)) * 10);
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDLight_95959595CastObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Ui");
}{for(var i = 0, len = gdjs.GameCode.GDLight_9595CastObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDLight_9595CastObjects2[i].setCenterPositionInScene((( gdjs.GameCode.GDCubeObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCubeObjects2[0].getCenterXInScene()),(( gdjs.GameCode.GDCubeObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCubeObjects2[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.GameCode.GDCubeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCubeObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


};gdjs.GameCode.eventsList25 = function(runtimeScene) {

{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList24(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWeapon_95959595hitObjects2Objects = Hashtable.newFrom({"Weapon_hit": gdjs.GameCode.GDWeapon_9595hitObjects2});
gdjs.GameCode.asyncCallback16145604 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Weapon_hit"), gdjs.GameCode.GDWeapon_9595hitObjects5);

{for(var i = 0, len = gdjs.GameCode.GDWeapon_9595hitObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDWeapon_9595hitObjects5[i].deleteFromScene(runtimeScene);
}
}gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList26 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDWeapon_9595hitObjects3) asyncObjectsList.addObject("Weapon_hit", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.02), (runtimeScene) => (gdjs.GameCode.asyncCallback16145604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.asyncCallback16133036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Light_Cast"), gdjs.GameCode.GDLight_9595CastObjects4);

{for(var i = 0, len = gdjs.GameCode.GDLight_9595CastObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDLight_9595CastObjects4[i].deleteFromScene(runtimeScene);
}
}gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList27 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDLight_9595CastObjects2) asyncObjectsList.addObject("Light_Cast", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.02), (runtimeScene) => (gdjs.GameCode.asyncCallback16133036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16152644);
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDWeapon_9595hitObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWeapon_95959595hitObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Ui");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Weapon_hit"), gdjs.GameCode.GDWeapon_9595hitObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDWeapon_9595hitObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDWeapon_9595hitObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDWeapon_9595hitObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDWeapon_9595hitObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDWeapon_9595hitObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDWeapon_9595hitObjects3[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDWeapon_9595hitObjects3[k] = gdjs.GameCode.GDWeapon_9595hitObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDWeapon_9595hitObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.GameCode.eventsList26(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light_Cast"), gdjs.GameCode.GDLight_9595CastObjects1);

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDLight_9595CastObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDLight_9595CastObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDLight_9595CastObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDLight_9595CastObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDLight_9595CastObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDLight_9595CastObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDLight_9595CastObjects2[k] = gdjs.GameCode.GDLight_9595CastObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDLight_9595CastObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.GameCode.eventsList27(runtimeScene);} //Subevents end.
}
}

}


};gdjs.GameCode.eventsList29 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Money", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Max_Cubes", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Max_Cubes"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Damage_Base", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Base"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Money_Base", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Base"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Damage_Percentage", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Percentage"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Cubes_Min_Chance", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Min_Chance"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Cubes_Max_Chance", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Max_Chance"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Money_Percentage", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Percentage"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Auto_Damage", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Auto_Damage"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Auto_Damage_Time", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Auto_Damage_Time"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Golden_Chance", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Golden_Chance"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Metal_Unlock", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Metal_Unlock"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Metal_Max", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Metal_Max"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Metal", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Metal"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "home_money", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7).getChild("home_money"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Metal_Base", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Metal").getChild("Base"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "metaltomoney", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7).getChild("metaltomoney"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "metal_percentage", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7).getChild("MetalPercentage"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "home_metal", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7).getChild("home_metal"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Money_Multiplier", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Multiplier"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Amethyst_Unlock", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Amethyst_Unlock"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Money_Percentage_Other", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7).getChild("MoneyPercentage"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Metal_Percentage_Other", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(7).getChild("MetalPercentage"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Damage_Multiplier", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Multiplier"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "Amethyst", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Amethyst"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "cig.Metal_Percentage", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Metal").getChild("Percentage"));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Player", "cig.Metal_Multiplier", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Metal").getChild("Multiplier"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isNativeMobileApp();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(36820900);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.GameCode.GDMouseObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.GameCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMouseObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "Mouse", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "Mouse", 0));
}
}{for(var i = 0, len = gdjs.GameCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMouseObjects1[i].getBehavior("Scale").setScale(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.GameCode.GDHomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("MetalCube"), gdjs.GameCode.GDMetalCubeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.GameCode.GDMouseObjects1);
gdjs.copyArray(runtimeScene.getObjects("StoreButton"), gdjs.GameCode.GDStoreButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCubeObjects1ObjectsGDgdjs_9546GameCode_9546GDStoreButtonObjects1ObjectsGDgdjs_9546GameCode_9546GDHomeObjects1ObjectsGDgdjs_9546GameCode_9546GDMetalCubeObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMouseObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMouseObjects1[i].getBehavior("Animation").getAnimationName() != "Cursor" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMouseObjects1[k] = gdjs.GameCode.GDMouseObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMouseObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMouseObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMouseObjects1[i].getBehavior("Animation").setAnimationName("Cursor");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cube"), gdjs.GameCode.GDCubeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.GameCode.GDHomeObjects1);
gdjs.copyArray(runtimeScene.getObjects("MetalCube"), gdjs.GameCode.GDMetalCubeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mouse"), gdjs.GameCode.GDMouseObjects1);
gdjs.copyArray(runtimeScene.getObjects("StoreButton"), gdjs.GameCode.GDStoreButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCubeObjects1ObjectsGDgdjs_9546GameCode_9546GDStoreButtonObjects1ObjectsGDgdjs_9546GameCode_9546GDHomeObjects1ObjectsGDgdjs_9546GameCode_9546GDMetalCubeObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDMouseObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDMouseObjects1[i].getBehavior("Animation").getAnimationName() != "Select" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDMouseObjects1[k] = gdjs.GameCode.GDMouseObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDMouseObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMouseObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMouseObjects1[i].getBehavior("Animation").setAnimationName("Select");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber((runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Base").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Multiplier").getAsNumber()) * (runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Percentage").getAsNumber() / 100));
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).getChild("Metal").getChild("Percentage_Other").setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(7).getChild("MoneyPercentage").getAsNumber());
}{runtimeScene.getScene().getVariables().getFromIndex(10).getChild("Life").setNumber((runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Life").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Multiplier").getAsNumber()) * (runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Percentage").getAsNumber() / 100));
}
{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.GameCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDHomeObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDHomeObjects1[k] = gdjs.GameCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StoreButton"), gdjs.GameCode.GDStoreButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDStoreButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDStoreButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDStoreButtonObjects1[k] = gdjs.GameCode.GDStoreButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDStoreButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Store", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() != 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameCode.mapOfEmptyGDCubeObjects) <= 0;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.GameCode.mapOfEmptyGDMetalCubeObjects) <= 0;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15395196);
}
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDStoreButtonObjects1.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(0).add(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Metal").add(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Amethyst").add(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Player", "Money", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Player", "Metal", runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Metal").getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Player", "Amethyst", runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Amethyst").getAsNumber());
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStoreButtonObjects1Objects, 0, 0, "Ui");
}{for(var i = 0, len = gdjs.GameCode.GDStoreButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDStoreButtonObjects1[i].getBehavior("Resizable").setSize(384, 128);
}
}{for(var i = 0, len = gdjs.GameCode.GDStoreButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDStoreButtonObjects1[i].setCenterPositionInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "Ui", 0),900);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RunMoneyText"), gdjs.GameCode.GDRunMoneyTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDRunMoneyTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRunMoneyTextObjects1[i].getBehavior("Text").setText("$ " + gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), 2)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RunMoneyText"), gdjs.GameCode.GDRunMoneyTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDRunMoneyTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRunMoneyTextObjects1[i].getBehavior("Text").setText("$ " + gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / Math.pow(1000, Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()) / 3)) * 100, 0) / 100) + runtimeScene.getGame().getVariables().getFromIndex(9).getChild(Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()) / 3)).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalText"), gdjs.GameCode.GDMetalTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDMetalTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMetalTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber(), 2)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MetalText"), gdjs.GameCode.GDMetalTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDMetalTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMetalTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() / Math.pow(1000, Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()) / 3)) * 100, 0) / 100) + runtimeScene.getGame().getVariables().getFromIndex(9).getChild(Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()) / 3)).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmethystText"), gdjs.GameCode.GDAmethystTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDAmethystTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAmethystTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), 2)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmethystText"), gdjs.GameCode.GDAmethystTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDAmethystTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAmethystTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() / Math.pow(1000, Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) / 3)) * 100, 0) / 100) + runtimeScene.getGame().getVariables().getFromIndex(9).getChild(Math.floor(gdjs.evtTools.common.log10(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber()) / 3)).getAsString());
}
}}

}


{


gdjs.GameCode.eventsList25(runtimeScene);
}


{


gdjs.GameCode.eventsList28(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDCubeObjects1.length = 0;
gdjs.GameCode.GDCubeObjects2.length = 0;
gdjs.GameCode.GDCubeObjects3.length = 0;
gdjs.GameCode.GDCubeObjects4.length = 0;
gdjs.GameCode.GDCubeObjects5.length = 0;
gdjs.GameCode.GDRunMoneyTextObjects1.length = 0;
gdjs.GameCode.GDRunMoneyTextObjects2.length = 0;
gdjs.GameCode.GDRunMoneyTextObjects3.length = 0;
gdjs.GameCode.GDRunMoneyTextObjects4.length = 0;
gdjs.GameCode.GDRunMoneyTextObjects5.length = 0;
gdjs.GameCode.GDStoreButtonObjects1.length = 0;
gdjs.GameCode.GDStoreButtonObjects2.length = 0;
gdjs.GameCode.GDStoreButtonObjects3.length = 0;
gdjs.GameCode.GDStoreButtonObjects4.length = 0;
gdjs.GameCode.GDStoreButtonObjects5.length = 0;
gdjs.GameCode.GDHomeObjects1.length = 0;
gdjs.GameCode.GDHomeObjects2.length = 0;
gdjs.GameCode.GDHomeObjects3.length = 0;
gdjs.GameCode.GDHomeObjects4.length = 0;
gdjs.GameCode.GDHomeObjects5.length = 0;
gdjs.GameCode.GDWeapon_9595hitObjects1.length = 0;
gdjs.GameCode.GDWeapon_9595hitObjects2.length = 0;
gdjs.GameCode.GDWeapon_9595hitObjects3.length = 0;
gdjs.GameCode.GDWeapon_9595hitObjects4.length = 0;
gdjs.GameCode.GDWeapon_9595hitObjects5.length = 0;
gdjs.GameCode.GDLight_9595CastObjects1.length = 0;
gdjs.GameCode.GDLight_9595CastObjects2.length = 0;
gdjs.GameCode.GDLight_9595CastObjects3.length = 0;
gdjs.GameCode.GDLight_9595CastObjects4.length = 0;
gdjs.GameCode.GDLight_9595CastObjects5.length = 0;
gdjs.GameCode.GDMetalCubeObjects1.length = 0;
gdjs.GameCode.GDMetalCubeObjects2.length = 0;
gdjs.GameCode.GDMetalCubeObjects3.length = 0;
gdjs.GameCode.GDMetalCubeObjects4.length = 0;
gdjs.GameCode.GDMetalCubeObjects5.length = 0;
gdjs.GameCode.GDMetalTextObjects1.length = 0;
gdjs.GameCode.GDMetalTextObjects2.length = 0;
gdjs.GameCode.GDMetalTextObjects3.length = 0;
gdjs.GameCode.GDMetalTextObjects4.length = 0;
gdjs.GameCode.GDMetalTextObjects5.length = 0;
gdjs.GameCode.GDAmethystCubeObjects1.length = 0;
gdjs.GameCode.GDAmethystCubeObjects2.length = 0;
gdjs.GameCode.GDAmethystCubeObjects3.length = 0;
gdjs.GameCode.GDAmethystCubeObjects4.length = 0;
gdjs.GameCode.GDAmethystCubeObjects5.length = 0;
gdjs.GameCode.GDlifebarObjects1.length = 0;
gdjs.GameCode.GDlifebarObjects2.length = 0;
gdjs.GameCode.GDlifebarObjects3.length = 0;
gdjs.GameCode.GDlifebarObjects4.length = 0;
gdjs.GameCode.GDlifebarObjects5.length = 0;
gdjs.GameCode.GDAmethystTextObjects1.length = 0;
gdjs.GameCode.GDAmethystTextObjects2.length = 0;
gdjs.GameCode.GDAmethystTextObjects3.length = 0;
gdjs.GameCode.GDAmethystTextObjects4.length = 0;
gdjs.GameCode.GDAmethystTextObjects5.length = 0;
gdjs.GameCode.GDMouseObjects1.length = 0;
gdjs.GameCode.GDMouseObjects2.length = 0;
gdjs.GameCode.GDMouseObjects3.length = 0;
gdjs.GameCode.GDMouseObjects4.length = 0;
gdjs.GameCode.GDMouseObjects5.length = 0;
gdjs.GameCode.GDmetal_9595IngotObjects1.length = 0;
gdjs.GameCode.GDmetal_9595IngotObjects2.length = 0;
gdjs.GameCode.GDmetal_9595IngotObjects3.length = 0;
gdjs.GameCode.GDmetal_9595IngotObjects4.length = 0;
gdjs.GameCode.GDmetal_9595IngotObjects5.length = 0;
gdjs.GameCode.GDamethyst_9595shardObjects1.length = 0;
gdjs.GameCode.GDamethyst_9595shardObjects2.length = 0;
gdjs.GameCode.GDamethyst_9595shardObjects3.length = 0;
gdjs.GameCode.GDamethyst_9595shardObjects4.length = 0;
gdjs.GameCode.GDamethyst_9595shardObjects5.length = 0;

gdjs.GameCode.eventsList29(runtimeScene);
gdjs.GameCode.GDCubeObjects1.length = 0;
gdjs.GameCode.GDCubeObjects2.length = 0;
gdjs.GameCode.GDCubeObjects3.length = 0;
gdjs.GameCode.GDCubeObjects4.length = 0;
gdjs.GameCode.GDCubeObjects5.length = 0;
gdjs.GameCode.GDRunMoneyTextObjects1.length = 0;
gdjs.GameCode.GDRunMoneyTextObjects2.length = 0;
gdjs.GameCode.GDRunMoneyTextObjects3.length = 0;
gdjs.GameCode.GDRunMoneyTextObjects4.length = 0;
gdjs.GameCode.GDRunMoneyTextObjects5.length = 0;
gdjs.GameCode.GDStoreButtonObjects1.length = 0;
gdjs.GameCode.GDStoreButtonObjects2.length = 0;
gdjs.GameCode.GDStoreButtonObjects3.length = 0;
gdjs.GameCode.GDStoreButtonObjects4.length = 0;
gdjs.GameCode.GDStoreButtonObjects5.length = 0;
gdjs.GameCode.GDHomeObjects1.length = 0;
gdjs.GameCode.GDHomeObjects2.length = 0;
gdjs.GameCode.GDHomeObjects3.length = 0;
gdjs.GameCode.GDHomeObjects4.length = 0;
gdjs.GameCode.GDHomeObjects5.length = 0;
gdjs.GameCode.GDWeapon_9595hitObjects1.length = 0;
gdjs.GameCode.GDWeapon_9595hitObjects2.length = 0;
gdjs.GameCode.GDWeapon_9595hitObjects3.length = 0;
gdjs.GameCode.GDWeapon_9595hitObjects4.length = 0;
gdjs.GameCode.GDWeapon_9595hitObjects5.length = 0;
gdjs.GameCode.GDLight_9595CastObjects1.length = 0;
gdjs.GameCode.GDLight_9595CastObjects2.length = 0;
gdjs.GameCode.GDLight_9595CastObjects3.length = 0;
gdjs.GameCode.GDLight_9595CastObjects4.length = 0;
gdjs.GameCode.GDLight_9595CastObjects5.length = 0;
gdjs.GameCode.GDMetalCubeObjects1.length = 0;
gdjs.GameCode.GDMetalCubeObjects2.length = 0;
gdjs.GameCode.GDMetalCubeObjects3.length = 0;
gdjs.GameCode.GDMetalCubeObjects4.length = 0;
gdjs.GameCode.GDMetalCubeObjects5.length = 0;
gdjs.GameCode.GDMetalTextObjects1.length = 0;
gdjs.GameCode.GDMetalTextObjects2.length = 0;
gdjs.GameCode.GDMetalTextObjects3.length = 0;
gdjs.GameCode.GDMetalTextObjects4.length = 0;
gdjs.GameCode.GDMetalTextObjects5.length = 0;
gdjs.GameCode.GDAmethystCubeObjects1.length = 0;
gdjs.GameCode.GDAmethystCubeObjects2.length = 0;
gdjs.GameCode.GDAmethystCubeObjects3.length = 0;
gdjs.GameCode.GDAmethystCubeObjects4.length = 0;
gdjs.GameCode.GDAmethystCubeObjects5.length = 0;
gdjs.GameCode.GDlifebarObjects1.length = 0;
gdjs.GameCode.GDlifebarObjects2.length = 0;
gdjs.GameCode.GDlifebarObjects3.length = 0;
gdjs.GameCode.GDlifebarObjects4.length = 0;
gdjs.GameCode.GDlifebarObjects5.length = 0;
gdjs.GameCode.GDAmethystTextObjects1.length = 0;
gdjs.GameCode.GDAmethystTextObjects2.length = 0;
gdjs.GameCode.GDAmethystTextObjects3.length = 0;
gdjs.GameCode.GDAmethystTextObjects4.length = 0;
gdjs.GameCode.GDAmethystTextObjects5.length = 0;
gdjs.GameCode.GDMouseObjects1.length = 0;
gdjs.GameCode.GDMouseObjects2.length = 0;
gdjs.GameCode.GDMouseObjects3.length = 0;
gdjs.GameCode.GDMouseObjects4.length = 0;
gdjs.GameCode.GDMouseObjects5.length = 0;
gdjs.GameCode.GDmetal_9595IngotObjects1.length = 0;
gdjs.GameCode.GDmetal_9595IngotObjects2.length = 0;
gdjs.GameCode.GDmetal_9595IngotObjects3.length = 0;
gdjs.GameCode.GDmetal_9595IngotObjects4.length = 0;
gdjs.GameCode.GDmetal_9595IngotObjects5.length = 0;
gdjs.GameCode.GDamethyst_9595shardObjects1.length = 0;
gdjs.GameCode.GDamethyst_9595shardObjects2.length = 0;
gdjs.GameCode.GDamethyst_9595shardObjects3.length = 0;
gdjs.GameCode.GDamethyst_9595shardObjects4.length = 0;
gdjs.GameCode.GDamethyst_9595shardObjects5.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
