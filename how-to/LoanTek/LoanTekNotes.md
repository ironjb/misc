### Info and notes from previous projects and stuff.

---

Functional Programming  
https://www.smashingmagazine.com/2014/07/dont-be-scared-of-functional-programming/

---

Typescript typeRoots  
http://stackoverflow.com/questions/40222162/typescript-2-custom-typings-for-untyped-npm-module

---

Network > sbsserver > sales > Completed Training Videos > Rendered and Exported Final Edit

---

WIFI login  
Name: LTek1  
Password: L0@nT3k!

5GHz: LTek2

---

This is the current list of servers that we have on centurylink  
\\sbsserver\public\servers.xlsx

---

I just invited all you guys to Spiceworks, it is the Network Monitor that has been on the TV. It is just for internal so to get to it is going to http://10.0.1.4:8080

---

Javascript encode html

```javascript
// http://stackoverflow.com/questions/1219860/html-encoding-in-javascript-jquery
function htmlEncode(value){
            //create a in-memory div, set it's inner text(which jQuery automatically encodes)
            //then grab the encoded contents back out.  The div never exists on the page.
            return $('<div/>').text(value).html();
}

function htmlDecode(value){
            return $('<div/>').html(value).text();
}
```

---

Our design group has updated your e-mail signature to be more uniform to the look and feel of the other Bankrate businesses.  Please see your new e-mail signature below and update your phone numbers and e-mail address where indicated.  Also, please ask your entire team to adopt this new signature as well.

https://bankratecom.atlassian.net/wiki/spaces/BB/pages/75932865/Email+Signatures

---

Ticker for ui-select in regards to using in modal with animate applied.  
https://github.com/angular-ui/ui-select/issues/1803

---

http://dev.loantek.com/

---

Password reset  
http://wiki.bankrate.com/wiki/1424

---

RequireJS tutorials  
https://www.youtube.com/watch?v=j588XXF4f2Y&list=PLYxzS__5yYQmDD-0A0Jvy27lUnrGIsq9o

---

http://assets.loantek.com/images/

---

Bootstrap cannot be namespaced normally. However, there seems to be a workaround.  
http://hereswhatidid.com/2014/02/use-bootstrap-3-styles-within-the-wordpress-admin/

jQuery multiple times  
http://stackoverflow.com/questions/1566595/can-i-use-multiple-versions-of-jquery-on-the-same-page


The following code worked:

```html
<!DOCTYPE html>
<html>
<head>
<title>Multiple jQuery noConflict Test</title>
</head>
<body>
<h3>Multiple jQuery noConflict Test</h3>

<!-- load jQuery 1.12.3 -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script type="text/javascript">
//var jQuery_1_12_3 = $.noConflict(true);
console.log(jQuery.fn.jquery);
$(function() {
console.log('ready shortcut', $.fn.jquery);
});
</script>


<!-- load jQuery 1.9.1 -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.9.1.js"></script>
<script type="text/javascript">
var jQuery_1_9_1 = $.noConflict(true);


console.log('no conflict version', jQuery_1_9_1.fn.jquery);

console.log('after', jQuery.fn.jquery);
console.log('after $', $.fn.jquery);
</script>

</body>
</html>
```
