
var subMain = function () {
	var layoutMain = function (initParams) {
		var mainId = (subHandler.mainId) ? subHandler.mainId : subHandler.parentId;
		var record_start = 0;
		var searchText = '';//所有搜尋條件
		var field = [
			{ name: 'shpDate', type: 'string' }, { name: 'oCusId', type: 'string' }, { name: 'shpNbr', type: 'string' },
			{ name: 'sUname', type: 'string' }, { name: 'boxID', type: 'string' }, { name: 'packNo', type: 'string' },
			{ name: 'oWeight', type: 'string' }, { name: 'oSetDate', type: 'string' }, { name: 'pUname', type: 'string' },
			{ name: 'bundleId', type: 'string' }, { name: 'iCusId', type: 'string' }, { name: 'dateCode', type: 'string' },
			{ name: 'qty', type: 'string' }, { name: 'moNbr', type: 'string' }, { name: 'itemNo', type: 'string' },
			{ name: 'cusItemNo', type: 'string' }, { name: 'scrapped', type: 'string' }, { name: 'serialNumber', type: 'string' },
			{ name: 'serialNumber_inventec', type: 'string' }, { name: 'remark', type: 'string' }, { name: 'remark2', type: 'string' },
			{ name: 'iWeight', type: 'string' }, { name: 'note', type: 'string' }, { name: 'supplier', type: 'string' },
			{ name: 'place', type: 'string' }, { name: 'bUname', type: 'string' }, { name: 'iSetDate', type: 'string' },
			{ name: 'order_nbr', type: 'string' }, { name: 'sortIndex', type: 'string' }, { name: 'twoD', type: 'string' },
			{ name: 'addPcs', type: 'string' }, { name: 'cusPo', type: 'string' }
		];
		var cm = new Ext.grid.ColumnModel([
			new Ext.grid.RowNumberer({
				width: 40,
				renderer: function (value, metadata, record, rowIndex) {
					return record_start + 1 + rowIndex;
				}
			}),
			{
				header: '出貨時間', dataIndex: 'shpDate', width: 130,
				renderer: function (value, meta, record, rowIndex, colIndex, store) {
					meta.cellAttr = meta.attr = 'style="white-space:normal;"';
					//合併單元格
					var first = !rowIndex || (value !== store.getAt(rowIndex - 1).get('shpDate') || record.get('shpNbr') !== store.getAt(rowIndex - 1).get('shpNbr')),
						last = rowIndex >= store.getCount() - 1 || (value !== store.getAt(rowIndex + 1).get('shpDate') || record.get('shpNbr') !== store.getAt(rowIndex + 1).get('shpNbr'));
					meta.css += 'row-span' + (first ? ' row-span-first' : '') + (last ? ' row-span-last' : '');
					if (first) {
						var i = rowIndex + 1;
						while (i < store.getCount() && value === store.getAt(i).get('shpDate') && record.get('shpNbr') === store.getAt(i).get('shpNbr')) {
							i++;
						}
						var rowHeight = 20, padding = 6,
							height = (rowHeight * (i - rowIndex) - padding) + 'px';
						meta.attr = 'style="height:' + height + ';line-height:' + height + ';"';
					}
					return first ? value : '';
				}
			},
			{
				header: '客戶代號', dataIndex: 'oCusId', width: 60,
				renderer: function (value, meta, record, rowIndex, colIndex, store) {
					meta.cellAttr = meta.attr = 'style="white-space:normal;"';
					//合併單元格
					var first = !rowIndex || (value !== store.getAt(rowIndex - 1).get('oCusId') || record.get('shpNbr') !== store.getAt(rowIndex - 1).get('shpNbr')),
						last = rowIndex >= store.getCount() - 1 || (value !== store.getAt(rowIndex + 1).get('oCusId') || record.get('shpNbr') !== store.getAt(rowIndex + 1).get('shpNbr'));
					meta.css += 'row-span' + (first ? ' row-span-first' : '') + (last ? ' row-span-last' : '');
					if (first) {
						var i = rowIndex + 1;
						while (i < store.getCount() && value === store.getAt(i).get('oCusId') && record.get('shpNbr') === store.getAt(i).get('shpNbr')) {
							i++;
						}
						var rowHeight = 20, padding = 6,
							height = (rowHeight * (i - rowIndex) - padding) + 'px';
						meta.attr = 'style="height:' + height + ';line-height:' + height + ';"';
					}
					return first ? value : '';
				}
			},
			{
				header: '出貨單號', dataIndex: 'shpNbr', width: 80,
				renderer: function (value, meta, record, rowIndex, colIndex, store) {
					meta.cellAttr = meta.attr = 'style="white-space:normal;"';
					//合併單元格
					var first = !rowIndex || value !== store.getAt(rowIndex - 1).get('shpNbr'),
						last = rowIndex >= store.getCount() - 1 || value !== store.getAt(rowIndex + 1).get('shpNbr');
					meta.css += 'row-span' + (first ? ' row-span-first' : '') + (last ? ' row-span-last' : '');
					if (first) {
						var i = rowIndex + 1;
						while (i < store.getCount() && value === store.getAt(i).get('shpNbr')) {
							i++;
						}
						var rowHeight = 20, padding = 6,
							height = (rowHeight * (i - rowIndex) - padding) + 'px';
						meta.attr = 'style="height:' + height + ';line-height:' + height + ';"';
					}
					return first ? value : '';
				}
			},
			{
				header: '出貨人員', dataIndex: 'sUname', width: 60, hidden: true,
				renderer: function (value, meta, record, rowIndex, colIndex, store) {
					meta.cellAttr = meta.attr = 'style="white-space:normal;"';
					//合併單元格
					var first = !rowIndex || (value !== store.getAt(rowIndex - 1).get('sUname') || record.get('shpNbr') !== store.getAt(rowIndex - 1).get('shpNbr')),
						last = rowIndex >= store.getCount() - 1 || (value !== store.getAt(rowIndex + 1).get('sUname') || record.get('shpNbr') !== store.getAt(rowIndex + 1).get('shpNbr'));
					meta.css += 'row-span' + (first ? ' row-span-first' : '') + (last ? ' row-span-last' : '');
					if (first) {
						var i = rowIndex + 1;
						while (i < store.getCount() && value === store.getAt(i).get('sUname') && record.get('shpNbr') === store.getAt(i).get('shpNbr')) {
							i++;
						}
						var rowHeight = 20, padding = 6,
							height = (rowHeight * (i - rowIndex) - padding) + 'px';
						meta.attr = 'style="height:' + height + ';line-height:' + height + ';"';
					}
					return first ? value : '';
				}
			},
			{
				header: 'BoxID', dataIndex: 'boxID', width: 100,
				renderer: function (value, meta, record, rowIndex, colIndex, store) {
					meta.cellAttr = meta.attr = 'style="white-space:normal;"';
					//合併單元格
					//其中一個為true的話 就是true
					var first = !rowIndex || (value !== store.getAt(rowIndex - 1).get('boxID') || record.get('shpNbr') !== store.getAt(rowIndex - 1).get('shpNbr')),
						last = rowIndex >= store.getCount() - 1 || (value !== store.getAt(rowIndex + 1).get('boxID') || record.get('shpNbr') !== store.getAt(rowIndex + 1).get('shpNbr'));
					meta.css += 'row-span' + (first ? ' row-span-first' : '') + (last ? ' row-span-last' : '');
					if (first) {
						var i = rowIndex + 1;
						while (i < store.getCount() && value === store.getAt(i).get('boxID') && record.get('shpNbr') === store.getAt(i).get('shpNbr')) {
							i++;
						}
						var rowHeight = 20, padding = 6,
							height = (rowHeight * (i - rowIndex) - padding) + 'px';
						meta.attr = 'style="height:' + height + ';line-height:' + height + ';"';
					}
					return first ? value : '';
				}
			},
			{
				header: '客戶PO', dataIndex: 'cusPo', width: 100, hidden: true,
				renderer: function (value, meta, record, rowIndex, colIndex, store) {
					meta.cellAttr = meta.attr = 'style="white-space:normal;"';
					//合併單元格
					//其中一個為true的話 就是true
					var first = !rowIndex || (value !== store.getAt(rowIndex - 1).get('cusPo') || record.get('boxID') !== store.getAt(rowIndex - 1).get('boxID')),
						last = rowIndex >= store.getCount() - 1 || (value !== store.getAt(rowIndex + 1).get('cusPo') || record.get('boxID') !== store.getAt(rowIndex + 1).get('boxID'));
					meta.css += 'row-span' + (first ? ' row-span-first' : '') + (last ? ' row-span-last' : '');
					if (first) {
						var i = rowIndex + 1;
						while (i < store.getCount() && value === store.getAt(i).get('cusPo') && record.get('boxID') === store.getAt(i).get('boxID')) {
							i++;
						}
						var rowHeight = 20, padding = 6,
							height = (rowHeight * (i - rowIndex) - padding) + 'px';
						meta.attr = 'style="height:' + height + ';line-height:' + height + ';"';
					}
					return first ? value : '';
				}
			},
			{
				header: '贈送數量', dataIndex: 'addPcs', width: 70, hidden: true,
				renderer: function (value, meta, record, rowIndex, colIndex, store) {
					meta.cellAttr = meta.attr = 'style="white-space:normal;"';
					//合併單元格
					var first = !rowIndex || (value !== store.getAt(rowIndex - 1).get('addPcs') || record.get('boxID') !== store.getAt(rowIndex - 1).get('boxID')),
						last = rowIndex >= store.getCount() - 1 || (value !== store.getAt(rowIndex + 1).get('addPcs') || record.get('boxID') !== store.getAt(rowIndex + 1).get('boxID'));
					meta.css += 'row-span' + (first ? ' row-span-first' : '') + (last ? ' row-span-last' : '');
					if (first) {
						var i = rowIndex + 1;
						while (i < store.getCount() && value === store.getAt(i).get('addPcs') && record.get('boxID') === store.getAt(i).get('boxID')) {
							i++;
						}
						var rowHeight = 20, padding = 6,
							height = (rowHeight * (i - rowIndex) - padding) + 'px';
						meta.attr = 'style="height:' + height + ';line-height:' + height + ';"';
					}
					return first ? value : '';
				}
			},
			{
				header: 'ERP箱號', dataIndex: 'packNo', width: 120, hidden: true,
				renderer: function (value, meta, record, rowIndex, colIndex, store) {
					meta.cellAttr = meta.attr = 'style="white-space:normal;"';
					//合併單元格
					var first = !rowIndex || (value !== store.getAt(rowIndex - 1).get('packNo') || record.get('boxID') !== store.getAt(rowIndex - 1).get('boxID')),
						last = rowIndex >= store.getCount() - 1 || (value !== store.getAt(rowIndex + 1).get('packNo') || record.get('boxID') !== store.getAt(rowIndex + 1).get('boxID'));
					meta.css += 'row-span' + (first ? ' row-span-first' : '') + (last ? ' row-span-last' : '');
					if (first) {
						var i = rowIndex + 1;
						while (i < store.getCount() && value === store.getAt(i).get('packNo') && record.get('boxID') === store.getAt(i).get('boxID')) {
							i++;
						}
						var rowHeight = 20, padding = 6,
							height = (rowHeight * (i - rowIndex) - padding) + 'px';
						meta.attr = 'style="height:' + height + ';line-height:' + height + ';"';
					}
					return first ? value : '';
				}
			},
			{
				header: '箱重', dataIndex: 'oWeight', width: 60, hidden: true,
				renderer: function (value, meta, record, rowIndex, colIndex, store) {
					meta.cellAttr = meta.attr = 'style="white-space:normal;"';
					//合併單元格
					var first = !rowIndex || (value !== store.getAt(rowIndex - 1).get('oWeight') || record.get('boxID') !== store.getAt(rowIndex - 1).get('boxID')),
						last = rowIndex >= store.getCount() - 1 || (value !== store.getAt(rowIndex + 1).get('oWeight') || record.get('boxID') !== store.getAt(rowIndex + 1).get('boxID'));
					meta.css += 'row-span' + (first ? ' row-span-first' : '') + (last ? ' row-span-last' : '');
					if (first) {
						var i = rowIndex + 1;
						while (i < store.getCount() && value === store.getAt(i).get('oWeight') && record.get('boxID') === store.getAt(i).get('boxID')) {
							i++;
						}
						var rowHeight = 20, padding = 6,
							height = (rowHeight * (i - rowIndex) - padding) + 'px';
						meta.attr = 'style="height:' + height + ';line-height:' + height + ';"';
					}
					return first ? value : '';
				}
			},
			{
				header: '裝箱日期', dataIndex: 'oSetDate', hidden: true, width: 130,
				renderer: function (value, meta, record, rowIndex, colIndex, store) {
					meta.cellAttr = meta.attr = 'style="white-space:normal;"';
					//合併單元格
					var first = !rowIndex || (value !== store.getAt(rowIndex - 1).get('oSetDate') || record.get('boxID') !== store.getAt(rowIndex - 1).get('boxID')),
						last = rowIndex >= store.getCount() - 1 || (value !== store.getAt(rowIndex + 1).get('oSetDate') || record.get('boxID') !== store.getAt(rowIndex + 1).get('boxID'));
					meta.css += 'row-span' + (first ? ' row-span-first' : '') + (last ? ' row-span-last' : '');
					if (first) {
						var i = rowIndex + 1;
						while (i < store.getCount() && value === store.getAt(i).get('oSetDate') && record.get('boxID') === store.getAt(i).get('boxID')) {
							i++;
						}
						var rowHeight = 20, padding = 6,
							height = (rowHeight * (i - rowIndex) - padding) + 'px';
						meta.attr = 'style="height:' + height + ';line-height:' + height + ';"';
					}
					return first ? value : '';
				}
			},
			{
				header: '裝箱人員', dataIndex: 'pUname', width: 60, hidden: true,
				renderer: function (value, meta, record, rowIndex, colIndex, store) {
					meta.cellAttr = meta.attr = 'style="white-space:normal;"';
					//合併單元格
					var first = !rowIndex || (value !== store.getAt(rowIndex - 1).get('pUname') || record.get('boxID') !== store.getAt(rowIndex - 1).get('boxID')),
						last = rowIndex >= store.getCount() - 1 || (value !== store.getAt(rowIndex + 1).get('pUname') || record.get('boxID') !== store.getAt(rowIndex + 1).get('boxID'));
					meta.css += 'row-span' + (first ? ' row-span-first' : '') + (last ? ' row-span-last' : '');
					if (first) {
						var i = rowIndex + 1;
						while (i < store.getCount() && value === store.getAt(i).get('pUname') && record.get('boxID') === store.getAt(i).get('boxID')) {
							i++;
						}
						var rowHeight = 20, padding = 6,
							height = (rowHeight * (i - rowIndex) - padding) + 'px';
						meta.attr = 'style="height:' + height + ';line-height:' + height + ';"';
					}
					return first ? value : '';
				}
			},
			{ header: 'BundleID', dataIndex: 'bundleId' },
			{ header: '內包客戶代號', dataIndex: 'iCusId', width: 90 },
			{ header: '料號', dataIndex: 'itemNo' },
			{ header: '客戶料號', dataIndex: 'cusItemNo', width: 130 },
			{ header: '數量', dataIndex: 'qty', width: 50 },
			{ header: 'Date Code', dataIndex: 'dateCode', width: 80 },
			{ header: '製令', dataIndex: 'moNbr', width: 130 },
			{ header: '單報數', dataIndex: 'scrapped', width: 50 },
			{ header: '流水碼', dataIndex: 'serialNumber', width: 60, hidden: true },
			{ header: '特殊流水碼', dataIndex: 'serialNumber_inventec', hidden: true },
			{ header: '備註1', dataIndex: 'remark', hidden: true },
			{ header: '備註2', dataIndex: 'remark2', hidden: true },
			{ header: '包重', dataIndex: 'iWeight', hidden: true, width: 50 },
			{ header: '二維碼資訊', dataIndex: 'twoD', hidden: true },
			{ header: '供應商', dataIndex: 'note', hidden: true },
			{ header: '英業達Supplier', dataIndex: 'supplier', hidden: true },
			{ header: '英業達Place', dataIndex: 'place', hidden: true },
			{ header: '鍍金時間', dataIndex: 'goldDate', hidden: true },
			{ header: '鍍金到期日', dataIndex: 'goldExp', hidden: true },
			{ header: '鍍金厚度', dataIndex: 'goldThickness', hidden: true },
			{ header: '預排單號', dataIndex: 'order_nbr', hidden: true },
			{ header: '包裝人員', dataIndex: 'bUname', hidden: true, width: 60 },
			{ header: '包裝時間', dataIndex: 'iSetDate', hidden: true, width: 130 }
		]);

		var store = new Ext.data.Store({
			proxy: new Ext.data.HttpProxy({ url: subHandler.subController + '&action=loadShpRecord', disableCaching: true, method: 'POST' }),  //disableCaching 禁止快取   //HttpProxy客户端向代理發送請求，代理服务器需要處理請求和連接，同时向服务器發送请求，將收到的響應發给客户端	
			reader: new Ext.data.JsonReader({
				totalProperty: 'total', root: 'data', fields: field
			}), remoteSort: true, listeners: {
				load: function () {
					var getTotal = store.data.items.length;
					var norBtn = Ext.getCmp(mainId + '_norExcel');
					var speBtn = Ext.getCmp(mainId + '_speExcel');
					if (getTotal == 0) {
						norBtn.setDisabled(true);
						speBtn.setDisabled(true);
					} else {
						norBtn.setDisabled(false);
						speBtn.setDisabled(false);
					}
				}
			}
		});

		var grid = new Ext.grid.EditorGridPanel({
			stripeRows: false,
			columnLines: true,
			store: store,
			cm: cm,
			cls: 'grid-row-span',
			sm: new Ext.grid.RowSelectionModel({ singleSelect: true }),
			loadMask: true,
			viewConfig: {
				deferEmptyText: false,
				emptyText: '無資料'
			},
			bbar: new Ext.PagingToolbar({
				pageSize: initParams.pageSize, displayInfo: true,
				doLoad: function (start) {
					record_start = start;
					var o = {}, pn = this.getParams();
					o[pn.start] = start;
					o[pn.limit] = this.pageSize;
					this.store.load({ params: o });
				}
			}
			), //pagesize 每頁筆數  //顯示總筆數
			tbar: [
				{
					text: '篩選', tooltip: '篩選', iconCls: 'search', id: mainId + '_searchBox', tooltip: '出貨時間篩選<br>客戶代號篩選<br>出貨單號篩選<br>BoxID篩選<br>BundleID篩選<br>料號篩選<br>數量篩選<br>Date Code篩選<br>製令篩選<br>單報數篩選<br>流水碼篩選<br>特殊流水碼篩選<br>供應商篩選<br>預排單號篩選', menu:
						new Ext.menu.Menu({
							id: mainId + '_searchMenu', labelWidth: 90, hasLayout: false, hideOnClick: true, allowOtherMenus: true, plain: true, layout: 'form', width: 350, labelAlign: 'left', items: [
								{ xtype: 'container', layout: 'column', items: [{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:0px 0px 2px 0px' }] },
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'label', text: '日期', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 70px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'datefield',
											width: 100,
											format: 'Y-m-d',
											fieldLabel: '日期',
											value: new Date(),
											id: mainId + "_startYM",
											editable: false,
											getListParent: function () { return this.el.up('.x-menu'); },
											menu: new Ext.menu.DateMenu({ hideOnClick: true, allowOtherMenus: true }),
											listeners: {
												select(_this, date) {
													// search();
												}
											}
										},
										{ xtype: 'label', text: ' ~ ', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'datefield',
											width: 100,
											format: 'Y-m-d',
											fieldLabel: '日期',
											value: new Date(),
											id: mainId + "_endYM",
											editable: false,
											getListParent: function () { return this.el.up('.x-menu'); },
											menu: new Ext.menu.DateMenu({ hideOnClick: true, allowOtherMenus: true }),
											listeners: {
												select(_this, date) {
													// search();
												}
											}
										},
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_cusCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: '客戶代號', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 24px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_cusSearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
													// Ext.ux.TopMsg.msg("提示",searchText,2,200);
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_shpCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: '出貨單號', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 24px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_shpSearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_boxCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: 'BoxID', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 36px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_boxSearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_bundleCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: 'BundleID', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 14px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_bundleSearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_pnCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: '料號', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 49px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_pnSearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_qtyCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: '數量', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 49px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_qtySearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_dcCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: 'Date Code', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 6px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_dcSearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_lotCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: '製令', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 49px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_lotSearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_scrappedCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: '單報數', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 36px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_scrappedSearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_serialCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: '流水碼', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 36px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_serialSearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_serial2Check', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: '特殊流水碼', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 10px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_serial2Search', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_noteCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: '供應商', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 36px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_noteSearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},
								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 3px' },
										{ xtype: 'checkbox', readOnly: false, id: mainId + '_orderCheck', style: 'padding:4px 4px 4px 4px', checked: true },
										{ xtype: 'label', text: '預排單號', style: 'font-size:13px;font-family:verdana;padding:2px 0px 6px 23px' },
										{ xtype: 'label', text: ':', style: ' font-size:12px;font-family:verdana;padding:2px 4px 3px 1px' },
										{
											xtype: 'textfield', width: 120, id: mainId + '_orderSearch', emptyText: '', labelStyle: 'text-align:right;', enableKeyEvents: true, value: '',
											listeners: {
												change(_this, newValue, oldValue) {
													if (newValue == '') searchText = searchText.replace(oldValue, '');
													else {
														searchText = searchText.replace(oldValue, '');
														searchText += newValue;
													}
												},
												specialkey: function (_this, e) {
													if (e.getKey() == e.ENTER) {
														search();
													}
												}
											}
										}
									]
								},

								{
									xtype: 'container', layout: 'column', items: [
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 180px' },
										{
											xtype: 'button', text: '篩選', iconCls: 'search', id: mainId + '_SearchBtn', listeners: {
												click: function (b) {
													if (Ext.util.Format.date(Ext.getCmp(mainId + "_startYM").getValue().add(Date.MONTH, (searchText == '' ? +1 : +3)), 'Y-m-d') < Ext.util.Format.date(Ext.getCmp(mainId + "_endYM").getValue(), 'Y-m-d')) {
														Ext.ux.TopMsg.msg("提示", '搜尋區間不可超過' + (searchText == '' ? '1' : '3') + '個月', 2, 200);
														Ext.getCmp(mainId + "_endYM").setValue(Ext.util.Format.date(Ext.getCmp(mainId + "_startYM").getValue().add(Date.MONTH, (searchText == '' ? +1 : +3)), 'Y-m-d'));
													}
													else if (Ext.util.Format.date(Ext.getCmp(mainId + "_startYM").getValue(), 'Y-m-d') > Ext.util.Format.date(Ext.getCmp(mainId + "_endYM").getValue(), 'Y-m-d')) {
														Ext.ux.TopMsg.msg("提示", '開始日期不可大於結束日期', 2, 200);
														Ext.getCmp(mainId + "_endYM").setValue(Ext.util.Format.date(Ext.getCmp(mainId + "_startYM").getValue(), 'Y-m-d'));
													}
													else if (Ext.util.Format.date(Ext.getCmp(mainId + "_endYM").getValue().add(Date.MONTH, (searchText == '' ? -1 : -3)), 'Y-m-d') > Ext.util.Format.date(Ext.getCmp(mainId + "_startYM").getValue(), 'Y-m-d')) {
														Ext.ux.TopMsg.msg("提示", '搜尋區間不可超過' + (searchText == '' ? '1' : '3') + '個月', 2, 200);
														Ext.getCmp(mainId + "_startYM").setValue(Ext.util.Format.date(Ext.getCmp(mainId + "_endYM").getValue().add(Date.MONTH, (searchText == '' ? -1 : -3)), 'Y-m-d'));
													}
													else if (Ext.util.Format.date(Ext.getCmp(mainId + "_endYM").getValue(), 'Y-m-d') < Ext.util.Format.date(Ext.getCmp(mainId + "_startYM").getValue(), 'Y-m-d')) {
														Ext.ux.TopMsg.msg("提示", '結束日期不可小於開始日期', 2, 200);
														Ext.getCmp(mainId + "_startYM").setValue(Ext.util.Format.date(Ext.getCmp(mainId + "_endYM").getValue(), 'Y-m-d'));
													}
													else search();
												}
											}
										},
										{ xtype: 'label', text: ' ', style: 'font-size:11px;padding:8px 4px 18px 10px' },
										{
											xtype: 'button', text: '清除', icon: '/images/icons/fam/clean_input.gif', id: mainId + '_cancelBtn', listeners: {
												click: function (b) {
													searchText = '';
													Ext.getCmp(mainId + "_startYM").setValue(new Date());
													Ext.getCmp(mainId + "_endYM").setValue(new Date());

													Ext.getCmp(mainId + '_cusCheck').setValue(1);
													Ext.getCmp(mainId + '_cusSearch').setValue('');

													Ext.getCmp(mainId + '_shpCheck').setValue(1);
													Ext.getCmp(mainId + '_shpSearch').setValue('');

													Ext.getCmp(mainId + '_boxCheck').setValue(1);
													Ext.getCmp(mainId + '_boxSearch').setValue('');

													Ext.getCmp(mainId + '_bundleCheck').setValue(1);
													Ext.getCmp(mainId + '_bundleSearch').setValue('');

													Ext.getCmp(mainId + '_pnCheck').setValue(1);
													Ext.getCmp(mainId + '_pnSearch').setValue('');

													Ext.getCmp(mainId + '_qtyCheck').setValue(1);
													Ext.getCmp(mainId + '_qtySearch').setValue('');

													Ext.getCmp(mainId + '_dcCheck').setValue(1);
													Ext.getCmp(mainId + '_dcSearch').setValue('');

													Ext.getCmp(mainId + '_lotCheck').setValue(1);
													Ext.getCmp(mainId + '_lotSearch').setValue('');

													Ext.getCmp(mainId + '_scrappedCheck').setValue(1);
													Ext.getCmp(mainId + '_scrappedSearch').setValue('');

													Ext.getCmp(mainId + '_serialCheck').setValue(1);
													Ext.getCmp(mainId + '_serialSearch').setValue('');

													Ext.getCmp(mainId + '_serial2Check').setValue(1);
													Ext.getCmp(mainId + '_serial2Search').setValue('');

													Ext.getCmp(mainId + '_noteCheck').setValue(1);
													Ext.getCmp(mainId + '_noteSearch').setValue('');

													Ext.getCmp(mainId + '_orderCheck').setValue(1);
													Ext.getCmp(mainId + '_orderSearch').setValue('');

													var endDate = Ext.util.Format.date(Ext.getCmp(mainId + '_endYM').getValue(), 'Y-m-d');
													var startDate = Ext.util.Format.date(Ext.getCmp(mainId + '_startYM').getValue(), 'Y-m-d');

													store.setBaseParam('searchItem', '{"setDate":"' + startDate + ',' + endDate + '"}');
													store.load();
													Ext.getCmp(mainId + '_searchBox').setText('篩選');
													Ext.getCmp(mainId + '_searchMenu').hide();
												}
											}
										}
									]
								}
							]
						})
				}, '-',
				{
					text: '一般Excel', tooltip: '一般Excel', iconCls: 'download', id: mainId + '_norExcel', handler: function (btn) {
						var xhr = new XMLHttpRequest();
						xhr.open('POST', subHandler.subController + '&action=exportXls&dummy=' + new Date().getTime(), true);
						xhr.responseType = 'arraybuffer';
						xhr.onload = function () {
							if (this.status === 200) {
								var filename = "";
								var disposition = xhr.getResponseHeader('Content-Disposition');
								console.log(disposition);
								if (disposition && disposition.indexOf('attachment') !== -1) {
									var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
									var matches = filenameRegex.exec(disposition);

									if (matches != null && matches[1]) {
										filename = matches[1].replace(/['"]/g, '');
										filename = decodeURI(filename);
									}
								}
								var type = xhr.getResponseHeader('Content-Type');
								var blob = new Blob([this.response], { type: type });
								if (typeof window.navigator.msSaveBlob !== 'undefined') {
									// IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
									window.navigator.msSaveBlob(blob, filename);
								} else {
									var URL = window.URL || window.webkitURL;
									var downloadUrl = URL.createObjectURL(blob);
									console.log(filename);
									if (filename) {
										// use HTML5 a[download] attribute to specify filename
										var a = document.createElement("a");
										// safari doesn't support this yet
										if (typeof a.download === 'undefined') {
											window.location = downloadUrl;
										} else {
											a.href = downloadUrl;
											a.download = filename;
											document.body.appendChild(a);
											a.click();
										}
									} else {
										window.location = downloadUrl;
									}
									setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
								}
							}
						};
						xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
						var params = [];
						params = 'searchItem=' + store.baseParams.searchItem + '&searchType=1';
						xhr.send(params);
					}
				}, '-',
				{
					text: '薄板Excel', tooltip: '薄板Excel', iconCls: 'download', id: mainId + '_speExcel', handler: function (btn) {
						var xhr = new XMLHttpRequest();
						xhr.open('POST', subHandler.subController + '&action=exportXls&dummy=' + new Date().getTime(), true);
						xhr.responseType = 'arraybuffer';
						xhr.onload = function () {
							if (this.status === 200) {
								var filename = "";
								var disposition = xhr.getResponseHeader('Content-Disposition');
								console.log(disposition);
								if (disposition && disposition.indexOf('attachment') !== -1) {
									var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
									var matches = filenameRegex.exec(disposition);
									if (matches != null && matches[1]) {
										filename = matches[1].replace(/['"]/g, '');
										filename = decodeURI(filename);
									}
								}
								var type = xhr.getResponseHeader('Content-Type');
								var blob = new Blob([this.response], { type: type });
								if (typeof window.navigator.msSaveBlob !== 'undefined') {
									// IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
									window.navigator.msSaveBlob(blob, filename);
								} else {
									var URL = window.URL || window.webkitURL;
									var downloadUrl = URL.createObjectURL(blob);
									console.log(filename);
									if (filename) {
										// use HTML5 a[download] attribute to specify filename
										var a = document.createElement("a");
										// safari doesn't support this yet
										if (typeof a.download === 'undefined') {
											window.location = downloadUrl;
										} else {
											a.href = downloadUrl;
											a.download = filename;
											document.body.appendChild(a);
											a.click();
										}
									} else {
										window.location = downloadUrl;
									}
									setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
								}
							}
						};
						xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
						var params = [];
						params = 'searchItem=' + store.baseParams.searchItem + '&searchType=2';
						xhr.send(params);
					}
				},
				'<span style="color:green"><b>　* 預設顯示1天內出貨資料</span><span style="color:red"></span>',
				'->',
				{
					text: '一鍵展開', tooltip: '一鍵展開', iconCls: 'isView', handler: function (btn) {
						if (btn.text == '一鍵展開') {
							btn.setText('一鍵隱藏');
							btn.setTooltip('一鍵隱藏');
							btn.setIconClass('hidden');
							grid.getColumnModel().setHidden(4, false);
							grid.getColumnModel().setHidden(6, false);
							grid.getColumnModel().setHidden(7, false);
							grid.getColumnModel().setHidden(8, false);
							grid.getColumnModel().setHidden(9, false);
							grid.getColumnModel().setHidden(10, false);
							grid.getColumnModel().setHidden(11, false);
							grid.getColumnModel().setHidden(20, false);
							grid.getColumnModel().setHidden(21, false);
							grid.getColumnModel().setHidden(22, false);
							grid.getColumnModel().setHidden(23, false);
							grid.getColumnModel().setHidden(24, false);
							grid.getColumnModel().setHidden(25, false);
							grid.getColumnModel().setHidden(26, false);
							grid.getColumnModel().setHidden(27, false);
							grid.getColumnModel().setHidden(28, false);
							grid.getColumnModel().setHidden(29, false);
							grid.getColumnModel().setHidden(30, false);
							grid.getColumnModel().setHidden(31, false);
							grid.getColumnModel().setHidden(32, false);
							grid.getColumnModel().setHidden(33, false);
							grid.getColumnModel().setHidden(34, false);
						} else {
							btn.setText('一鍵展開');
							btn.setTooltip('一鍵展開');
							btn.setIconClass('isView');
							grid.getColumnModel().setHidden(4, true);
							grid.getColumnModel().setHidden(6, true);
							grid.getColumnModel().setHidden(7, true);
							grid.getColumnModel().setHidden(8, true);
							grid.getColumnModel().setHidden(9, true);
							grid.getColumnModel().setHidden(10, true);
							grid.getColumnModel().setHidden(11, true);
							grid.getColumnModel().setHidden(20, true);
							grid.getColumnModel().setHidden(21, true);
							grid.getColumnModel().setHidden(22, true);
							grid.getColumnModel().setHidden(23, true);
							grid.getColumnModel().setHidden(24, true);
							grid.getColumnModel().setHidden(25, true);
							grid.getColumnModel().setHidden(26, true);
							grid.getColumnModel().setHidden(27, true);
							grid.getColumnModel().setHidden(28, true);
							grid.getColumnModel().setHidden(29, true);
							grid.getColumnModel().setHidden(30, true);
							grid.getColumnModel().setHidden(31, true);
							grid.getColumnModel().setHidden(32, true);
							grid.getColumnModel().setHidden(33, true);
							grid.getColumnModel().setHidden(34, true);
						}

					}
				}, '-',
				{
					text: '重新整理', tooltip: '重新整理', iconCls: 'refresh', handler: function (btn) {
						Ext.getCmp(mainId + "_startYM").setValue(new Date());
						Ext.getCmp(mainId + "_endYM").setValue(new Date());

						Ext.getCmp(mainId + '_cusCheck').setValue(1);
						Ext.getCmp(mainId + '_cusSearch').setValue('');

						Ext.getCmp(mainId + '_shpCheck').setValue(1);
						Ext.getCmp(mainId + '_shpSearch').setValue('');

						Ext.getCmp(mainId + '_boxCheck').setValue(1);
						Ext.getCmp(mainId + '_boxSearch').setValue('');

						Ext.getCmp(mainId + '_bundleCheck').setValue(1);
						Ext.getCmp(mainId + '_bundleSearch').setValue('');

						Ext.getCmp(mainId + '_pnCheck').setValue(1);
						Ext.getCmp(mainId + '_pnSearch').setValue('');

						Ext.getCmp(mainId + '_qtyCheck').setValue(1);
						Ext.getCmp(mainId + '_qtySearch').setValue('');

						Ext.getCmp(mainId + '_dcCheck').setValue(1);
						Ext.getCmp(mainId + '_dcSearch').setValue('');

						Ext.getCmp(mainId + '_lotCheck').setValue(1);
						Ext.getCmp(mainId + '_lotSearch').setValue('');

						Ext.getCmp(mainId + '_scrappedCheck').setValue(1);
						Ext.getCmp(mainId + '_scrappedSearch').setValue('');

						Ext.getCmp(mainId + '_serialCheck').setValue(1);
						Ext.getCmp(mainId + '_serialSearch').setValue('');

						Ext.getCmp(mainId + '_serial2Check').setValue(1);
						Ext.getCmp(mainId + '_serial2Search').setValue('');

						Ext.getCmp(mainId + '_noteCheck').setValue(1);
						Ext.getCmp(mainId + '_noteSearch').setValue('');

						Ext.getCmp(mainId + '_orderCheck').setValue(1);
						Ext.getCmp(mainId + '_orderSearch').setValue('');

						var endDate = Ext.util.Format.date(Ext.getCmp(mainId + '_endYM').getValue(), 'Y-m-d');
						var startDate = Ext.util.Format.date(Ext.getCmp(mainId + '_startYM').getValue(), 'Y-m-d');

						store.setBaseParam('searchItem', '{"setDate":"' + startDate + ',' + endDate + '"}');
						store.load();
						Ext.getCmp(mainId + '_searchBox').setText('篩選');
						Ext.getCmp(mainId + '_searchMenu').hide();
					}
				}
			], listeners: {
				render: function (g) {
					g.getBottomToolbar().bindStore(g.store, true);    					//bindStore分頁工具綁到store 
				},
				afterrender() {
					var searchObj = new Object;
					searchObj.setDate = Ext.util.Format.date(new Date(), 'Y-m-d') + ',' + Ext.util.Format.date(new Date(), 'Y-m-d');
					store.setBaseParam('searchItem', JSON.stringify(searchObj));
					store.load();
				}
			}
		});

		//搜尋
		var search = function () {
			var searchObj = new Object;
			searchObj.setDate = Ext.util.Format.date(Ext.getCmp(mainId + '_startYM').getValue(), 'Y-m-d') + ',' + Ext.util.Format.date(Ext.getCmp(mainId + '_endYM').getValue(), 'Y-m-d');
			if (Ext.getCmp(mainId + '_cusCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_cusSearch').getValue() != '') {
					searchObj.cusId = Ext.getCmp(mainId + '_cusSearch').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_shpCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_shpSearch').getValue() != '') {
					searchObj.shpNbr = Ext.getCmp(mainId + '_shpSearch').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_boxCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_boxSearch').getValue() != '') {
					searchObj.boxID = Ext.getCmp(mainId + '_boxSearch').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_bundleCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_bundleSearch').getValue() != '') {
					searchObj.bundleId = Ext.getCmp(mainId + '_bundleSearch').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_pnCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_pnSearch').getValue() != '') {
					searchObj.itemNo = Ext.getCmp(mainId + '_pnSearch').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_qtyCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_qtySearch').getValue() != '') {
					searchObj.qty = Ext.getCmp(mainId + '_qtySearch').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_dcCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_dcSearch').getValue() != '') {
					searchObj.dateCode = Ext.getCmp(mainId + '_dcSearch').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_lotCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_lotSearch').getValue() != '') {
					searchObj.moNbr = Ext.getCmp(mainId + '_lotSearch').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_scrappedCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_scrappedSearch').getValue() != '') {
					searchObj.scrapped = Ext.getCmp(mainId + '_scrappedSearch').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_serialCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_serialSearch').getValue() != '') {
					searchObj.serialNumber = Ext.getCmp(mainId + '_serialSearch').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_serial2Check').getValue() == 1) {
				if (Ext.getCmp(mainId + '_serial2Search').getValue() != '') {
					searchObj.serialNumber_inventec = Ext.getCmp(mainId + '_serial2Search').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_noteCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_noteSearch').getValue() != '') {
					searchObj.note = Ext.getCmp(mainId + '_noteSearch').getValue();
				}
			}
			if (Ext.getCmp(mainId + '_orderCheck').getValue() == 1) {
				if (Ext.getCmp(mainId + '_orderSearch').getValue() != '') {
					searchObj.order_nbr = Ext.getCmp(mainId + '_orderSearch').getValue();
				}
			}
			store.setBaseParam('searchItem', JSON.stringify(searchObj));
			store.load();
			Ext.getCmp(mainId + '_searchBox').setText('<font color=red>篩選</font>');
			Ext.getCmp(mainId + '_searchMenu').hide();
		}

		subHandler.doLayout(grid);
	}//main
	var subHandler = new getHandler();
	Ext.ux.Loader.load(["ux_checkColumn", subHandler.subFolder + 'mergecell.css'], function () {
		subHandler.initParam(layoutMain);
	}, subHandler);

}();


