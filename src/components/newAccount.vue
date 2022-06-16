<template>
    <b-modal
        centered 
        hide-header
        hide-footer
        no-close-on-backdrop
        v-model="valueData"
        id="modal-center" 
        title="BootstrapVue"
        ref="new-account" 
        size= "xl"
    >
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="d-block text-start">
                            <h3>도매처 등록</h3>
                        </div>
                    </div>
                    <div class="col-3" style="display:flex; justify-content: start; padding: 20px">
                        매장명
                    </div>
                    <div class="col-9" style="display:flex; justify-content: center; padding: 20px">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="영문 소문자 또는 영문+숫자 조합 4~30자리" aria-label="Username" aria-describedby="basic-addon1">
                            <b-button> 검색 </b-button>
                        </div>
                    </div>
                    <div class="col-12">
                        <b-table striped hover :items="dataTable.item" :fields="dataTable.fields">
                            <template #cell(order)="row">
                                <b-button size="sm" @click="dialogChange(row.item)" class="mr-2">
                                선택
                                </b-button>
                            </template>
                        </b-table>
                    </div>
                </div>
            </div>
            <div class="col-10">
                <div style="display: flex; justify-content: end">
                    <b-button class="mt-3" block @click="closeModal()" style="margin-right: 3px">추가</b-button>
                    <b-button class="mt-3" block @click="closeModal()">취소</b-button>
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('new-account', {
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        requestId: {
            type: Number,
            default: null,
        },
    },
    data() {
        return {
            valueData: false,
            dataTable: {
				fields : [
					{ label: '건물명', key: 'id', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '매장명', key: 'storeName', thClass: 'text-center', tdClass: 'text-center',  sortable: false },
					{ label: '주소', key: 'postcode', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '매장 유선번호', key: 'phone1', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '매장 휴대전화', key: 'phone2', thClass: 'text-center', tdClass: 'text-center', sortable: false },
					{ label: '선택', key: 'order', thClass: 'text-center', tdClass: 'text-center', sortable: false },
				],
				item: [
                    { id: 1, storeName: 'test', postcode: 'tewstsetsets', phone1: '010-0000-0000', phone2: '02)000-0000'}
                ],
			},
        };
    },
    watch: {
        value(newValue) {
            this.valueData = newValue;
            this.$emit('input', newValue);
            if(newValue) {
                this.$refs['new-account'].show()
            } else {
                this.$refs['new-account'].hide()
            }
        },
        valueData(newValue) {
            this.$emit('input', newValue);
        },
    },
    methods: {
        async modalCheck() {
        },
        async closeModal() {
            this.$emit('update:value', false);
            this.$emit('update:requestId', null);
        },
        async dialogChange(data) {
            console.log(data);
        }
    },
    mounted() {
    },
    created() {
    },
});
</script>

<style scoped>
</style>
