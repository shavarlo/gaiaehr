/**
 GaiaEHR (Electronic Health Records)
 Copyright (C) 2013 Certun, inc.

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('App.view.miscellaneous.MySettings',
{
	extend : 'App.ux.RenderPanel',
	id : 'panelMySettings',
	pageTitle : i18n('my_settings'),
	uses : ['App.ux.GridPanel'],
	initComponent : function()
	{
		var panel = this;
		// *************************************************************************************
		// User Settings Form
		// Add or Edit purpose
		// *************************************************************************************
		panel.uSettingsForm = Ext.create('App.ux.form.Panel',
		{
			id : 'uSettingsForm',
			bodyStyle : 'padding: 10px;',
			cls : 'form-white-bg',
			frame : true,
			hideLabels : true,
			items : [
			{
				xtype : 'textfield',
				hidden : true,
				id : 'id',
				name : 'id'
			},
			{
				xtype : 'fieldset',
				title : i18n('appearance_settings'),
				collapsible : true,
				defaultType : 'textfield',
				layout : 'anchor',
				defaults :
				{
					labelWidth : 89,
					anchor : '100%',
					layout :
					{
						type : 'hbox',
						defaultMargins :
						{
							top : 0,
							right : 5,
							bottom : 0,
							left : 0
						}
					}
				},
				items : [
				{
					// fields
				},
				{

				},
				{

				}]
			},
			{
				xtype : 'fieldset',
				title : i18n('locale_settings'),
				collapsible : true,
				defaultType : 'textfield',
				layout : 'anchor',
				defaults :
				{
					labelWidth : 89,
					anchor : '100%',
					layout :
					{
						type : 'hbox',
						defaultMargins :
						{
							top : 0,
							right : 5,
							bottom : 0,
							left : 0
						}
					}
				},
				items : [
				{
					// fields
				},
				{

				},
				{

				}]
			},
			{
				xtype : 'fieldset',
				title : i18n('calendar_settings'),
				collapsible : true,
				defaultType : 'textfield',
				layout : 'anchor',
				defaults :
				{
					labelWidth : 89,
					anchor : '100%',
					layout :
					{
						type : 'hbox',
						defaultMargins :
						{
							top : 0,
							right : 5,
							bottom : 0,
							left : 0
						}
					}
				},
				items : [
				{
					// fields
				},
				{

				},
				{

				}]
			}],
			dockedItems : [
			{
				xtype : 'toolbar',
				dock : 'top',
				items : [
				{
					text : i18n('save'),
					iconCls : 'save',
					id : 'cmdSave',
					disabled : true,
					handler : function()
					{

					}
				}]
			}]
		});
		panel.pageBody = [panel.uSettingsForm];
		panel.callParent(arguments);
	},
	/**
	 * This function is called from Viewport.js when
	 * this panel is selected in the navigation panel.
	 * place inside this function all the functions you want
	 * to call every this panel becomes active
	 */
	onActive : function(callback)
	{
		callback(true);
	}
});
// End ExtJS
