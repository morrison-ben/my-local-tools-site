# Waitlist Email Collection Implementation Guide

## Overview
This document outlines how to implement the "Join the Waitlist" functionality that validates email addresses and stores them securely in Google Sheets. It also compares different storage options for managing waitlist/email data.

## Implementation Requirements

### 1. Email Collection Form Enhancement

#### Frontend Components
- Email input field with validation
- Submit button with loading state
- Success/error message display
- Optional: GDPR/privacy consent checkbox

#### Validation Requirements
- Check for valid email format
- Prevent duplicate submissions
- Ensure non-empty submission
- Rate limiting to prevent abuse

### 2. Google Sheets Integration Implementation

#### Google Sheets Setup
1. A new Google Sheet has been created with columns:
  - Timestamp (Column A)
   - Email Address (Column B)

2. Google Apps Script has been set up and deployed for anyone. Below is the code:

#### Google Apps Script Code

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    const timestamp = new Date().toISOString();
    
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Check for duplicates
    const values = sheet.getRange("A:A").getValues();
    for (let i = 0; i < values.length; i++) {
      if (values[i][0] === email) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          message: "Email already registered"
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    // Add the new email to the sheet
    sheet.appendRow([timestamp, email]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Successfully added to waitlist"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: "Error: " + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("This is a POST-only endpoint");
}
```

Deployment ID: AKfycbztn0b8x6vQKy4Xv5xN5PPO4NKddmgwdzh78xClpyJXNQS6QtsEO7xCEktxUxTtpxPw4A

Web app URL:
https://script.google.com/macros/s/AKfycbztn0b8x6vQKy4Xv5xN5PPO4NKddmgwdzh78xClpyJXNQS6QtsEO7xCEktxUxTtpxPw4A/exec

#### Frontend Code Structure

```jsx
// Email validation function
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Form state management
const [email, setEmail] = useState('');
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
const [errorMessage, setErrorMessage] = useState('');

// Form submission handler
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Reset states
  setSubmitStatus(null);
  setErrorMessage('');
  
  // Validate email
  if (!email.trim()) {
    setSubmitStatus('error');
    setErrorMessage('Please enter your email address');
    return;
  }
  
  if (!isValidEmail(email)) {
    setSubmitStatus('error');
    setErrorMessage('Please enter a valid email address');
    return;
  }
  
  // Submit to Google Apps Script Web App
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        source: 'landing_page',
        timestamp: new Date().toISOString()
      })
    });
    
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.message || 'Failed to join waitlist');
    }
    
    // Success
    setSubmitStatus('success');
    setEmail('');
  } catch (error) {
    setSubmitStatus('error');
    setErrorMessage(error.message || 'Something went wrong. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
```

#### Component Implementation

```jsx
<form onSubmit={handleSubmit} className="d-flex flex-column gap-3 mb-4">
  <div className="input-group">
    <input
      type="email"
      className={`form-control form-control-lg py-3 ${submitStatus === 'error' ? 'is-invalid' : ''}`}
      placeholder="Enter your email address"
      aria-label="Email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      disabled={isSubmitting}
    />
    <button 
      className="btn btn-brand-primary btn-lg px-4" 
      type="submit"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Processing...
        </>
      ) : 'Join the Waitlist'}
    </button>
  </div>
  
  {submitStatus === 'error' && (
    <div className="text-danger small">{errorMessage}</div>
  )}
  
  {submitStatus === 'success' && (
    <div className="text-success small">Thank you! You've been added to our waitlist.</div>
  )}
</form>
```

## Storage Options Comparison

### 1. Google Sheets (Our Selected Solution)
- **Pros**: 
  - Free for up to 10,000+ emails
  - Simple to set up and manage
  - Easy to export data to other systems
  - Familiar interface for non-technical team members
  - Built-in collaboration features
- **Cons**: 
  - Limited automation capabilities
  - No built-in email sending
  - Manual export required for email marketing
  - Limited scalability for very large lists (100,000+)
- **Best for**: 
  - Early-stage startups and MVPs
  - Small teams with limited technical resources
  - Projects with tight budgets
- **API Integration**: 
  - Google Apps Script web app endpoint
  - Google Sheets API (for more advanced integrations)
- **Pricing**: 
  - Free with Google Workspace account


## Recommendation

For Cerana's waitlist implementation, we recommend:

### For MVP/Early Stage (Current Approach):
**Google Sheets** - Simple, free, and requires minimal setup. Perfect for collecting initial waitlist signups with easy export options when ready to transition to a more robust system.

### For Growth Stage (Future Consideration):
**SendinBlue (Brevo)** or **Mailchimp** - When ready to engage with the waitlist via email campaigns, export the Google Sheets data to one of these platforms.

### Implementation Steps for Google Sheets:

1. Create a new Google Sheet with appropriate columns
2. Set up Google Apps Script web app endpoint
3. Deploy the script and note the web app URL
4. Implement frontend form with validation
5. Connect form to Google Apps Script endpoint
6. Test with various email formats and edge cases
7. Set up access sharing for team members who need to view the data

## Security Considerations

1. Use CORS headers in your Google Apps Script to restrict access
2. Implement rate limiting to prevent abuse (can be done with localStorage)
3. Use HTTPS for all API requests
4. Consider adding CAPTCHA for spam prevention
5. Ensure GDPR compliance with clear opt-in language
6. Limit access to the Google Sheet to only necessary team members
7. Regularly back up the sheet data
