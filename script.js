const app = document.getElementById('app');

let formData = {
    applicationType: '',
    loginDetails: {},
    personalDetails: {},
    residentialInfo: {},
    employmentInfo: {},
    productDetails: {}
};

let currentPage = 0;

function renderPage() {
    app.innerHTML = '';
    switch (currentPage) {
        case 0: renderLandingPage(); break;
        case 1: renderPloanPage1(); break;
        case 2: renderPloanPage2(); break;
        case 3: renderPloanPage3(); break;
        case 4: renderPloanPage4(); break;
        case 5: renderPloanPage5(); break;
        case 6: renderPloanPage6(); break;
        case 7: renderPloanPage7(); break;

        case 8: renderProductPage1(); break;
        case 9: renderProductPage2(); break;
        case 10: renderProductPage3(); break;
        case 11: renderProductPage4(); break;
        case 12: renderProductPage5(); break;
        case 13: renderProductPage6(); break;
        case 14: renderProductPage7(); break;

        case 15: renderCheckerPage1(); break;
        case 16: renderCheckerPage2(); break;
    }
}

function renderLandingPage() {
    app.innerHTML = `
        <div class="landing-page">
            <h1>Loan Application</h1>
            <div class="application-options">
                <button onclick="selectApplicationType('Personal Loan')">
                    <h2>Personal Loan</h2>
                    <p>Quick and easy personal financing</p>
                </button>
                <button onclick="selectApplicationType('Product Financing')">
                    <h2>Product Financing</h2>
                    <p>Finance your desired products</p>
                </button>
                <button onclick="selectApplicationType('Application Status')">
                    <h2>Application Status</h2>
                    <p>Check your existing application</p>
                </button>
            </div>
        </div>
    `;
}

function selectApplicationType(type) {
    formData.applicationType = type;

    switch (type) {
        case 'Personal Loan':
            currentPage = 1;
            document.getElementById('top-title').innerText = 'Apply Personal Loan'
            renderPage();
            break;
        case 'Product Financing':
            currentPage = 8;
            document.getElementById('top-title').innerText = 'Apply Product Financing'
            renderPage();
            break;
        case 'Application Status':
            currentPage = 15;
            document.getElementById('top-title').innerText = 'Check Application Status'
            renderPage();
            break;
    }
}

//Ploan start

function renderPloanPage1() {
    app.innerHTML = `
        <h2>Login</h2>
        <label for="nric">NRIC:</label>
        <input type="text" id="nric" placeholder="Enter NRIC" value="${formData.loginDetails.nric === undefined ? "" : formData.loginDetails.nric}" />
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" placeholder="Enter Phone Number" value="${formData.loginDetails.phoneNumber === undefined ? "" : formData.loginDetails.phoneNumber}" />
        <button id="requestOTP-button" onclick="savePloanPage1Data(); showPloanOTPField();">Request OTP</button>
        <div id="otp-container" style="display: none;">
            <label for="otp">OTP:</label>
            <input type="text" id="otp" placeholder="Enter OTP" />
            <button onclick="validatePloanPage1()">Next</button>
        </div>
    `;
}

function renderPloanPage2() {
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
            <button onclick="prevPloanPage()">Back</button>
            <button onclick="validatePloanPage2()">Next</button>
        </div>
    `;
}


function renderPloanPage3() {
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
            <button onclick="prevPloanPage()">Back</button>
            <button onclick="validatePloanPage3()">Next</button>
        </div>
    `;
}


function renderPloanPage4() {
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
            <button onclick="prevPloanPage()">Back</button>
            <button onclick="validatePloanPage4()">Next</button>
        </div>
    `;
}

function renderPloanPage5() {
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
            <button onclick="prevPloanPage()">Back</button>
            <button onclick="validatePloanPage5()">Next</button>
        </div>
    `;

    document.getElementById('loanAmount').addEventListener('input', calculateMonthlyRepayment);
    document.getElementById('tenure').addEventListener('change', updateInterestRate);
    document.getElementById('interestRate').addEventListener('input', calculateMonthlyRepayment);
}

function renderPloanPage6() {
    app.innerHTML = `
        <h2>Summary</h2>
        <div class="summary-section">
            <h3>Personal Details</h3>
            <div class="summary-field"><span class="summary-field-title">Name:</span><span class="summary-field-value">${formData.personalDetails.name || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Date of Birth:</span><span class="summary-field-value">${formData.personalDetails.dob || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Email:</span><span class="summary-field-value">${formData.personalDetails.email || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Gender:</span><span class="summary-field-value">${formData.personalDetails.gender || 'N/A'}</span></div>
        </div>
        <div class="summary-section">
            <h3>Residential Info</h3>
            <div class="summary-field"><span class="summary-field-title">Address:</span><span class="summary-field-value">${formData.residentialInfo.addressLine1 || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Address Line 2:</span><span class="summary-field-value">${formData.residentialInfo.addressLine2 || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Address Line 3:</span><span class="summary-field-value">${formData.residentialInfo.addressLine3 || '-'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Postcode:</span><span class="summary-field-value">${formData.residentialInfo.postcode || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">City:</span><span class="summary-field-value">${formData.residentialInfo.city || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">State:</span><span class="summary-field-value">${formData.residentialInfo.state || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Country:</span><span class="summary-field-value">${formData.residentialInfo.country || 'N/A'}</span></div>
        </div>
        <div class="summary-section">
            <h3>Employment Info</h3>
            <div class="summary-field"><span class="summary-field-title">Company Name:</span><span class="summary-field-value">${formData.employmentInfo.companyName || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Company Address:</span><span class="summary-field-value">${formData.employmentInfo.companyAddressLine1 || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Line 2:</span><span class="summary-field-value">${formData.employmentInfo.companyAddressLine2 || '-'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Line 3:</span><span class="summary-field-value">${formData.employmentInfo.companyAddressLine3 || '-'}</span></div>
            <div class="summary-field"><span class="summary-field-title">City:</span><span class="summary-field-value">${formData.employmentInfo.companyCity || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">State:</span><span class="summary-field-value">${formData.employmentInfo.companyState || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Country:</span><span class="summary-field-value">${formData.employmentInfo.companyCountry || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Job Title:</span><span class="summary-field-value">${formData.employmentInfo.jobTitle || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Monthly Gross Income:</span><span class="summary-field-value">${formData.employmentInfo.monthlyGrossIncome || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Office Email:</span><span class="summary-field-value">${formData.employmentInfo.officeEmail || 'N/A'}</span></div>
        </div>
        <div class="summary-section">
            <h3>Financing Details</h3>
            <div class="summary-field"><span class="summary-field-title">Loan Amount:</span><span class="summary-field-value">${formData.productDetails.loanAmount || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Tenure:</span><span class="summary-field-value">${formData.productDetails.tenure || 'N/A'} Years</span></div>
            <div class="summary-field"><span class="summary-field-title">Interest Rate:</span><span class="summary-field-value">${formData.productDetails.interestRate || 'N/A'}%</span></div>
            <div class="summary-field"><span class="summary-field-title">Monthly Repayment:</span><span class="summary-field-value">${formData.productDetails.monthlyRepayment || 'N/A'}</span></div>
        </div>
        <div class="button-group">
            <button onclick="prevPloanPage()">Back</button>
            <button onclick="submitPloanForm()">Submit</button>
        </div>
    `;
}

function renderPloanPage7() {
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

function validatePloanPage1() {
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

    savePloanPage1Data();
    nextPloanPage();
}

function showPloanOTPField() {
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

function savePloanPage1Data() {
    formData.loginDetails.nric = document.getElementById('nric').value;
    formData.loginDetails.phoneNumber = document.getElementById('phone').value;
}

function validatePloanPage2() {
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

    savePloanPage2Data();
    nextPloanPage();
}

function savePloanPage2Data() {
    formData.personalDetails.name = document.getElementById('name').value.trim();
    formData.personalDetails.dob = document.getElementById('dob').value.trim();
    formData.personalDetails.email = document.getElementById('email').value.trim();
    formData.personalDetails.gender = document.querySelector('input[name="gender"]:checked').value;
}

function validatePloanPage3() {
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

    savePloanPage3Data();
    nextPloanPage();
}

function savePloanPage3Data() {
    formData.residentialInfo.addressLine1 = document.getElementById('addressLine1').value;
    formData.residentialInfo.addressLine2 = document.getElementById('addressLine2').value;
    formData.residentialInfo.addressLine3 = document.getElementById('addressLine3').value;
    formData.residentialInfo.postcode = document.getElementById('postcode').value;
    formData.residentialInfo.city = document.getElementById('city').value;
    formData.residentialInfo.state = document.getElementById('state').value;
    formData.residentialInfo.country = document.getElementById('country').value;
}

function validatePloanPage4() {
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

    savePloanPage4Data();
    nextPloanPage();
}


function savePloanPage4Data() {
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

function validatePloanPage5() {
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

    savePloanPage5Data();
    nextPloanPage();
}

function savePloanPage5Data() {
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
        const monthlyRepayment = (loanAmount * ((100 + interestRate) / 100)) / (tenure * 12);
        document.getElementById('monthlyRepayment').textContent = monthlyRepayment.toFixed(2);
    } else {
        document.getElementById('monthlyRepayment').textContent = '0';
    }
}

function submitPloanForm() {
    const confirmation = window.confirm("Are you sure you want to submit this application?");
    if (confirmation) {
        nextPloanPage()
    }
}

function nextPloanPage() {
    if (currentPage >= 0 && currentPage <= 7) {
        currentPage++;
        renderPage();
    }
}

function prevPloanPage() {
    if (currentPage >= 0 && currentPage <= 7) {
        currentPage--;
        renderPage();
    }
}

//Ploan end


//Product start

function renderProductPage1() {
    app.innerHTML = `
        <h2>Login</h2>
        
        <label for="dealer">Dealer's Name:</label>
        <select id="dealer">
            <option value="">Select Dealer</option>
            <option value="SenQ" ${formData.loginDetails.dealer === 'SenQ' ? 'selected' : ''}>SenQ</option>
            <option value="Harvey Norman" ${formData.loginDetails.dealer === 'Harvey Norman' ? 'selected' : ''}>Harvey Norman</option>
            <option value="Sen Heng" ${formData.loginDetails.dealer === 'Sen Heng' ? 'selected' : ''}>Sen Heng</option>
        </select>
        
        <label for="agent">Agent's Name:</label>
        <select id="agent">
            <option value="">Select Agent</option>
            <option value="John Doe" ${formData.loginDetails.agent === 'John Doe' ? 'selected' : ''}>John Doe</option>
            <option value="Jane Smith" ${formData.loginDetails.agent === 'Jane Smith' ? 'selected' : ''}>Jane Smith</option>
            <option value="Michael Brown" ${formData.loginDetails.agent === 'Michael Brown' ? 'selected' : ''}>Michael Brown</option>
        </select>
        
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" placeholder="Enter Phone Number" value="${formData.loginDetails.phoneNumber === undefined ? "" : formData.loginDetails.phoneNumber}" />
        
        <button id="requestOTP-button" onclick="saveProductPage1Data(); showProductOTPField();">Request OTP</button>
        
        <div id="otp-container" style="display: none;">
            <label for="otp">OTP:</label>
            <input type="text" id="otp" placeholder="Enter OTP" />
            <button onclick="validateProductPage1()">Next</button>
        </div>
    `;
}

function validateProductPage1() {
    const dealer = document.getElementById('dealer').value.trim();
    const agent = document.getElementById('agent').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const otp = document.getElementById('otp-container').style.display !== 'none'
        ? document.getElementById('otp').value.trim()
        : '';

    if (!dealer) {
        alert('Dealer is required.');
        document.getElementById('dealer').focus();
        return;
    }

    if (!agent) {
        alert('Agent is required.');
        document.getElementById('agent').focus();
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

    saveProductPage1Data();
    nextProductPage();
}

function showProductOTPField() {
    const dealer = document.getElementById('dealer').value.trim();
    const agent = document.getElementById('agent').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (!dealer) {
        alert('Dealer is required.');
        return;
    }

    if (!agent) {
        alert('Agent is required.');
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

function saveProductPage1Data() {
    formData.loginDetails.dealer = document.getElementById('dealer').value;
    formData.loginDetails.agent = document.getElementById('agent').value;
    formData.loginDetails.phoneNumber = document.getElementById('phone').value;
}

function renderProductPage2() {
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
            <button onclick="prevProductPage()">Back</button>
            <button onclick="validateProductPage2()">Next</button>
        </div>
    `;
}

function validateProductPage2() {
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

    saveProductPage2Data();
    nextProductPage();
}

function saveProductPage2Data() {
    formData.personalDetails.name = document.getElementById('name').value.trim();
    formData.personalDetails.dob = document.getElementById('dob').value.trim();
    formData.personalDetails.email = document.getElementById('email').value.trim();
    formData.personalDetails.gender = document.querySelector('input[name="gender"]:checked').value;
}

function renderProductPage3() {
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
            <button onclick="prevProductPage()">Back</button>
            <button onclick="validateProductPage3()">Next</button>
        </div>
    `;
}

function validateProductPage3() {
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

    saveProductPage3Data();
    nextProductPage();
}

function saveProductPage3Data() {
    formData.residentialInfo.addressLine1 = document.getElementById('addressLine1').value;
    formData.residentialInfo.addressLine2 = document.getElementById('addressLine2').value;
    formData.residentialInfo.addressLine3 = document.getElementById('addressLine3').value;
    formData.residentialInfo.postcode = document.getElementById('postcode').value;
    formData.residentialInfo.city = document.getElementById('city').value;
    formData.residentialInfo.state = document.getElementById('state').value;
    formData.residentialInfo.country = document.getElementById('country').value;
}

function renderProductPage4() {
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
            <button onclick="prevProductPage()">Back</button>
            <button onclick="validateProductPage4()">Next</button>
        </div>
    `;
}

function validateProductPage4() {
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

    saveProductPage4Data();
    nextProductPage();
}


function saveProductPage4Data() {
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

function renderProductPage5() {
    app.innerHTML = `
        <h2>Merchandise Details</h2>
        
        <label for="phoneSelection">Select Phone:</label>
        <select id="phoneSelection">
            <option value="">Select a Phone</option>
            <option value="Samsung S24 Ultra" data-price="5799" data-image="resources/samsung.png">Samsung S24 Ultra</option>
            <option value="iPhone 16 Pro Max" data-price="5999" data-image="resources/iphone.png">iPhone 16 Pro Max</option>
            <option value="Honor Magic V6 Pro" data-price="3699" data-image="resources/honor.png">Honor Magic V6 Pro</option>
        </select>
        
        <label for="loanAmount">Price:</label>
        <input type="number" id="loanAmount" placeholder="Price will be auto-filled" value="" readonly />
        
        <div class="phone-image-container">
            <img id="phoneImage" src="" alt="Selected Phone" style="display: none; max-width: 100%;" />
        </div>
        
        <label for="tenure">Tenure (Years):</label>
        <select id="tenure">
            <option value="">Select Tenure</option>
            <option value="1">1 Year</option>
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
        </select>
        
        <label for="interestRate">Interest Rate (Annual %):</label>
        <input type="number" id="interestRate" placeholder="Enter Interest Rate" value="0" min="0" step="0.1" readonly />
        
        <div class="monthly-repayment">
            <p><strong>Estimated Monthly Repayment:</strong> <span id="monthlyRepayment">0</span></p>
        </div>
        
        <div class="chart-container" id="chart-container">
            <!-- Loan chart here -->
        </div>
        
        <div class="button-group">
            <button onclick="prevProductPage()">Back</button>
            <button onclick="validateProductPage5()">Next</button>
        </div>
    `;

    document.getElementById('phoneSelection').addEventListener('change', function () {
        const selectedOption = this.options[this.selectedIndex];
        const price = selectedOption.getAttribute('data-price');
        const image = selectedOption.getAttribute('data-image');

        document.getElementById('loanAmount').value = price || '';

        const phoneImage = document.getElementById('phoneImage');
        if (image) {
            phoneImage.src = image;
            phoneImage.style.display = 'block';
        } else {
            phoneImage.style.display = 'none';
        }

        calculateMonthlyRepayment();
    });

    document.getElementById('tenure').addEventListener('change', updateInterestRateProduct);
    document.getElementById('interestRate').addEventListener('input', calculateMonthlyRepayment);
}

function updateInterestRateProduct() {
    const tenure = parseFloat(document.getElementById('tenure').value);
    const interestRate = getInterestRateProduct(tenure);

    document.getElementById('interestRate').value = interestRate;

    calculateMonthlyRepayment();
}

function getInterestRateProduct(tenure) {
    if (tenure == 1) {
        return 8.05;
    } else if (tenure == 2) {
        return 9.11;
    } else if (tenure == 3) {
        return 11.17;
    }
    return 0;
}

function validateProductPage5() {
    const loanAmount = document.getElementById('loanAmount').value.trim();
    const tenure = document.getElementById('tenure').value.trim();
    const interestRate = document.getElementById('interestRate').value.trim();

    if (!loanAmount || loanAmount <= 0) {
        alert('Please select a phone model.');
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

    saveProductPage5Data();
    nextProductPage();
}

function saveProductPage5Data() {
    formData.productDetails.phoneSelection = document.getElementById('phoneSelection').value.trim();
    formData.productDetails.loanAmount = document.getElementById('loanAmount').value.trim();
    formData.productDetails.tenure = document.getElementById('tenure').value.trim();
    formData.productDetails.interestRate = document.getElementById('interestRate').value.trim();
    formData.productDetails.monthlyRepayment = document.getElementById('monthlyRepayment').textContent
}

function renderProductPage6() {
    app.innerHTML = `
        <h2>Summary</h2>
        <div class="summary-section">
            <h3>Dealer Details</h3>
            <div class="summary-field"><span class="summary-field-title">Dealer:</span><span class="summary-field-value">${formData.loginDetails.dealer || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Agent:</span><span class="summary-field-value">${formData.loginDetails.agent || 'N/A'}</span></div>
        </div>
        <div class="summary-section">
            <h3>Personal Details</h3>
            <div class="summary-field"><span class="summary-field-title">Name:</span><span class="summary-field-value">${formData.personalDetails.name || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Date of Birth:</span><span class="summary-field-value">${formData.personalDetails.dob || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Email:</span><span class="summary-field-value">${formData.personalDetails.email || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Gender:</span><span class="summary-field-value">${formData.personalDetails.gender || 'N/A'}</span></div>
        </div>
        <div class="summary-section">
            <h3>Residential Info</h3>
            <div class="summary-field"><span class="summary-field-title">Address:</span><span class="summary-field-value">${formData.residentialInfo.addressLine1 || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Address Line 2:</span><span class="summary-field-value">${formData.residentialInfo.addressLine2 || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Address Line 3:</span><span class="summary-field-value">${formData.residentialInfo.addressLine3 || '-'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Postcode:</span><span class="summary-field-value">${formData.residentialInfo.postcode || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">City:</span><span class="summary-field-value">${formData.residentialInfo.city || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">State:</span><span class="summary-field-value">${formData.residentialInfo.state || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Country:</span><span class="summary-field-value">${formData.residentialInfo.country || 'N/A'}</span></div>
        </div>
        <div class="summary-section">
            <h3>Employment Info</h3>
            <div class="summary-field"><span class="summary-field-title">Company Name:</span><span class="summary-field-value">${formData.employmentInfo.companyName || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Company Address:</span><span class="summary-field-value">${formData.employmentInfo.companyAddressLine1 || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Line 2:</span><span class="summary-field-value">${formData.employmentInfo.companyAddressLine2 || '-'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Line 3:</span><span class="summary-field-value">${formData.employmentInfo.companyAddressLine3 || '-'}</span></div>
            <div class="summary-field"><span class="summary-field-title">City:</span><span class="summary-field-value">${formData.employmentInfo.companyCity || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">State:</span><span class="summary-field-value">${formData.employmentInfo.companyState || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Country:</span><span class="summary-field-value">${formData.employmentInfo.companyCountry || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Job Title:</span><span class="summary-field-value">${formData.employmentInfo.jobTitle || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Monthly Gross Income:</span><span class="summary-field-value">${formData.employmentInfo.monthlyGrossIncome || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Office Email:</span><span class="summary-field-value">${formData.employmentInfo.officeEmail || 'N/A'}</span></div>
        </div>
        <div class="summary-section">
            <h3>Mercendise Details</h3>
            <div class="summary-field"><span class="summary-field-title">Phone Model:</span><span class="summary-field-value">${formData.productDetails.phoneSelection || 'N/A'}</span></div>
            <div class="summary-image">
                <img id="phoneImage" src="${getPhoneImage(formData.productDetails.phoneSelection)}" alt="Phone Image" style="max-width: 100%; height: auto;" />
            </div>
            <div class="summary-field"><span class="summary-field-title">Price:</span><span class="summary-field-value">${formData.productDetails.loanAmount || 'N/A'}</span></div>
            <div class="summary-field"><span class="summary-field-title">Tenure:</span><span class="summary-field-value">${formData.productDetails.tenure || 'N/A'} Years</span></div>
            <div class="summary-field"><span class="summary-field-title">Interest Rate:</span><span class="summary-field-value">${formData.productDetails.interestRate || 'N/A'}%</span></div>
            <div class="summary-field"><span class="summary-field-title">Monthly Repayment:</span><span class="summary-field-value">${formData.productDetails.monthlyRepayment || 'N/A'}</span></div>
        </div>
        <div class="button-group">
            <button onclick="prevProductPage()">Back</button>
            <button onclick="submitProductForm()">Submit</button>
        </div>
    `;
}

function getPhoneImage(phoneModel) {
    switch (phoneModel) {
        case 'Samsung S24 Ultra':
            return 'resources/samsung.png';
        case 'iPhone 16 Pro Max':
            return 'resources/iphone.png';
        case 'Honor Magic V6 Pro':
            return 'resources/honor.png';
        default:
            return '';
    }
}

function renderProductPage7() {
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

function submitProductForm() {
    const confirmation = window.confirm("Are you sure you want to submit this application?");
    if (confirmation) {
        nextProductPage()
    }
}


function nextProductPage() {
    if (currentPage > 7 && currentPage < 14) {
        currentPage++;
        renderPage();
    }
}

function prevProductPage() {
    if (currentPage > 7 && currentPage < 14) {
        currentPage--;
        renderPage();
    }
}

//Product end


//Checker start

function renderCheckerPage1() {
    app.innerHTML = `
        <h2>Login</h2>
        <label for="financeType">Select Financing Type:</label>
        <select id="financeType">
            <option value="">Select Option</option>
            <option value="personalLoan">Personal Loan</option>
            <option value="productFinancing">Product Financing</option>
        </select>

        <div id="personalLoanFields" style="display: none;">
            <label for="nric">NRIC:</label>
            <input type="text" id="nric" placeholder="Enter NRIC" value="${formData.loginDetails.nric || ''}" />
            
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone1" placeholder="Enter Phone Number" value="${formData.loginDetails.phoneNumber || ''}" />
        </div>

        <div id="productFinancingFields" style="display: none;">
            <label for="dealer">Dealer:</label>
            <select id="dealer">
                <option value="">Select Dealer</option>
                <option value="SenQ" ${formData.loginDetails.dealer === 'SenQ' ? 'selected' : ''}>SenQ</option>
                <option value="Harvey Norman" ${formData.loginDetails.dealer === 'Harvey Norman' ? 'selected' : ''}>Harvey Norman</option>
                <option value="Sen Heng" ${formData.loginDetails.dealer === 'Sen Heng' ? 'selected' : ''}>Sen Heng</option>
            </select>

            <label for="agent">Agent's Name:</label>
            <select id="agent">
                <option value="">Select Agent</option>
                <option value="John Doe" ${formData.loginDetails.agent === 'John Doe' ? 'selected' : ''}>John Doe</option>
                <option value="Jane Smith" ${formData.loginDetails.agent === 'Jane Smith' ? 'selected' : ''}>Jane Smith</option>
                <option value="Michael Brown" ${formData.loginDetails.agent === 'Michael Brown' ? 'selected' : ''}>Michael Brown</option>
            </select>

            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone2" placeholder="Enter Phone Number" value="${formData.loginDetails.phoneNumber || ''}" />
        </div>

        <button id="requestOTP-button" style="display: none;" onclick="saveCheckerPage1Data(); showCheckerOTPField();">Request OTP</button>

        <div id="otp-container" style="display: none;">
            <label for="otp">OTP:</label>
            <input type="text" id="otp" placeholder="Enter OTP" />
            <button onclick="validateCheckerPage1()">Next</button>
        </div>
    `;

    document.getElementById('financeType').addEventListener('change', function () {
        const selectedType = this.value;

        document.getElementById('personalLoanFields').style.display = 'none';
        document.getElementById('productFinancingFields').style.display = 'none';
        document.getElementById('requestOTP-button').style.display = 'none';

        if (selectedType === 'personalLoan') {
            document.getElementById('personalLoanFields').style.display = 'block';
            document.getElementById('requestOTP-button').style.display = 'inline-block';
        } else if (selectedType === 'productFinancing') {
            document.getElementById('productFinancingFields').style.display = 'block';
            document.getElementById('requestOTP-button').style.display = 'inline-block';
        }
    });
}

function validateCheckerPage1() {
    const financeType = document.getElementById('financeType').value.trim();

    const nric = document.getElementById('nric').value.trim();
    const phone1 = document.getElementById('phone1').value.trim();

    const dealer = document.getElementById('dealer').value.trim();
    const agent = document.getElementById('agent').value.trim();
    const phone2 = document.getElementById('phone2').value.trim();

    const otp = document.getElementById('otp-container').style.display !== 'none'
        ? document.getElementById('otp').value.trim()
        : '';

    if (financeType === "personalLoan") {
        if (!nric) {
            alert('NRIC is required.');
            document.getElementById('nric').focus();
            return;
        }

        if (!phone1) {
            alert('Phone Number is required.');
            document.getElementById('phone1').focus();
            return;
        }
    } else if (financeType === "productFinancing") {
        if (!dealer) {
            alert('Dealer is required.');
            return;
        }

        if (!agent) {
            alert('Agent is required.');
            return;
        }

        if (!phone2) {
            alert('Phone Number is required.');
            document.getElementById('phone2').focus();
            return;
        }
    }

    if (!otp) {
        alert('OTP is required.');
        document.getElementById('otp-container').focus();
        return;
    }

    saveCheckerPage1Data();
    nextCheckerPage();
}

function showCheckerOTPField() {
    const financeType = document.getElementById('financeType').value.trim();

    const nric = document.getElementById('nric').value.trim();
    const phone1 = document.getElementById('phone1').value.trim();

    const dealer = document.getElementById('dealer').value.trim();
    const agent = document.getElementById('agent').value.trim();
    const phone2 = document.getElementById('phone2').value.trim();

    if (financeType === "personalLoan") {
        if (!nric) {
            alert('NRIC is required.');
            return;
        }

        if (!phone1) {
            alert('Phone Number is required.');
            return;
        }
    } else if (financeType === "productFinancing") {
        if (!dealer) {
            alert('Dealer is required.');
            return;
        }

        if (!agent) {
            alert('Agent is required.');
            return;
        }

        if (!phone2) {
            alert('Phone Number is required.');
            return;
        }
    }

    const otpContainer = document.getElementById('otp-container');
    if (otpContainer) {
        alert('OTP Requested!');
        otpContainer.style.display = 'block';
    }
}

function saveCheckerPage1Data() {
    formData.loginDetails.financeType = document.getElementById('financeType').value;

    if (document.getElementById('financeType').value === "personalLoan") {
        formData.loginDetails.nric = document.getElementById('nric').value;
        formData.loginDetails.phoneNumber = document.getElementById('phone1').value;

    } else if (document.getElementById('financeType').value === "productFinancing") {
        formData.loginDetails.dealer = document.getElementById('dealer').value;
        formData.loginDetails.agent = document.getElementById('agent').value;
        formData.loginDetails.phoneNumber = document.getElementById('phone2').value;
    }

}

function renderCheckerPage2() {
    if (!formData.loginDetails.financeType) {
        app.innerHTML = `<h2>No data to display for this financing type.</h2>`;
        return;
    }

    function generateRandomPersonalLoanData(index) {
        const loanAmount = Math.floor(Math.random() * (20000 - 10000 + 1) + 10000);
        const roundedLoanAmount = Math.round(loanAmount / 100) * 100;
        const tenure = Math.floor(Math.random() * 7) + 1;
        let interestRate;

        if (tenure >= 1 && tenure <= 3) {
            interestRate = 8.05;
        } else if (tenure >= 4 && tenure <= 5) {
            interestRate = 9.11;
        } else {
            interestRate = 11.17;
        }

        const monthlyRepayment = ((roundedLoanAmount * ((100 + interestRate) / 100)) / (tenure * 12)).toFixed(2);

        return {
            index: `Personal Loan ${index + 1}`,
            referenceID: `REF-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
            loanAmount: roundedLoanAmount,
            tenure,
            interestRate,
            monthlyRepayment
        };
    }

    function generateRandomProductFinancingData(index) {
        const phoneModels = [
            { model: "Samsung S24 Ultra", price: 5799, image: "resources/samsung.png" },
            { model: "iPhone 16 Pro Max", price: 5999, image: "resources/iphone.png" },
            { model: "Honor Magic V6 Pro", price: 3699, image: "resources/honor.png" }
        ];
        const selectedPhone = phoneModels[index % phoneModels.length];
        const tenure = Math.floor(Math.random() * 3) + 1;
        let interestRate;

        if (tenure === 1) {
            interestRate = 8.05;
        } else if (tenure === 2) {
            interestRate = 9.11;
        } else {
            interestRate = 11.17;
        }

        const monthlyRepayment = ((selectedPhone.price * ((100 + interestRate) / 100)) / (tenure * 12)).toFixed(2);

        return {
            index: `Product Financing ${index + 1}`,
            referenceID: `REF-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
            phoneModel: selectedPhone.model,
            price: selectedPhone.price,
            image: selectedPhone.image,
            tenure,
            interestRate,
            monthlyRepayment
        };
    }

    const isPersonalLoan = formData.loginDetails.financeType === 'personalLoan';
    const loanApplications = Array.from({ length: isPersonalLoan ? 5 : 3 }, (_, index) => {
        return isPersonalLoan
            ? generateRandomPersonalLoanData(index)
            : generateRandomProductFinancingData(index);
    });

    app.innerHTML = `
        <h2>${isPersonalLoan ? 'Personal Loan Applications' : 'Product Financing Applications'}</h2>
        <div class="loan-application-list">
            ${loanApplications.map(application => `
                <div class="loan-application-card">
                    <p class="checker-app-title"><strong>${application.index}:</strong></p>
                    <p><strong>Reference ID:</strong> ${application.referenceID}</p>
                    ${isPersonalLoan ? `
                        <p><strong>Loan Amount:</strong> ${application.loanAmount}</p>
                    ` : `
                        <p><strong>Phone Model:</strong> ${application.phoneModel}</p>
                        <img src="${application.image}" alt="${application.phoneModel}" class="phone-image" style="max-width: 100%;" />
                        <p><strong>Price:</strong> ${application.price}</p>
                    `}
                    <p><strong>Tenure:</strong> ${application.tenure} Years</p>
                    <p><strong>Rate:</strong> ${application.interestRate}%</p>
                    <p><strong>Monthly Repayment:</strong> ${application.monthlyRepayment}</p>
                    <hr />
                </div>
            `).join('')}
        </div>
        <div class="button-group">
            <button onclick="prevCheckerPage()">Log out</button>
        </div>
    `;
}


function nextCheckerPage() {
    if (currentPage > 14 && currentPage < 17) {
        currentPage++;
        renderPage();
    }
}

function prevCheckerPage() {
    const confirmation = window.confirm("Are you sure you want to log out?");
    if (confirmation && currentPage > 14 && currentPage < 17) {
        currentPage--;
        formData.loginDetails.financeType = '';
        formData.loginDetails.nric = '';
        formData.loginDetails.phoneNumber = '';
        formData.loginDetails.dealer = '';
        formData.loginDetails.agent = '';
        formData.loginDetails.phoneNumber = '';
        renderPage();
    }
}


renderPage();