/****************************
 * 여기다가 코드 적기
 ****************************/

/****************************
 * alert example
 ****************************/
// Ext.onReady(function(){
//     Ext.Msg.alert("Chapter 1","HelloWorld");
// });

/****************************
 * layout example
 ****************************/
Ext.onReady(function() {
    Ext.create('Ext.Panel',{
        title:'Absolute',
        margin:'0 0 40 0',
        width:500,
        height:300,
        x:50,
        y:50,
        layout:'absolute',
        renderTo:Ext.getBody()
    });
});


Ext.onReady(function() {
    Ext.create('Ext.Panel',{
        title:'Accordion',
        margin:'0 0 40 0',
        width:500,
        height:300,
        x:50,
        y:50,
        layout:'accordion',
        items:[{
            title:'first',
            html:'contents Page1'
        },{
            title:'second',
            html:'contents Page2'
        },{
            title:'third',
            html:'contents Page3'
        }],
        renderTo:Ext.getBody()
    });
});


Ext.onReady(function() {
    Ext.create('Ext.Panel',{
        title:'Border',
        margin:'0 0 40 0',
        width:500,
        height:300,
        x:50,
        y:50,
        layout:'border',
        items:[{
            region:'south',
            title:'Sourth',
            layout:'fit',
            flex:1,
            split:true
        },{
            region:'north',
            title:'North',
            layout:'fit',
            flex:1,
            split:true
        },{
            region:'east',
            title:'East',
            layout:'fit',
            flex:1,
            split:true
        },{
            region:'west',
            title:'West',
            layout:'fit',
            flex:1,
            split:true
        }],
        renderTo:Ext.getBody()
    });
});

Ext.onReady(function() {
    Ext.create('Ext.Panel',{
        title:'card',
        margin:'0 0 40 0',
        width:500,
        height:300,
        x:50,
        y:50,
        layout:'card',
        tbar: [
            {
                text: 'Before',
                handler: function (btn) {
                    if(btn.up('panel').getLayout().getPrev()) {
                        btn.up('panel').setActiveItem(btn.up('panel').getLayout().getPrev());
                    } else {
                        Ext.toast({
                            html:'First Page',
                            width: 200,
                            align: 't',
                            closable: false
                        });
                    }
                }
            }, {
                text: 'Next',
                handler: function (btn) {
                    if(btn.up('panel').getLayout().getNext()) {
                        btn.up('panel').setActiveItem(btn.up('panel').getLayout().getNext());
                    } else {
                        Ext.toast({
                            html:'Last Page',
                            width: 200,
                            align: 't',
                            closable: false
                        });
                    }
                }
            }
        ],
        items:[{
            title:'1page',
            html:'<h1>content1</h1>'
        },{
            title:'2page',
            html:'<h1>content2</h1>'
        },{
            title:'3page',
            html:'<h1>content4</h1>'
        }],
        renderTo:Ext.getBody()
    });
});



Ext.onReady(function() {
    Ext.create('Ext.Panel',{
        title:'center',
        margin:'0 0 40 0',
        width:500,
        height:300,
        x:50,
        y:50,
        layout:'center',
        items:[{
            text: 'button1',
            xtype: 'button'
        }],
        renderTo:Ext.getBody()
    });
});


Ext.onReady(function() {
    Ext.create('Ext.Panel',{
        title:'column',
        margin:'0 0 40 0',
        width:500,
        height:300,
        x:50,
        y:50,
        layout:'column',
        items:[{
            title:'column1',
            columnWidth:0.33,
            items:[{
                text: 'button1',
                xtype: 'button'
            }]
        },{
            title:'column2',
            columnWidth:0.33,
            items:[{
                text: 'button2',
                xtype: 'button'
            }]
        },{
            title:'column3',
            columnWidth:0.34,
            html:'<h3>content3</h3>'
        }],
        renderTo:Ext.getBody()
    });
});

Ext.onReady(function() {
    Ext.create('Ext.Panel',{
        title:'fit',
        margin:'0 0 40 0',
        width:500,
        height:300,
        x:50,
        y:50,
        frame:true,
        layout:'fit',//안주면 item이 레이아웃 전체로 표시되지 않음
        items:[{
            title: 'Before Fit',
            html: 'No Fit'
        }],
        renderTo:Ext.getBody()
    });
});


Ext.onReady(function() {
    Ext.create('Ext.Panel',{
        title:'form',
        margin:'0 0 40 0',
        width:500,
        height:300,
        x:50,
        y:50,
        layout:'form',//안주면 item이 레이아웃 전체로 표시되지 않음
        items:[{
            xtype: 'textfield',
            fieldLabel: 'First TextField'
        },{
            xtype: 'textfield',
            fieldLabel: 'Second TextField'
        }],
        renderTo:Ext.getBody()
    });
});

Ext.onReady(function() {
    Ext.create('Ext.Panel',{
        title:'Horizontal Layout',
        margin:'0 0 40 0',
        width:500,
        height:300,
        x:50,
        y:50,
        layout:{
            type:'hbox',
            align:'stretch'
        },//안주면 item이 레이아웃 전체로 표시되지 않음
        items:[{
            title:'First',
            flex:1,
            html:'page 1'
        },{
            title:'Second',
            flex:1,
            html:'page 2'
        }],
        renderTo:Ext.getBody()
    });
});

Ext.onReady(function() {
    Ext.create('Ext.Panel',{
        title:'Vertical Layout',
        margin:'0 0 40 0',
        width:500,
        height:300,
        x:50,
        y:50,
        layout:{
            type:'vbox'
        },
        items:[{
            title:'First',
            width:'100%',
            flex:1,
            html:'page 1'
        },{
            title:'Second',
            width:'20%',
            flex:1,
            html:'page 2'
        }],
        renderTo:Ext.getBody()
    });
});

Ext.onReady(function() {
    Ext.create('Ext.Panel',{
        title:'Table Layout',
        margin:'0 0 40 0',
        width:500,
        height:300,
        x:50,
        y:50,
        layout:{
            type:'table',
            columns:3
        },
        defaults:{
          bodyStyle:'padding:20px',
            border:'1px solid black'
        },
        items:[{
            rowspan:2,
            height:112,
            html: 'Row1/Cell1 + Row2/Cell1'
        },{
            colspan:2,
            html: 'Row1/Cell2 + Row1/Cell3'
        },{
            html: 'Row2/Cell2'
        },{
            html: 'Row2/Cell3'
        }],
        renderTo:Ext.getBody()
    });
});


