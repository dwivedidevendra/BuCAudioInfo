import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";


const Form = ()=>  {
    return( <>
    <Heading />
    <div class="all ">
    <form action="/action_page.php" class="was-validated">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">First Name</label>
            <input type="validationDefault01" class="form-control" id="validationDefault01" required  placeholder="First Name"/>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
          <div class="form-group col-md-6">
            <label for="validationDefault02">Last Name</label>
            <input type="validationDefault02" class="form-control" id="validationDefault02" required placeholder="Last Name"/>
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Please fill out this field.</div>
          </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4"  required placeholder="email@example.com"/>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            
            <div class="form-group col-md-6">
              <label for="validationDefault03">Phone No.</label>
              <input type="validationDefault03" class="form-control" id="validationDefault03" required placeholder="+91 0123456789"/>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
            </div>
        </div>
        
        <div class="form-row">
            <label for="validationDefault04">Services   </label>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input form-group col-md-4" id="customCheck1"/>
                <label class="custom-control-label" for="customCheck1">Audio Book</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input form-group col-md-4" id="customCheck2"/>
                <label class="custom-control-label" for="customCheck2">Paper Back</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input form-group col-md-4" id="customCheck3"/>
                <label class="custom-control-label" for="customCheck3">Book Trailer</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input form-group col-md-4" id="customCheck4"/>
                <label class="custom-control-label" for="customCheck4">Interview</label>
            </div>       
        </div>
        <div class="form-group ">
            <label for="inputEmail4">Voice over Choice</label>
            <select class="custom-select">
              <option selected>Open this select menu</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
              <label for="validationDefault04">Name of Book</label>
              <input type="validationDefault04" class="form-control" id="validationDefault04" required placeholder="Name of Book"/>
              <div class="valid-feedback">Valid.</div>
              <div class="invalid-feedback">Please fill out this field.</div>
              
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">No. of Pages</label>
              <select class="custom-select">
                <option selected>Open this select menu</option>
                <option value="1">1-50</option>
                <option value="2">51-100</option>
                <option value="3">101-150</option>
                <option value="4">151-200</option>
                <option value="5">201-250</option>
                <option value="6">251-300</option>
                <option value="7">301-350</option>
                <option value="8">351-400</option>
                <option value="9">401-450</option>
                <option value="10">451-500</option>
                <option value="11">501-550</option>
                <option value="12">551-600</option>
                <option value="13">601-650</option>
                <option value="14">651-700</option>
                <option value="15">701-750</option>
                <option value="16">751-800</option>
                <option value="17">801-850</option>
                <option value="18">851-900</option>
                <option value="19">901-950</option>
                <option value="20">951-1000</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1"  placeholder="Write your message..." rows="3"></textarea>
          </div>
        <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck"/>
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
        <button class="btn btn-outline-primary" type="submit">Submit form</button>

      </form>
</div> 
    <Footer />
    </> )

}
export default Form;