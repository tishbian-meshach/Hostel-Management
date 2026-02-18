# Hostel Management System - User Manual

## 1. Introduction

Welcome to the Hostel Management System. This manual provides step-by-step instructions on how to use the various features of the application to manage student residents, attendance, expenses, inventory, and billing efficiently.

---

## 2. Dashboard Overview

Upon logging in, you are greeted with the **Dashboard**. This is your command center.

- **Key Metrics**: At a glance, you see the total number of students, present count, active expenses for the month, and pending bills.
- **Navigation**: The sidebar on the left gives you access to all major modules (Students, Attendance, Expenses, etc.).
- **Quick Actions**: Common tasks like "Mark Attendance" or "Add Expense" may be accessible directly.

---

## 3. Student Management

The **Students** module is the central database of all residents.

### 3.1 Adding a New Student

1.  Navigate to the **Students** page.
2.  Click the **"Add Student"** button.
3.  Fill in the required details:
    - **Name**: Full name of the student.
    - **Roll No**: Unique identification number.
    - **Department**: Academic department (e.g., CSE, MECH).
    - **Year**: Current academic year (1, 2, 3, 4).
    - **Hostel**: Assign them to a specific hostel block (e.g., Boys, Girls).
    - **Joined Date**: The date they started staying in the hostel.
4.  Click **Save**. The student is now "Active".

### 3.2 Managing Student Status

Students move through different lifecycle stages. You can update their status to reflect this:

- **Active**: Currently residing in the hostel.
- **Vacate**: Has left the hostel permanently.
- **Graduated**: Completed their course.
- **Transferred**: Moved to another facility.
- **Inactive**: Temporarily suspended or not billing.

**To change status:**

1.  Find the student in the list.
2.  Click the **Edit** (pencil) icon or use the **Remove/Vacate** dialog.
3.  Select the new status and providing a "Leaving Date" if applicable.

### 3.3 Importing Students

To add many students at once:

1.  Click the **"Import"** button `(Arrow Down/Cloud Icon)`.
2.  Download the **Template** CSV/Excel file provided.
3.  Fill it with student data (keeping headers intact).
4.  Upload the filled file. The system will create profiles for all valid entries.

---

## 4. Attendance System

Attendance is the basis for billing. It must be marked daily.

### 4.1 Marking Daily Attendance

1.  Go to the **Attendance** page.
2.  Select the **Date** (defaults to today).
3.  You will see a list of all active students.
4.  Mark their status using the codes:
    - **P (Present)**: Student is in the hostel and eating meals. _Charges apply_.
    - **L (Leave)**: Student is away with permission. _Charges depend on policy settings_.
    - **CN (Concession)**: Special leave/concession.
    - **V (Vacation)**: Official semester break.
    - **C (Closed)**: Hostel closed / Holiday.
5.  Click **Save Attendance**.

**Tip**: You can often "Mark All Present" and then just change the few students who are absent.

---

## 5. Expense Management

Track where money is being spent to calculate accurate bills.

### 5.1 Adding an Expense

1.  Navigate to **Expenses**.
2.  Click **"Add Expense"**.
3.  Enter details:
    - **Name**: What was paid for (e.g., "Vegetables", "Electrician").
    - **Amount**: Total cost in Rupees.
    - **Type**: Category (Labour, Provision, Utility, Maintenance, Other).
    - **Date**: When the expense occurred.
    - **Description**: Optional notes.
4.  Click **Save**.

### 5.2 Browsing Expenses

- Use the **Year** and **Month** filters at the top of the Expenses page to see records for specific periods.
- You can Edit or Delete entries if a mistake was made.

---

## 6. Provision Tracker (Inventory)

Manage kitchen supplies (Rice, Oil, Dal, etc.) to track consumption and stock.

### 6.1 Purchasing Items (Stock In)

When you buy supplies from a vendor:

1.  Go to **Provisions** or **Provision Tracker** -> **Purchase** tab.
2.  Click **"Add Purchase"**.
3.  Enter **Vendor Name** and **Date**.
4.  Add Items:
    - Select the **Item** (e.g., Rice).
    - Enter **Quantity** (e.g., 50) and **Unit** (e.g., kg).
    - Enter **Unit Cost** (Price per kg).
5.  Save. The system increases your stock level for these items.

### 6.2 Recording Usage (Stock Out)

When the cook uses items for daily meals:

1.  Go to the **Usage** tab.
2.  Click **"Add Usage"** (or similar button).
3.  Select the **Item**.
4.  Enter the **Quantity** used.
5.  Select the **Date**.
6.  Save. The stock level decreases.

**Inventory Report**: The system calculates "Available Stock" = (Total Purchased) - (Total Used).

---

## 7. Meal Tracking (Special Categories)

### 7.1 Mando Students

"Mando" students pay a fixed amount or have special billing rules.

- Go to **Mando Students** to manage this list.
- Their billing is calculated differently from the standard dividing system.

### 7.2 Outsiders

For guests or staff eating in the mess:

1.  Go to **Outsiders**.
2.  Click **"Add Meal Record"**.
3.  Select the Guest/Outsider name (create one if needed).
4.  Check the meals eaten (Breakfast, Lunch, Dinner, Others).
5.  The system calculates the cost based on the fixed **Meal Rate**.

---

## 8. Billing & Finance (The Core)

This module generates the monthly bills for students.

### 8.1 Understanding the Bill Calculation

The system typically uses a "Dividing System":

- **Total Expenses** = Sum of Labour + Provisions + Utilities + etc.
- **Total Mandays** = Sum of all days all students were Present.
- **Per Day Rate** = Total Expenses / Total Mandays.
- **Student Bill** = (Student's Present Days \* Per Day Rate) + Any Fixed Fees.

_(Note: Logic varies based on settings for 'Mando' students and 'Outsiders' deduction)._

### 8.2 Generating a Bill

1.  Go to **Billing**.
2.  Select the **Semester**.
3.  You may need to generate data for a specific **Month**.
4.  The system will fetch Attendance and Expense data.
5.  It will display a preview of the **Per Day Rate** and total collections.
6.  Review the calculations.

### 8.3 Publishing & Payments

- **Publish**: Once verified, you can "Publish" the bill to make it visible/final charges for students.
- **Record Payment**:
  1.  Locate a student in the Billing/Fee list.
  2.  Click **"Pay"** or **"Update Payment"**.
  3.  Enter amount paid and mode (Cash/UPI).
  4.  The system updates their **Balance** (Due vs Paid).

---

## 9. Reports

Generate summaries for administration or auditing.

1.  Go to **Reports**.
2.  Select the Report Type (e.g., "Monthly Attendance", "Expense Summary", "Stock Report").
3.  Choose the Date Range.
4.  View on screen or **Download as CSV/PDF** (if available) for printing.

---

## 10. Settings & Admin

- **Manage Users**: Control who can log in (Admins vs Managers).
- **System Configuration**: Set default values like "Cost per Meal" for outsiders, or "Leave Policy" (whether Leave days are charged).
