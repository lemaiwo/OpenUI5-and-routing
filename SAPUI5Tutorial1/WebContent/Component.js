jQuery.sap.declare("com.tutorial.Component");

sap.ui.core.UIComponent.extend("com.tutorial.Component",{
	metadata : {
		routing : {
			config : { 
				viewType:"HTML",
				viewPath:"sapui5tutorial1",
				targetControl:"navContainer",
				targetAggregation:"pages",
				clearTarget : false
			},
			routes : [
			          {
			        	  pattern : "",
			        	  name:"Overview",
			        	  view:"Overview"
			          },
			          {
			        	  pattern : "SecondPage/{id}",
			        	  name : "SecondPage",
			        	  view : "SecondPage"
			          }]
		}
	}
});

com.tutorial.Component.prototype.init = function(){
	jQuery.sap.require("sap.ui.core.routing.History");
	jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
	
	sap.ui.core.UIComponent.prototype.init.apply(this);
	
	var router = this.getRouter();
	this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
	router.initialize();
};
com.tutorial.Component.prototype.destroy = function(){
	if(this.routeHandler){
		this.routeHandler.destroy();
	}
	sap.ui.core.UIComponent.destroy.apply(this,arguments);
};
com.tutorial.Component.prototype.createContent = function(){
	this.view = sap.ui.view({id:"app",viewName:"sapui5tutorial1.App",type:sap.ui.core.mvc.ViewType.JS});
	return this.view;
};