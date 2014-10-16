"use strict";
var __cov_vfl0$rLivPVKHhxItEczbw = (Function('return this'))();
if (!__cov_vfl0$rLivPVKHhxItEczbw.__coverage__) { __cov_vfl0$rLivPVKHhxItEczbw.__coverage__ = {}; }
__cov_vfl0$rLivPVKHhxItEczbw = __cov_vfl0$rLivPVKHhxItEczbw.__coverage__;
if (!(__cov_vfl0$rLivPVKHhxItEczbw['lib/routes/api/user.js'])) {
   __cov_vfl0$rLivPVKHhxItEczbw['lib/routes/api/user.js'] = {"path":"lib/routes/api/user.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":7,"loc":{"start":{"line":7,"column":17},"end":{"line":7,"column":31}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":45}},"2":{"start":{"line":4,"column":0},"end":{"line":4,"column":35}},"3":{"start":{"line":5,"column":0},"end":{"line":5,"column":51}},"4":{"start":{"line":7,"column":0},"end":{"line":12,"column":2}},"5":{"start":{"line":9,"column":2},"end":{"line":9,"column":39}},"6":{"start":{"line":10,"column":2},"end":{"line":10,"column":69}},"7":{"start":{"line":11,"column":2},"end":{"line":11,"column":61}}},"branchMap":{}};
}
__cov_vfl0$rLivPVKHhxItEczbw = __cov_vfl0$rLivPVKHhxItEczbw['lib/routes/api/user.js'];
__cov_vfl0$rLivPVKHhxItEczbw.s['1']++;var user=require('../../controllers/user');__cov_vfl0$rLivPVKHhxItEczbw.s['2']++;var passport=require('passport');__cov_vfl0$rLivPVKHhxItEczbw.s['3']++;var auth=require('../middlewares/authorization');__cov_vfl0$rLivPVKHhxItEczbw.s['4']++;module.exports=function(app){__cov_vfl0$rLivPVKHhxItEczbw.f['1']++;__cov_vfl0$rLivPVKHhxItEczbw.s['5']++;app.post('/api/signup',user.signup);__cov_vfl0$rLivPVKHhxItEczbw.s['6']++;app.post('/api/login',passport.authenticate('local'),user.login);__cov_vfl0$rLivPVKHhxItEczbw.s['7']++;app.get('/api/logout',auth.requiresLoginAPI,user.logout);};
