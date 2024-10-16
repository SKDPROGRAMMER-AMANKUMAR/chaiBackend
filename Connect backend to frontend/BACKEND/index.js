import express from "express";
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Aman kumar Production</h1> 🔥🔥👍")
})

app.get('/api/UserData', (req, res) => {
    const data = [
            {
                "id": 1,
                "name": "Alice Johnson",
                "age": 25,
                "email": "alice@example.com",
                "profession": "Software Engineer"
            },
            {
                "id": 2,
                "name": "Bob Smith",
                "age": 30,
                "email": "bob@example.com",
                "profession": "Product Manager"
            },
            {
                "id": 3,
                "name": "Charlie Davis",
                "age": 22,
                "email": "charlie@example.com",
                "profession": "UX Designer"
            },
            {
                "id": 4,
                "name": "Diana Evans",
                "age": 28,
                "email": "diana@example.com",
                "profession": "Data Scientist"
            },
            {
                "id": 5,
                "name": "Evan Taylor",
                "age": 35,
                "email": "evan@example.com",
                "profession": "Cloud Architect"
            },
            {
                "id": 6,
                "name": "Fiona Green",
                "age": 29,
                "email": "fiona@example.com",
                "profession": "DevOps Engineer"
            },
            {
                "id": 7,
                "name": "George Harris",
                "age": 27,
                "email": "george@example.com",
                "profession": "Cybersecurity Specialist"
            },
            {
                "id": 8,
                "name": "Hannah White",
                "age": 26,
                "email": "hannah@example.com",
                "profession": "Full Stack Developer"
            },
            {
                "id": 9,
                "name": "Ian Brown",
                "age": 24,
                "email": "ian@example.com",
                "profession": "Backend Developer"
            },
            {
                "id": 10,
                "name": "Jessica Lee",
                "age": 31,
                "email": "jessica@example.com",
                "profession": "Frontend Developer"
            }
        ]
        
       res.send(data)

})

app.listen(port, (req, res) => {
    console.log((`Server is listen on http://localhost:${port}`))
})