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

Ext.define('App.store.administration.Applications', {
    model: 'App.model.administration.Applications',
    extend: 'Ext.data.Store',
    proxy: {
        type: 'direct',
        api: {
            read: Applications.getApplications,
            create: Applications.addApplication,
            update: Applications.updateApplication,
            destroy: Applications.deleteApplication
        }
    },
    autoSync: true,
    remoteSort: true,
    autoLoad: false
});