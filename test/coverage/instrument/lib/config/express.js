"use strict";
var __cov_XXtezRxIIQQa9HycBHvL1w = (Function('return this'))();
if (!__cov_XXtezRxIIQQa9HycBHvL1w.__coverage__) { __cov_XXtezRxIIQQa9HycBHvL1w.__coverage__ = {}; }
__cov_XXtezRxIIQQa9HycBHvL1w = __cov_XXtezRxIIQQa9HycBHvL1w.__coverage__;
if (!(__cov_XXtezRxIIQQa9HycBHvL1w['lib/config/express.js'])) {
   __cov_XXtezRxIIQQa9HycBHvL1w['lib/config/express.js'] = {"path":"lib/config/express.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":10,"loc":{"start":{"line":10,"column":17},"end":{"line":10,"column":41}}}},"statementMap":{"1":{"start":{"line":3,"column":0},"end":{"line":3,"column":33}},"2":{"start":{"line":4,"column":0},"end":{"line":4,"column":31}},"3":{"start":{"line":5,"column":0},"end":{"line":5,"column":44}},"4":{"start":{"line":6,"column":0},"end":{"line":6,"column":40}},"5":{"start":{"line":7,"column":0},"end":{"line":7,"column":41}},"6":{"start":{"line":8,"column":0},"end":{"line":8,"column":33}},"7":{"start":{"line":10,"column":0},"end":{"line":19,"column":2}},"8":{"start":{"line":11,"column":2},"end":{"line":11,"column":25}},"9":{"start":{"line":12,"column":2},"end":{"line":12,"column":53}},"10":{"start":{"line":13,"column":2},"end":{"line":13,"column":29}},"11":{"start":{"line":14,"column":2},"end":{"line":14,"column":26}},"12":{"start":{"line":15,"column":2},"end":{"line":15,"column":47}},"13":{"start":{"line":16,"column":2},"end":{"line":16,"column":33}},"14":{"start":{"line":17,"column":2},"end":{"line":17,"column":30}},"15":{"start":{"line":18,"column":2},"end":{"line":18,"column":51}}},"branchMap":{}};
}
__cov_XXtezRxIIQQa9HycBHvL1w = __cov_XXtezRxIIQQa9HycBHvL1w['lib/config/express.js'];
__cov_XXtezRxIIQQa9HycBHvL1w.s['1']++;var express=require('express');__cov_XXtezRxIIQQa9HycBHvL1w.s['2']++;var logger=require('morgan');__cov_XXtezRxIIQQa9HycBHvL1w.s['3']++;var cookieParser=require('cookie-parser');__cov_XXtezRxIIQQa9HycBHvL1w.s['4']++;var bodyParser=require('body-parser');__cov_XXtezRxIIQQa9HycBHvL1w.s['5']++;var session=require('express-session');__cov_XXtezRxIIQQa9HycBHvL1w.s['6']++;var config=require('./config');__cov_XXtezRxIIQQa9HycBHvL1w.s['7']++;module.exports=function(app,passport){__cov_XXtezRxIIQQa9HycBHvL1w.f['1']++;__cov_XXtezRxIIQQa9HycBHvL1w.s['8']++;app.use(logger('dev'));__cov_XXtezRxIIQQa9HycBHvL1w.s['9']++;app.use(bodyParser.urlencoded({extended:true}));__cov_XXtezRxIIQQa9HycBHvL1w.s['10']++;app.use(bodyParser.json());__cov_XXtezRxIIQQa9HycBHvL1w.s['11']++;app.use(cookieParser());__cov_XXtezRxIIQQa9HycBHvL1w.s['12']++;app.use(session({secret:'keyboard cat'}));__cov_XXtezRxIIQQa9HycBHvL1w.s['13']++;app.use(passport.initialize());__cov_XXtezRxIIQQa9HycBHvL1w.s['14']++;app.use(passport.session());__cov_XXtezRxIIQQa9HycBHvL1w.s['15']++;app.use(express.static(config.root+'/public'));};
