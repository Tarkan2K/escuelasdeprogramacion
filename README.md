# Escuelas de Programación (Universal Code Mastery Platform)

**Scalable EdTech platform engineering for Systems Programming & High-Performance Computing.**

[![Deployment Status](https://img.shields.io/badge/Deployment-Production-success?style=flat-square)](https://escuelasdeprogramacion.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Stack-React_JavaScript-blue?style=flat-square)]()
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)]()

---

## Project Overview

**Escuelas de Programación** is a scalable Learning Management System (LMS) designed to deliver structured technical curricula. The platform currently operates as a high-performance Single Page Application (SPA), serving a comprehensive **Advanced C++ Module**.

The project is engineered for scalability, with a modular architecture ready to support future tracks in Python, Rust, and JavaScript. It focuses on rigorous assessment through a tiered examination system and practical coding challenges.

### Current Status
* **Production Ready:** The platform is fully deployed and operational.
* **Content Centric:** Features a complete C++ learning path backed by technical documentation.
* **Scalable Foundation:** Community and Resource interfaces are implemented, laying the groundwork for future user interaction and forum integration.

---

## Key Features

### 1. Advanced Systems Curriculum (C++)
The pilot module offers a structured learning path focused on Systems Programming. Unlike standard tutorials, it includes specific case studies on **Memory Management**, **Small String Optimization (SSO)**, and RAII patterns, backed by detailed documentation and code analysis.

**Sample Challenges:**
* **SSO Implementation:** Recreating the `std::string` internal buffer optimization logic using Unions and memory layout techniques.
* **Smart Pointer Architecture:** Implementing a custom `SharedPtr` with reference counting and Move Semantics (Rule of Five).
* **Concurrency Patterns:** Building a Thread-Safe Producer-Consumer Queue utilizing `std::mutex`, `std::condition_variable`, and protection against spurious wakeups.

### 2. Tiered Assessment Engine
A robust testing system designed to validate knowledge retention through standardized exams:
* **Standard Exams:** Three distinct difficulty tiers (Easy, Medium, Hard), each consisting of **20 questions** to comprehensively test the user's understanding of the module.
* **Blitz Mode (Expert):** A randomized rapid-fire question engine designed for advanced users to test their reflexes on complex topics.

### 3. Practical Challenges & Solutions
Theory is reinforced through application.
* **Module Challenges:** Each learning module concludes with a practical coding challenge.
* **Alternative Questions:** Critical thinking questions with multiple-choice alternatives.
* **Integrated Solutions:** Full solution keys are provided for every challenge to ensure the learning loop is closed.

### 4. Community Infrastructure
The platform includes dedicated interfaces for **Community** and **Resources**, currently deployed as foundational UI elements in preparation for the upcoming user authentication and discussion forum systems.

---

## System Architecture

The project utilizes a modern frontend architecture optimized for fast content delivery and responsiveness.

| Component | Technology | Role |
| :--- | :--- | :--- |
| **Frontend** | React / JavaScript | Component-based UI for dynamic content rendering. |
| **Styling** | Tailwind CSS | Utility-first CSS for a consistent, responsive design. |
| **Routing** | React Router | Client-side routing for seamless navigation. |
| **Data Layer** | JSON / Static Data | Structured content management for chapters and exams. |
| **Deployment** | Vercel | Global content distribution. |

---

## Local Development Setup

To run this project locally for development or contribution:

**1. Clone the repository**
```bash
git clone [https://github.com/Tarkan2K/escuelasdeprogramacion.git](https://github.com/Tarkan2K/escuelasdeprogramacion.git)
cd escuelasdeprogramacion

2. Navigate to the source code directory (Critical Step: The frontend logic resides in the cpp-mastery-web folder)

cd cpp-mastery-web

3. Install dependencies
npm install

3. Start the development server
npm run dev

Future Roadmap
The platform is designed to scale horizontally into a multi-language ecosystem.

[ ] Multi-Language Expansion: Implementation of full learning tracks for Python, Rust, and JavaScript.

[ ] AI Tutor Integration: Future implementation of RAG (Retrieval-Augmented Generation) for contextual student assistance.

[ ] User Authentication: implementation of login systems to track student progress and exam history.

[ ] Community Forum: Activation of the backend logic for the Community and Resources pages.

Author: Matías García Castillo Contact: mstias.gc@gmail.com
