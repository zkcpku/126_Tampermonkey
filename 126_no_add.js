// ==UserScript==
// @name         126_no_add
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mail.126.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //可定制继续修改
    var featureList = ['class="xd0 nui-closeable"','class="tN0 nui-closeable"'];
    var featureParentList = ["title='去广告'"];
    function remove(feature){
        var allDivs,thisDiv;
    allDivs=document.evaluate(
        "//*[@" + feature + "]",
        document,
        null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
        null);
    //console.log(allDivs.snapshotLength);
     // console.log(allDivs.snapshotItem(0));
    //alert(allDivs.snapshotLength);
    for (var i=0;i<allDivs.snapshotLength;i++){
        thisDiv=allDivs.snapshotItem(i);
        //使用 thisDiv
        var ads = thisDiv;
        ads.remove();
        //ads.parentNode.removeChild(ads);
    };
    };
    function removeParent(feature){
        var allDivs,thisDiv;
    allDivs=document.evaluate(
        "//*[@" + feature + "]",
        document,
        null,
        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
        null);
    //console.log(allDivs.snapshotLength);
     // console.log(allDivs.snapshotItem(0));
    //alert(allDivs.snapshotLength);
    for (var i=0;i<allDivs.snapshotLength;i++){
        thisDiv=allDivs.snapshotItem(i);
        //使用 thisDiv
        var ads = thisDiv.parentNode;
        ads.remove();
        //ads.parentNode.removeChild(ads);
    };
    };

    function removeAll(){
      for(var i = 0;i < featureList.length; ++i){
          var now_feature = featureList[i];
          //console.log(now_feature);
          remove(now_feature);
      }
      for(i = 0;i < featureParentList.length; ++i){
          now_feature = featureParentList[i];
          //console.log(now_feature);
          removeParent(now_feature);
      }
    }


    document.onreadystatechange = function() 　　//当页面加载状态改变的时候执行function
{
　　 if(document.readyState == "complete")
　　{ 　　//当页面加载状态为完全结束时进入
      removeAll();
      var t1 = window.setInterval(removeAll,2000); // 设置定时执行，防止frame内页面加载的时候出现广告

  }
}


    // Your code here...
})();
