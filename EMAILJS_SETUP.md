# EmailJS Setup Guide for Web Pros Africa Contact Form

This guide will walk you through the process of setting up EmailJS to enable the contact form on the Web Pros Africa website.

## Prerequisites

1. Create a free account at [EmailJS](https://www.emailjs.com/).

## Step 1: Add an Email Service

1. Log in to your EmailJS dashboard.
2. Navigate to **Email Services** on the left sidebar.
3. Click **Add New Service**.
4. Select your preferred email provider (e.g., Gmail).
5. Connect your email account and click **Create Service**.
6. **Copy your Service ID** (it usually looks like `service_xxxxxxx`).

## Step 2: Create an Email Template

1. Navigate to **Email Templates** on the left sidebar.
2. Click **Create New Template**.
3. Configure the template using the variables we set up in the frontend. 

**Recommended Template Content:**

**Subject:** `New Inquiry from {{from_name}} - {{service_needed}}`

**Content:**
```text
You got a new message from {{from_name}}:

Name: {{from_name}}
Email: {{reply_to}}
Phone: {{phone}}
Business Name: {{business_name}}
Service Needed: {{service_needed}}
Estimated Budget: {{budget}}

Message:
{{message}}
```
4. Click **Save** in the top right corner.
5. **Copy your Template ID** (it usually looks like `template_xxxxxxx`).

## Step 3: Get Your Public Key

1. Navigate to **Account** -> **API Keys** on the dashboard.
2. **Copy your Public Key**.

## Step 4: Update Frontend Code

1. Open the `/src/pages/Contact.tsx` file in your code editor.
2. Locate the `handleSubmit` function.
3. Replace the placeholder values with the IDs and Key you copied:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',   // Replace with your Service ID
  'YOUR_TEMPLATE_ID',  // Replace with your Template ID
  {
    from_name: formData.name,
    reply_to: formData.email,
    phone: formData.phone,
    business_name: formData.businessName,
    service_needed: formData.serviceNeeded,
    budget: formData.budget,
    message: formData.message,
  },
  {
    publicKey: 'YOUR_PUBLIC_KEY'    // Replace with your Public Key
  }
);
```

## Step 5: Test the Form

1. Ensure your development server is running (`npm run dev`).
2. Fill out the contact form and hit "Send Message".
3. Check the email inbox you connected in Step 1 to verify the message was received.
