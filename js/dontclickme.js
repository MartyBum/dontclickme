Ext.namespace('Zarafa.plugins.dontclickme');

/**
 * @class Zarafa.plugins.dontclickme.DontClickMePlugin
 * @extends Zarafa.core.ThemePlugin
 *
 */
Zarafa.plugins.dontclickme.DontClickMePlugin  = Ext.extend(Zarafa.core.Plugin, {
	rotateElementIds : ['zarafa-mainmenu', 'zarafa-maintoolbar', 'zarafa-navigationpanel', 'zarafa-mainpanel-content', 'zarafa-main-content-mail-preview'],

    initPlugin : function() {

    this.registerInsertionPoint('main.maintabbar.right', this.createToolBarButton, this);

    },

    /**
     * Creates a button in the main toolbar to create/open the spreed plugin
     *
     * @return {Object} Object with the spreed button definition
     * @private
     */
     createToolBarButton: function () {
     	return {
	        newMenuIndex: 10,
	        xtype: 'button',
	        scale: 'large',
	        listeners: {
	        	click: function() {
	        		if ( Math.random()<0.5 ){
	        			Ext.getBody().toggleClass("dontclickme");
	        		}
					Ext.each(this.rotateElementIds, function(id){
		        		if ( Math.random()<0.5 ){
		        			var el = Ext.get(id);
							if ( el ){
								el.toggleClass("dontclickme");
							}
						}
					});
	           },
	           scope: this
	        },
	        tooltip: _("Don't click me"),
	        iconCls: 'icon_dont_click_me',
			tabOrderIndex: 4,
			cls: 'dontclickme',
	        scope: this
        };
     },

});

Zarafa.onReady(function() {
	container.registerPlugin(new Zarafa.core.PluginMetaData({
		name : 'dontclickme',
		displayName : _("Don't Click Me"),
		allowUserDisable : true,
		allowUserVisible : true,
		pluginConstructor : Zarafa.plugins.dontclickme.DontClickMePlugin
	}));
});
