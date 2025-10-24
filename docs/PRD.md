# Product Requirements Document (PRD)

## Church Request Tracking Management System

---

### 1. Document Control

| Version | Date             | Author              | Changes       |
|----------|------------------|---------------------|----------------|
| 1.0      | October 24, 2025 | Kenneth Imade  | Initial PRD    |

---

### 2. Executive Summary

#### 2.1 Purpose

This document outlines the requirements for a **Request Tracking Management System** designed to streamline the procurement approval process for a church organization.  
The system will digitize the current manual workflow, enabling department heads to submit requests, track approval status, and facilitate a two-tier approval process involving branch leadership and global finance.

#### 2.2 Project Vision

To create an **efficient, transparent, and auditable request management system** that reduces administrative overhead, improves communication between stakeholders, and provides clear visibility into the procurement approval pipeline.

#### 2.3 Success Criteria

- Reduction in request processing time by at least **50%**
- **100%** digital tracking of all requests from submission to completion  
- Clear **audit trail** for all approvals and decisions  
- **User adoption rate** of 90% within first 3 months  
- **Zero data loss** or security breaches  

---

### 3. Stakeholders

| Role                        | Responsibility                                   | System Access Level  |
|------------------------------|--------------------------------------------------|----------------------|
| Department Heads             | Submit and track requests                        | Requester            |
| Resident Pastors (Branch Heads) | First-level approval                           | Branch Approver      |
| Global Finance Head          | Second-level approval and fund release          | Finance Approver     |
| System Administrators        | User management, system configuration            | Admin                |
| In-house Engineers           | Development, maintenance, support                | Developer/Admin      |

---

### 4. Current State Analysis

#### 4.1 Current Workflow Pain Points

- **Manual tracking:** No centralized system to track request status  
- **Communication delays:** Email/messaging-based follow-ups are inefficient  
- **Lack of visibility:** Requesters cannot easily see where their request is in the pipeline  
- **No audit trail:** Difficult to track historical decisions and approvals  
- **Data inconsistency:** Request information may be incomplete or formatted differently  
- **Bottlenecks:** Approvers may miss requests or delay responses  

#### 4.2 Current Workflow

```
Department Head → Collates items → Sends to Resident Pastor → 
Approval/Rejection → (If approved) → Sends to Global Finance Head → 
Approval/Rejection → (If approved) → Finance Released
```

---

## 5. Functional Requirements

### 5.1 User Management & Authentication

**REQ-AUTH-001**: The system shall provide secure authentication using email and password.

**REQ-AUTH-002**: The system shall support role-based access control (RBAC) with the following roles:

- Department Head (Requester)
- Resident Pastor (Branch Approver)
- Global Finance Head (Finance Approver)
- System Administrator

**REQ-AUTH-003**: The system shall implement password complexity requirements and secure password storage (hashing).

**REQ-AUTH-004**: The system shall support password reset functionality via email.

**REQ-AUTH-005**: The system shall log all user authentication attempts.

### 5.2 Request Creation

**REQ-REQ-001**: Department heads shall be able to create a new request containing:

- Request title/description
- Department/ministry name
- Request date (auto-generated)
- List of items

**REQ-REQ-002**: Each item in a request shall contain:

- Item name (required)
- Item description (optional)
- Quantity (required, numeric)
- Unit price (required, numeric)
- Total price (auto-calculated: quantity × unit price)
- Product link/URL (optional)
- Notes/comments (optional)

**REQ-REQ-003**: The system shall calculate and display the total request amount (sum of all items).

**REQ-REQ-004**: Department heads shall be able to save requests as drafts before submission.

**REQ-REQ-005**: Department heads shall be able to edit or delete draft requests.

**REQ-REQ-006**: Department heads shall be able to submit requests for approval.

**REQ-REQ-007**: Once submitted, requests shall be immutable (cannot be edited by the requester).

**REQ-REQ-008**: The system shall validate all required fields before allowing submission.

### 5.3 Approval Workflow

**REQ-APPR-001**: The system shall implement a two-tier approval workflow:

- **Tier 1**: Resident Pastor (Branch Approver)
- **Tier 2**: Global Finance Head (Finance Approver)

**REQ-APPR-002**: When a request is submitted, it shall automatically be routed to the appropriate Resident Pastor based on the requester's branch.

**REQ-APPR-003**: Resident Pastors shall be able to:

- View all pending requests from their branch
- Approve requests
- Reject requests with mandatory comments
- Request modifications with comments (returns to requester)

**REQ-APPR-004**: When a Resident Pastor approves a request, it shall automatically be routed to the Global Finance Head.

**REQ-APPR-005**: The Global Finance Head shall be able to:

- View all requests approved by Resident Pastors
- Approve requests (final approval)
- Reject requests with mandatory comments
- Request modifications with comments (returns to requester)

**REQ-APPR-006**: When a request is rejected at any level, the requester shall be notified with the reason.

**REQ-APPR-007**: When a request is approved by the Global Finance Head, the status shall change to "Approved - Pending Release."

**REQ-APPR-008**: The Global Finance Head shall be able to mark approved requests as "Funds Released."

**REQ-APPR-009**: All approval actions shall be timestamped and logged with the approver's identity.

### 5.4 Request Status Tracking

**REQ-STAT-001**: The system shall support the following request statuses:

- Draft
- Submitted (Pending Branch Approval)
- Approved by Branch (Pending Finance Approval)
- Approved by Finance (Pending Release)
- Funds Released (Completed)
- Rejected by Branch
- Rejected by Finance
- Modification Requested

**REQ-STAT-002**: Department heads shall be able to view all their requests with current status.

**REQ-STAT-003**: Department heads shall be able to filter and search their requests by status, date, or amount.

**REQ-STAT-004**: Approvers shall be able to view all requests assigned to them with filtering and sorting capabilities.

### 5.5 Notifications

**REQ-NOTIF-001**: The system shall send email notifications for:

- Request submission (to appropriate Resident Pastor)
- Branch approval (to Global Finance Head and requester)
- Final approval (to requester)
- Rejection (to requester with comments)
- Modification request (to requester with comments)
- Funds released (to requester)

**REQ-NOTIF-002**: The system shall provide in-app notifications for all status changes.

**REQ-NOTIF-003**: Users shall be able to configure notification preferences.

### 5.6 Reporting & Analytics

**REQ-REPT-001**: The system shall provide dashboard views for:

- Department heads: Personal request summary
- Resident Pastors: Pending approvals and branch statistics
- Global Finance Head: Overall request pipeline and financial metrics
- Administrators: System usage and health metrics

**REQ-REPT-002**: The system shall generate reports including:

- Request history by department
- Request history by date range
- Approval turnaround times
- Total spending by department
- Rejection reasons analysis

**REQ-REPT-003**: Reports shall be exportable in CSV and PDF formats.

### 5.7 Audit Trail

**REQ-AUDIT-001**: The system shall maintain a complete audit log of all actions including:

- Request creation and modification
- All approval/rejection actions
- Status changes
- User login/logout events
- Administrative actions

**REQ-AUDIT-002**: Audit logs shall be immutable and include timestamps, user identity, and action details.

**REQ-AUDIT-003**: Administrators shall be able to view and search audit logs.

### 5.8 Administrative Functions

**REQ-ADMIN-001**: Administrators shall be able to:

- Create, update, and deactivate user accounts
- Assign and modify user roles
- Manage department/branch configurations
- Configure system settings (email templates, approval thresholds, etc.)

**REQ-ADMIN-002**: Administrators shall be able to reassign requests if an approver is unavailable.

**REQ-ADMIN-003**: The system shall support multiple branches with branch-specific Resident Pastors.

---

## 6. Non-Functional Requirements

### 6.1 Performance

**REQ-PERF-001**: The system shall load pages within 2 seconds under normal load conditions.

**REQ-PERF-002**: The system shall support at least 100 concurrent users.

**REQ-PERF-003**: Database queries shall execute within 500ms for 95% of requests.

**REQ-PERF-004**: The system shall handle at least 1000 requests per month without performance degradation.

### 6.2 Security

**REQ-SEC-001**: All data transmission shall be encrypted using HTTPS/TLS.

**REQ-SEC-002**: Passwords shall be hashed using industry-standard algorithms (bcrypt, Argon2).

**REQ-SEC-003**: The system shall implement protection against common vulnerabilities (OWASP Top 10):

- SQL injection
- Cross-site scripting (XSS)
- Cross-site request forgery (CSRF)
- Authentication bypass

**REQ-SEC-004**: The system shall implement rate limiting to prevent abuse.

**REQ-SEC-005**: Sensitive data shall be encrypted at rest in the database.

**REQ-SEC-006**: The system shall implement session timeout after 30 minutes of inactivity.

**REQ-SEC-007**: Failed login attempts shall be logged and limited (account lockout after 5 failed attempts).

### 6.3 Reliability & Availability

**REQ-REL-001**: The system shall have 99% uptime during business hours (8 AM - 8 PM local time).

**REQ-REL-002**: The system shall implement automated database backups daily.

**REQ-REL-003**: The system shall provide disaster recovery capability with Recovery Time Objective (RTO) of 4 hours.

**REQ-REL-004**: The system shall implement graceful error handling with user-friendly error messages.

### 6.4 Scalability

**REQ-SCAL-001**: The system architecture shall support horizontal scaling.

**REQ-SCAL-002**: The database shall be designed to handle growth to 10,000+ requests over 5 years.

**REQ-SCAL-003**: The system shall support adding new branches and departments without code changes.

### 6.5 Maintainability

**REQ-MAINT-001**: Code shall follow TypeScript best practices and style guides.

**REQ-MAINT-002**: The system shall include comprehensive API documentation.

**REQ-MAINT-003**: The system shall include logging for debugging and monitoring purposes.

**REQ-MAINT-004**: The system shall be containerized using Docker for consistent deployment.

### 6.6 Usability

**REQ-USE-001**: The user interface shall be intuitive and require minimal training.

**REQ-USE-002**: The system shall be responsive and work on desktop, tablet, and mobile devices.

**REQ-USE-003**: The system shall provide helpful error messages and validation feedback.

**REQ-USE-004**: The system shall support common browsers (Chrome, Firefox, Safari, Edge - latest 2 versions).

### 6.7 Compliance & Data Privacy

**REQ-COMP-001**: The system shall comply with applicable data protection regulations.

**REQ-COMP-002**: User data shall only be accessible to authorized personnel.

**REQ-COMP-003**: The system shall support data retention policies (ability to archive old requests).

---

## 7. Technical Architecture

### 7.1 Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| Backend Framework | Express.js | Latest stable |
| Programming Language | TypeScript | 5.x+ |
| Database | PostgreSQL | 15.x+ |
| Containerization | Docker | Latest stable |
| API Architecture | RESTful API | - |
| Authentication | JWT (JSON Web Tokens) | - |

### 7.2 High-Level Architecture

```
┌─────────────────┐
│   Web Client    │
│  (Browser/SPA)  │
└────────┬────────┘
         │ HTTPS
         ▼
┌─────────────────┐
│  API Gateway/   │
│  Load Balancer  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Express.js     │
│  Application    │
│  Server(s)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   PostgreSQL    │
│    Database     │
└─────────────────┘
```

### 7.3 Deployment Architecture

**REQ-DEPLOY-001**: The system shall be containerized using Docker with separate containers for:

- Application server
- PostgreSQL database
- Nginx reverse proxy (optional)

**REQ-DEPLOY-002**: Docker Compose shall be used for local development and testing.

**REQ-DEPLOY-003**: Environment-specific configurations shall be managed through environment variables.

### 7.4 Database Design Considerations

**REQ-DB-001**: The database shall use proper normalization to avoid data redundancy.

**REQ-DB-002**: The database shall implement appropriate indexes for performance optimization.

**REQ-DB-003**: The database shall use foreign key constraints to maintain referential integrity.

**REQ-DB-004**: The database shall implement soft deletes for critical data (users, requests).

---

## 8. System Interfaces

### 8.1 User Interfaces

**REQ-UI-001**: The system shall provide web-based user interfaces for:

- Login/authentication
- Dashboard (role-specific)
- Request creation and management
- Approval workflow
- Reporting and analytics
- User and system administration

**REQ-UI-002**: The UI shall follow responsive design principles.

**REQ-UI-003**: The UI shall provide clear visual indicators for request status.

### 8.2 API Interfaces

**REQ-API-001**: The system shall expose RESTful APIs following standard conventions:

- GET for retrieval
- POST for creation
- PUT/PATCH for updates
- DELETE for deletion

**REQ-API-002**: APIs shall return appropriate HTTP status codes (200, 201, 400, 401, 403, 404, 500, etc.).

**REQ-API-003**: APIs shall use JSON for request and response payloads.

**REQ-API-004**: APIs shall implement proper error handling and return consistent error response structures.

### 8.3 Email Interface

**REQ-EMAIL-001**: The system shall integrate with an SMTP email service for sending notifications.

**REQ-EMAIL-002**: Email templates shall be configurable by administrators.

---

## 9. Data Requirements

### 9.1 Core Data Entities

1. **Users**
   - User ID (PK)
   - Email
   - Password hash
   - Full name
   - Role
   - Branch/Department
   - Status (active/inactive)
   - Created/updated timestamps

2. **Requests**
   - Request ID (PK)
   - Requester ID (FK)
   - Request title
   - Department
   - Branch
   - Status
   - Total amount
   - Submission date
   - Created/updated timestamps

3. **Request Items**
   - Item ID (PK)
   - Request ID (FK)
   - Item name
   - Description
   - Quantity
   - Unit price
   - Total price
   - Product URL
   - Notes

4. **Approvals**
   - Approval ID (PK)
   - Request ID (FK)
   - Approver ID (FK)
   - Approval level (1 or 2)
   - Action (approved/rejected/modification_requested)
   - Comments
   - Timestamp

5. **Branches/Departments**
   - Branch ID (PK)
   - Branch name
   - Resident Pastor ID (FK)
   - Status

6. **Audit Logs**
   - Log ID (PK)
   - User ID (FK)
   - Action type
   - Entity type
   - Entity ID
   - Details
   - Timestamp
   - IP address

### 9.2 Data Retention

**REQ-DATA-001**: Active requests shall be retained indefinitely.

**REQ-DATA-002**: Completed requests shall be retained for at least 7 years for audit purposes.

**REQ-DATA-003**: Audit logs shall be retained for at least 3 years.

**REQ-DATA-004**: The system shall support archiving old completed requests.

---

## 10. Testing Requirements

### 10.1 Unit Testing

**REQ-TEST-001**: All business logic functions shall have unit test coverage of at least 80%.

**REQ-TEST-002**: Unit tests shall be written using a standard testing framework (Jest, Mocha).

### 10.2 Integration Testing

**REQ-TEST-003**: API endpoints shall be integration tested.

**REQ-TEST-004**: Database operations shall be integration tested.

### 10.3 End-to-End Testing

**REQ-TEST-005**: Critical user workflows shall be covered by automated E2E tests.

### 10.4 User Acceptance Testing

**REQ-TEST-006**: The system shall undergo UAT with representatives from each user role before production deployment.

---

## 11. Migration & Deployment

### 11.1 Data Migration

**REQ-MIG-001**: If migrating from an existing system, a data migration plan shall be developed.

**REQ-MIG-002**: Historical request data (if any) shall be importable via CSV or database migration scripts.

### 11.2 Deployment Strategy

**REQ-DEPLOY-004**: The system shall support blue-green or rolling deployment strategies for zero-downtime updates.

**REQ-DEPLOY-005**: Database migrations shall be versioned and automated using migration tools (e.g., TypeORM migrations, Knex.js).

---

## 12. Training & Documentation

### 12.1 User Documentation

**REQ-DOC-001**: User manuals shall be provided for each user role.

**REQ-DOC-002**: Video tutorials or walkthroughs shall be created for key workflows.

**REQ-DOC-003**: FAQ documentation shall be maintained and updated based on user feedback.

### 12.2 Technical Documentation

**REQ-DOC-004**: API documentation shall be generated and maintained (using Swagger/OpenAPI).

**REQ-DOC-005**: System architecture documentation shall be maintained.

**REQ-DOC-006**: Deployment and maintenance procedures shall be documented.

### 12.3 Training

**REQ-TRAIN-001**: Training sessions shall be conducted for all user groups before go-live.

**REQ-TRAIN-002**: Administrator training shall include system configuration and troubleshooting.

---

## 13. Support & Maintenance

### 13.1 Support Model

**REQ-SUP-001**: A support channel (email, ticketing system) shall be established for user issues.

**REQ-SUP-002**: Critical issues shall be addressed within 24 hours.

**REQ-SUP-003**: Non-critical issues shall be addressed within 5 business days.

### 13.2 Maintenance

**REQ-MAINT-005**: Regular maintenance windows shall be scheduled for updates and patches.

**REQ-MAINT-006**: Security patches shall be applied within 48 hours of identification.

---

## 14. Project Constraints

### 14.1 Technical Constraints

- Must use Express.js, TypeScript, PostgreSQL, and Docker
- Must be maintainable by in-house engineers with these skills
- Must run on existing infrastructure (to be specified)

### 14.2 Timeline Constraints

- Development timeline: TBD
- Go-live date: TBD

### 14.3 Budget Constraints

- Budget: TBD
- In-house development vs. external development: TBD

---

## 15. Risks & Mitigation

| Risk | Impact | Probability | Mitigation Strategy |
|------|--------|-------------|---------------------|
| Low user adoption | High | Medium | Comprehensive training, intuitive UI, change management |
| Data migration issues | Medium | Medium | Thorough testing, phased rollout, backup strategy |
| Performance issues at scale | High | Low | Load testing, scalable architecture, monitoring |
| Security vulnerabilities | High | Medium | Security audits, penetration testing, best practices |
| Integration with email service | Medium | Low | Use reliable service provider, fallback mechanisms |
| In-house team bandwidth | High | Medium | Clear documentation, modular design, prioritization |

---

## 16. Success Metrics & KPIs

### 16.1 Process Efficiency

- Average request approval time (target: <48 hours)
- Number of requests processed per month
- Approval rate at each level

### 16.2 System Usage

- Number of active users by role
- Number of requests created per department
- Login frequency and session duration

### 16.3 User Satisfaction

- User satisfaction score (target: >4/5)
- Number of support tickets
- Feature adoption rate

### 16.4 System Performance

- System uptime percentage (target: >99%)
- Average page load time (target: <2 seconds)
- API response time (target: <500ms)

---

## 17. Future Enhancements (Out of Scope for V1)

The following features are identified for potential future releases:

1. **Mobile native applications** (iOS/Android)
2. **Budget management** (departmental budgets, spending limits)
3. **Vendor management** (approved vendors, purchase orders)
4. **Inventory tracking** (items received, stock management)
5. **Advanced analytics** (predictive spending, budget forecasting)
6. **Multi-level approval chains** (more than 2 levels)
7. **Delegation features** (temporary approval authority transfer)
8. **Recurring requests** (subscription items, regular purchases)
9. **Approval workflows customization** (branch-specific rules)
10. **Integration with accounting software** (QuickBooks, Xero, etc.)
11. **Document attachments** (invoices, quotes, images)
12. **Comments/discussion threads** on requests
13. **SMS notifications** as alternative to email
14. **Multi-language support**
15. **Advanced search** (full-text search across all requests)

---

## 18. Approval & Sign-off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Sponsor | | | |
| Product Owner | | | |
| Technical Lead | | | |
| Department Head Rep | | | |
| Resident Pastor Rep | | | |
| Finance Head | | | |

---

## 19. Appendices

### Appendix A: Glossary

- **Branch**: A physical location or church campus with its own Resident Pastor
- **Department**: A ministry or functional unit within the church (e.g., Sound, Projection, Ambience)
- **Requester**: A department head who creates requests
- **Resident Pastor**: Branch-level leadership responsible for first-level approval
- **Global Finance Head**: Organization-level finance leadership responsible for final approval and fund release
- **Request**: A collection of items needed by a department
- **Item**: An individual product or service to be procured
- **Tier 1 Approval**: First level of approval by Resident Pastor
- **Tier 2 Approval**: Second and final level of approval by Global Finance Head

### Appendix B: User Stories

**US-001**: As a department head, I want to create a request with multiple items so that I can get approval for all my department needs at once.

**US-002**: As a department head, I want to save my request as a draft so that I can complete it later when I have all the information.

**US-003**: As a department head, I want to see the status of all my requests so that I know which ones are pending and which are approved.

**US-004**: As a Resident Pastor, I want to see all pending requests from my branch so that I can review and approve them efficiently.

**US-005**: As a Resident Pastor, I want to reject a request with comments so that the requester understands why it was not approved.

**US-006**: As a Global Finance Head, I want to see all requests that have been approved by Resident Pastors so that I can make final funding decisions.

**US-007**: As a Global Finance Head, I want to mark approved requests as "funds released" so that everyone knows the money has been disbursed.

**US-008**: As a system administrator, I want to create user accounts and assign roles so that the right people have the right access.

**US-009**: As a user, I want to receive email notifications when my request status changes so that I stay informed without having to check the system constantly.

**US-010**: As a department head, I want to view historical reports of my requests so that I can plan future procurement better.

### Appendix C: Workflow Diagrams

**Request Submission Workflow:**

```
[Department Head creates request] → [Saves as draft] → [Reviews and submits]
→ [System validates] → [Routes to Resident Pastor] → [Email notification sent]
```

**Approval Workflow:**

```
[Request submitted] 
    ↓
[Resident Pastor reviews]
    ↓
    ├─→ [Approves] → [Routes to Finance Head] → [Email notifications]
    ├─→ [Rejects] → [Request closed] → [Notification to requester]
    └─→ [Requests modification] → [Returns to requester] → [Notification]
    
[Finance Head reviews approved request]
    ↓
    ├─→ [Approves] → [Status: Approved] → [Notification]
    ├─→ [Rejects] → [Request closed] → [Notification to requester]
    └─→ [Requests modification] → [Returns to requester] → [Notification]
    
[Finance Head marks as funded]
    ↓
[Status: Funds Released] → [Notification to requester] → [Request completed]
```
