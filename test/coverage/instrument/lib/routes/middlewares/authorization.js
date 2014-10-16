"use strict";
var __cov_SFawGpyTa24iN2ofg_UPDA = (Function('return this'))();
if (!__cov_SFawGpyTa24iN2ofg_UPDA.__coverage__) { __cov_SFawGpyTa24iN2ofg_UPDA.__coverage__ = {}; }
__cov_SFawGpyTa24iN2ofg_UPDA = __cov_SFawGpyTa24iN2ofg_UPDA.__coverage__;
if (!(__cov_SFawGpyTa24iN2ofg_UPDA['lib/routes/middlewares/authorization.js'])) {
   __cov_SFawGpyTa24iN2ofg_UPDA['lib/routes/middlewares/authorization.js'] = {"path":"lib/routes/middlewares/authorization.js","s":{"1":0,"2":0,"3":0,"4":0},"b":{"1":[0,0]},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":3,"loc":{"start":{"line":3,"column":27},"end":{"line":3,"column":52}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":8,"column":2}},"2":{"start":{"line":4,"column":2},"end":{"line":6,"column":3}},"3":{"start":{"line":5,"column":4},"end":{"line":5,"column":25}},"4":{"start":{"line":7,"column":2},"end":{"line":7,"column":9}}},"branchMap":{"1":{"line":4,"type":"if","locations":[{"start":{"line":4,"column":2},"end":{"line":4,"column":2}},{"start":{"line":4,"column":2},"end":{"line":4,"column":2}}]}}};
}
__cov_SFawGpyTa24iN2ofg_UPDA = __cov_SFawGpyTa24iN2ofg_UPDA['lib/routes/middlewares/authorization.js'];
__cov_SFawGpyTa24iN2ofg_UPDA.s['1']++;exports.requiresLoginAPI=function(req,res,next){__cov_SFawGpyTa24iN2ofg_UPDA.f['1']++;__cov_SFawGpyTa24iN2ofg_UPDA.s['2']++;if(!req.isAuthenticated()){__cov_SFawGpyTa24iN2ofg_UPDA.b['1'][0]++;__cov_SFawGpyTa24iN2ofg_UPDA.s['3']++;return res.send(401);}else{__cov_SFawGpyTa24iN2ofg_UPDA.b['1'][1]++;}__cov_SFawGpyTa24iN2ofg_UPDA.s['4']++;next();};
