<template>
	<div id="app">
		<b-card>
			<div class="row justify-content-center">
				<div class="col-5">
					<h3>로그인 해주세요</h3>
					<b-form @submit="submit">
						<div class="row justify-content-center align-items-center">
							<div class="col-8">
								<b-form-group id="input-group-1" label="Id" label-for="input-1">
									<b-form-input
										id="input-1"
										type="text"
										v-model="dataentry.name" 
										placeholder="아이디를 입력해주세요"
									></b-form-input>
								</b-form-group>
								<b-form-group id="input-group-2" label="password" label-for="input-2">
									<b-form-input
									type="text"
									v-model="dataentry.department"
									placeholder="비밀번호를 입력해 주세요"
									></b-form-input>
								</b-form-group>
							</div>
							<div class="col-4">
								<div style="display: flex; justify-content:center">
									<b-button pill v-on:Click="submit" id="button-1" type="submit" variant="dark">Submit</b-button>
								</div>
							</div>
						</div>
					</b-form>
				</div>
			</div>
		</b-card>
		<b-card>
			<div class="row justify-content-center">
				<div class="col-5">
					<h3> test </h3>
					<b-table striped hover :items="dataTable.item" :fields="dataTable.fields"></b-table>
				</div>
			</div>
		</b-card>
	</div>
</template>
<script>
// import axios from 'axios';
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
						key: 'name',
						sortable: false
					},
					{
						key: 'username',
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
		// const path = 'http://127.0.0.1:5000/dataentry'
		// const test = 'admin'
		// const data = axios.post(path, {
		// 	name:test,
		// 	department:this.dataentry.department,
		// 	}
		// )      
		// data.then((response) => {
		// 	console.log(response.data.data);
		// 	this.dataTable.item.push(response.data.data);
		// 	console.log(this.item)
		// })
		// .catch(err =>{
		// 	console.log('err: ' + err);
		// });
	}
}
</script>

<style>
</style>