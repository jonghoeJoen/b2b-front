<template>
	<div id="app">        
        <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a class="navbar-brand col-sm-3 col-md-2 mr-0" style="display:flex; justify-content:center" href="/">동대문 B2B</a>
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                    <a class="nav-link" href="/sign-in">Sign out</a>
                </li>
            </ul>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                    <div class="sidebar-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="/dash">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                        Dashboard<span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/wholesaler">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                        도매처 리스트
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/orderHistory">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                        주문 내역 
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <div class="chartjs-size-monitor" style="position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                        <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                            <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                        </div>
                    </div>
                    <router-view></router-view>
                </main>
            </div>
        </div>
	</div>
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
		submit() {
			const path = 'http://127.0.0.1:5000/dataentry'
			const data = axios.post(path, {
				name:this.dataentry.name,
				department:this.dataentry.department,
			}
		)
		data.then(response => {
			console.log(response);
			this.items = response;
		})
		.catch(err =>{
			console.log(err);
		});
		},
	},
	mounted() {
		const path = 'http://127.0.0.1:5000/dataentry'
		const test = 'admin'
		const data = axios.post(path, {
			name:test,
			department:this.dataentry.department,
			}
		)      
		data.then((response) => {
			this.dataTable.item.push(response.data.data);
		})
		.catch(err =>{
			console.log('err: ' + err);
		});
	}
}
</script>

<style>

</style>