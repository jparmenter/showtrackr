"use strict";
var __cov_2SDz35aIAsW6sQMkFINErg = (Function('return this'))();
if (!__cov_2SDz35aIAsW6sQMkFINErg.__coverage__) { __cov_2SDz35aIAsW6sQMkFINErg.__coverage__ = {}; }
__cov_2SDz35aIAsW6sQMkFINErg = __cov_2SDz35aIAsW6sQMkFINErg.__coverage__;
if (!(__cov_2SDz35aIAsW6sQMkFINErg['lib/controllers/subscribe.js'])) {
   __cov_2SDz35aIAsW6sQMkFINErg['lib/controllers/subscribe.js'] = {"path":"lib/controllers/subscribe.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"fnMap":{"1":{"name":"(anonymous_1)","line":6,"loc":{"start":{"line":6,"column":17},"end":{"line":6,"column":42}}},"2":{"name":"(anonymous_2)","line":7,"loc":{"start":{"line":7,"column":33},"end":{"line":7,"column":53}}},"3":{"name":"(anonymous_3)","line":11,"loc":{"start":{"line":11,"column":14},"end":{"line":11,"column":28}}},"4":{"name":"(anonymous_4)","line":20,"loc":{"start":{"line":20,"column":18},"end":{"line":20,"column":43}}},"5":{"name":"(anonymous_5)","line":21,"loc":{"start":{"line":21,"column":33},"end":{"line":21,"column":53}}},"6":{"name":"(anonymous_6)","line":27,"loc":{"start":{"line":27,"column":14},"end":{"line":27,"column":28}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":35}},"2":{"start":{"line":4,"column":0},"end":{"line":4,"column":34}},"3":{"start":{"line":6,"column":0},"end":{"line":18,"column":2}},"4":{"start":{"line":7,"column":2},"end":{"line":17,"column":5}},"5":{"start":{"line":8,"column":4},"end":{"line":10,"column":5}},"6":{"start":{"line":9,"column":6},"end":{"line":9,"column":23}},"7":{"start":{"line":11,"column":4},"end":{"line":16,"column":7}},"8":{"start":{"line":12,"column":6},"end":{"line":14,"column":7}},"9":{"start":{"line":13,"column":8},"end":{"line":13,"column":25}},"10":{"start":{"line":15,"column":6},"end":{"line":15,"column":20}},"11":{"start":{"line":20,"column":0},"end":{"line":34,"column":2}},"12":{"start":{"line":21,"column":2},"end":{"line":33,"column":5}},"13":{"start":{"line":22,"column":4},"end":{"line":24,"column":5}},"14":{"start":{"line":23,"column":6},"end":{"line":23,"column":23}},"15":{"start":{"line":25,"column":4},"end":{"line":25,"column":54}},"16":{"start":{"line":26,"column":4},"end":{"line":26,"column":38}},"17":{"start":{"line":27,"column":4},"end":{"line":32,"column":7}},"18":{"start":{"line":28,"column":6},"end":{"line":30,"column":7}},"19":{"start":{"line":29,"column":8},"end":{"line":29,"column":25}},"20":{"start":{"line":31,"column":6},"end":{"line":31,"column":20}}},"branchMap":{"1":{"line":8,"type":"if","locations":[{"start":{"line":8,"column":4},"end":{"line":8,"column":4}},{"start":{"line":8,"column":4},"end":{"line":8,"column":4}}]},"2":{"line":12,"type":"if","locations":[{"start":{"line":12,"column":6},"end":{"line":12,"column":6}},{"start":{"line":12,"column":6},"end":{"line":12,"column":6}}]},"3":{"line":22,"type":"if","locations":[{"start":{"line":22,"column":4},"end":{"line":22,"column":4}},{"start":{"line":22,"column":4},"end":{"line":22,"column":4}}]},"4":{"line":28,"type":"if","locations":[{"start":{"line":28,"column":6},"end":{"line":28,"column":6}},{"start":{"line":28,"column":6},"end":{"line":28,"column":6}}]}}};
}
__cov_2SDz35aIAsW6sQMkFINErg = __cov_2SDz35aIAsW6sQMkFINErg['lib/controllers/subscribe.js'];
__cov_2SDz35aIAsW6sQMkFINErg.s['1']++;var mongoose=require('mongoose');__cov_2SDz35aIAsW6sQMkFINErg.s['2']++;var Show=mongoose.model('Show');__cov_2SDz35aIAsW6sQMkFINErg.s['3']++;exports.create=function(req,res,next){__cov_2SDz35aIAsW6sQMkFINErg.f['1']++;__cov_2SDz35aIAsW6sQMkFINErg.s['4']++;Show.findById(req.body.showId,function(err,show){__cov_2SDz35aIAsW6sQMkFINErg.f['2']++;__cov_2SDz35aIAsW6sQMkFINErg.s['5']++;if(err){__cov_2SDz35aIAsW6sQMkFINErg.b['1'][0]++;__cov_2SDz35aIAsW6sQMkFINErg.s['6']++;return next(err);}else{__cov_2SDz35aIAsW6sQMkFINErg.b['1'][1]++;}__cov_2SDz35aIAsW6sQMkFINErg.s['7']++;show.save(function(err){__cov_2SDz35aIAsW6sQMkFINErg.f['3']++;__cov_2SDz35aIAsW6sQMkFINErg.s['8']++;if(err){__cov_2SDz35aIAsW6sQMkFINErg.b['2'][0]++;__cov_2SDz35aIAsW6sQMkFINErg.s['9']++;return next(err);}else{__cov_2SDz35aIAsW6sQMkFINErg.b['2'][1]++;}__cov_2SDz35aIAsW6sQMkFINErg.s['10']++;res.send(200);});});};__cov_2SDz35aIAsW6sQMkFINErg.s['11']++;exports.destroy=function(req,res,next){__cov_2SDz35aIAsW6sQMkFINErg.f['4']++;__cov_2SDz35aIAsW6sQMkFINErg.s['12']++;Show.findById(req.body.showId,function(err,show){__cov_2SDz35aIAsW6sQMkFINErg.f['5']++;__cov_2SDz35aIAsW6sQMkFINErg.s['13']++;if(err){__cov_2SDz35aIAsW6sQMkFINErg.b['3'][0]++;__cov_2SDz35aIAsW6sQMkFINErg.s['14']++;return next(err);}else{__cov_2SDz35aIAsW6sQMkFINErg.b['3'][1]++;}__cov_2SDz35aIAsW6sQMkFINErg.s['15']++;var index=show.subscribers.indexOf(req.user.id);__cov_2SDz35aIAsW6sQMkFINErg.s['16']++;show.subscribers.splice(index,1);__cov_2SDz35aIAsW6sQMkFINErg.s['17']++;show.save(function(err){__cov_2SDz35aIAsW6sQMkFINErg.f['6']++;__cov_2SDz35aIAsW6sQMkFINErg.s['18']++;if(err){__cov_2SDz35aIAsW6sQMkFINErg.b['4'][0]++;__cov_2SDz35aIAsW6sQMkFINErg.s['19']++;return next(err);}else{__cov_2SDz35aIAsW6sQMkFINErg.b['4'][1]++;}__cov_2SDz35aIAsW6sQMkFINErg.s['20']++;res.send(200);});});};