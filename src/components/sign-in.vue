<template>
	<div id="app">
		<b-card>
			<div class="row justify-content-center">
				<div class="col-5">
					<div style="display:flex; justify-content: center;" class="sign-up-title">B2B</div>
                    <div class="row justify-content-center align-items-center" style="padding: 10px">
                        <div class="col-8">
                            <div class="sign-up-subtitle" style="padding-top: 100px">로그인</div>
                            <div class="row justify-content-center align-items-center sign-up-menu" style="padding-top: 20px">
                                <div class="col-12" style="display:flex; justify-content: center;">
                                    <div class="input-group">
                                        <input style="margin:10px" v-model="user.id" type="text" placeholder="아이디" class="form-control">
                                    </div>
                                </div>
								<div class="col-12" style="display:flex; justify-content: center;">
									<div class="input-group">
										<input style="margin:10px" v-model="user.password" type="password" placeholder="비밀번호" class="form-control">
									</div>
								</div>
                            </div>
							<div class="col-12" style="display:flex; justify-content: center; padding: 10px">
								<div style="width:100%;">
									<b-btn style="width:100%; margin-top:10px">
										로그인
									</b-btn>
									<b-btn style="width:100%; margin-top:10px" href="/sign-up">
										회원가입
									</b-btn>
								</div>
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
			user: {
				id: null,
				password: null,
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