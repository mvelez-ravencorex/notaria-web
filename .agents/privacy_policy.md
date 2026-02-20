# Privacy Policy

**NotarIA — AI-Powered Meeting Transcription**

**Effective Date:** February 10, 2026

---

This Privacy Policy describes how RavencoreX LLC ("we," "us," or "our") collects, uses, and protects your information when you use the NotarIA mobile application ("the App"). We are committed to protecting your privacy and being transparent about our data practices.

> **Our Core Principle:** NotarIA is designed with a privacy-first approach. Audio is recorded and stored locally on your device. We do not place bots in your video calls. You have full control over your data and can delete everything at any time.

---

## 1. Information We Collect

### 1.1 Account Information

When you create an account, we collect:

- **Email address** — used for authentication and account recovery
- **Display name** — shown within the App
- **Profile photo** (optional) — if you choose to add one
- **Authentication provider** — whether you sign in with Email, Google, or Apple ID

If you sign in with Google or Apple, we receive only the information those services share (typically name and email). We never receive or store your Google or Apple password.

### 1.2 Audio Recordings

NotarIA records audio from your device's microphone when you initiate a recording session. Audio recordings are:

- **Stored locally** on your device first
- **Uploaded to Firebase Storage** (Google Cloud) for processing
- **Automatically deleted** from cloud storage after your plan's retention period expires (7 to 90 days depending on your subscription plan)

We do not access, listen to, or review your audio recordings.

### 1.3 Transcriptions and AI-Generated Content

When you record a meeting, we generate and store:

- **Transcriptions** — text conversion of your audio with speaker identification
- **AI-generated analysis** — summaries, action items, keywords, key moments, and sentiment analysis
- **AI Chat history** — questions you ask and responses generated about your meetings

### 1.4 Usage Data

We track usage metrics to enforce subscription limits:

- Minutes of audio recorded per month
- Number of AI feature uses per month
- Number of audio downloads per month

This data is stored in your user profile and is not shared with third parties.

### 1.5 Subscription Information

If you purchase a subscription, Apple processes the payment. We receive your subscription plan, status, and dates. We do not receive your payment method or billing address.

### 1.6 Information We Do NOT Collect

- We do not collect your location
- We do not collect your contacts
- We do not use advertising identifiers (IDFA)
- We do not use analytics SDKs
- We do not track you across apps or websites

---

## 2. How We Use Your Information

| Purpose | Data Used |
|---------|-----------|
| Provide the transcription service | Audio recordings (sent to AssemblyAI for processing) |
| Generate AI analysis | Transcription text (sent to Anthropic Claude for analysis) |
| Authenticate your account | Email, name, authentication tokens |
| Enforce subscription limits | Usage counters (minutes, AI uses, downloads) |
| Store and retrieve your meetings | Transcriptions, summaries, action items, and other meeting data |
| Process subscriptions | Subscription status received from Apple |

We do not use your data for advertising, profiling, or selling to third parties.

---

## 3. Third-Party Services

NotarIA uses the following third-party services to operate. Each service only receives the minimum data necessary for its function:

| Service | Provider | Data Shared | Purpose |
|---------|----------|-------------|---------|
| Firebase Authentication | Google LLC | Email, name, auth tokens | User authentication (Email, Google Sign-In, Apple Sign-In) |
| Firebase Firestore | Google LLC | Meeting data, user profiles, usage counters | Data storage |
| Firebase Storage | Google LLC | Audio files | Temporary audio storage (auto-deleted per retention policy) |
| Firebase Cloud Functions | Google LLC | Audio files, transcription text | Server-side processing (API orchestration) |
| AssemblyAI | AssemblyAI Inc. | Audio files | Speech-to-text transcription with speaker identification |
| Anthropic Claude | Anthropic PBC | Transcription text | AI analysis (summaries, action items, keywords, moments, sentiment, chat) |
| Apple StoreKit | Apple Inc. | Subscription purchase data | In-app subscription processing |

> **On-Device Translation:** NotarIA's live translation feature uses the Apple Translation Framework, which runs entirely on your device. No translation data is sent to any server. This feature has zero data collection.

We do not use advertising networks, analytics platforms, or tracking services.

### 3.1 Third-Party AI Services

NotarIA uses the following third-party services to process your meeting data:

**1. AssemblyAI** ([assemblyai.com](https://www.assemblyai.com))
- **Receives:** Audio recordings
- **Purpose:** Speech-to-text transcription and speaker identification
- **Privacy Policy:** [assemblyai.com/legal/privacy-policy](https://www.assemblyai.com/legal/privacy-policy)

**2. Anthropic** ([anthropic.com](https://www.anthropic.com))
- **Receives:** Transcription text
- **Purpose:** Generate summaries, action items, key moments, keywords, and sentiment analysis
- **Privacy Policy:** [anthropic.com/privacy](https://www.anthropic.com/privacy)

> Your data is transmitted securely using encrypted connections (HTTPS/TLS). These services process your data solely to provide the requested features and do not use your data to train their AI models under our commercial API agreements.

---

## 4. Data Storage and Retention

### 4.1 Where Your Data Is Stored

Your data is stored in Firebase (Google Cloud Platform) servers in the United States.

### 4.2 Audio Retention

Audio files stored in the cloud are automatically deleted based on your subscription plan:

| Plan | Audio Retention |
|------|----------------|
| Starter (Free) | 7 days |
| Pro | 14 days |
| Plus | 30 days |
| Business | 60 days |
| Enterprise | 90 days |

An automated Cloud Function runs daily to delete expired audio files. After deletion, the audio cannot be recovered.

### 4.3 Meeting Data Retention

Text-based meeting data is retained as long as your account is active. You can delete individual meetings or all data at any time.

### 4.4 Account Deletion

You can delete your account at any time (Settings > Delete Account). This permanently removes all your data and is irreversible.

---

## 5. Data Security

We implement security measures including: API Key Protection via Firebase Secret Manager, iOS App Attest verification, rate limiting, temporary tokens, TLS/HTTPS encryption, Firebase Security Rules, and AI Chat restrictions.

---

## 6. Your Rights and Choices

### 6.1 Access and Export

You can view, export (PDF), download (audio), and share your meeting data at any time from within the App.

### 6.2 Deletion

Delete individual meetings or your entire account and all associated data (Settings > Delete Account).

### 6.3 Control

You choose whether to enable live transcription, AI analysis, your preferred language, and can edit speaker names or cancel your subscription at any time.

### 6.4 For Users in the European Economic Area (EEA)

If you are located in the EEA, you have additional rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, port, and erase your personal data, as well as the right to restrict or object to certain processing. To exercise these rights, contact us at legal@ravencorex.com.

### 6.5 For Users in California (USA)

If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and how it is used, the right to request deletion, and the right to opt out of the sale of personal information. **We do not sell your personal information.** To exercise your rights, contact us at legal@ravencorex.com.

---

## 7. Children's Privacy

NotarIA is not directed at children under 13. We do not knowingly collect information from children.

---

## 8. Subscriptions

Payment is processed by Apple. Subscriptions renew automatically unless canceled at least 24 hours before the current period ends. Manage subscriptions in Settings > Apple ID > Subscriptions.

---

## 9. Changes to This Privacy Policy

We may update this policy and will notify you of material changes through the App or via email.

---

## 10. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

**RavencoreX LLC**
2 S Biscayne Boulevard, Suite 3200 #4821
Miami, FL 33131
United States

Email: legal@ravencorex.com

We will respond to your inquiry within 30 days.

---

*© 2026 RavencoreX LLC. All rights reserved. NotarIA is a product of RavencoreX LLC.*