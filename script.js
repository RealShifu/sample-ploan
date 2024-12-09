const app = document.getElementById('app');

let formData = {
    nric: '',
    phoneNumber: '',
    personalDetails: {},
    residentialInfo: {},
    employmentInfo: {},
    productDetails: {}
};

let currentPage = 1;

function renderPage() {
    app.innerHTML = '';
    switch (currentPage) {
        case 1: renderPage1(); break;
        case 2: renderPage2(); break;
        case 3: renderPage3(); break;
        case 4: renderPage4(); break;
        case 5: renderPage5(); break;
        case 6: renderPage6(); break;
        case 7: renderPage7(); break;
    }
}

function renderPage1() {
    app.innerHTML = `
        <h2>Login</h2>
        <label for="nric">NRIC:</label>
        <input type="text" id="nric" placeholder="Enter NRIC" value="${formData.nric}" />
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" placeholder="Enter Phone Number" value="${formData.phoneNumber}" />
        <button id="requestOTP-button" onclick="savePage1Data(); showOTPField();">Request OTP</button>
        <div id="otp-container" style="display: none;">
            <label for="otp">OTP:</label>
            <input type="text" id="otp" placeholder="Enter OTP" />
            <button onclick="validatePage1()">Next</button>
        </div>
    `;
}

function renderPage2() {
    app.innerHTML = `
        <h2>Personal Details</h2>
        <label for="name">Name:</label>
        <input type="text" id="name" placeholder="Enter Name" value="${formData.personalDetails.name || ''}" />
        
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" value="${formData.personalDetails.dob || ''}" />
        
        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Enter Email" value="${formData.personalDetails.email || ''}" />

        <label for="gender">Gender:</label>
        <div class="radio-button">
            <div>
                <input type="radio" id="male" name="gender" value="Male" 
                    ${formData.personalDetails.gender === 'Male' ? 'checked' : ''} />
                <label for="male">Male</label>
            </div>
            <div>
                <input type="radio" id="female" name="gender" value="Female" 
                    ${formData.personalDetails.gender === 'Female' ? 'checked' : ''} />
                <label for="female">Female</label>
            </div>
        </div>
        
        <div class="button-group">
            <button onclick="prevPage()">Back</button>
            <button onclick="validatePage2()">Next</button>
        </div>
    `;
}


function renderPage3() {
    app.innerHTML = `
        <h2>Residential Info</h2>
        
        <label for="addressLine1">Address Line 1:</label>
        <input type="text" id="addressLine1" placeholder="Enter Address Line 1" value="${formData.residentialInfo.addressLine1 || ''}" />
        
        <label for="addressLine2">Address Line 2 (Optional):</label>
        <input type="text" id="addressLine2" placeholder="Enter Address Line 2" value="${formData.residentialInfo.addressLine2 || ''}" />
        
        <label for="addressLine3">Address Line 3 (Optional):</label>
        <input type="text" id="addressLine3" placeholder="Enter Address Line 3" value="${formData.residentialInfo.addressLine3 || ''}" />
        
        <label for="postcode">Postcode:</label>
        <input type="text" id="postcode" placeholder="Enter Postcode" value="${formData.residentialInfo.postcode || ''}" />
        
        <label for="city">City:</label>
        <input type="text" id="city" placeholder="Enter City" value="${formData.residentialInfo.city || ''}" />
        
        <label for="state">State:</label>
        <select id="state">
            <option value="">Select State</option>
            <option value="Selangor" ${formData.residentialInfo.state === 'Selangor' ? 'selected' : ''}>Selangor</option>
            <option value="Kuala Lumpur" ${formData.residentialInfo.state === 'Kuala Lumpur' ? 'selected' : ''}>Kuala Lumpur</option>
            <option value="Pahang" ${formData.residentialInfo.state === 'Pahang' ? 'selected' : ''}>Pahang</option>
        </select>
        
        <label for="country">Country:</label>
        <select id="country">
            <option value="">Select Country</option>
            <option value="Malaysia" ${formData.residentialInfo.country === 'Malaysia' ? 'selected' : ''}>Malaysia</option>
            <option value="Singapore" ${formData.residentialInfo.country === 'Singapore' ? 'selected' : ''}>Singapore</option>
            <option value="Japan" ${formData.residentialInfo.country === 'Japan' ? 'selected' : ''}>Japan</option>
        </select>
        
        <div class="button-group">
            <button onclick="prevPage()">Back</button>
            <button onclick="validatePage3()">Next</button>
        </div>
    `;
}


function renderPage4() {
    app.innerHTML = `
        <h2>Employment Info</h2>

        <label for="employer">Company Name:</label>
        <input type="text" id="companyName" placeholder="Enter Employer Name" value="${formData.employmentInfo.companyName || ''}" />

        <label for="companyAddressLine1">Company Address:</label>
        <input type="text" id="companyAddressLine1" placeholder="Enter Company Address Line 1" value="${formData.employmentInfo.companyAddressLine1 || ''}" />

        <label for="companyAddressLine2">Company Address Line 2 (Optional):</label>
        <input type="text" id="companyAddressLine2" placeholder="Enter Company Address Line 2" value="${formData.employmentInfo.companyAddressLine2 || ''}" />

        <label for="companyAddressLine3">Company Address Line 3 (Optional):</label>
        <input type="text" id="companyAddressLine3" placeholder="Enter Company Address Line 3" value="${formData.employmentInfo.companyAddressLine3 || ''}" />

        <label for="companyPostcode">Postcode:</label>
        <input type="text" id="companyPostcode" placeholder="Enter Postcode" value="${formData.employmentInfo.companyPostcode || ''}" />

        <label for="companyCity">City:</label>
        <input type="text" id="companyCity" placeholder="Enter City" value="${formData.employmentInfo.companyCity || ''}" />

        <label for="companyState">State:</label>
        <select id="companyState">
            <option value="">Select State</option>
            <option value="Selangor" ${formData.residentialInfo.state === 'Selangor' ? 'selected' : ''}>Selangor</option>
            <option value="Kuala Lumpur" ${formData.residentialInfo.state === 'Kuala Lumpur' ? 'selected' : ''}>Kuala Lumpur</option>
            <option value="Pahang" ${formData.residentialInfo.state === 'Pahang' ? 'selected' : ''}>Pahang</option>
        </select>

        <label for="companyCountry">Country:</label>
        <select id="companyCountry">
            <option value="">Select Country</option>
            <option value="Malaysia" ${formData.residentialInfo.country === 'Malaysia' ? 'selected' : ''}>Malaysia</option>
            <option value="Singapore" ${formData.residentialInfo.country === 'Singapore' ? 'selected' : ''}>Singapore</option>
            <option value="Japan" ${formData.residentialInfo.country === 'Japan' ? 'selected' : ''}>Japan</option>
        </select>

        <label for="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" placeholder="Enter Job Title" value="${formData.employmentInfo.jobTitle || ''}"/>

        <label for="monthlyGrossIncome">Monthly Gross Income:</label>
        <input type="number" id="monthlyGrossIncome" placeholder="Enter Monthly Gross Income" value="${formData.employmentInfo.monthlyGrossIncome || ''}" />

        <label for="officeEmail">Office Email:</label>
        <input type="email" id="officeEmail" placeholder="Enter Office Email" value="${formData.employmentInfo.officeEmail || ''}" />

        <div class="button-group">
            <button onclick="prevPage()">Back</button>
            <button onclick="validatePage4()">Next</button>
        </div>
    `;
}

function renderPage5() {
    app.innerHTML = `
        <h2>Financing Details</h2>
        <label for="loanAmount">Loan Amount:</label>
        <input type="number" id="loanAmount" placeholder="Enter Loan Amount" value="${formData.productDetails.loanAmount || ''}" />
        
        <label for="tenure">Tenure (Years):</label>
        <select id="tenure">
            <option value="">Select Tenure</option>
            <option value="1" ${formData.productDetails.tenure == 1 ? 'selected' : ''}>1 Year</option>
            <option value="2" ${formData.productDetails.tenure == 2 ? 'selected' : ''}>2 Years</option>
            <option value="3" ${formData.productDetails.tenure == 3 ? 'selected' : ''}>3 Years</option>
            <option value="4" ${formData.productDetails.tenure == 4 ? 'selected' : ''}>4 Years</option>
            <option value="5" ${formData.productDetails.tenure == 5 ? 'selected' : ''}>5 Years</option>
            <option value="6" ${formData.productDetails.tenure == 6 ? 'selected' : ''}>6 Years</option>
            <option value="7" ${formData.productDetails.tenure == 7 ? 'selected' : ''}>7 Years</option>
        </select>
        
        <label for="interestRate">Interest Rate (Annual %):</label>
        <input type="number" id="interestRate" placeholder="Enter Interest Rate" value="${getInterestRate(formData.productDetails.tenure)}" min="0" step="0.1" readonly />
        
        <div class="monthly-repayment">
            <p><strong>Estimated Monthly Repayment:</strong> <span id="monthlyRepayment">0</span></p>
        </div>
        
        <div class="chart-container" id="chart-container">
            <!-- Loan chart hereeeeeee -->
        </div>
        
        <div class="button-group">
            <button onclick="prevPage()">Back</button>
            <button onclick="validatePage5()">Next</button>
        </div>
    `;

    document.getElementById('loanAmount').addEventListener('input', calculateMonthlyRepayment);
    document.getElementById('tenure').addEventListener('change', updateInterestRate);
    document.getElementById('interestRate').addEventListener('input', calculateMonthlyRepayment);
}

function renderPage6() {
    app.innerHTML = `
        <h2>Summary</h2>
        <div class="summary-section">
            <h3>Personal Details</h3>
            <div class="summary-field"><span>Name:</span><span class="summary-field-value">${formData.personalDetails.name || 'N/A'}</span></div>
            <div class="summary-field"><span>Date of Birth:</span><span class="summary-field-value">${formData.personalDetails.dob || 'N/A'}</span></div>
            <div class="summary-field"><span>Email:</span><span class="summary-field-value">${formData.personalDetails.email || 'N/A'}</span></div>
            <div class="summary-field"><span>Gender:</span><span class="summary-field-value">${formData.personalDetails.gender || 'N/A'}</span></div>
        </div>
        <div class="summary-section">
            <h3>Residential Info</h3>
            <div class="summary-field"><span>Address:</span><span class="summary-field-value">${formData.residentialInfo.addressLine1 || 'N/A'}</span></div>
            <div class="summary-field"><span>Address Line 2:</span><span class="summary-field-value">${formData.residentialInfo.addressLine2 || 'N/A'}</span></div>
            <div class="summary-field"><span>Address Line 3:</span><span class="summary-field-value">${formData.residentialInfo.addressLine3 || '-'}</span></div>
            <div class="summary-field"><span>Postcode:</span><span class="summary-field-value">${formData.residentialInfo.postcode || 'N/A'}</span></div>
            <div class="summary-field"><span>City:</span><span class="summary-field-value">${formData.residentialInfo.city || 'N/A'}</span></div>
            <div class="summary-field"><span>State:</span><span class="summary-field-value">${formData.residentialInfo.state || 'N/A'}</span></div>
            <div class="summary-field"><span>Country:</span><span class="summary-field-value">${formData.residentialInfo.country || 'N/A'}</span></div>
        </div>
        <div class="summary-section">
            <h3>Employment Info</h3>
            <div class="summary-field"><span>Company Name:</span><span class="summary-field-value">${formData.employmentInfo.companyName || 'N/A'}</span></div>
            <div class="summary-field"><span>Company Address:</span><span class="summary-field-value">${formData.employmentInfo.companyAddressLine1 || 'N/A'}</span></div>
            <div class="summary-field"><span>Line 2:</span><span class="summary-field-value">${formData.employmentInfo.companyAddressLine2 || '-'}</span></div>
            <div class="summary-field"><span>Line 3:</span><span class="summary-field-value">${formData.employmentInfo.companyAddressLine3 || '-'}</span></div>
            <div class="summary-field"><span>City:</span><span class="summary-field-value">${formData.employmentInfo.companyCity || 'N/A'}</span></div>
            <div class="summary-field"><span>State:</span><span class="summary-field-value">${formData.employmentInfo.companyState || 'N/A'}</span></div>
            <div class="summary-field"><span>Country:</span><span class="summary-field-value">${formData.employmentInfo.companyCountry || 'N/A'}</span></div>
            <div class="summary-field"><span>Job Title:</span><span class="summary-field-value">${formData.employmentInfo.jobTitle || 'N/A'}</span></div>
            <div class="summary-field"><span>Monthly Gross Income:</span><span class="summary-field-value">${formData.employmentInfo.monthlyGrossIncome || 'N/A'}</span></div>
            <div class="summary-field"><span>Office Email:</span><span class="summary-field-value">${formData.employmentInfo.officeEmail || 'N/A'}</span></div>
        </div>
        <div class="summary-section">
            <h3>Financing Details</h3>
            <div class="summary-field"><span>Loan Amount:</span><span class="summary-field-value">${formData.productDetails.loanAmount || 'N/A'}</span></div>
            <div class="summary-field"><span>Tenure:</span><span class="summary-field-value">${formData.productDetails.tenure || 'N/A'} Years</span></div>
            <div class="summary-field"><span>Interest Rate:</span><span class="summary-field-value">${formData.productDetails.interestRate || 'N/A'}%</span></div>
            <div class="summary-field"><span>Monthly Repayment:</span><span class="summary-field-value">${formData.productDetails.monthlyRepayment || 'N/A'}</span></div>
        </div>
        <div class="button-group">
            <button onclick="prevPage()">Back</button>
            <button onclick="submitForm()()">Submit</button>
        </div>
    `;
}

function renderPage7() {
    app.innerHTML = `
        <div id="thank-you">
            <h2 id="thank-you-title">Thank You${formData.personalDetails.name ? `, ${formData.personalDetails.name}` : ''}!</h2>
            <img src="resources/tick.png" alt="Fake Logo" id="logo">
                <p class="thank-you-content">Your application is being processed. It will take up to two (2) business working days to process your application. </p>
                <p class="thank-you-content">You may receive a phone call from our bank officer for verification.</p>
            <button onclick="closeWebpage()">Close</button>
        </div>
    `;
}

function validatePage1() {
    const nric = document.getElementById('nric').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const otp = document.getElementById('otp-container').style.display !== 'none'
        ? document.getElementById('otp').value.trim()
        : '';

    if (!nric) {
        alert('NRIC is required.');
        document.getElementById('nric').focus();
        return;
    }

    if (!phone) {
        alert('Phone Number is required.');
        document.getElementById('phone').focus();
        return;
    }

    if (!otp) {
        alert('OTP is required.');
        document.getElementById('otp-container').focus();
        return;
    }

    savePage1Data();
    nextPage();
}

function showOTPField() {
    const nric = document.getElementById('nric').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (!nric) {
        alert('NRIC is required.');
        return;
    }

    if (!phone) {
        alert('Phone Number is required.');
        return;
    }

    const otpContainer = document.getElementById('otp-container');
    if (otpContainer) {
        alert('OTP Requested!');
        otpContainer.style.display = 'block';
    }
}

function savePage1Data() {
    formData.nric = document.getElementById('nric').value;
    formData.phoneNumber = document.getElementById('phone').value;
}

function validatePage2() {
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const email = document.getElementById('email').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!name) {
        alert('Name is required.');
        return;
    }

    if (!dob) {
        alert('Date of Birth is required.');
        return;
    }

    if (!email) {
        alert('Email is required.');
        return;
    }

    if (!gender) {
        alert('Gender is required.');
        return;
    }

    savePage2Data();
    nextPage();
}

function savePage2Data() {
    formData.personalDetails.name = document.getElementById('name').value.trim();
    formData.personalDetails.dob = document.getElementById('dob').value.trim();
    formData.personalDetails.email = document.getElementById('email').value.trim();
    formData.personalDetails.gender = document.querySelector('input[name="gender"]:checked').value;
}

function validatePage3() {
    const addressLine1 = document.getElementById('addressLine1').value.trim();
    const postcode = document.getElementById('postcode').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const country = document.getElementById('country').value.trim();

    if (!addressLine1) {
        alert('Address Line 1 is required.');
        return;
    }

    if (!postcode) {
        alert('Postcode is required.');
        return;
    }

    if (!city) {
        alert('City is required.');
        return;
    }

    if (!state) {
        alert('State is required.');
        return;
    }

    if (!country) {
        alert('Country is required.');
        return;
    }

    savePage3Data();
    nextPage();
}

function savePage3Data() {
    formData.residentialInfo.addressLine1 = document.getElementById('addressLine1').value;
    formData.residentialInfo.addressLine2 = document.getElementById('addressLine2').value;
    formData.residentialInfo.addressLine3 = document.getElementById('addressLine3').value;
    formData.residentialInfo.postcode = document.getElementById('postcode').value;
    formData.residentialInfo.city = document.getElementById('city').value;
    formData.residentialInfo.state = document.getElementById('state').value;
    formData.residentialInfo.country = document.getElementById('country').value;
}

function validatePage4() {
    const companyName = document.getElementById('companyName').value.trim();
    const jobTitle = document.getElementById('jobTitle').value.trim();
    const companyAddressLine1 = document.getElementById('companyAddressLine1').value.trim();
    const companyPostcode = document.getElementById('companyPostcode').value.trim();
    const companyCity = document.getElementById('companyCity').value.trim();
    const companyState = document.getElementById('companyState').value.trim();
    const companyCountry = document.getElementById('companyCountry').value.trim();
    const monthlyGrossIncome = document.getElementById('monthlyGrossIncome').value.trim();
    const officeEmail = document.getElementById('officeEmail').value.trim();

    if (!companyName) {
        alert('Company name is required.');
        document.getElementById('companyName').focus();
        return;
    }

    if (!jobTitle) {
        alert('Job title is required.');
        return;
    }

    if (!companyAddressLine1) {
        alert('Company Address Line 1 is required.');
        return;
    }

    if (!companyPostcode) {
        alert('Company Postcode is required.');
        return;
    }

    if (!companyCity) {
        alert('Company City is required.');
        return;
    }

    if (!companyState) {
        alert('Company State is required.');
        return;
    }

    if (!companyCountry) {
        alert('Company Country is required.');
        return;
    }

    if (!monthlyGrossIncome) {
        alert('Monthly Gross Income is required.');
        return;
    }

    if (!officeEmail) {
        alert('Office Email is required.');
        return;
    }

    savePage4Data();
    nextPage();
}


function savePage4Data() {
    formData.employmentInfo.companyName = document.getElementById('companyName').value;
    formData.employmentInfo.jobTitle = document.getElementById('jobTitle').value;
    formData.employmentInfo.companyAddressLine1 = document.getElementById('companyAddressLine1').value;
    formData.employmentInfo.companyAddressLine2 = document.getElementById('companyAddressLine2').value;
    formData.employmentInfo.companyAddressLine3 = document.getElementById('companyAddressLine3').value;
    formData.employmentInfo.companyCity = document.getElementById('companyCity').value;
    formData.employmentInfo.companyState = document.getElementById('companyState').value;
    formData.employmentInfo.companyCountry = document.getElementById('companyCountry').value;
    formData.employmentInfo.monthlyGrossIncome = document.getElementById('monthlyGrossIncome').value;
    formData.employmentInfo.officeEmail = document.getElementById('officeEmail').value;
}

function validatePage5() {
    const loanAmount = document.getElementById('loanAmount').value.trim();
    const tenure = document.getElementById('tenure').value.trim();
    const interestRate = document.getElementById('interestRate').value.trim();

    if (!loanAmount || loanAmount <= 0) {
        alert('Loan Amount is required and must be greater than 0.');
        return;
    }

    if (!tenure || tenure <= 0) {
        alert('Tenure is required and must be greater than 0.');
        return;
    }

    if (!interestRate || interestRate <= 0) {
        alert('Interest Rate is required and must be greater than 0.');
        return;
    }

    savePage5Data();
    nextPage();
}

function savePage5Data() {
    formData.productDetails.loanAmount = document.getElementById('loanAmount').value.trim();
    formData.productDetails.tenure = document.getElementById('tenure').value.trim();
    formData.productDetails.interestRate = document.getElementById('interestRate').value.trim();
    formData.productDetails.monthlyRepayment = document.getElementById('monthlyRepayment').textContent
}

function updateInterestRate() {
    const tenure = parseFloat(document.getElementById('tenure').value);
    const interestRate = getInterestRate(tenure);

    document.getElementById('interestRate').value = interestRate;

    calculateMonthlyRepayment();
}

function getInterestRate(tenure) {
    if (tenure >= 1 && tenure <= 3) {
        return 8.05;
    } else if (tenure >= 4 && tenure <= 5) {
        return 9.11;
    } else if (tenure >= 6 && tenure <= 7) {
        return 11.17;
    }
    return 0;
}

function calculateMonthlyRepayment() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value) || 0;
    const tenure = parseFloat(document.getElementById('tenure').value) || 0;
    const interestRate = parseFloat(document.getElementById('interestRate').value) || 0;

    // Loan Amount * Interest Rate / (Tenure * 12)
    if (loanAmount > 0 && tenure > 0) {
        const monthlyRepayment = (loanAmount * (interestRate / 100)) / (tenure * 12);
        document.getElementById('monthlyRepayment').textContent = monthlyRepayment.toFixed(2);
    } else {
        document.getElementById('monthlyRepayment').textContent = '0';
    }
}

function submitForm() {
    const confirmation = window.confirm("Are you sure you want to submit this application?");
    if (confirmation) {
        nextPage()
    }
}

function nextPage() {
    if (currentPage < 7) {
        currentPage++;
        renderPage();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage();
    }
}

renderPage();
