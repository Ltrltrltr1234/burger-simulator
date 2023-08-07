"use strict";
import "./node_modules/break_eternity.js/dist/break_eternity.js";

function nd(numba) {
    if (numba != NaN) {
      return new Decimal(numba);
    }
    else {
      return new Decimal(0);
    }
}

export function lssi(local, value) {
    localStorage.setItem(local, value);
}
export function lsgi(local) {
    return localStorage.getItem(local);
}
  
export function lsgid(local) {
    return nd(lsgi(local));
}

//test
console.log(nd("1e1e1e1e1e1e98"));

//notation
export function expnumber(number) {
    let n = nd(number);
    if (n.mag==Infinity){
        n.mag = 308;
        n.layer += 1;
    }
    else if (n.gte(1e9)&&n.lt('1e1000')) {
      return n.toExponential(2, Decimal.ROUND_DOWN);
    }
    else if (n.lt(1) && n.gt(0)) {
      return n.toFixed(2);
    }
    else if (n.gte('1e1e1e1e1e308')){
        return "e^"+expnumber(n.layer);
    }
    else if (n.gte('eee16')){
        return n.toFixed(3);
    }
    else if (n.gte('ee16')){
        return "ee"+expnumber(n.mag);
    }
    else if (n.gte('1e1000')){
        return "1e"+expnumber(n.mag);
    }
    else {
      return n.times(1e6).round().dividedBy(1e6).floor().toFixed(0);
    }
  }
  
  export function expnumberwithdecimal(number) {
    let n = nd(number);
    if (n.gte(1e9)&&n.lt('1e1000')) {
      return n.toExponential(2);
    }
    else if (n.gte('1e1e1e1e1e308')){
        return "e^"+expnumber(n.layer);
    }
    else if (n.gte('ee16')){
        return n.toFixed(3);
    }
    else if (n.gte('1e1000')){
        return "1e"+expnumber(n.mag);
    }
    else {
      return n.toFixed(2);
    }
  }


export function burgerpersecond(){
    let burgerpersecond = nd(1);
    if (lsgid("upgrade4").gte(1)){
        burgerpersecond = burgerpersecond.times(nd(1).plus(lsgid("upgrade4").times(0.1)).pow(nd(2).pow(lsgid("upgrade1"))));
    }
    else{
        burgerpersecond = burgerpersecond.times(nd(2).pow(lsgid("upgrade1")));
    }
    burgerpersecond = burgerpersecond.times(nd(Decimal.max(lsgid("burger").plus(1).log10(),1)).pow(lsgid("upgrade2").pow(0.85)));
    burgerpersecond = burgerpersecond.pow(nd(1).plus(lsgid("upgrade3").times(0.05)));
    burgerpersecond.layer = burgerpersecond.layer+(Number(lsgi("upgrade5"))*10000)*(2**Number(lsgi("upgrade7")));
    if (lsgid("upgrade6").gte(1)){
        burgerpersecond.layer = burgerpersecond.layer+Math.log10(lsgid("burger").layer)**(Number(lsgi("upgrade6"))**0.6)*100;
    }
    if (burgerpersecond!="Infinity"){
        burgerpersecond = burgerpersecond.tetrate(lsgid("omegaburger").plus(1).pow(nd(0.5).times(nd(2).pow(lsgid("trupgrade3")))));
        if (Decimal.isNaN(burgerpersecond)){
            burgerpersecond=Infinity;
        }
    }
    return burgerpersecond;
}

export function burgerlayerspertick(){
    let burgerlayerspertick=nd(1);
    burgerlayerspertick = burgerlayerspertick.plus(lsgid("upgrade5").times(10000).times(nd(2).pow(lsgid("upgrade7"))));
    burgerlayerspertick = burgerlayerspertick.plus(nd(lsgid("burgerlayers").log10()).pow(lsgid("upgrade6").pow(0.6)).times(100));
    burgerlayerspertick = burgerlayerspertick.plus(lsgid("omegaburger").plus(1).pow(nd(0.5).times(nd(2).pow(lsgid("trupgrade3")))));
    return burgerlayerspertick;
}

export function hypercubegain(){
    let gain=nd(10);
    gain=gain.times(nd(2).pow(lsgid("trupgrade2")));
    if (lsgid("trupgrade4").gt(0)){
        gain=gain.times(nd(Decimal.max(lsgid("hypercube").log10(),1)).pow(lsgid("trupgrade4").times(5)));
    }
    if (lsgid("trupgrade5").gt(0)){
        let oblivionbuff = ((Number(lsgi("oblivionburger"))+1)**0.5)**(Math.max((5**(1+0.15*Number(lsgi("trupgrade14"))))*Number(lsgi("trupgrade11")),1));
        oblivionbuff *= (Math.log10(lsgid("burgerlayers").layer))**(Number(lsgi("trupgrade8")));
        oblivionbuff *= (300**Number(lsgi("trupgrade9")))**(1+0.2*Number(lsgi("trupgrade10")));
        oblivionbuff **= 1+(0.1*Number(lsgi("trupgrade14")))
        if (oblivionbuff!=Infinity){
            gain.layer = gain.layer+oblivionbuff;
            document.getElementById("oblivioneffect").innerHTML=expnumberwithdecimal(oblivionbuff);
        }
        else{
            gain = Infinity;
            lssi("burgerlayers",Infinity);
            document.getElementById("oblivioneffect").innerHTML="Infinity";
            document.getElementById("burgers").innerHTML="<b>You have <span class=redinfinity>Oblivion-Infinite</span> 🍔</b>";
            document.getElementById("burgerpersec").innerHTML="<b>You are advancing <span class=redinfinity>Oblivion-Infinite</span> 🍔 exponent-layers per second</b>";
        }
    }
    return gain;
}

export function omegaburgerpersecond(){
    let omegaburgerpersecond=nd(1);
    omegaburgerpersecond=omegaburgerpersecond.times(nd(3).pow(lsgid("trupgrade1")));
    return omegaburgerpersecond;
}

export function upgcost(upg,bought){
    let cost;
    if (upg==1){
        cost = nd(5).pow(bought).times(10);
    }
    if (upg==2){
        cost = nd(12).pow(bought).times(25);
    }
    if (upg==3){
        cost = nd(10).pow(nd(bought).pow(10.75)).times('1e13524500');
    }
    if (upg==4){
        cost = nd('eee50').layeradd10(bought);
    }
    if (upg==5){
        cost = nd(2).pow(bought).times(1500);
    }
    if (upg==6){
        cost = nd(1.3).pow(bought).times(1.25e8);
    }
    if (upg==7){
        cost = nd(1.99).pow(bought).times(1e9);
    }
    return cost;
}

export function trupgcost(upg,bought){
    let cost;
    if (upg==1){
        cost = nd(4).pow(bought);
    }
    if (upg==2){
        cost = nd(2.5).pow(bought);
    }
    if (upg==3){
        cost = nd(5).pow(bought).pow(bought);
    }
    if (upg==4){
        cost = nd(20).pow(bought).times(1000);
    }
    if (upg==5){
        if (bought.lte(0)){
            cost = nd(1e50);
        }
        else{
            cost = nd(0);
        }
    }
    if (upg==6){
        if (bought.lte(0)){
            cost = nd('(e^1000)100');
        }
        else{
            cost = nd(0);
        }
    }
    if (upg==7){
        cost = "(e^"+nd(1.8).pow(bought)+")50";
    }
    if (upg==8){
        cost = nd(2).pow(bought);
    }
    if (upg==9){
        cost = nd(5).pow(bought);
    }
    if (upg==10){
        cost = nd(4).pow(bought).times(8);
    }
    if (upg==11){
        cost = nd(3).pow(bought).times(3);
    }
    if (upg==12){
        cost = nd(10).pow(bought).times(30);
    }
    if (upg==13){
        cost = nd(40).pow(bought).times(50);
    }
    if (upg==14){
        cost = nd(10).pow(bought).times(100);
    }
    if (upg==15){
        cost = nd(10).pow(bought).times(1000);
    }
    return Decimal.floor(cost);
}

export function check(){
    if (lsgi("burger")==null){
        lssi("burger",nd(0));
    }
    if (lsgi("burgerlayers")==null){
        lssi("burgerlayers",nd(0));
    }
    if (lsgi("hypercube")==null){
        lssi("hypercube",nd(0));
    }
    if (lsgi("omegaburger")==null){
        lssi("omegaburger",nd(0));
    }
    if (lsgi("oblivionburger")==null){
        lssi("oblivionburger",nd(0));
    }
    if (lsgi("transcended")==null){
        lssi("transcended",false);
    }
    if (lsgi("transcendavailable")==null){
        lssi("transcendavailable",false);
    }
    if (lsgi("shownoblivionupgrades")==null){
        lssi("shownoblivionupgrades",0);
    }
    for (let i=1;i<=7;i++){
        if (lsgi("upgrade"+i)==null){
            lssi("upgrade"+i,nd(0));
        }
    }
    for (let i=1;i<=15;i++){
        if (lsgi("trupgrade"+i)==null){
            lssi("trupgrade"+i,nd(0));
        }
    }

    let autobuyerreqs = [200,50,20,500,15,10,30]

    for (let i=1;i<=7;i++){
        if (lsgid("upgrade"+i).gte(autobuyerreqs[i-1])||lsgid("trupgrade5").gt(0)){
            document.getElementById("autobuyer"+i).style.display = "block";
            if (i>=2&&i<7){
                document.getElementById("upgrade"+(i+1)).style.display="block";
            }
            buymax(i);
        }
        else{
            if (i>=2&&i<7){
                document.getElementById("upgrade"+(i+1)).style.display="none";
            }
            document.getElementById("autobuyer"+i).style.display = "none";
        }
    }
    //enough bought transcendence upgrade will show the upgrade 3 upgrades after it
    let showupgradereqs=[7,50,1e50,1,1,1]
    for (let i=1;i<=6;i++){
        if (lsgid("trupgrade"+i).gte(showupgradereqs[i-1])){
            document.getElementById("trupgrade"+(i+3)).style.display = "block";
            document.getElementById("trupgradebuymax"+(i+3)).style.display = "block";
        }
        else{
            document.getElementById("trupgrade"+(i+3)).style.display = "none";
            document.getElementById("trupgradebuymax"+(i+3)).style.display = "none";
        }
    }
    let showoblivionupgradereqs=[50,70,100,160,275,600];
    for (let i=7;i<=12;i++){
        if (lsgid("trupgrade7").gte(showoblivionupgradereqs[i-7])){
            if (Number(lsgi("shownoblivionupgrades"))<i+3){
                lssi("shownoblivionupgrades",i+3);
            }
            document.getElementById("trupgrade"+(i+3)).style.display = "block";
            document.getElementById("trupgradebuymax"+(i+3)).style.display = "block";
        }
        else{
            if (Number(lsgi("shownoblivionupgrades"))<i+3){
                document.getElementById("trupgrade"+(i+3)).style.display = "none";
                document.getElementById("trupgradebuymax"+(i+3)).style.display = "none";
            }
        }
    }
       
    for (let i=1;i<=4;i++){
        if (lsgid("trupgrade"+i).gte('100')){
            buytrmax(i);
            document.getElementById("trupgradeautobuyer"+i).style.display="block";
        }
        else{
            document.getElementById("trupgradeautobuyer"+i).style.display="none";
        }
    }
    if (lsgid("trupgrade7").gte(100)){
        buytrmax(7);
        document.getElementById("trupgradeautobuyer5").style.display="block";
    }
    else{
        document.getElementById("trupgradeautobuyer5").style.display="none";
    }
    if (lsgi("burger")=="Infinity"||lsgid("burgerlayers").gte('1e308')){
        lssi("transcendavailable",true);
        document.getElementById("transcend").style.opacity = "100%";
    }
    else{
        document.getElementById("transcend").style.opacity = "50%";
    }
    if (lsgi("burgerlayers")=="Infinity"){
        document.getElementById("gamebeat").style.display = "block";
    }
    else{
        document.getElementById("gamebeat").style.display = "none";
        lssi("tickselapsed",Number(lsgi("tickselapsed"))+1);
    }
    if (lsgi("transcendavailable")=="true"){
        document.getElementById("transcendencetab").style.display = "inline";
    }
    else{
        document.getElementById("transcendencetab").style.display = "none";
    }
    if (lsgi("transcended")=="true"){
        document.getElementById("transcendupgrades").style.display = "grid";
        document.getElementById("hypercubes").style.display = "block";
        document.getElementById("transcendinfo").style.display = "block";
        document.getElementById("transcendautobuyers").style.display = "block";
        document.getElementById("transcendgain").style.display = "block";
    }
    else{
        document.getElementById("hypercubes").style.display = "none";
        document.getElementById("transcendupgrades").style.display = "none";
        document.getElementById("transcendinfo").style.display = "none";
        document.getElementById("transcendgain").style.display = "none";
        document.getElementById("transcendautobuyers").style.display = "none";
    }
    if (lsgid("trupgrade6").gte(1)){
        document.getElementById("oblivionsection").style.display = "block";
    }
    else{
        document.getElementById("oblivionsection").style.display = "none";
    }
}

export function tick(){
    check();

    //production
    if (lsgi("transcended")=="true"&&burgerpersecond()==Infinity){
        lssi("burgerlayers",lsgid("burgerlayers").plus(burgerlayerspertick()));
        lssi("burger",nd('(e^1.7e308)100'));
        document.getElementById("burgers").innerHTML="<b>You have e^"+expnumber(lsgid("burgerlayers"))+" 🍔</b>";
        document.getElementById("burgerpersec").innerHTML="<b>You are advancing "+expnumber(burgerlayerspertick())+" 🍔 exponent-layers per second</b>";
    }
    else{
        lssi("burger",lsgid("burger").plus(nd(burgerpersecond()).dividedBy(50)));
        lssi("burgerlayers",nd(lsgid("burger").layer));
        if (lsgi("burger")=='Infinity'){
            lssi("burgerlayers",nd('1e308'));
        }
        document.getElementById("burgers").innerHTML="<b>You have "+expnumber(lsgid("burger"))+" 🍔</b>";
        document.getElementById("burgerpersec").innerHTML="<b>You are flipping "+expnumber(burgerpersecond())+" 🍔 per second</b>";
        if (lsgi("burger")=="Infinity"){
            document.getElementById("burgers").innerHTML="<b>You have <span class=infinity>Infinite</span> 🍔</b>";
            document.getElementById("burgerpersec").innerHTML="<b>You are flipping <span class=infinity>Infinite</span> 🍔 per second</b>";
        }
    }
    if (lsgi("transcended")=="true"){
        lssi("omegaburger",lsgid("omegaburger").plus(nd(omegaburgerpersecond()).dividedBy(50)));
    }

    if (lsgid("trupgrade5").gt(0)){
        lssi("hypercube",lsgid("hypercube").plus(hypercubegain()));
    }

    //eschatological hypothesis
    lssi("trupgrade7",lsgid("trupgrade7").plus(nd(0.5).times(lsgid("trupgrade15"))));

    lssi("oblivionburger",lsgid("trupgrade7").times(nd(lsgid("trupgrade7").log10()).pow(lsgid("trupgrade12"))).times(nd(1.4).pow(lsgid("trupgrade13"))));
        for (let i=8;i<=15;i++){
            if (lsgid("trupgrade"+i).gt(0)){
                let accumulatedcost=nd(0);
                for (let a=0;a<Number(lsgi("trupgrade"+i));a++){
                    accumulatedcost=accumulatedcost.plus(trupgcost(i,a));
                }
                lssi("oblivionburger",lsgid("oblivionburger").minus(accumulatedcost));
            }
        }

    //render
    document.getElementById("omegaburgers").innerHTML="<b>You have "+expnumberwithdecimal(lsgid("omegaburger"))+" <span class=omegaburger><span class=omegaburgerlogo>🍔</span><span class=omegaburgersymbol>Ω</span></span>, being raised to the Ω-power of "+expnumberwithdecimal(nd(0.5).times(nd(2).pow(lsgid("trupgrade3"))))+" to tetrate burger production by "+expnumberwithdecimal(lsgid("omegaburger").plus(1).pow(nd(0.5).times(nd(2).pow(lsgid("trupgrade3")))))+"</b>";
    document.getElementById("omegaburgerpersec").innerHTML="<b>You are grilling "+expnumber(omegaburgerpersecond())+" <span class=omegaburger><span class=omegaburgerlogo>🍔</span><span class=omegaburgersymbol>Ω</span></span> per second</b>";
    document.getElementById("hypercubes").innerHTML="<b>You have amassed "+expnumber(lsgid("hypercube"))+" hypercubes</b>";
    document.getElementById("transcendgain").innerHTML="<b>("+expnumber(hypercubegain())+" hypercubes)</b>";
    document.getElementById("burgercap").innerHTML="<b>Reach 🍔 exponent-layer 1e308 to transcend. You can now go beyond e^(1e308).</b>";
    document.getElementById("oblivionburgercount").innerHTML=expnumberwithdecimal(lsgid("oblivionburger"));

    for (let i=1;i<=7;i++){
        document.getElementById("bought"+i).innerHTML = expnumber(lsgid("upgrade"+i));
        if (i<5){
            document.getElementById("cost"+i).innerHTML = expnumber(upgcost(i,lsgid("upgrade"+i)));
            if (lsgid("burger").gte(upgcost(i,lsgid("upgrade"+i)))){
                document.getElementById("upgrade"+i).style.borderColor="#b0abff";
            }
            else{
                document.getElementById("upgrade"+i).style.borderColor="#7e7c9b";
            }
        }
        else{
            document.getElementById("cost"+i).innerHTML = "e^"+expnumber(upgcost(i,lsgid("upgrade"+i)));
            if (lsgid("burgerlayers").gte(upgcost(i,lsgid("upgrade"+i)))){
                document.getElementById("upgrade"+i).style.borderColor="#b0abff";
            }
            else{
                document.getElementById("upgrade"+i).style.borderColor="#7e7c9b";
            }
        }
    }

    for (let i=1;i<=15;i++){
        document.getElementById("trbought"+i).innerHTML = expnumber(lsgid("trupgrade"+i));
        if (i>4&&i<7){
            if (lsgid("trupgrade"+i).gt(0)){
                document.getElementById("trbought"+i).innerHTML = 1;
            }
            else{
                document.getElementById("trbought"+i).innerHTML = 0;
            }
        }
        document.getElementById("trcost"+i).innerHTML = expnumber(trupgcost(i,lsgid("trupgrade"+i)));
        if (i<7){
            if (lsgid("hypercube").gte(trupgcost(i,lsgid("trupgrade"+i)))){
                document.getElementById("trupgrade"+i).style.borderColor="#b0abff";
            }
            else{
                document.getElementById("trupgrade"+i).style.borderColor="#7e7c9b";
            }
        }
        else if (i==7){
            if (lsgid("burgerlayers").gte(trupgcost(i,lsgid("trupgrade"+i)))){
                document.getElementById("trupgrade"+i).style.borderColor="#ff636f";
            }
            else{
                document.getElementById("trupgrade"+i).style.borderColor="#7e7c9b";
            }
        }
        else{
            if (lsgid("oblivionburger").gte(trupgcost(i,lsgid("trupgrade"+i)))){
                document.getElementById("trupgrade"+i).style.borderColor="#ff636f";
            }
            else{
                document.getElementById("trupgrade"+i).style.borderColor="#7e7c9b";
            }
        }
    }

    document.getElementById("upgrade1current").innerHTML="Currently: "+expnumber(nd(2).pow(lsgid("upgrade1")))+"x";
    document.getElementById("upgrade2current").innerHTML="Currently: "+expnumberwithdecimal(nd(lsgid("burger").log10()).pow(lsgid("upgrade2").pow(0.85)))+"x";
    document.getElementById("upgrade3current").innerHTML="Currently: ^"+expnumberwithdecimal(nd(1).plus(lsgid("upgrade3").times(0.05)));
    document.getElementById("upgrade4current").innerHTML="Currently: 0.1Y+1 = "+expnumberwithdecimal(lsgid("upgrade4").dividedBy(10).plus(1));
    document.getElementById("upgrade5current").innerHTML="Currently: 10000Y = "+expnumberwithdecimal(lsgid("upgrade5").times(10000));
    document.getElementById("upgrade6current").innerHTML="Currently: ^^"+expnumberwithdecimal(nd(Decimal.log10(lsgid("burger").layer)).pow(lsgid("upgrade6").pow(0.6)).times(100));
    document.getElementById("upgrade7current").innerHTML="Currently: 2^Y = "+expnumberwithdecimal(nd(2).pow(lsgid("upgrade7")));

    document.getElementById("trupgrade1current").innerHTML="Currently: "+expnumber(nd(3).pow(lsgid("trupgrade1")))+"x";
    document.getElementById("trupgrade2current").innerHTML="Currently: "+expnumber(nd(2).pow(lsgid("trupgrade1")))+"x";
    document.getElementById("trupgrade3current").innerHTML="Currently: "+expnumberwithdecimal(nd(0.5).times(nd(2).pow(lsgid("trupgrade3"))));
    document.getElementById("trupgrade4current").innerHTML="Currently: "+expnumberwithdecimal(nd(lsgid("hypercube").log10()).pow(lsgid("trupgrade4").times(5)))+"x";
    if (lsgid("trupgrade5").gte(1)){
        document.getElementById("trupgrade5current").innerHTML="Currently: ACTIVE";
    }
    else{
        document.getElementById("trupgrade5current").innerHTML="Currently: INACTIVE";
    }
    if (lsgid("trupgrade6").gte(1)){
        document.getElementById("trupgrade6current").innerHTML="Currently: UNLOCKED";
    }
    else{
        document.getElementById("trupgrade6current").innerHTML="Currently: LOCKED";
    }
    document.getElementById("trupgrade7current").innerHTML="Currently: "+expnumber(lsgid("trupgrade7"))+" base Oblivion-tainted burgers";
    document.getElementById("trupgrade8current").innerHTML="Currently: "+expnumberwithdecimal((nd(lsgid("burgerlayers").layer).log10()).pow(lsgid("trupgrade8")))+"x";
    document.getElementById("trupgrade9current").innerHTML="Currently: "+expnumberwithdecimal(nd(300).pow(lsgid("trupgrade9")))+"x";
    document.getElementById("trupgrade10current").innerHTML="Currently: ^"+expnumberwithdecimal(nd(1).plus(lsgid("trupgrade10").times(0.2)));
    document.getElementById("trupgrade11current").innerHTML="Currently: ^"+expnumberwithdecimal(nd(5).times(lsgid("trupgrade11")));
    document.getElementById("trupgrade12current").innerHTML="Currently: "+expnumberwithdecimal(nd(lsgid("trupgrade7").log10()).pow(lsgid("trupgrade12")))+"x";
    document.getElementById("trupgrade13current").innerHTML="Currently: "+expnumberwithdecimal(nd(1.4).pow(lsgid("trupgrade13")))+"x";
    document.getElementById("trupgrade14current").innerHTML="Currently: ^"+expnumberwithdecimal(nd(1).plus(lsgid("trupgrade14").times(0.1)))+" and ^"+expnumberwithdecimal(nd(1).plus(lsgid("trupgrade14").times(0.15)));
    document.getElementById("trupgrade15current").innerHTML="Currently: "+expnumberwithdecimal(nd(25).times(lsgid("trupgrade15")))+" free purchases per second"

    document.getElementById("beattime").innerHTML="Speedrun Time: "+Math.floor(Number(lsgi("tickselapsed"))/3000)+" minutes "+Number(lsgi("tickselapsed"))%3000/50 + " seconds";
}

export function buymax(upg){
    if (upg==1){
        if (lsgid("burger").gte(upgcost(upg,lsgid("upgrade"+upg)))){
            let bulk = Decimal.floor(nd(lsgid("burger").dividedBy(10).log(5)).plus(1));
            if (lsgid("burger").lt('1e1000')){
                lssi("burger",lsgid("burger").minus(upgcost(upg,bulk.minus(1))));
            }
            lssi("upgrade"+upg,bulk);
        }
    }
    else if (upg==2){
        if (lsgid("burger").gte(upgcost(upg,lsgid("upgrade"+upg)))){
            let bulk = Decimal.floor(nd(lsgid("burger").dividedBy(25).log(12)).plus(1));
            if (lsgid("burger").lt('1e1000')){
                lssi("burger",lsgid("burger").minus(upgcost(upg,bulk.minus(1))));
            }
            lssi("upgrade"+upg,bulk);
        }
    }
    else if (upg==3){
        if (lsgid("burger").gte(upgcost(upg,lsgid("upgrade"+upg)))){
            let bulk = Decimal.floor(nd(lsgid("burger").dividedBy('1e13524500').log(10)).pow(1/10.75).plus(1));
            if (lsgid("burger").lt('1e1000')){
                lssi("burger",lsgid("burger").minus(upgcost(upg,bulk.minus(1))));
            }
            lssi("upgrade"+upg,bulk);
        }
    }
    else if (upg==4){
        if (lsgid("burger").gte(upgcost(upg,lsgid("upgrade"+upg)))){
            let bulk = Decimal.floor(nd(lsgid("burger").dividedBy("eee50").layer));
            if (lsgid("burger").lt('1e1000')){
                lssi("burger",lsgid("burger").minus(upgcost(upg,bulk.minus(1))));
            }
            lssi("upgrade"+upg,bulk);
        }
    }
    else if (upg==5){
        if (lsgid("burgerlayers").gte(upgcost(upg,lsgid("upgrade"+upg)))){
            let bulk = Decimal.floor(nd(lsgid("burgerlayers").dividedBy(1500).log(2)).plus(1));
            lssi("upgrade"+upg,bulk);
        }
    }
    else if (upg==6){
        if (lsgid("burgerlayers").gte(upgcost(upg,lsgid("upgrade"+upg)))){
            let bulk = Decimal.floor(nd(lsgid("burgerlayers").dividedBy(1.25e8).log(1.3)).plus(1));
            lssi("upgrade"+upg,bulk);
        }
    }
    else if (upg==7){
        if (lsgid("burgerlayers").gte(upgcost(upg,lsgid("upgrade"+upg)))){
            let bulk = Decimal.floor(nd(lsgid("burgerlayers").dividedBy(1e9).log(1.99)).plus(1));
            lssi("upgrade"+upg,bulk);
        }
    }
}

export function buytr(upg){
        if (upg<7){
            if (lsgid("hypercube").gte(trupgcost(upg,lsgid("trupgrade"+upg)))){
                lssi("hypercube",lsgid("hypercube").minus(trupgcost(upg,lsgid("trupgrade"+upg))));
                lssi("trupgrade"+upg,lsgid("trupgrade"+upg).plus(1));
            }
        }
        else if (upg==7){
            if (lsgid("burgerlayers").gte(trupgcost(upg,lsgid("trupgrade"+upg)))){
                lssi("trupgrade"+upg,lsgid("trupgrade"+upg).plus(1));
            }
        }
        else{
            if (lsgid("oblivionburger").gte(trupgcost(upg,lsgid("trupgrade"+upg)))){
                lssi("trupgrade"+upg,lsgid("trupgrade"+upg).plus(1));
            }
        }
        lssi("oblivionburger",lsgid("trupgrade7").times(nd(lsgid("trupgrade7").log10()).pow(lsgid("trupgrade12"))).times(nd(1.4).pow(lsgid("trupgrade13"))));
        for (let i=8;i<=15;i++){
            if (lsgid("trupgrade"+i).gt(0)){
                let accumulatedcost=nd(0);
                for (let a=0;a<Number(lsgi("trupgrade"+i));a++){
                    accumulatedcost=accumulatedcost.plus(trupgcost(i,a));
                }
                lssi("oblivionburger",lsgid("oblivionburger").minus(accumulatedcost));
            }
        }
}

export function buytrmax(upg){
    if (upg==1){
        if (lsgid("hypercube").gte(trupgcost(upg,lsgid("trupgrade"+upg)))){
            let bulk = Decimal.floor(nd(lsgid("hypercube").log(4)).plus(1));
            if (lsgid("hypercube").lt('1e1000')){
                lssi("hypercube",lsgid("hypercube").minus(trupgcost(upg,bulk.minus(1))));
            }
            lssi("trupgrade"+upg,bulk);
        }
    }
    else if (upg==2){
        if (lsgid("hypercube").gte(trupgcost(upg,lsgid("trupgrade"+upg)))){
            let bulk = Decimal.floor(nd(lsgid("hypercube").log(2.5)).plus(1));
            if (lsgid("hypercube").lt('1e1000')){
                lssi("hypercube",lsgid("hypercube").minus(trupgcost(upg,bulk.minus(1))));
            }
            lssi("trupgrade"+upg,bulk);
        }
    }
    else if (upg==3){
        if (lsgid("hypercube").gte(trupgcost(upg,lsgid("trupgrade"+upg)))){
            let bulk = Decimal.floor(nd(lsgid("hypercube").log(5)).pow(0.5).plus(1));
            if (lsgid("hypercube").lt('1e1000')){
                lssi("hypercube",lsgid("hypercube").minus(trupgcost(upg,bulk.minus(1))));
            }
            lssi("trupgrade"+upg,bulk);
        }
    }
    else if (upg==4){
        if (lsgid("hypercube").gte(trupgcost(upg,lsgid("trupgrade"+upg)))){
            let bulk = Decimal.floor(nd(lsgid("hypercube").dividedBy(1000).log(20)).plus(1));
            if (lsgid("hypercube").lt('1e1000')){
                lssi("hypercube",lsgid("hypercube").minus(trupgcost(upg,bulk.minus(1))));
            }
            lssi("trupgrade"+upg,bulk);
        }
    }
    else if (upg==5){
        if (lsgid("hypercube").gte(trupgcost(upg,lsgid("trupgrade"+upg)))){
            buytr(5);
        }
    }
    else if (upg==6){
        if (lsgid("hypercube").gte(trupgcost(upg,lsgid("trupgrade"+upg)))){
            buytr(6);
        }
    }
    else if (upg==7){
        if (lsgid("burgerlayers").gte(trupgcost(upg,lsgid("trupgrade"+upg)))){
            let bulk;
            bulk = nd(lsgid("burgerlayers").layer).log(1.8).floor().plus(1);
            lssi("trupgrade"+upg,bulk);
        }
    }
    else if (upg>7&&upg<=15){
        for (let i=1;i<=10;i++){
            buytr(upg);
        }
    }
}

export function transcend(){
    if (lsgi("burger")=="Infinity"||lsgid("burgerlayers").gte('1e308')){
        for (let i=1;i<=7;i++){
            lssi("upgrade"+i,nd(0))
        }
        lssi("burger",nd(0));
        lssi("burgerlayers",nd(0));
        lssi("omegaburger",nd(0));
        lssi("hypercube",lsgid("hypercube").plus(hypercubegain()));
        lssi("transcendavailable",true);
        lssi("transcended",true);
    }
}

export function respec(){
    for (let i=8;i<=15;i++){
        lssi("trupgrade"+i,0);
    }
}

export function reset(){
    localStorage.clear();
}

setInterval(tick, 20);