/*!
 * Bootstrap-select v1.13.18 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

!function(e,t){void 0===e&&void 0!==window&&(e=window),"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){e.fn.selectpicker.defaults={noneSelectedText:"\u121d\u1295\u121d \u12a0\u120d\u1270\u1218\u1228\u1320\u121d",noneResultsText:"\u12a8{0} \u130b\u122d \u1270\u1218\u1233\u1233\u12ed \u12cd\u1324\u1275 \u12e8\u1208\u121d",countSelectedText:function(e,t){return 1==e?"{0} \u121d\u122d\u132b \u1270\u1218\u122d\u1327\u120d":"{0} \u121d\u122d\u132b\u12ce\u127d \u1270\u1218\u122d\u1320\u12cb\u120d"},maxOptionsText:function(e,t){return[1==e?"\u1308\u12f0\u1265 \u120b\u12ed \u1270\u12f0\u122d\u1237\u120d  (\u1262\u1260\u12db {n} \u121d\u122d\u132b)":"\u1308\u12f0\u1265 \u120b\u12ed \u1270\u12f0\u122d\u1237\u120d  (\u1262\u1260\u12db {n} \u121d\u122d\u132b\u12ce\u127d)",1==t?"\u12e8\u1261\u12f5\u1295 \u1308\u12f0\u1265 \u120b\u12ed \u1270\u12f0\u122d\u1237\u120d (\u1262\u1260\u12db {n} \u121d\u122d\u132b)":"\u12e8\u1261\u12f5\u1295 \u1308\u12f0\u1265 \u120b\u12ed \u1270\u12f0\u122d\u1237\u120d (\u1262\u1260\u12db {n} \u121d\u122d\u132b\u12ce\u127d)"]},selectAllText:"\u1201\u1209\u121d \u12ed\u1218\u1228\u1325",deselectAllText:"\u1201\u1209\u121d \u12a0\u12ed\u1218\u1228\u1325",multipleSeparator:" \u1363 "}});
