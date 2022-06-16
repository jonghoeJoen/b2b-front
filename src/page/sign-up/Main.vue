<template>
	<div id="app">
		<b-card>
			<div class="row justify-content-center">
				<div class="col-5">
					<div style="display:flex; justify-content: center;" class="sign-up-title">회원가입</div>
                    <div class="row justify-content-center align-items-center" style="padding: 10px">
                        <div class="col-10">
                            <div class="sign-up-subtitle" style="padding-top: 100px">회원정보 입력</div>
                            <div class="row justify-content-center align-items-center sign-up-menu" style="padding-top: 72px">
                                <div class="col-3" style="display:flex; justify-content: start; padding: 20px">
                                    아이디
                                </div>
                                <div class="col-9" style="display:flex; justify-content: center; padding: 20px">
                                    <div class="input-group">
                                        <input v-model="user.id" type="text" class="form-control" placeholder="영문 소문자 또는 영문+숫자 조합 4~30자리" aria-label="Username" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-3" style="display:flex; justify-content: start; padding: 20px">
                                    비밀번호
                                </div>
                                <div class="col-9" style="display:flex; justify-content: center; padding: 20px">
                                    <div class="input-group">
                                        <input v-model="user.password" type="password" class="form-control" placeholder="영문+숫자+특수문자 조합 8~15자리" aria-label="Username" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-3" style="display:flex; justify-content: start; padding: 20px">
                                    비밀번호 확인
                                </div>
                                <div class="col-9" style="display:flex; justify-content: center; padding: 20px">
                                    <div class="input-group">
                                        <input v-model="passwordCheck" type="password" class="form-control" placeholder="비밀번호 확인" aria-label="Username" aria-describedby="basic-addon1">
                                    </div>
                                </div>
                                <div class="col-3" style="display:flex; justify-content: start; padding: 20px">
                                    매장명
                                </div>
                                <div class="col-9" style="display:flex; justify-content: center; padding: 20px">
                                    <div class="input-group">
                                        <input v-model="user.storeName" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-3" style="display:flex; justify-content: start; padding: 20px">
                                    대표자명
                                </div>
                                <div class="col-9" style="display:flex; justify-content: center; padding: 20px">
                                    <div class="input-group">
                                        <input v-model="user.representativeName" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-3" style="display:flex; justify-content: start; padding: 20px">
                                    담당자 명
                                </div>
                                <div class="col-9" style="display:flex; justify-content: center; padding: 20px">
                                    <div class="input-group">
                                        <input v-model="user.managerName" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-3" style="display:flex; justify-content: start; padding: 20px">
                                    매장 주소
                                </div>
                                <div class="col-9" style="display:flex; justify-content: center; padding: 20px">
                                    <input v-model="user.postCode1" style="width: 450px">
                                </div>
                                <div class="col-3" style="display:flex; justify-content: start; padding: 20px">
                                    매장 유선 번호
                                </div>
                                <div class="col-9" style="display:flex; justify-content: center; padding: 20px">
                                    <div class="input-group">
                                        <input v-model="user.storeLineNumber" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-3" style="display:flex; justify-content: start; padding: 20px">
                                    매장 휴대전화
                                </div>
                                <div class="col-9" style="display:flex; justify-content: center; padding: 20px">
                                    <div class="input-group">
                                        <input v-model="user.storePhoneNumber" type="text" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <b-btn style="width:100%; margin-top:100px" @click="signIn()">회원 가입하기</b-btn>
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
			user: {
                id: null,  
                password: null,
                storeName: null,
                representativeName: null,
                managerName: null,
                postCode1: null,
                postCode2: null,
                storeLineNumber: null,
                storePhoneNumber: null,

            },
            passwordCheck: null,
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
        signIn() {
            if(this.passwordCheck !== this.password) {
                alert('비밀번호를 확인해주세요')
            } else {
                console.log(this.user);
            }
        }
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