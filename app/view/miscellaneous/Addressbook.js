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

Ext.define('App.view.miscellaneous.Addressbook', {
    extend: 'App.ux.RenderPanel',
    id: 'panelAddressbook',
    pageTitle: i18n('address_book'),
    uses: ['App.ux.GridPanel', 'App.ux.combo.Titles', 'App.ux.window.Window', 'App.ux.combo.Types'],
    initComponent: function(){
        var me = this;
        var currRec;
        /**
         * Addresses Store
         */
        me.store = Ext.create('App.store.miscellaneous.AddressBook');

        /**
         * Window and form
         */
        me.win = Ext.create('App.ux.window.Window', {
            width: 755,
            title: i18n('add_or_edit_contact'),
            items: [
                {
                    xtype: 'mitos.form',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: i18n('primary_info'),
                            collapsible: true,
                            defaultType: 'textfield',
                            layout: 'anchor',
                            defaults: {
                                labelWidth: 89,
                                anchor: '100%',
                                layout: {
                                    type: 'hbox',
                                    defaultMargins: {
                                        top: 0,
                                        right: 5,
                                        bottom: 0,
                                        left: 0
                                    }
                                }
                            },
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    defaults: {
                                        hideLabel: true
                                    },
                                    msgTarget: 'under',
                                    items: [
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'Type: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'mitos.typescombobox'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    defaults: {
                                        hideLabel: true
                                    },
                                    msgTarget: 'under',
                                    items: [
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'First, Middle, Last: '
                                        },
                                        {
                                            width: 55,
                                            xtype: 'mitos.titlescombo',
                                            name: 'title'
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'fname'
                                        },
                                        {
                                            width: 100,
                                            xtype: 'textfield',
                                            name: 'mname'
                                        },
                                        {
                                            width: 280,
                                            xtype: 'textfield',
                                            name: 'lname'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    msgTarget: 'side',
                                    items: [
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'Specialty: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'specialty'
                                        },
                                        {
                                            width: 90,
                                            xtype: 'displayfield',
                                            value: 'Organization: '
                                        },
                                        {
                                            width: 120,
                                            xtype: 'textfield',
                                            name: 'organization'
                                        },
                                        {
                                            width: 80,
                                            xtype: 'displayfield',
                                            value: 'Valedictory: '
                                        },
                                        {
                                            width: 135,
                                            xtype: 'textfield',
                                            name: 'valedictory'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: i18n('primary_address'),
                            collapsible: true,
                            defaultType: 'textfield',
                            layout: 'anchor',
                            defaults: {
                                labelWidth: 89,
                                anchor: '100%',
                                layout: {
                                    type: 'hbox',
                                    defaultMargins: {
                                        top: 0,
                                        right: 5,
                                        bottom: 0,
                                        left: 0
                                    }
                                }
                            },
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    items: [
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'Address: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'street'
                                        },
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'Addrress Cont: '
                                        },
                                        {
                                            width: 335,
                                            xtype: 'textfield',
                                            name: 'streetb'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    items: [
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'City: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'city'
                                        },
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'State: '
                                        },
                                        {
                                            width: 120,
                                            xtype: 'textfield',
                                            name: 'state'
                                        },
                                        {
                                            width: 80,
                                            xtype: 'displayfield',
                                            value: 'Postal Code: '
                                        },
                                        {
                                            width: 125,
                                            xtype: 'textfield',
                                            name: 'zip'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: i18n('secondary_address'),
                            collapsible: true,
                            collapsed: true,
                            defaultType: 'textfield',
                            layout: 'anchor',
                            defaults: {
                                labelWidth: 89,
                                anchor: '100%',
                                layout: {
                                    type: 'hbox',
                                    defaultMargins: {
                                        top: 0,
                                        right: 5,
                                        bottom: 0,
                                        left: 0
                                    }
                                }
                            },
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    items: [
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'Address: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'street2'
                                        },
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'Cont.: '
                                        },
                                        {
                                            width: 335,
                                            xtype: 'textfield',
                                            name: 'streetb2'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    items: [
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'City: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'city2'
                                        },
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'State: '
                                        },
                                        {
                                            width: 120,
                                            xtype: 'textfield',
                                            name: 'state2'
                                        },
                                        {
                                            width: 80,
                                            xtype: 'displayfield',
                                            value: 'Postal Code: '
                                        },
                                        {
                                            width: 125,
                                            xtype: 'textfield',
                                            name: 'zip2'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: i18n('phone_numbers'),
                            collapsible: true,
                            collapsed: true,
                            defaultType: 'textfield',
                            layout: 'anchor',
                            defaults: {
                                labelWidth: 89,
                                anchor: '100%',
                                layout: {
                                    type: 'hbox',
                                    defaultMargins: {
                                        top: 0,
                                        right: 5,
                                        bottom: 0,
                                        left: 0
                                    }
                                }
                            },
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    items: [
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'Home Phone: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'phone'
                                        },
                                        {
                                            width: 90,
                                            xtype: 'displayfield',
                                            value: 'Mobile Phone: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'phonecell'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldcontainer',
                                    items: [
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'Work Phone: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'phonew1'
                                        },
                                        {
                                            width: 90,
                                            xtype: 'displayfield',
                                            value: 'Work Phone: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'phonew2'
                                        },
                                        {
                                            width: 60,
                                            xtype: 'displayfield',
                                            value: 'FAX: '
                                        },
                                        {
                                            width: 140,
                                            xtype: 'textfield',
                                            name: 'fax'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: i18n('online_info'),
                            collapsible: true,
                            collapsed: true,
                            defaultType: 'textfield',
                            layout: 'anchor',
                            defaults: {
                                labelWidth: 89,
                                anchor: '100%',
                                layout: {
                                    type: 'hbox',
                                    defaultMargins: {
                                        top: 0,
                                        right: 5,
                                        bottom: 0,
                                        left: 0
                                    }
                                }
                            },
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    items: [
                                        {
                                            width: 100,
                                            xtype: 'displayfield',
                                            value: 'Email: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'email'
                                        },
                                        {
                                            width: 90,
                                            xtype: 'displayfield',
                                            value: 'Assistant: '
                                        },
                                        {
                                            width: 130,
                                            xtype: 'textfield',
                                            name: 'assistant'
                                        },
                                        {
                                            width: 60,
                                            xtype: 'displayfield',
                                            value: 'Website: '
                                        },
                                        {
                                            width: 140,
                                            xtype: 'textfield',
                                            name: 'url'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: i18n('other_info'),
                            collapsible: true,
                            collapsed: true,
                            defaultType: 'textfield',
                            layout: 'anchor',
                            defaults: {
                                labelWidth: 89,
                                anchor: '100%',
                                layout: {
                                    type: 'hbox',
                                    defaultMargins: {
                                        top: 0,
                                        right: 5,
                                        bottom: 0,
                                        left: 0
                                    }
                                }
                            },
                            items: [
                                {
                                    xtype: 'fieldcontainer',
                                    items: [
                                        {
                                            width: 50,
                                            xtype: 'displayfield',
                                            value: 'UPIN: '
                                        },
                                        {
                                            width: 80,
                                            xtype: 'textfield',
                                            name: 'upin'
                                        },
                                        {
                                            width: 50,
                                            xtype: 'displayfield',
                                            value: 'NPI: '
                                        },
                                        {
                                            width: 80,
                                            xtype: 'textfield',
                                            name: 'npi'
                                        },
                                        {
                                            width: 50,
                                            xtype: 'displayfield',
                                            value: 'TIN: '
                                        },
                                        {
                                            width: 80,
                                            xtype: 'textfield',
                                            name: 'federaltaxid'
                                        },
                                        {
                                            width: 80,
                                            xtype: 'displayfield',
                                            value: 'Taxonomy: '
                                        },
                                        {
                                            width: 90,
                                            xtype: 'textfield',
                                            name: 'taxonomy'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            width: 720,
                            xtype: 'htmleditor',
                            name: 'notes',
                            emptyText: i18n('notes')
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: i18n('save'),
                    scope: me,
                    handler: me.onAddressSave
                },
                {
                    text: i18n('cancel'),
                    scope: me,
                    handler: me.onCancel
                }
            ],
            listeners: {
                close: me.onWinClose
            }
        });
        // END WINDOW
        // *************************************************************************************
        // Create the GridPanel
        // *************************************************************************************
        me.grid = Ext.create('Ext.grid.GridPanel', {
            store: me.store,
            layout: 'fit',
            frame: true,
            loadMask: true,
            viewConfig: {
                stripeRows: true
            },
            listeners: {
                scope: me,
                itemclick: me.girdItemclick,
                itemdblclick: me.gridItemdblclick

            },
            columns: [
                {
                    header: i18n('name'),
                    width: 150,
                    sortable: true,
                    dataIndex: 'fullname'
                },
                {
                    header: i18n('local'),
                    width: 50,
                    sortable: true,
                    dataIndex: 'username',
                    renderer: me.local
                },
                {
                    header: i18n('type'),
                    sortable: true,
                    dataIndex: 'ab_title'
                },
                {
                    header: i18n('specialty'),
                    sortable: true,
                    dataIndex: 'specialty'
                },
                {
                    header: i18n('work_phone'),
                    sortable: true,
                    dataIndex: 'phonew1'
                },
                {
                    header: i18n('mobile'),
                    sortable: true,
                    dataIndex: 'phonecell'
                },
                {
                    header: i18n('fax'),
                    sortable: true,
                    dataIndex: 'fax'
                },
                {
                    header: i18n('email'),
                    flex: 1,
                    sortable: true,
                    dataIndex: 'email'
                },
                {
                    header: i18n('primary_address'),
                    flex: 1,
                    sortable: true,
                    dataIndex: 'fulladdress'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            text: i18n('add_contact'),
                            iconCls: 'icoAddressBook',
                            scope: me,
                            handler: me.onAddContact
                        }
                    ]
                }
            ]
        });
        me.pageBody = [me.grid];
        me.callParent(arguments);
    },
    onAddContact: function(){
        this.win.show();
    },
    onAddressSave: function(btn){
        var me = this, win = btn.up('window'), form = win.down('form').getForm(), store = me.store;
        if(form.isValid()){
            var record = form.getRecord(), values = form.getValues(), storeIndex = store.indexOf(record);
            if(storeIndex == -1){
                store.add(values);
            }else{
                record.set(values);
            }
            store.sync();
            store.load();
            win.close();
            me.msg('Sweet!', i18n('message_sent'));
        }
    },
    onCancel: function(){
        this.win.close();
    },
    girdItemclick: function(grid, record){
    },
    gridItemdblclick: function(grid, record){
        this.win.down('form').getForm().loadRecord(record);
        this.win.show();
    },
    onWinClose: function(window){
        window.down('form').getForm().reset();
    },
    onCopyClipBoard: function(company){
        var store = Ext.getCmp('grid').store;
        var record = store.getById(company);
        var s = '';
        for(key in record.data){
            s += key + ': ' + record.data[key] + '\n';
        }
        alert(i18n('following_data_copied_to_clipboard') + ':\n\n' + s);
        if(window.clipboardData){
            window.clipboardData.setData('text', s);
        }else{
            return (s);
        }
    },
    local: function(val){
        if(val !== ''){
            return '<img src="resources/images/icons/yes.gif" />';
        }
        return val;
    },
    /**
     * This function is called from Viewport.js when
     * this panel is selected in the navigation panel.
     * place inside this function all the functions you want
     * to call every this panel becomes active
     */
    onActive: function(callback){
        this.store.load();
        callback(true);
    }
});
