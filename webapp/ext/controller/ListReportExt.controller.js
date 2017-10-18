sap.ui.controller("warranty_prior_work_approval_inquiry.ext.controller.ListReportExt", {

    onInitSmartFilterBarExtension: function(oEvent){
    	
    	var today = new Date();
    	var todayMinus90Days = new Date();
    	todayMinus90Days.setDate(today.getDate() - 90);

    	
		var customFilter = {
			"submittedDate":{
				"ranges":[{
					"exclude":false,
					"operation":"BT",
					"keyField":"submittedDate",
					"value1": todayMinus90Days,
					"value2": today
				}],
				"items":[],
				"value":null
			}};
	    	
		oEvent.getSource().setFilterData(customFilter,true);
    }
});