	
$(document).ready(function() {
var categories = document.getElementById("categories");
	var masterlabel = document.getElementById("masterlabel");
		var masterlabel2 = document.getElementById("masterlabel2");
		var masterlabel3 = document.getElementById("masterlabel3");
		var organization = document.getElementById("organization");
		var contact = document.getElementById("contact");

			var res = document.getElementById("registrationtype").value;
			 masterlabel3.innerHTML = res;
			 masterlabel2.innerHTML = res;
			 masterlabel.innerHTML = res;



  categories.innerHTML = "<td>\
										<div class='row'>\
											\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='autopay' name='autopay'>\
													<label for='autopay'>AutoPay</label>\
												</div>\
											</div>\
\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='quickteller' name='quickteller'>\
													<label for='quickteller'>Quickteller</label>\
												</div>\
											</div>\
\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='paydirect' name='paydirect'>\
													<label for='paydirect'>Paydirect</label>\
												</div>\
											</div>\
\
												<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='webpay' name='webpay'>\
													<label for='webpay'>Webpay</label>\
												</div>\
											</div>\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='payphone' name='payphone'>\
														<label for='payphone'>PAYphone</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='vtucare' name='vtucare'>\
														<label for='vtucare'>VTUcare</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='nillecash' name='nillecash'>\
														<label for='nillecash'>nill eCash</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='smartcard' name='smartcard'>\
														<label for='smartcard'>SmartCard</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='androidpos' name='androidpos'>\
														<label for='androidpos'>Android POS</label>\
													</div>\
												</div>\
\
													<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='paycode' name='paycode'>\
														<label for='paycode'>payCode</label>\
													</div>\
												</div>\
\
													<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='idp' name='idp'>\
														<label for='idp'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Digital Product</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='retailpay' name='retailpay'>\
														<label for='retailpay'>RetailPAY</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='customizepossolution' name='customizepossolution'>\
														<label for='customizepossolution'>Customize POS Solution</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-4'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='iipp' name='iipp'>\
														<label for='iipp'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Integrated Payment Platform</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-4'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='ipg' name='ipg'>\
														<label for='ipg'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Payment Gateway</label>\
													</div>\
												</div>\
\
\
														\
												<div class='col-md-7'>\
													<div class='text-master'>\
														<input type='text' value='' id='others' name='others'>\
														<label for='others'>Others* (please specify)</label>\
													</div>\
												</div>\
\
										</div>\
									</td>";







organization.innerHTML = "<td>\
										<div class='row no-padding'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Company Business Name : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='businessname'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Registration Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='registrationnumber'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Nature of Business : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='natureofbusiness'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Sector / Industry : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='sectorindustry'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Operating Business/Office Address : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='operatingbusiness'>\
													</div>\
											</div>\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Registered Business Address: : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='registeredbusiness'>\
													</div>\
											</div>\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Office Email : </label>\
\
														<input type='Email' class='form-control' placeholder='' required='' name='officeemail'>\
													</div>\
											</div>\
\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Office Phone Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='officephone'>\
													</div>\
											</div>\
\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Date Of Registration : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='dor'>\
													</div>\
											</div>\
\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Tax Identification Number (TIN) : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='tin'>\
													</div>\
											</div>\
\
										</div>\
\
\
\
										<div class='row'>\
												<div class='col-md-6'>\
														\
														<div class='form-group form-group-default required '>\
															<label>Email Address : </label>\
\
															<input type='Email' class='form-control' placeholder='' required='' name='emailaddress'>\
														</div>\
												</div>\
\
												<div class='col-md-6'>\
														\
														<div class='form-group form-group-default required '>\
															<label>Website URL : </label>\
\
															<input type='text' class='form-control' placeholder='' required='' name='websiteurl'>\
														</div>\
												</div>\
										</div>\
\
\
\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Describe the Products / Services Sold : </label>\
\
														<textarea rows='10' cols='120' required='' name='description'></textarea>\
													</div>\
											</div>\
										</div>\
									</td>";


contact.innerHTML = "<td>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Primary Contact Person : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcp'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Secondary Contact Person : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scp'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Designation: </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpdesignation'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Designation : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpdesignation'>\
													</div>\
											</div>\
										</div>\
\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Office Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpopn'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Office Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpopn'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Mobile Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpmpn'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Mobile Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpmpn'>\
													</div>\
											</div>\
										</div>\
\
\
\
\
										<div class='row'>\
											\
\
												<button class='boxnew2' style='background: #0563af;width: 600px' type='button'> <span class='m-l-12 font-montserrat fs-12 all-caps bold'>Bank Details.  </span></button>\
\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Name : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountname'>\
													</div>\
											</div>\
\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountnumber'>\
													</div>\
											</div>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Type : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accounttype'>\
													</div>\
											</div>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Bank : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountbank'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											\
\
												<button class='boxnew2' style='background: #0563af;width: 600px' type='button'> <span class='m-l-12 font-montserrat fs-12 all-caps bold'>OTHER INFORMATION.  </span></button>\
\
										</div>\
\
																				<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label></label>\
														<textarea rows='10' cols='120' required='' name='otherinfo'></textarea>\
													</div>\
											</div>\
										</div>\
\
									\
									</td>";






});





$('#registrationtype').on('change', function() {
	var slider = document.getElementById("reusltdata");
	var masterlabel = document.getElementById("masterlabel");
		var masterlabel2 = document.getElementById("masterlabel2");
		var organization = document.getElementById("organization");
		var contact = document.getElementById("contact");

	var categories = document.getElementById("categories");
	slider.innerHTML = "<br>";
masterlabel.innerHTML = this.value;
masterlabel2.innerHTML = this.value;

	if(this.value =="Private Limited Liability Company Registration Form"){
  	slider.innerHTML = "<p>1.\
	Certificate of Registration / Incorporation of the Charity/NGO / Religious Organization</p>\
					<p>\
		2.\
		Certified true copies of the Form CAC/IT 1 (Incorporated Trustees Application Form to include the constitution</p>\
										<p>3.\
										Resolution (or minutes of last meeting) authorizing the establishment of business relationship with  <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 on the letter headed paper, duly signed by at least two Trustees and nominating signatories/authorizers</p>\
<p>4.\
Utility bill.</p>\
<p>5.\
Valid primary means of identification (such Permanent Voters’ Card, International Passport, Drivers’ License and National ID card (NIMC)) of nominated authorizers and the registered Trustees that signed the resolution</p>";

  



  categories.innerHTML = "<td>\
										<div class='row'>\
											\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='autopay' name='autopay'>\
													<label for='autopay'>AutoPay</label>\
												</div>\
											</div>\
\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='quickteller' name='quickteller'>\
													<label for='quickteller'>Quickteller</label>\
												</div>\
											</div>\
\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='paydirect' name='paydirect'>\
													<label for='paydirect'>Paydirect</label>\
												</div>\
											</div>\
\
												<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='webpay' name='webpay'>\
													<label for='webpay'>Webpay</label>\
												</div>\
											</div>\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='payphone' name='payphone'>\
														<label for='payphone'>PAYphone</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='vtucare' name='vtucare'>\
														<label for='vtucare'>VTUcare</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='nillecash' name='nillecash'>\
														<label for='nillecash'>nill eCash</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='smartcard' name='smartcard'>\
														<label for='smartcard'>SmartCard</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='androidpos' name='androidpos'>\
														<label for='androidpos'>Android POS</label>\
													</div>\
												</div>\
\
													<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='paycode' name='paycode'>\
														<label for='paycode'>payCode</label>\
													</div>\
												</div>\
\
													<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='idp' name='idp'>\
														<label for='idp'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Digital Product</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='retailpay' name='retailpay'>\
														<label for='retailpay'>RetailPAY</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='customizepossolution' name='customizepossolution'>\
														<label for='customizepossolution'>Customize POS Solution</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-4'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='iipp' name='iipp'>\
														<label for='iipp'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Integrated Payment Platform</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-4'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='ipg' name='ipg'>\
														<label for='ipg'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Payment Gateway</label>\
													</div>\
												</div>\
\
\
														\
												<div class='col-md-7'>\
													<div class='text-master'>\
														<input type='text' value='' id='others' name='others'>\
														<label for='others'>Others* (please specify)</label>\
													</div>\
												</div>\
\
										</div>\
									</td>";





organization.innerHTML = "<td>\
										<div class='row no-padding'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Company Business Name : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='businessname'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Registration Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='registrationnumber'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Nature of Business : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='natureofbusiness'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Sector / Industry : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='sectorindustry'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Operating Business/Office Address : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='operatingbusiness'>\
													</div>\
											</div>\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Registered Business Address: : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='registeredbusiness'>\
													</div>\
											</div>\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Office Email : </label>\
\
														<input type='Email' class='form-control' placeholder='' required='' name='officeemail'>\
													</div>\
											</div>\
\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Office Phone Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='officephone'>\
													</div>\
											</div>\
\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Date Of Registration : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='dor'>\
													</div>\
											</div>\
\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Tax Identification Number (TIN) : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='tin'>\
													</div>\
											</div>\
\
										</div>\
\
\
\
										<div class='row'>\
												<div class='col-md-6'>\
														\
														<div class='form-group form-group-default required '>\
															<label>Email Address : </label>\
\
															<input type='Email' class='form-control' placeholder='' required='' name='emailaddress'>\
														</div>\
												</div>\
\
												<div class='col-md-6'>\
														\
														<div class='form-group form-group-default required '>\
															<label>Website URL : </label>\
\
															<input type='text' class='form-control' placeholder='' required='' name='websiteurl'>\
														</div>\
												</div>\
										</div>\
\
\
\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Describe the Products / Services Sold : </label>\
\
														<textarea rows='10' cols='120' required='' name='description'></textarea>\
													</div>\
											</div>\
										</div>\
									</td>";


contact.innerHTML = "<td>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Primary Contact Person : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcp'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Secondary Contact Person : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scp'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Designation: </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpdesignation'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Designation : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpdesignation'>\
													</div>\
											</div>\
										</div>\
\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Office Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpopn'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Office Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpopn'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Mobile Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpmpn'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Mobile Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpmpn'>\
													</div>\
											</div>\
										</div>\
\
\
\
\
										<div class='row'>\
											\
\
												<button class='boxnew2' style='background: #0563af;width: 600px' type='button'> <span class='m-l-12 font-montserrat fs-12 all-caps bold'>Bank Details.  </span></button>\
\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Name : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountname'>\
													</div>\
											</div>\
\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountnumber'>\
													</div>\
											</div>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Type : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accounttype'>\
													</div>\
											</div>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Bank : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountbank'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											\
\
												<button class='boxnew2' style='background: #0563af;width: 600px' type='button'> <span class='m-l-12 font-montserrat fs-12 all-caps bold'>OTHER INFORMATION.  </span></button>\
\
										</div>\
\
																				<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label></label>\
														<textarea rows='10' cols='120' required='' name='otherinfo'></textarea>\
													</div>\
											</div>\
										</div>\
\
									\
									</td>";








  }if(this.value == "Sole Proprietor Registration Form"){

  	slider.innerHTML = "<p>1.\
										Certificate of Registration of the business</p>\
										<p>\
										2.\
										Certified True Copy of the Form CAC/BN/1 (Application for Registration of Business Name) to determine the registered Sole Proprietor(s);</p>\
										<p>3.\
										Valid primary identification documents - Valid International Passport; Drivers’ License; National Identity Card; Permanent Voters Card (PVC)</p>\
<p>4.\
Utility Bill issued within the last 3 months - Water bills, Electricity bills, Waste bill</p>";




  categories.innerHTML = "<td>\
										<div class='row'>\
											\
\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='quickteller' name='quickteller'>\
													<label for='quickteller'>Quickteller</label>\
												</div>\
											</div>\
\
												<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='webpay' name='webpay'>\
													<label for='webpay'>Webpay</label>\
												</div>\
											</div>\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='payphone' name='payphone'>\
														<label for='payphone'>PAYphone</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='retailpay' name='retailpay'>\
														<label for='retailpay'>RetailPAY</label>\
													</div>\
												</div>\
			\
																<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='idp' name='idp'>\
														<label for='idp'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Digital Product</label>\
													</div>\
												</div>\
												<div class='col-md-4'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='ipg' name='ipg'>\
														<label for='ipg'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Payment Gateway</label>\
													</div>\
												</div>\
												\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='androidpos' name='androidpos'>\
														<label for='androidpos'>Android POS</label>\
													</div>\
												</div>\
												\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='customizepossolution' name='customizepossolution'>\
														<label for='customizepossolution'>Customize POS Solution</label>\
													</div>\
												</div>\
\
													<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='paycode' name='paycode'>\
														<label for='paycode'>payCode</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='vtucare' name='vtucare'>\
														<label for='vtucare'>VTUcare</label>\
													</div>\
												</div>\
\
												<div class='col-md-4'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='iipp' name='iipp'>\
														<label for='iipp'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Integrated Payment Platform</label>\
													</div>\
												</div>\
\
														\
												<div class='col-md-7'>\
													<div class='text-master'>\
														<input type='text' value='' id='others' name='others'>\
														<label for='others'>Others* (please specify)</label>\
													</div>\
												</div>\
\
										</div>\
									</td>";

 


 organization.innerHTML = "<td>\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Sole Proprietorship Name : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='spn'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>BVN : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='bvn'>\
													</div>\
											</div>\
										</div>\
										<div class='row no-padding'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Company Business Name : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='businessname'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Registration Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='registrationnumber'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Nature of Business : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='natureofbusiness'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Sector / Industry : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='sectorindustry'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Operating Business/Office Address : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='operatingbusiness'>\
													</div>\
											</div>\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Registered Business Address: : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='registeredbusiness'>\
													</div>\
											</div>\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Office Email : </label>\
\
														<input type='Email' class='form-control' placeholder='' required='' name='officeemail'>\
													</div>\
											</div>\
\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Office Phone Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='officephone'>\
													</div>\
											</div>\
\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Date Of Registration : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='dor'>\
													</div>\
											</div>\
\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Tax Identification Number (TIN) : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='tin'>\
													</div>\
											</div>\
\
										</div>\
\
\
\
										<div class='row'>\
												<div class='col-md-12'>\
														\
														<div class='form-group form-group-default required '>\
															<label>Website URL : </label>\
\
															<input type='text' class='form-control' placeholder='' required='' name='websiteurl'>\
														</div>\
												</div>\
										</div>\
\
\
\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Describe the Products / Services Sold : </label>\
\
														<textarea rows='10' cols='120' required='' name='description'></textarea>\
													</div>\
											</div>\
										</div>\
									</td>";



contact.innerHTML = "<td>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Primary Contact Person : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcp'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Secondary Contact Person : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scp'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Designation: </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpdesignation'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Designation : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpdesignation'>\
													</div>\
											</div>\
										</div>\
\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Office Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpopn'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Office Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpopn'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Mobile Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpmpn'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Mobile Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpmpn'>\
													</div>\
											</div>\
										</div>\
										\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Email Address : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpemailaddress'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Email Address : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpemailaddress'>\
													</div>\
											</div>\
										</div>\
\
\
\
\
										<div class='row'>\
											\
\
												<button class='boxnew2' style='background: #0563af;width: 600px' type='button'> <span class='m-l-12 font-montserrat fs-12 all-caps bold'>Bank Details.  </span></button>\
\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Name : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountname'>\
													</div>\
											</div>\
\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountnumber'>\
													</div>\
											</div>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Type : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accounttype'>\
													</div>\
											</div>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Bank : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountbank'>\
													</div>\
											</div>\
										</div>\
\
\
									\
									</td>";

  }





if(this.value == "Public Limited Liability Company Registration Form"){

  	slider.innerHTML = "<p>1. Certificate of Incorporation.</p>\
										<p>\
										2.\
										Memorandum and Articles of Association [certified as true copy by the Registrar of Companies</p>\
										<p>3.\
										Form CAC 7A (formerly CO7 - Particulars of Directors) certified as a true copy by the Registrar of Companies.</p>\
<p>4.\
Form CAC 2A (formerly CO2-statement of return on allotment of shares) certified as a true copy by the Registrar of Companies; or Form CAC 1.1 (Application for Registration of Company) for entities incorporated post the executive order for Ease of Doing Business approved in 2017 (replaces Form CAC 2A and CAC 7A).</p>\
<p>5. Proof of business operating address for the company.</p>\
<p>6. Primary Identification Documents of all Shareholders with 5% ownership and above;</p>\
7. Operating license (where applicable) for company operating in Nigeria and regulated by the CBN (e.g. Bureau De Change, Payment Solution Service Providers (PSSPs), Mobile Money Operators (MMO), International Money Transfer Operators (IMTOs) etc.).\
";






  categories.innerHTML = "<td>\
										<div class='row'>\
											\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='autopay' name='autopay'>\
													<label for='autopay'>AutoPay</label>\
												</div>\
											</div>\
\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='quickteller' name='quickteller'>\
													<label for='quickteller'>Quickteller</label>\
												</div>\
											</div>\
\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='paydirect' name='paydirect'>\
													<label for='paydirect'>Paydirect</label>\
												</div>\
											</div>\
\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='webpay' name='webpay'>\
													<label for='webpay'>Webpay</label>\
												</div>\
											</div>\
											<div class='col-md-4'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='ipg' name='ipg'>\
														<label for='ipg'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Payment Gateway</label>\
													</div>\
											</div>\
											<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='payphone' name='payphone'>\
														<label for='payphone'>PAYphone</label>\
													</div>\
											</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='vtucare' name='vtucare'>\
														<label for='vtucare'>VTUcare</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='nillecash' name='nillecash'>\
														<label for='nillecash'>nill eCash</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='smartcard' name='smartcard'>\
														<label for='smartcard'>SmartCard</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='androidpos' name='androidpos'>\
														<label for='androidpos'>Android POS</label>\
													</div>\
												</div>\
\
													<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='paycode' name='paycode'>\
														<label for='paycode'>payCode</label>\
													</div>\
												</div>\
\
													<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='idp' name='idp'>\
														<label for='idp'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Digital Product</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='retailpay' name='retailpay'>\
														<label for='retailpay'>RetailPAY</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='customizepossolution' name='customizepossolution'>\
														<label for='customizepossolution'>Customize POS Solution</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-4'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='iipp' name='iipp'>\
														<label for='iipp'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Integrated Payment Platform</label>\
													</div>\
												</div>\
\
\
\
\
														\
												<div class='col-md-7'>\
													<div class='text-master'>\
														<input type='text' value='' id='others' name='others'>\
														<label for='others'>Others* (please specify)</label>\
													</div>\
												</div>\
\
										</div>\
									</td>";



organization.innerHTML = "<td>\
										<div class='row no-padding'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Company Business Name : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='businessname'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Registration Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='registrationnumber'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Nature of Business : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='natureofbusiness'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Sector / Industry : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='sectorindustry'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Operating Business/Office Address : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='operatingbusiness'>\
													</div>\
											</div>\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Registered Business Address: : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='registeredbusiness'>\
													</div>\
											</div>\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Office Email : </label>\
\
														<input type='Email' class='form-control' placeholder='' required='' name='officeemail'>\
													</div>\
											</div>\
\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Office Phone Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='officephone'>\
													</div>\
											</div>\
\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Date Of Registration : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='dor'>\
													</div>\
											</div>\
\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Tax Identification Number (TIN) : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='tin'>\
													</div>\
											</div>\
\
										</div>\
\
\
\
										<div class='row'>\
												<div class='col-md-6'>\
														\
														<div class='form-group form-group-default required '>\
															<label>Email Address : </label>\
\
															<input type='Email' class='form-control' placeholder='' required='' name='emailaddress'>\
														</div>\
												</div>\
\
												<div class='col-md-6'>\
														\
														<div class='form-group form-group-default required '>\
															<label>Website URL : </label>\
\
															<input type='text' class='form-control' placeholder='' required='' name='websiteurl'>\
														</div>\
												</div>\
										</div>\
\
\
\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Describe the Products / Services Sold : </label>\
\
														<textarea rows='10' cols='120' required='' name='description'></textarea>\
													</div>\
											</div>\
										</div>\
									</td>";



contact.innerHTML = "<td>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Primary Contact Person : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcp'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Secondary Contact Person : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scp'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Designation: </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpdesignation'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Designation : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpdesignation'>\
													</div>\
											</div>\
										</div>\
\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Office Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpopn'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Office Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpopn'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Mobile Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpmpn'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Mobile Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpmpn'>\
													</div>\
											</div>\
										</div>\
\
\
\
\
										<div class='row'>\
											\
\
												<button class='boxnew2' style='background: #0563af;width: 600px' type='button'> <span class='m-l-12 font-montserrat fs-12 all-caps bold'>Bank Details.  </span></button>\
\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Name : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountname'>\
													</div>\
											</div>\
\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountnumber'>\
													</div>\
											</div>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Type : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accounttype'>\
													</div>\
											</div>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Bank : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountbank'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											\
\
												<button class='boxnew2' style='background: #0563af;width: 600px' type='button'> <span class='m-l-12 font-montserrat fs-12 all-caps bold'>OTHER INFORMATION.  </span></button>\
\
										</div>\
\
																				<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label></label>\
														<textarea rows='10' cols='120' required='' name='otherinfo'></textarea>\
													</div>\
											</div>\
										</div>\
\
									\
									</td>";





  }


if(this.value == "Non-Governmental Organization, Charities and Religious Organizations"){



	slider.innerHTML = "<p>1. Certificate of Registration / Incorporation of the Charity/NGO / Religious Organization</p>\
<p>2. Certified true copies of the Form CAC/IT 1 (Incorporated Trustees Application Form to include the constitution\
<p>3. Resolution (or minutes of last meeting) authorizing the establishment of business relationship with  <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 on the letter headed paper, duly signed by at least two Trustees and nominating signatories/authorizers </p>\
<p>4. Utility bill;</p>\
5. Valid primary means of identification (such Permanent Voters’ Card, International Passport, Drivers’ License and National ID card (NIMC)) of nominated authorizers and the registered Trustees that signed the resolution";




categories.innerHTML = "<td>\
										<div class='row'>\
											\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='autopay' name='autopay'>\
													<label for='autopay'>AutoPay</label>\
												</div>\
											</div>\
\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='quickteller' name='quickteller'>\
													<label for='quickteller'>Quickteller</label>\
												</div>\
											</div>\
\
											<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='Paydirect' name='paydirect'>\
													<label for='paydirect'>Paydirect</label>\
												</div>\
											</div>\
\
												<div class='col-md-3'>\
												<div class='checkbox check-success'>\
													<input type='checkbox' value='1' id='webpay' name='webpay'>\
													<label for='webpay'>Webpay</label>\
												</div>\
											</div>\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='payphone' name='payphone'>\
														<label for='payphone'>PAYphone</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='vtucare' name='vtucare'>\
														<label for='vtucare'>VTUcare</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='smartcard' name='smartcard'>\
														<label for='smartcard'>SmartCard</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='androidpos' name='androidpos'>\
														<label for='androidpos'>Android POS</label>\
													</div>\
												</div>\
\
													<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='paycode' name='paycode'>\
														<label for='paycode'>payCode</label>\
													</div>\
												</div>\
\
													<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='idp' name='idp'>\
														<label for='idp'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Digital Product</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='retailpay' name='retailpay'>\
														<label for='retailpay'>RetailPAY</label>\
													</div>\
												</div>\
\
												<div class='col-md-3'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='customizepossolution' name='customizepossolution'>\
														<label for='customizepossolution'>Customize POS Solution</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-4'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='iipp' name='iipp'>\
														<label for='iipp'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Integrated Payment Platform</label>\
													</div>\
												</div>\
\
\
												<div class='col-md-4'>\
													<div class='checkbox check-success'>\
														<input type='checkbox' value='1' id='ipg' name='ipg'>\
														<label for='ipg'> <!-- Header End -->
<!-- login Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">


  <div class="container">
      <div class="row">
        <div class="col-12">


            <div id="firebaseui-auth-container"></div>

            <div class="row" style="padding: 20px">
    <div class="col"><hr></div>
    <div class="col-auto">OR</div>
    <div class="col"><hr></div>
</div>
       </div>
     </div>
   </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

                <button type="button" class="btn_custom_google" onclick="googleSignin()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                           <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
                    </svg>
                         Sign in with Google
                </button>



                      <button type="button" class="btn_custom_facebook" onclick="googleSignin()">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                          Sign in with Facebook
              </button>

          </div>
        </div>
      </div>


      </div>
      <div class="modal-footer">
   <!--     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> -->
      </div>
    </div>
  </div>
</div>

<!-- login Modal -->
 Payment Gateway</label>\
													</div>\
												</div>\
\
\
														\
												<div class='col-md-7'>\
													<div class='text-master'>\
														<input type='text' value='' id='others' name='others'>\
														<label for='others'>Others* (please specify)</label>\
													</div>\
												</div>\
\
										</div>\
									</td>";


organization.innerHTML = "<td>\
\
										<div class='row no-padding'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Organization Business Name : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='businessname'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Registration Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='registrationnumber'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Nature of Business : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='natureofbusiness'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Sector / Industry : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='sectorindustry'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Operating Business/Office Address : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='operatingbusiness'>\
													</div>\
											</div>\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Registered Business Address: : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='registeredbusiness'>\
													</div>\
											</div>\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Office Email : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='officeemail'>\
													</div>\
											</div>\
\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Office Phone Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='officephone'>\
													</div>\
											</div>\
\
										</div>\
\
\
\
										<div class='row'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Date Of Registration : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='dor'>\
													</div>\
											</div>\
\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Tax Identification Number (TIN) : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='tin'>\
													</div>\
											</div>\
\
										</div>\
\
\
\
										<div class='row'>\
												<div class='col-md-6'>\
														\
														<div class='form-group form-group-default required '>\
															<label>Email Address : </label>\
\
															<input type='Email' class='form-control' placeholder='' required='' name='emailaddress'>\
														</div>\
												</div>\
												<div class='col-md-6'>\
														\
														<div class='form-group form-group-default required '>\
															<label>Website URL : </label>\
\
															<input type='text' class='form-control' placeholder='' required='' name='websiteurl'>\
														</div>\
												</div>\
										</div>\
										<div class='row'>\
												<div class='col-md-6'>\
														\
														<div class='form-group form-group-default required '>\
															<label>Doing Business As : </label>\
\
															<input type='text' class='form-control' placeholder='' required='' name='businessas'>\
														</div>\
												</div>\
												<div class='col-md-6'>\
														\
														<div class='form-group form-group-default required '>\
															<label>Country of Registration : </label>\
\
															<input type='text' class='form-control' placeholder='' required='' name='countryreg'>\
														</div>\
												</div>\
										</div>\
\
\
\
\
										<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label>Describe the Products / Services Sold : </label>\
\
														<textarea rows='10' cols='120' required='' name='description'></textarea>\
													</div>\
											</div>\
										</div>\
									</td>";



contact.innerHTML = "<td>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Primary Contact Person : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcp'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Secondary Contact Person : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scp'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Designation: </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpdesignation'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Designation : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpdesignation'>\
													</div>\
											</div>\
										</div>\
\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Office Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpopn'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Office Phone Number / Extension : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpopn'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Contact Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='pcpmpn'>\
													</div>\
											</div>\
											<div class='col-md-6'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Contact Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='scpmpn'>\
													</div>\
											</div>\
										</div>\
\
\
\
\
										<div class='row'>\
											\
\
												<button class='boxnew2' style='background: #0563af;width: 600px' type='button'> <span class='m-l-12 font-montserrat fs-12 all-caps bold'>Bank Details.  </span></button>\
\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Name : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountname'>\
													</div>\
											</div>\
\
										</div>\
\
										<div class='row no-padding'>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Number : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountnumber'>\
													</div>\
											</div>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Type : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accounttype'>\
													</div>\
											</div>\
											<div class='col-md-4'>\
													\
													<div class='form-group form-group-default required'>\
														<label>Account Bank : </label>\
\
														<input type='text' class='form-control' placeholder='' required='' name='accountbank'>\
													</div>\
											</div>\
										</div>\
\
										<div class='row'>\
											\
\
												<button class='boxnew2' style='background: #0563af;width: 600px' type='button'> <span class='m-l-12 font-montserrat fs-12 all-caps bold'>OTHER INFORMATION.  </span></button>\
\
										</div>\
\
																				<div class='row'>\
											<div class='col-md-12'>\
													\
													<div class='form-group form-group-default required '>\
														<label></label>\
														<textarea rows='10' cols='120' required='' name='otherinfo'></textarea>\
													</div>\
											</div>\
										</div>\
\
									\
									</td>";

}

  

});