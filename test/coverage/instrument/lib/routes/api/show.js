"use strict";
var __cov_SS9aQ9LGeX8m90ORODzanA = (Function('return this'))();
if (!__cov_SS9aQ9LGeX8m90ORODzanA.__coverage__) { __cov_SS9aQ9LGeX8m90ORODzanA.__coverage__ = {}; }
__cov_SS9aQ9LGeX8m90ORODzanA = __cov_SS9aQ9LGeX8m90ORODzanA.__coverage__;
if (!(__cov_SS9aQ9LGeX8m90ORODzanA['lib/routes/api/show.js'])) {
   __cov_SS9aQ9LGeX8m90ORODzanA['lib/routes/api/show.js'] = {"path":"lib/routes/api/show.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":5,"loc":{"start":{"line":5,"column":17},"end":{"line":5,"column":31}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":45}},"2":{"start":{"line":5,"column":0},"end":{"line":10,"column":2}},"3":{"start":{"line":7,"column":2},"end":{"line":7,"column":36}},"4":{"start":{"line":8,"column":2},"end":{"line":8,"column":38}},"5":{"start":{"line":9,"column":2},"end":{"line":9,"column":38}}},"branchMap":{}};
}
__cov_SS9aQ9LGeX8m90ORODzanA = __cov_SS9aQ9LGeX8m90ORODzanA['lib/routes/api/show.js'];
__cov_SS9aQ9LGeX8m90ORODzanA.s['1']++;var show=require('../../controllers/show');__cov_SS9aQ9LGeX8m90ORODzanA.s['2']++;module.exports=function(app){__cov_SS9aQ9LGeX8m90ORODzanA.f['1']++;__cov_SS9aQ9LGeX8m90ORODzanA.s['3']++;app.get('/api/shows',show.index);__cov_SS9aQ9LGeX8m90ORODzanA.s['4']++;app.post('/api/shows',show.create);__cov_SS9aQ9LGeX8m90ORODzanA.s['5']++;app.get('/api/shows/:id',show.get);};
