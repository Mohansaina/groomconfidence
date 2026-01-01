# GroomConfidence - Daily Grooming & Confidence App

A daily grooming & confidence app that helps men understand what hairstyle truly suits them.

## About

This app helps men:
- Take a selfie and get clear grooming feedback
- Track which look makes them feel most confident over time
- Find their best look with no filters or fake compliments - just clarity

## Features

- **Selfie Analysis**: Take a selfie in good lighting and get grooming feedback
- **Confidence Tracking**: Track which looks make you feel most confident
- **Best Look Finder**: Save the haircut/style that suits you best
- **Barbershop Helper**: Useful before barbershop visits to communicate your desired look

## How It Works

1. Take a selfie using the front camera in good lighting
2. Get grooming feedback analyzing hair, face balance, and grooming alignment
3. Track confidence over time to see what works and what doesn't
4. Find your best look as the app saves the haircut/style that suits you best

## Technology

- Built with computer vision & behavioral insights
- Privacy-first approach - your photos stay secure
- Focused on confidence, not filters

## Getting Started

To run this project locally:

1. Clone the repository
2. Open `index.html` in your browser

## Setting Up Email Collection

To collect emails from the waitlist form using Google Forms:

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form
3. Add an email field and any other fields you want
4. Click "Send" and then "Link" to get the form link
5. Change the end from `/viewform?usp=sf_link` to `/formResponse`
6. Find the entry ID for your email field by inspecting the form HTML or checking the URL when editing
7. Replace `YOUR_GOOGLE_FORM_ID` and `YOUR_ENTRY_ID` in both `index.html` and `script.js`

Example:
- Google Form URL: `https://docs.google.com/forms/d/e/1FAIpQLScnWKm9N2nL6AAhcGG9/viewform`
- Form Response URL: `https://docs.google.com/forms/d/e/1FAIpQLScnWKm9N2nL6AAhcGG9/formResponse`
- The `YOUR_GOOGLE_FORM_ID` has been updated with your form ID
- You still need to find the correct entry ID for your email field (replace `YOUR_EMAIL_ENTRY_ID` with the actual ID)

To find the entry ID:
1. Go to your Google Form: https://docs.google.com/forms/d/e/1FAIpQLScnWKm9N2nL6AAhcGG9/edit
2. Click on the email field you created
3. Look at the address bar - you'll see a parameter like `entry_id=1234567890` or similar
4. Or inspect the form HTML to find the input field name which looks like `entry.1234567890`
5. Replace `YOUR_EMAIL_ENTRY_ID` with the actual entry ID in both `index.html` and `script.js`

Note: The link opens the Google Form in a new tab for user convenience.

## Alternative: Using Formspree

As an alternative to Google Forms, you can use Formspree:

1. Go to [Formspree](https://formspree.io)
2. Sign up for a free account
3. Create a new form and copy the form endpoint URL
4. Replace `YOUR_GOOGLE_FORM_ID` with your Formspree form ID in both files

Example:
- Formspree URL: `https://formspree.io/f/abc123xyz`
- Replace `YOUR_GOOGLE_FORM_ID` with `abc123xyz`

## Contributing

We welcome contributions to improve the GroomConfidence app. Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.