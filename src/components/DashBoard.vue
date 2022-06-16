<template>
	<b-card id="app">
		<b-card>
			<div class="row justify-content-center">
				<div class="col-5">
					<h3> test </h3>
					<b-table striped hover :items="dataTable.item" :fields="dataTable.fields"></b-table>
				</div>
			</div>
		</b-card>
	</b-card>
</template>
<script>
import axios from 'axios';
export default{
	data(){
		return {
			dataentry:{
				name:"",
				department:"",
			},
			dataTable: {
				fields : [
					{
						key: 'id',
						sortable: false
					},
					{
						key: 'bank_name',
						sortable: false
					},
				],
				item: [],
			}
		};
	},
	methods: {
	},
	mounted() {
		const path = 'http://127.0.0.1:5000/dash'
		const test = 'admin'
		const data = axios.post(path, {
			name:test,
			department:this.dataentry.department,
			}
		)      
		data.then((response) => {
			console.log(response.data.data);
			this.dataTable.item = response.data.data;
			console.log(this.dataTable.item);
		})
		.catch(err =>{
			console.log('err: ' + err);
		});
	}
}
</script>

<style>
</style>