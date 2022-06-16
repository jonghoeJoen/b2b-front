<template>
	<div id="app">
		<b-card>
			<div class="row justify-content-center">
				<div class="col-12">
                    <div class="row justify-content-center align-items-center" style="padding: 10px">
                        <div class="col-10" style="display:flex; justify-content: space-between; align-items:center;">
                            <div class="sign-up-subtitle">도매처 리스트</div>
                            <div style="display:flex; align-items:center;">
                                <div class="input-group">
                                    <input type="text"  class="form-control">
                                    <b-button>검색</b-button>
                                </div>
                            </div>
                        </div>
                        <div class="col-10">
                            <b-table striped hover :items="dataTable.item" :fields="dataTable.fields">
                                <template #cell(order) = "item">
                                    <b-button size="sm" class="mr-2" @click="order(item)">
                                        주문하기
                                    </b-button>
                                </template>
                            </b-table>
                        </div>
                        <div class="col-10 justify-content-center">
                            <div style="width:100%; display:flex; justify-content: end;">
                                <b-button size="sm" @click="dialogChange()">
                                    + 새 거래처 등록
                                </b-button>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
            <new-account
                :value.sync="dialog.accountValue"
            ></new-account>
            <order-modify
                :value.sync="dialog.orderValue"
            ></order-modify>
		</b-card>
	</div>
</template>
<script>
import axios from 'axios';
import newAccount from '../../../components/newAccount.vue';
import OrderModify from '../../../components/orderModify.vue';
export default{
  components: { newAccount, OrderModify },
	data(){
		return {
			dataentry:{
				name:"",
				department:"",
			},
            dataTable: {
				fields : [
					{ label: '번호', key: 'id', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '매장명', key: 'storeName', thClass: 'text-center', tdClass: 'text-center',  sortable: false },
					{ label: '주소', key: 'postcode', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '매장 휴대전화', key: 'phone1', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '매장 유선번호', key: 'phone2', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '주문하기', key: 'order', thClass: 'text-center', tdClass: 'text-center', sortable: false },
				],
				item: [
                    { id: 1, storeName: 'test', postcode: 'tewstsetsets', phone1: '010-0000-0000', phone2: '02)000-0000'}
                ],
			},
            dialog: {
                accountValue: false,
                orderValue: false,
            }
		};
	},
	methods: {
        dialogChange() {
            this.dialog.accountValue = true;
        },
        order(data) {
            this.dialog.orderValue = true;
            console.log(data);
        },
		submit() {
			const path = 'http://127.0.0.1:5000/dataentry'
			const data = axios.post(path, {
				name:this.dataentry.name,
				department:this.dataentry.department,
			}
		)
		data.then(response => {
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