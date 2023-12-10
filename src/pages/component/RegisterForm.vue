<template>
  	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 mt-5 text-center mb-5">
					<img src="../../assets/Citilink.png" alt="Logo" height="30" />
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-md-6 col-lg-4">
					<div class="login-wrap p-0">
                <h3 class="mb-4 text-center">Citylink Employee</h3>
		      	<h3 class="mb-4 text-center">HCIS Information System</h3>
                <h5 class="mb-2 text-center"><i>Register Your Account Here</i></h5>
		      	<form action="#" class="signin-form">
                    <div class="form-group">
                    <input id="username" type="text" class="form-control mb-4" placeholder="Username" required>
                    </div>
                    <div class="form-group">
                    <input id="password-field" type="password" class="form-control mb-4" placeholder="Password" required>
                
                    </div>
                    <div class="form-group">
                    <input id="repassword-field" type="password" class="form-control  mb-4" placeholder="Re-Type Your Password" required>
                    </div>
                    <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                    <hr>
                    <div class="form-group">
                        <input type="text" class="form-control mb-4" placeholder="Nama" required>
                    </div>
                    <div class="form-group">
                        <select name="Gender" id="Gender" form="carform" class="form-control mb-4">
                            <option value="-" disabled selected>==Select Your Gender==</option>
                            <option value="Perempuan">Perempuan</option>
                            <option value="Laki">Laki-Laki</option>

                        </select>
                    </div>
                    <div class="form-group">
                        <input id="Alamat" type="text" class="form-control mb-4" placeholder="Alamat" required>
                    </div>
	            <div class="form-group">
	            	<button type="submit" class="form-control btn btn-primary submit px-3">Register</button>
	            </div>
	            <div class="form-group d-md-flex">
	            	<div class="w-50">
		            	<label class="checkbox-wrap checkbox-primary">Remember Me
									  <input type="checkbox" checked>
									  <span class="checkmark"></span>
									</label>
								</div>
								<div class="w-50 text-md-right">
									<a href="#" style="color: #fff">Forgot Password</a>
								</div>
	            </div>
	          </form>

		      </div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Registration data:', this.formData);
      this.formData = {
        username: '',
        email: '',
        password: '',
      };
    },
  },
};
</script>

<style scoped>
</style>
