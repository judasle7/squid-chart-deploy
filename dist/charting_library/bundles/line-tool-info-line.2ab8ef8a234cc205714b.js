"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[7488,8673],{51065:(e,t,i)=>{i.r(t),i.d(t,{LineToolInfoLine:()=>s,LineToolInfoLineConst:()=>r});var r,n=i(99294);!function(e){e.ConstructorName="LineToolInfoLine",e.Name="Info Line"}(r||(r={}));class s extends n.LineToolTrendLine{constructor(e,t,i,r){super(e,t??s.createProperties(e.backgroundTheme().spawnOwnership()),i,r)}pointsCount(){return 2}name(){return"Info Line"}static createProperties(e,t){const i=n.LineToolTrendLine._createPropertiesImpl("linetoolinfoline",e,t);return s._configureProperties(i),i}}},99294:(e,t,i)=>{i.r(t),i.d(t,{Consts:()=>r,LineToolTrendLine:()=>l});var r,n=i(32679),s=i(12988),o=i(10568),a=i(90793);!function(e){e[e.PointsCount=2]="PointsCount",e.Name="Trend Line"}(r||(r={}));class l extends o.InplaceTextLineDataSource{constructor(e,t,r,n){super(e,t??l.createProperties(e.backgroundTheme().spawnOwnership()),r,n),this._trendLinePaneView=null,Promise.all([i.e(2870),i.e(2211),i.e(1583)]).then(i.bind(i,29710)).then((({TrendLinePaneView:e})=>{this._trendLinePaneView=new e(this,this._model,this._openTextEditor.bind(this),this._closeTextEditor.bind(this),this.onSelectionChange.bind(this)),this._setPaneViews([this._trendLinePaneView])}))}dataAndViewsReady(){return super.dataAndViewsReady()&&null!==this._trendLinePaneView}pointsCount(){return 2}name(){return"Trend Line"}canHasAlert(){return!0}showPriceLabels(){return this._properties.childs().showPriceLabels.value()}createPriceAxisView(e){return new a.LineToolPriceAxisView(this,{pointIndex:e,backgroundPropertyGetter:()=>this.showPriceLabels()?this._properties.childs().linecolor.value():null})}isForcedDrawPriceAxisLabel(){return this.showPriceLabels()}template(){const e=super.template();return e.text=this.properties().childs().text.value(),e}editableTextProperties(){const e=this.properties().childs();return{text:e.text,textColor:e.textcolor,textVisible:e.showLabel}}snapTo45DegreesAvailable(){return!0}static createProperties(e,t,i){return l._createPropertiesImpl("linetooltrendline",e,t,i)}_getAlertPlots(){const e=this._linePointsToAlertPlot(this._points,null,this._properties.childs().extendLeft.value(),this._properties.childs().extendRight.value());return null===e?[]:[e]}async _getPropertyDefinitionsViewModelClass(){return(await Promise.all([i.e(3401),i.e(3889),i.e(8009),i.e(6204),i.e(1963),i.e(8537)]).then(i.bind(i,26360))).TrendLineDefinitionsViewModel}_applyTemplateImpl(e){super._applyTemplateImpl(e),this.properties().childs().text.setValue(e.text||"")}static _createPropertiesImpl(e,t,i,r){i&&void 0===i.showPercentPriceRange&&(i.showPercentPriceRange=i.showPriceRange,i.showPipsPriceRange=i.showPriceRange);const s=new n.DefaultProperty({theme:t,defaultName:e,state:i,useUserPreferences:r});return this._configureProperties(s),s}static _configureProperties(e){super._configureProperties(e),e.hasChild("text")||e.addChild("text",new s.Property("")),e.addExcludedKey("text",1)}}}}]);