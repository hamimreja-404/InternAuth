# 🎓 InternAuth: Full-Stack Teacher Management System

This project is a complete full-stack implementation for the Developer Intern interview task. It features a robust CodeIgniter 4 REST API backend and a high-end, responsive ReactJS frontend styled with Tailwind CSS.

---

## 🚀 Key Requirements Fulfilled

* **CodeIgniter 4 Application:** Fully functional PHP backend following strict MVC patterns.
* **Auth Functionality:** Secure Registration and Login modules.
* **Token-based Auth:** Implemented JWT (JSON Web Token) for protecting sensitive data endpoints.
* **Relational Database:** * `auth_user`: Stores basic credentials and identity.
    * `teachers`: Stores academic profiles linked via `user_id` (1-to-1 Relationship).
* **Single POST API:** Implemented `/api/register` to atomically push data into both tables simultaneously, ensuring data integrity.
* **ReactJS Application:** Features a modern Glassmorphism UI design, separate datatables for User and Teacher profiles, and sidebar-based administrative navigation.

---

## 🛠️ Tech Stack

**Backend**
* PHP 8.x
* CodeIgniter 4
* Firebase JWT

**Frontend**
* ReactJS (Vite)
* Tailwind CSS
* Framer Motion
* Lucide React
* Axios

**Database**
* MySQL (Optimized with Foreign Keys)

---

## 📦 Project Directory Structure

```text
/backend-api    -> CodeIgniter 4 Source Code
/frontend-app   -> ReactJS (Vite) Source Code
/database       -> MySQL .sql Export File