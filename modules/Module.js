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

Ext.define('Modules.Module',
    {
        extend: 'Ext.Component',
        constructor: function () {
            var me = this;
            me.callParent();
        },

        /**
         * @param panel
         */
        addAppPanel: function (panel) {
            app.MainPanel.add(panel);
        },

        /**
         * @param item
         */
        addHeaderItem: function (item) {
            app.Header.add(item);
        },

        /**
         * @param parentId
         * @param node
         *
         * Desc: Method to add items to the navigation tree.
         *
         */
        addNavigationNodes: function (parentId, node) {
            var parent;
            if (parentId == 'root' || parentId == null) {
                parent = app.storeTree.tree.getRootNode();
            }
            else {
                parent = app.storeTree.tree.getNodeById(parentId);
            }

            var firstChildNode = parent.findChildBy(function (node) {
                return node.hasChildNodes();
            });

            if (Ext.isArray(node)) {
                for (var i = 0; i < node.length; i++)
                    parent.insertBefore(node[i], firstChildNode);
            }
            else {
                parent.insertBefore(node, firstChildNode);
            }

        },

        getModuleData:function(name){
            var me = this;
            Modules.getModuleByName(name, function(provider, response){
                me.fireEvent('moduledata', response.result)
            });
        },

        updateModuleData:function(data){
            var me = this;
            Modules.updateModule(data, function(provider, response){
                me.fireEvent('moduledataupdate', response.result)
            });
        },

        addLanguages: function (languages) {

        }
    });