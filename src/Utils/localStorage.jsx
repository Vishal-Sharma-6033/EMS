const employee = [
  {
    
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Prepare monthly sales report",
            "description": "Collect and analyze sales data for July.",
            "date": "2025-08-25",
            "category": "Reporting",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Client follow-up",
            "description": "Call clients to confirm order details.",
            "date": "2025-08-27",
            "category": "Communication",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Update CRM records",
            "description": "Ensure all leads are updated in the system.",
            "date": "2025-08-29",
            "category": "Data Entry",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Design social media posts",
            "description": "Create graphics for upcoming campaign.",
            "date": "2025-08-26",
            "category": "Design",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Post scheduling",
            "description": "Schedule posts for next week.",
            "date": "2025-08-28",
            "category": "Marketing",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Fix login bug",
            "description": "Resolve authentication issue on the portal.",
            "date": "2025-08-24",
            "category": "Development",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Code review",
            "description": "Review pull requests from team members.",
            "date": "2025-08-25",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Unit testing",
            "description": "Write test cases for new features.",
            "date": "2025-08-30",
            "category": "Testing",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Prepare presentation",
            "description": "Slides for quarterly review meeting.",
            "date": "2025-08-26",
            "category": "Documentation",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Meeting with HR",
            "description": "Discuss upcoming hiring process.",
            "date": "2025-08-27",
            "category": "Meetings",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          },
          {
            "title": "Knowledge transfer",
            "description": "Explain system modules to new joiners.",
            "date": "2025-08-29",
            "category": "Training",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Inventory check",
            "description": "Verify warehouse stock levels.",
            "date": "2025-08-25",
            "category": "Operations",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Vendor meeting",
            "description": "Negotiate contracts with new suppliers.",
            "date": "2025-08-27",
            "category": "Procurement",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Budget analysis",
            "description": "Evaluate expenses for Q2.",
            "date": "2025-08-30",
            "category": "Finance",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ]
      }
    ]


const admin = [
  {
   
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  
];



export const setLocalstorage=()=>{
     localStorage.setItem('employee',JSON.stringify(employee))
     localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalstorage=()=>{
   const employee= JSON.parse(localStorage.getItem('employee'))
   const admin= JSON.parse(localStorage.getItem('admin'))
   return {employee,admin}

}

