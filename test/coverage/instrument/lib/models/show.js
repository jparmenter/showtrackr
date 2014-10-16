
var __cov__$QlBH3HCdATVDNcbwojzQ = (Function('return this'))();
if (!__cov__$QlBH3HCdATVDNcbwojzQ.__coverage__) { __cov__$QlBH3HCdATVDNcbwojzQ.__coverage__ = {}; }
__cov__$QlBH3HCdATVDNcbwojzQ = __cov__$QlBH3HCdATVDNcbwojzQ.__coverage__;
if (!(__cov__$QlBH3HCdATVDNcbwojzQ['lib/models/show.js'])) {
   __cov__$QlBH3HCdATVDNcbwojzQ['lib/models/show.js'] = {"path":"lib/models/show.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{},"fnMap":{},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":1,"column":35}},"2":{"start":{"line":3,"column":0},"end":{"line":26,"column":3}},"3":{"start":{"line":28,"column":0},"end":{"line":28,"column":35}}},"branchMap":{}};
}
__cov__$QlBH3HCdATVDNcbwojzQ = __cov__$QlBH3HCdATVDNcbwojzQ['lib/models/show.js'];
__cov__$QlBH3HCdATVDNcbwojzQ.s['1']++;var mongoose=require('mongoose');__cov__$QlBH3HCdATVDNcbwojzQ.s['2']++;var showSchema=new mongoose.Schema({_id:Number,name:String,airsDayOfWeek:String,airsTime:String,firstAired:Date,genre:[String],network:String,overview:String,rating:Number,ratingsCount:Number,status:String,poster:String,subscribers:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],episodes:[{season:Number,episodeNumber:Number,episodeName:String,firstAired:Date,overview:String}]});__cov__$QlBH3HCdATVDNcbwojzQ.s['3']++;mongoose.model('Show',showSchema);
