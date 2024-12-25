## Selected Project Title
# JobHub: Post and Browse Jobs  

## About the Project  
**JobHub** is a simple and intuitive platform designed to allow users to post and browse job opportunities. All users have equal privileges to create, view, and browse job postings, but they can only update or delete the jobs they have posted themselves.  

The application ensures data security with JWT-based authentication and authorization. It provides a seamless experience for managing and viewing job opportunities, all while working offline in local environments.  

---

## Features  

### User Management  
- **Authentication and Authorization:**  
  - Secure login using JWT tokens.  
  - All users can manage their own job postings while browsing jobs posted by others.  

### Job Post Management (Full CRUD)  
- **Create:** Users can post job opportunities with complete details.  
- **Read:** All users can view their own job postings as well as those posted by others.  
- **Update:** Users can modify only the jobs they have posted.  
- **Delete:** Users can delete only the jobs they have posted.  

### Job Browsing  
- **List All Jobs:** Users can view a consolidated list of all job postings.  
- **View Job Details:** Users can explore detailed information about any job, including job description, requirements, and application steps.  

---

## Tech Stack  

### Backend  
- **Framework:** [NestJS](https://nestjs.com/)  
- **Database:** To be decided based on the project’s requirements (Relational or Document database).  

### Frontend  
- **Framework:** HTML5, CSS3 (with Bootstrap for styling).  
- **Programming Language:** TypeScript.  
- **API Communication:** JavaScript’s Fetch API organized into modules.  

---

## Key Design Considerations  
- **JWT-Based Security:** All authentication and authorization are handled via secure tokens.  
- **Offline Functionality:** The app works entirely on local machines without requiring internet connectivity.  
- **Responsive Design:** A mobile-friendly interface ensures usability on any device.  
- **Modular Structure:** Both the backend and frontend follow modular design principles for better maintainability and scalability.  

---

## Team Members

| Name            | ID          |
|-----------------|-------------|
| Yosef Aweke     | UGR/5887/13 |
| Liyat Tesfaye   | UGR/6140/12 |
| Feven Dereje    | UGR/9461/12 |



