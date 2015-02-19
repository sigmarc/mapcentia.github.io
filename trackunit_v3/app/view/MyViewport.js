/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.form.Panel'
    ],

    layout: 'border',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'center',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'panel',
                            id: 'map-canvas',
                            layout: 'fit'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    width: 332,
                    layout: 'accordion',
                    collapsible: true,
                    title: 'Visualization',
                    items: [
                        {
                            xtype: 'form',
                            bodyPadding: 10,
                            title: 'Heat map',
                            listeners: {
                                beforerender: {
                                    fn: me.BeforeRenderHeatMapForm,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'form',
                            bodyPadding: 10,
                            title: 'Clusters',
                            listeners: {
                                beforerender: {
                                    fn: me.BeforeRenderBoderForm1,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'form',
                            bodyPadding: 10,
                            title: 'Border',
                            listeners: {
                                beforerender: {
                                    fn: me.BeforeRenderBoderForm,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'form',
                            bodyPadding: 10,
                            title: 'Test',
                            listeners: {
                                beforerender: {
                                    fn: me.BeforeRenderTestForm,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    BeforeRenderHeatMapForm: function(component, eOpts) {
        component.add(new MyApp.view.StandardForm());
        component.add({
                        xtype: 'button',
                        text: 'Make map',
            itemId: 'heatmap'
                })
    },

    BeforeRenderBoderForm1: function(component, eOpts) {
        var form = new MyApp.view.StandardForm();
        component.add(form);
        component.add({
                        xtype: 'button',
                        text: 'Make map',
            itemId: 'clustermap'
                });
    },

    BeforeRenderBoderForm: function(component, eOpts) {
        var form = new MyApp.view.StandardForm();
        form.add(new MyApp.view.AttributField());
        component.add(form);
        component.add({
                        xtype: 'button',
                        text: 'Make map',
            itemId: 'adminmap'
                });
    },

    BeforeRenderTestForm: function(component, eOpts) {
        var form = new MyApp.view.CustomForm1();
        component.add(form);
        component.add({
                        xtype: 'button',
                        text: 'Make map',
            itemId: 'testmap'
                });
    }

});