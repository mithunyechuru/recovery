

#  NeuroNova – AI Companion for Short-Term Recovery

NeuroNova is an **AI-powered recovery companion** designed to support people with **temporary health limitations** such as fractures, post-surgery recovery, sports injuries, wounds, and short-term mobility issues. Unlike traditional assistive apps that are built for permanent disabilities, NeuroNova focuses on **short-term, adaptive, and privacy-first support** that helps users regain independence instead of creating long-term dependency.

During recovery, patients often struggle with medication adherence, limited mobility, emotional stress, and dependency on caregivers for small daily tasks. Existing tools are either too generic, not adaptive, or designed for long-term use. NeuroNova fills this gap by acting as a **temporary digital companion** that adjusts its level of support as the user improves and gradually exits once recovery is complete.

---

##  Key Features

* **Adaptive Recovery Support**
  The system adjusts reminders, guidance, and interaction frequency based on the user’s recovery stage. As the user improves, AI assistance is gradually reduced.

* **Voice-First & One-Hand Accessible UI**
  Designed for users with limited mobility, NeuroNova supports hands-free and one-hand interactions using voice input and simple controls.

* **Smart Reminders & Recovery Tracking**
  Medication schedules, exercise routines, and daily check-ins are managed intelligently to ensure consistency and better recovery outcomes.

* **Exercise Module Based on Condition**
  Users receive guided exercises tailored to their injury or condition, helping them safely regain strength and mobility.

* **Caretaker Mode (Without Loss of Independence)**
  Family members or caregivers can monitor recovery progress and receive important alerts without invading the user’s privacy or autonomy.

* **Privacy-First Temporary Data Storage**
  All recovery-related data is stored only for the recovery period and can be automatically deleted after completion, ensuring better privacy and security.

* **Gradual AI Exit**
  A unique feature where the AI slowly reduces its involvement as the user becomes more independent, preventing long-term dependency.

---

##  Tech Stack

* **Frontend:** React / Flutter (Web & Mobile)
* **Backend:** Node.js / Python for AI logic and recovery management
* **Database:** MongoDB / PostgreSQL for temporary recovery data storage
* **AI & Services:**

  * Google Speech-to-Text for voice input
  * Coqui TTS for voice output
  * Firebase Cloud Messaging for reminders and alerts

---

## ⚙️ Setup Instructions

1. Clone the repository:

   ```bash
   git clone <your-repo-link>
   cd neuronnova
   ```

2. Install dependencies for frontend and backend:

   ```bash
   npm install
   ```

3. Configure environment variables (API keys, database URL, etc.) in a `.env` file.

4. Start the backend server:

   ```bash
   npm run server
   ```

5. Start the frontend application:

   ```bash
   npm run dev
   ```

6. Open the app in your browser or mobile emulator and begin using NeuroNova.

---

##  Use Cases

* People recovering from **fractures, surgeries, or injuries**
* Elderly users who need **simple, voice-based assistance**
* Caregivers who want **remote, non-intrusive monitoring**
* Users with **low digital literacy** who need accessible interfaces

---

##  Future Scope

Planned features include Prescription History Management, AI-driven adaptive prescription intelligence, Doctor & Physiotherapist dashboards, Telemedicine integration, and an Elevate Module for mood tracking and motivation.

---

NeuroNova aims to transform short-term recovery by providing **adaptive, intelligent, and privacy-first AI assistance** that promotes **independence, not dependency**. 

