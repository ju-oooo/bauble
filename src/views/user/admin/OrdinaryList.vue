<template>
	<div class="content">
		<el-table :data="tableData"
							ref="multipleTable"
							@selection-change="handleSelectionChange"
							:default-sort="{prop: 'date', order: 'descending'}"
							style="width: 100%">
			<el-table-column
					type="selection"
					width="55">
			</el-table-column>
			<el-table-column sortable prop="date" label="日期" width="180"></el-table-column>
			<el-table-column sortable prop="name" label="姓名" width="180"></el-table-column>
			<el-table-column sortable prop="address" label="地址"></el-table-column>
			<el-table-column label="操作">

				<template slot-scope="scope">
					<el-button
							size="mini"
							@click="handleEdit(scope.$index, scope.row)">编辑
					</el-button>
					<el-button
							size="mini"
							type="danger"
							@click="handleDelete(scope.$index, scope.row)">删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-row style="margin-top: 20px">
			<el-col :span="12">
				<el-button @click="toggleSelection()">执行选中元素</el-button>
				<el-button @click="toggleSelection()">取消选择</el-button>
			</el-col>
			<el-col :span="12">
				<el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
			</el-col>
		</el-row>
	</div>
</template>
<script>
    export default {
        name: 'UserList',
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '2小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '1小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                    {
                        date: '2016-05-01',
                        name: '3小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-01',
                        name: '2小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    },
                    {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }],
                multipleSelection: []
            }
        }, methods: {
            formatter(row, column) {
                return row.address;
            },
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },

    }
</script>

<style scoped>
	.content {
		padding: 1rem;
	}

</style>
<style>
	/*.el-button {*/
	/*	background-color: #fff !important;*/
	/*}*/

	/*.el-button:hover {*/
	/*	color: #E24F3A !important;*/
	/*	background-color: #fff !important;*/
	/*	border-color: #E24F3A !important;*/
	/*}*/

	/*.el-button--danger {*/
	/*	border-color: #E24F3A !important;*/
	/*	color: #E24F3A !important;*/
	/*}*/

	/*.el-button--danger:hover {*/
	/*	!*opacity: 0.8 !important;*!*/
	/*	color: #fff !important;*/
	/*	border-color: #E24F3A !important;*/
	/*	background-color: #E24F3A !important;*/
	/*}*/

	/*.el-table--enable-row-hover .el-table__body tr:hover > td {*/
	/*	background-color: #ccc !important;*/
	/*}*/

	/*.el-table .descending .sort-caret.descending {*/
	/*	border-top-color: #E24F3A !important;*/
	/*}*/

	/*.el-table thead {*/
	/*	color: #E24F3A !important;*/
	/*}*/

	/*.el-checkbox__inner:hover {*/
	/*	border-color: #E24F3A !important;*/
	/*}*/

	/*.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {*/
	/*	background-color: #E24F3A !important;*/
	/*	border-color: #E24F3A !important;*/
	/*}*/
</style>
