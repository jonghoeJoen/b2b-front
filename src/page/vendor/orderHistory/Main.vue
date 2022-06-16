<template>
	<div id="app">
		<b-card>
			<div class="row justify-content-center">
				<div class="col-12">
                    <div class="row justify-content-center align-items-center" style="padding: 10px">
                        <div class="col-10" style="display:flex; justify-content: space-between; align-items:center;">
                            <div class="sign-up-subtitle">주문 내역 리스트</div>
                            <div style="display:flex; align-items:center;">
                                조회기간
                                <div>
                                    <b-form-datepicker 
                                        id="example-datepicker" 
                                        v-model="value" 
                                        aria-label="dts"
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }">
                                    </b-form-datepicker>
                                </div>
                                ~
                                <div>
                                    <b-form-datepicker 
                                        id="example-datepicker" 
                                        v-model="value" 
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }">
                                    </b-form-datepicker>
                                </div>
                                <b-button>조회</b-button>
                            </div>
                        </div>
                        <div class="col-10">
                            <b-table striped hover :items="dataTable.item" :fields="dataTable.fields">
                                <template #cell(order)="row">
                                    <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                                    주문하기
                                    </b-button>
                                </template>
                            </b-table>
                        </div>
                        <div class="col-10 justify-content-center">
                            <div style="width:100%; display:flex; justify-content: end;">
                                <b-button size="sm">
                                    + 새 거래처 등록
                                </b-button>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</b-card>
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
					{ label: '주문 일자', key: 'id', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '매장명', key: 'storeName', thClass: 'text-center', tdClass: 'text-center',  sortable: false },
					{ label: '주소', key: 'postcode', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '상품명', key: 'phone1', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '색상', key: 'phone2', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '사이즈', key: 'order', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '수량', key: 'order', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '가능여부', key: 'order', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '비고', key: 'order', thClass: 'text-center', tdClass: 'text-center', sortable: false },
				],
				item: [
                    { id: 1, storeName: 'test', postcode: 'tewstsetsets', phone1: '010-0000-0000', phone2: '02)000-0000'}
                ],
			},
            value: null,
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
	}
}
</script>

<style>
.sign-up-title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
}

.sign-up-subtitle {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: -0.02em;
}

.sign-up-menu {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
}
</style>