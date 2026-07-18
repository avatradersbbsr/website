# Google Sheets & Email Enquiry Setup

This guide explains how to connect the AVA Traders website enquiry form to a Google Sheet and automatically send lead notification emails to `avatraders.in@gmail.com` as soon as an enquiry is submitted.

---

## 1. Setup Google Sheet & Apps Script

1. Open **[Google Sheets](https://sheets.google.com)** and open your spreadsheet.
2. Verify that your sheet has these exact headers in row 1:
   * **A**: `Timestamp`
   * **B**: `Name`
   * **C**: `Phone`
   * **D**: `Email`
   * **E**: `Message`
   * **F**: `Product Name`
3. In the top menu, go to **Extensions** ➔ **Apps Script**.
4. Replace all code in the editor (`Code.gs`) with the updated code below:

```javascript
/**
 * Google Apps Script Web App for AVA Traders Enquiry Form
 * 
 * Handles incoming POST requests from the website, appends the data to the Google Sheet,
 * and sends a premium email notification to avatraders.in@gmail.com with a direct WhatsApp reply link.
 */

// 1. CLICK RUN ON THIS FUNCTION FIRST TO AUTHORIZE EMAIL PERMISSIONS
function triggerAuthorization() {
  var emailTo = "avatraders.in@gmail.com";
  MailApp.sendEmail(emailTo, "Test Authorization", "Permissions are successfully authorized for AVA Traders!");
  Logger.log("Authorization completed successfully! You should receive a test email.");
}

// 2. Main Web App Handler
function doPost(e) {
  if (typeof e === 'undefined') {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": "No data received" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  try {
    var data = JSON.parse(e.postData.contents);
    
    // Get the active sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Create header row if the sheet is brand new and empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Phone", "Email", "Message", "Product Name"]);
      sheet.getRange(1, 1, 1, 6)
           .setFontWeight("bold")
           .setBackground("#e63946")
           .setFontColor("#ffffff")
           .setHorizontalAlignment("center");
    }
    
    // Append lead details as a new row (matching your sheet's column order)
    sheet.appendRow([
      new Date(),
      data.name,
      "'" + data.phone, // Prepend apostrophe so Sheets doesn't crop leading zeros
      data.email || "N/A",
      data.message,
      data.productName || "General Inquiry"
    ]);
    
    // Auto-fit columns to prevent text clipping
    sheet.autoResizeColumns(1, 6);
    
    // Construct WhatsApp Quick-Reply URL
    var cleanPhone = data.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length === 10) {
      cleanPhone = "91" + cleanPhone; // Prefix Indian country code if only 10 digits
    }
    var whatsappUrl = "https://wa.me/" + cleanPhone + "?text=" + encodeURIComponent(
      "Hi " + data.name + ", thank you for reaching out to AVA Traders regarding your enquiry about " + data.productName + ". How can we help you today?"
    );
    
    // Send Email Notification
    var emailTo = "avatraders.in@gmail.com";
    var subject = "🚨 New Enquiry: " + data.name + " - " + data.productName;
    
    // Premium responsive HTML template
    var htmlBody = `
      <div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;">
        <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
          <!-- Top red accent line -->
          <div style="height: 6px; background: linear-gradient(90deg, #e63946 0%, #ff6b6b 100%);"></div>
          
          <!-- Header Area -->
          <div style="padding: 30px 40px; border-bottom: 1px solid #f1f5f9; background-color: #ffffff;">
            <span style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #e63946; display: block; margin-bottom: 4px;">Website Lead Alert</span>
            <h2 style="margin: 0; font-size: 22px; font-weight: 800; color: #0f172a;">New Enquiry Received</h2>
          </div>
          
          <!-- Lead Details -->
          <div style="padding: 35px 40px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr>
                <td style="padding: 12px 0; font-size: 14px; font-weight: 600; color: #64748b; width: 130px; border-bottom: 1px solid #f1f5f9;">Name:</td>
                <td style="padding: 12px 0; font-size: 15px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-size: 14px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Phone:</td>
                <td style="padding: 12px 0; font-size: 15px; font-weight: 700; color: #e63946; border-bottom: 1px solid #f1f5f9;">
                  <a href="tel:${data.phone}" style="color: #e63946; text-decoration: none;">${data.phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-size: 14px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Email:</td>
                <td style="padding: 12px 0; font-size: 15px; color: #334155; border-bottom: 1px solid #f1f5f9;">
                  ${data.email ? `<a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a>` : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-size: 14px; font-weight: 600; color: #64748b; border-bottom: 1px solid #f1f5f9;">Product:</td>
                <td style="padding: 12px 0; font-size: 14px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #f1f5f9;">
                  <span style="background-color: #f1f5f9; padding: 4px 10px; border-radius: 6px; display: inline-block;">${data.productName}</span>
                </td>
              </tr>
            </table>
            
            <!-- Message block -->
            <div style="background-color: #f8fafc; border-left: 4px solid #e63946; padding: 20px; border-radius: 0 12px 12px 0; margin-bottom: 35px;">
              <h4 style="margin: 0 0 8px 0; font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 1px;">Customer Message</h4>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${data.message}</p>
            </div>
            
            <!-- CTA Button -->
            <div style="text-align: center; margin-top: 10px;">
              <a href="${whatsappUrl}" target="_blank" style="background-color: #25D366; color: #ffffff; text-decoration: none; padding: 14px 30px; font-size: 15px; font-weight: bold; border-radius: 50px; display: inline-block; box-shadow: 0 4px 14px rgba(37,211,102,0.25);">
                💬 Reply instantly on WhatsApp
              </a>
            </div>
          </div>
          
          <!-- Footer info -->
          <div style="background-color: #f8fafc; padding: 20px 40px; text-align: center; border-top: 1px solid #f1f5f9;">
            <p style="margin: 0; font-size: 11px; color: #94a3b8; line-height: 1.5;">
              This notification was generated automatically by the AVA Traders website.<br>
              Logged in sheet at ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })} IST.
            </p>
          </div>
        </div>
      </div>
    `;
    
    var plainBody = "Hello AVA Traders,\n\nNew lead details:\nName: " + data.name + "\nPhone: " + data.phone + "\nProduct: " + data.productName + "\nMessage: " + data.message + "\n\nReply via WhatsApp:\n" + whatsappUrl;
    
    MailApp.sendEmail({
      to: emailTo,
      subject: subject,
      body: plainBody,
      htmlBody: htmlBody
    });
    
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## 2. Deploy as a Web App

1. Click the **Save** icon (disk icon) in the Apps Script toolbar.
2. Select `triggerAuthorization` from the toolbar dropdown and click **Run** to authorize the permissions (if you haven't done it yet).
3. Click **Deploy** (top right) and select **Manage deployments**.
4. Click the **Pencil icon (Edit)**.
5. Under **Version**, choose **New version**.
6. Click **Deploy**.
