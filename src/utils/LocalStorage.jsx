

const employees = [
    {
        "id": 1,
        "firstName": "Amit",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare Report",
                "taskDescription": "Prepare the monthly sales report.",
                "taskDate": "2025-02-01",
                "category": "Reports",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss project updates with the client.",
                "taskDate": "2025-02-02",
                "category": "Meetings",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstName": "Priya",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review the newly submitted code from the team.",
                "taskDate": "2025-02-03",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Bug Fixing",
                "taskDescription": "Resolve critical issues in the application.",
                "taskDate": "2025-02-04",
                "category": "Bug Fixing",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 3,
        "firstName": "Rahul",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Design UI",
                "taskDescription": "Create the UI design for the new feature.",
                "taskDate": "2025-02-05",
                "category": "Design",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "User Testing",
                "taskDescription": "Conduct user testing on the new module.",
                "taskDate": "2025-02-06",
                "category": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstName": "Sneha",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Write Documentation",
                "taskDescription": "Complete the API documentation.",
                "taskDate": "2025-02-07",
                "category": "Documentation",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Training",
                "taskDescription": "Conduct a knowledge-sharing session.",
                "taskDate": "2025-02-08",
                "category": "Training",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 1
        }
    },
    {
        "id": 5,
        "firstName": "Vikram",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Market Research",
                "taskDescription": "Analyze the current market trends.",
                "taskDate": "2025-02-09",
                "category": "Research",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Presentation",
                "taskDescription": "Prepare and deliver the project presentation.",
                "taskDate": "2025-02-10",
                "category": "Presentation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    }
];

const admin = [
    {
        "id": 1,
        "firstName": "Arun",
        "email": "admin@ex.com",
        "password": "123"
    }
];


export const setLocalStorage=()=>{
 localStorage.setItem('employees', JSON.stringify(employees))
 localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employees = JSON.parse( localStorage.getItem('employees'))
    const admin = JSON.parse( localStorage.getItem('admin'))

   return {employees,admin}
}