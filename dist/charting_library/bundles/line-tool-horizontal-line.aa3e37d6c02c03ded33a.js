"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[4201],{36590:(e,t,i)=>{i.d(t,{LineToolHorzLinePriceAxisView:()=>n});var s=i(98558),r=i(19063);class n extends s.PriceAxisView{constructor(e){super(),this._source=e}_updateRendererData(e,t,i){e.visible=!1;const s=this._source.points(),n=this._source.priceScale();if(0===s.length||null===n||n.isEmpty())return;const o=s[0];if(!isFinite(o.price))return;const l=this._source.ownerSource(),a=null!==l?l.firstValue():null;if(null===a)return;const p=(0,r.resetTransparency)(this._source.properties().linecolor.value());i.background=p,i.textColor=this.generateTextColor(p),i.coordinate=n.priceToCoordinate(o.price,a),e.text=n.formatPrice(o.price,a),e.visible=!0}}},43636:(e,t,i)=>{i.r(t),i.d(t,{LineToolHorzLine:()=>l});var s=i(12988),r=i(32679),n=i(10568),o=i(36590);class l extends n.InplaceTextLineDataSource{constructor(e,t,s,r){super(e,t??l.createProperties(e.backgroundTheme().spawnOwnership()),s,r),this._priceAxisView=new o.LineToolHorzLinePriceAxisView(this),Promise.all([i.e(2870),i.e(2211),i.e(1583)]).then(i.bind(i,38117)).then((({HorzLinePaneView:e})=>{this._setPaneViews([new e(this,this._model,this._openTextEditor.bind(this),this._closeTextEditor.bind(this),this.onSelectionChange.bind(this))])}))}state(e){const t=super.state(e);return t.points&&0!==t.points.length&&(t.points[0].offset=0),t}pointsCount(){return 1}name(){return"Horizontal Line"}priceAxisViews(e,t){return this.isSourceHidden()||t!==this.priceScale()||!this._model.selection().isSelected(this)&&!this.properties().childs().showPrice.value()||e!==this._model.paneForSource(this)?null:[this._priceAxisView]}timeAxisViews(){return null}timeAxisPoints(){return[]}updateAllViews(e){super.updateAllViews(e),this._priceAxisView.update(e)}canHasAlert(){return!0}template(){const e=super.template();return e.text=this.properties().childs().text.value(),e}denormalizeTimePoints(){this._points=[],this._timePoint.length>0&&this._points.push({price:this._timePoint[0].price,index:0,interval:this._model.mainSeries().interval()})}clearData(){const e=this._points;super.clearData(),this._points=e}editableTextProperties(){const e=this.properties().childs();return{text:e.text,textColor:e.textcolor,textVisible:e.showLabel}}static createProperties(e,t){const i=new r.DefaultProperty({defaultName:"linetoolhorzline",state:t,theme:e});return this._configureProperties(i),i}_getAlertPlots(){return[this.points()[0].price]}_pointsForPointset(){return[]}_getPropertyDefinitionsViewModelClass(){return Promise.all([i.e(3401),i.e(3889),i.e(8009),i.e(6204),i.e(1963),i.e(8537)]).then(i.bind(i,84190)).then((e=>e.HorizontalLineDefinitionsViewModel))}_applyTemplateImpl(e){super._applyTemplateImpl(e),this.properties().childs().text.setValue(e.text||"")}static _configureProperties(e){super._configureProperties(e),e.hasChild("text")||e.addChild("text",new s.Property("")),e.addExcludedKey("text",1)}}}}]);