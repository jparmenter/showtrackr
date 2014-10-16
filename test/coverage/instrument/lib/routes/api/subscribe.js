"use strict";
var __cov_XRI77VxQ$ZK5q4O8uVzZOQ = (Function('return this'))();
if (!__cov_XRI77VxQ$ZK5q4O8uVzZOQ.__coverage__) { __cov_XRI77VxQ$ZK5q4O8uVzZOQ.__coverage__ = {}; }
__cov_XRI77VxQ$ZK5q4O8uVzZOQ = __cov_XRI77VxQ$ZK5q4O8uVzZOQ.__coverage__;
if (!(__cov_XRI77VxQ$ZK5q4O8uVzZOQ['lib/routes/api/subscribe.js'])) {
   __cov_XRI77VxQ$ZK5q4O8uVzZOQ['lib/routes/api/subscribe.js'] = {"path":"lib/routes/api/subscribe.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":6,"loc":{"start":{"line":6,"column":17},"end":{"line":6,"column":31}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":50}},"2":{"start":{"line":4,"column":0},"end":{"line":4,"column":51}},"3":{"start":{"line":6,"column":0},"end":{"line":9,"column":2}},"4":{"start":{"line":7,"column":4},"end":{"line":7,"column":67}},"5":{"start":{"line":8,"column":4},"end":{"line":8,"column":70}}},"branchMap":{}};
}
__cov_XRI77VxQ$ZK5q4O8uVzZOQ = __cov_XRI77VxQ$ZK5q4O8uVzZOQ['lib/routes/api/subscribe.js'];
__cov_XRI77VxQ$ZK5q4O8uVzZOQ.s['1']++;var show=require('../../controllers/subscribe');__cov_XRI77VxQ$ZK5q4O8uVzZOQ.s['2']++;var auth=require('../middlewares/authorization');__cov_XRI77VxQ$ZK5q4O8uVzZOQ.s['3']++;module.exports=function(app){__cov_XRI77VxQ$ZK5q4O8uVzZOQ.f['1']++;__cov_XRI77VxQ$ZK5q4O8uVzZOQ.s['4']++;app.post('/api/subscribe',auth.requiresLoginAPI,show.create);__cov_XRI77VxQ$ZK5q4O8uVzZOQ.s['5']++;app.post('/api/unsubscribe',auth.requiresLoginAPI,show.destroy);};
