sap.ui.controller("warranty_prior_work_approval_inquiry.ext.controller.ListReportExt", {

    onInitSmartFilterBarExtension: function(oEvent){
    	
    	var today = new Date(new Date().setHours(0, 0, 0, 0));
    	var todayMinus90Days = new Date(new Date().setHours(0, 0, 0, 0));
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
		
		//Clear startup parameters as these override the filter 
		this.getOwnerComponent().oContainer.getParent().getParent().oComponentData.startupParameters = {};
    }
});